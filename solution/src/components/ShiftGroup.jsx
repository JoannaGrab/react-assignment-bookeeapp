import Shift from "./Shift";
import ShiftGroupHeader from "./ShiftGroupHeader";

const ShiftGroup = (props) => {
  let shiftsCounter = "";

  if (!props.shifts) {
    shiftsCounter = "";
  } else if (props.shifts.length < 2) {
    shiftsCounter = `${props.shifts.length} shift`;
  } else shiftsCounter = `${props.shifts.length} shifts`;

  return (
    <div>
      <ShiftGroupHeader
        date={props.date}
        shiftsCounter={shiftsCounter}
        shiftsDuration={"huhu"}
      />
      {props.shifts &&
        props.shifts.map((s) => (
          <Shift shift={s} cancel={props.cancel} book={props.book} key={s.id} />
        ))}
    </div>
  );
};

export default ShiftGroup;
