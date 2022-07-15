import styled from "styled-components";
import AreaTabs from "./AreaTabs";
import ShiftGroup from "./ShiftGroup";
import LastRow from "./LastRow";

const AvailableShifts = (props) => {
  return (
    <Container>
      <AreaTabs shifts={props.shifts} selectArea={props.selectArea} />
      {Object.keys(props.group).map((key) => {
        return (
          <ShiftGroup
            shifts={props.group[key]}
            date={key}
            cancel={props.cancel}
            book={props.book}
            key={key}
          />
        );
      })}
      <LastRow />
    </Container>
  );
};

const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 0px;
`;

export default AvailableShifts;
