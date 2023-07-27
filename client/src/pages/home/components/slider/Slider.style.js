import styled from "styled-components";
import { smallScreenDevice } from "../../../../style-responsiveness/reponsiveness";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  ${smallScreenDevice({ display: "none" })}
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${(props) => props.type === "right" && "10px"};
  left: ${(props) => props.type === "left" && "10px"};
  margin: auto;
  z-index: 2;
  cursor: pointer;
  background-color: #fff7f7;
`;

export const SlideWrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1s ease;
`;

export const Slide = styled.div`
  min-width: 100vw;
  height: 100%;
  display: flex;
  background-color: #${(props) => props.bg};
`;

export const Left = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
`;

export const Right = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Desc = styled.p`
  font-size: 20px;
  margin: 30px 0px;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

export const Button = styled.button`
  width: 130px;
  height: 45px;
  border: 2px solid black;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  background-color: transparent;
  cursor: pointer;
`;
