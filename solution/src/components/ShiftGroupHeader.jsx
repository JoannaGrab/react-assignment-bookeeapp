import styled from "styled-components";

const ShiftGroupHeader = (props) => {
  const date = props.date && props.date.split("/")[2];
  const monthNum = props.date && props.date.split("/")[1];
  const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthArr[monthNum];

  return (
    <Container>
      <Date>
        {month} {date}
      </Date>
      <Summary>
        {props.shiftsCounter}, {props.shiftsDuration}
      </Summary>
    </Container>
  );
};

const Container = styled.div`
  padding: 1em;
  background-color: #f7f8fb;
  display: flex;
  align-items: center;
  justify-content: left;
  border: 1px solid #cbd2e1;
  margin: -1px 0px 0px -1px;
`;

const Date = styled.h3`
  color: #4f6c92;
`;

const Summary = styled.h4`
  margin-left: 1em;
  font-weight: 500;
  color: #a4b8d3;
  /* display: ${(props) => (props.display ? "inline" : "none")}; */
`;

export default ShiftGroupHeader;
