import ShiftDuration from "./ShiftDuration";
import ShiftArea from "./ShiftArea";
import ButtonCancel from "./ButtonCancel";
import ButtonBook from "./ButtonBook";

import styled from "styled-components";

const Shift = (props) => {
  return (
    <Container>
      <Left>
        <ShiftDuration
          startTime={props.shift.startTime}
          endTime={props.shift.endTime}
        />
        <ShiftArea area={props.shift.area} />
      </Left>
      {props.shift.booked ? (
        <ButtonCancel
          startTime={props.shift.startTime}
          id={props.shift.id}
          cancel={props.cancel}
        />
      ) : (
        <ButtonBook
          startTime={props.shift.startTime}
          id={props.shift.id}
          book={props.book}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-items: space-between;
  align-items: center;
  padding: 0.5em 1em;
  border: 1px solid #cbd2e1;
  margin: -1px 0px 0px -1px;
  background-color: white;
`;

const Left = styled.div`
  flex: 1;
`;

export default Shift;
