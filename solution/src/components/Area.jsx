import styled from "styled-components";

const Area = (props) => {
  const isDisabled = true;

  return (
    <Text isDisabled={isDisabled} onClick={() => props.selectArea(props.area)}>
      {props.area} ({props.counter})
    </Text>
  );
};

const Text = styled.h1`
  cursor: pointer;
  color: ${(a) => (a.isDisabled ? "#a4b8d3" : "#004fb4")};
  font-size: 24px;
  font-weight: 500;
`;

export default Area;
