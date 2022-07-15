import styled from "styled-components";

const ShiftArea = (props) => {
  return <Area>{props.area}</Area>;
};

const Area = styled.p`
  color: #a4b8d3;
  font-weight: 500;
  font-size: 18px;
  /* display: ${(props) => (props.display ? "inline" : "none")}; */
`;

export default ShiftArea;
