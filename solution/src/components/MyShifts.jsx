import styled from "styled-components";
import ShiftGroup from "./ShiftGroup";
import LastRow from "./LastRow";
import { ShiftsAPI } from "../ShiftsAPI";
import { useState } from "react";

const MyShifts = (props) => {
  // const response = ShiftsAPI.getShifts().filter((s) => s.booked);
  // const [shifts, setShifts] = useState(response);

  // const onCancel = (id) => {
  //   ShiftsAPI.cancel(id);
  //   setShifts(ShiftsAPI.getShifts().filter((s) => s.booked));
  // };

  // const group = groupShifts(shifts);
  return (
    <Container>
      {Object.keys(props.group).map((key) => {
        return (
          <ShiftGroup
            shifts={props.group[key]}
            date={key}
            cancel={props.cancel}
            key={key}
          />
        );
      })}
      <LastRow />
    </Container>
  );
};

// function getDate(timestamp) {
//   let date = new Date(timestamp);
//   return [date.getFullYear(), date.getMonth(), date.getDate()].join("/");
// }

// const groupShifts = (shifts) => {
//   let shiftsMap = {};

//   shifts.forEach((s) => {
//     let date = getDate(s.startTime);
//     if (shiftsMap[date]) {
//       shiftsMap[date].push(s);
//     } else {
//       shiftsMap[date] = [s];
//     }
//   });
//   return shiftsMap;
// };

const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

export default MyShifts;
