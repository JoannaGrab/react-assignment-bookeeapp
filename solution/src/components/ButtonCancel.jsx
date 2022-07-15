import styled from "styled-components";

const ButtonCancel = (props) => {
  const isDisabled = Date.now() >= props.startTime;

  return (
    <Button isDisabled={isDisabled} onClick={() => props.cancel(props.id)}>
      Cancel
    </Button>
  );
};

const Button = styled.button`
  width: 7em;
  border: ${(p) => (p.isDisabled ? "1px solid #EED2DF" : "1px solid #FE93B3")};
  color: ${(p) => (p.isDisabled ? "#FE93B3" : "#e2006a")};
  cursor: ${(p) => (p.isDisabled ? "default" : "pointer")};

  border-radius: 20px;
  background-color: transparent;
  padding: 0.5em 1.25em;
  margin: 1em;
  font-size: 1em;
  font-weight: 600;
`;

export default ButtonCancel;
