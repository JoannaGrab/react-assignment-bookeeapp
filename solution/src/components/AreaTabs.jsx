import styled from "styled-components";
import Area from "./Area";

const AreaTabs = (props) => {
  const areas = getAreas(props.shifts);

  return (
    <Container>
      {Object.keys(areas).map((key) => {
        return (
          <Area
            counter={areas[key]}
            area={key}
            key={key}
            selectArea={props.selectArea}
          />
        );
      })}
    </Container>
  );
};

const getAreas = (shifts) => {
  const areas = {};

  shifts.forEach((s) => {
    if (areas[s.area]) {
      areas[s.area] = areas[s.area] + 1;
    } else {
      areas[s.area] = 1;
    }
  });
  return areas;
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1em 0em;
  border: 1px solid #cbd2e1;
  margin: -1px 0px 0px -1px;
  border-radius: 8px 8px 0px 0px;
  background-color: white;
`;

export default AreaTabs;
