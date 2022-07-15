import styled from "styled-components";

const ButtonBook = (props) => {
  return <Button onClick={() => props.book(props.id)}>Book</Button>;
};

const Button = styled.button`
  width: 7em;
  border: ${(props) =>
    props.disabled ? "1px solid #CAEFD8" : "1px solid #55cb82"};
  color: ${(props) => (props.disabled ? "#CAEFD8" : "#16a64d")};

  border-radius: 20px;
  background-color: transparent;
  padding: 0.5em 1.25em;
  margin: 1em;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
`;

export default ButtonBook;
