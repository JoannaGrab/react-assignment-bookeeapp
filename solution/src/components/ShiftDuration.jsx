import styled from "styled-components";

const convertTime = (unix_timestamp) => {
  // Create a new JavaScript Date object based on the timestamp
  // Multiplied by 1000 is not needed, timestamp is passed in miliseconds?
  var date = new Date(unix_timestamp);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();

  // Will display time in 10:30 format
  return hours + ":" + minutes.substr(-2);
};

const ShiftDuration = (props) => {
  return (
    <Duration>
      {convertTime(props.startTime)}-{convertTime(props.endTime)}
    </Duration>
  );
};

const Duration = styled.h4`
  color: #4f6c92;
  font-size: 20px;
  font-weight: 500;
`;

export default ShiftDuration;
