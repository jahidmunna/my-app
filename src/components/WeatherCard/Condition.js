import styled from "@emotion/styled";
import Reel from "react-reel";

const Condition = ({ temp, condition }) => {
  return (
    <>
      <Temp>
        <Reel theme={reelStyle} text={`${temp} °C`} />
      </Temp>
      <State>{condition}</State>
    </>
  );
};

export default Condition;

const Temp = styled.div`
  font-size: 2rem;
`;
const State = styled.h3`
  font-family: "Merriweather", sans-serif;
  font-size: 1.2rem;
`;

const reelStyle = {
  reel: {
    height: "1.07em",
    display: "flex",
    alignItems: "flex-end",
    overflowY: "hidden",
    lineHeight: "0.97en",
    justifyContent: "center",
  },
  group: {
    transitionDealy: "0",
    transitiopnTimeingFunction: "ease-in-out",
    transform: "translate(0, 0)",
    height: "1.5em",
  },
  number: {
    height: "1em",
    fontFamily: "Fira Sans",
  },
};
