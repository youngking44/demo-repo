import styled from "styled-components";
import { smallScreenDevice } from "../../../../style-responsiveness/reponsiveness";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Slider = styled.div`
  width: 100%;
  transition: all 0.6s ease;

  @media (max-width: 800px) {
    transform: translateX(
      ${(props) => (props.slidingindex === 1 ? "-50%" : "0%")}
    );
  }

  @media (max-width: 530px) {
    transform: translateX(${(props) => props.slidingindex * -100}%);
  }
`;

export const Flex = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 40px;

  ${smallScreenDevice({
    paddingTop: "10px",
  })}

  @media (max-width: 530px) {
    gap: 0px;
  }
`;

export const SliderButton = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  right: ${(props) => props.dir === "right" && "0px"};
  left: ${(props) => props.dir !== "right" && "0px"};
  z-index: 20;
  transform: translateY(-50%);
  cursor: pointer;

  @media (max-width: 800px) {
    display: block;
  }
`;
