import { useState } from "react";
import styled from "styled-components";
import { ShiftsAPI } from "../ShiftsAPI";
import AvailableShifts from "./AvailableShifts";
import MyShifts from "./MyShifts";

const response = ShiftsAPI.getShifts();
const bookedResponse = ShiftsAPI.getShifts().filter((s) => s.booked);

const Router = () => {
  const [shifts, setShifts] = useState(response);
  const [myShifts, setMyShifts] = useState(bookedResponse);
  const [showMyShifts, setShowMyShifts] = useState(true);

  const onCancel = (id) => {
    ShiftsAPI.cancel(id);
    setShifts(ShiftsAPI.getShifts());
  };
  const onBook = (id) => {
    ShiftsAPI.book(id);
    setShifts(ShiftsAPI.getShifts());
  };
  const onSelectArea = (area) => {
    setShifts(ShiftsAPI.getShifts().filter((s) => s.area === area));
  };

  const group = groupShifts(shifts);
  const bookedGroup = groupShifts(myShifts);

  const onSelectShiftsTab = () => {
    showMyShifts ? setShowMyShifts(false) : setShowMyShifts(true);
  };

  return (
    <Container>
      <Link onClick={() => onSelectShiftsTab()} disabled={showMyShifts}>
        My shifts
      </Link>
      <Link onClick={() => onSelectShiftsTab()} disabled={!showMyShifts}>
        Available shifts
      </Link>
      {showMyShifts && <MyShifts group={bookedGroup} cancel={onCancel} />}
      {!showMyShifts && (
        <AvailableShifts
          shifts={response}
          group={group}
          cancel={onCancel}
          book={onBook}
          selectArea={onSelectArea}
        />
      )}
    </Container>
  );
};

function getDate(timestamp) {
  let date = new Date(timestamp);
  return [date.getFullYear(), date.getMonth(), date.getDate()].join("/");
}

const groupShifts = (shifts) => {
  let shiftsMap = {};

  shifts.forEach((s) => {
    let date = getDate(s.startTime);
    if (shiftsMap[date]) {
      shiftsMap[date].push(s);
    } else {
      shiftsMap[date] = [s];
    }
  });
  return shiftsMap;
};

const Container = styled.div`
  width: 60vw;
  margin: 5em;
  background-color: #f7f8fb;
  padding: 5em;
`;

const Link = styled.button`
  color: ${(p) => (p.disabled ? "#004fb4" : "#a4b8d3")};
  background-color: transparent;
  font-size: 26px;
  font-weight: 500;
  border: none;
  margin: 1em;
  cursor: pointer;
`;

export default Router;
