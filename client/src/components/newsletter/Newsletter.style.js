import styled from "styled-components";
import { extralSmallScreenDevice } from "../../style-responsiveness/reponsiveness";

export const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fcf5f5;

  ${extralSmallScreenDevice({ padding: "0px 10px" })}
`;

export const Title = styled.h1`
  font-size: 70px;

  ${extralSmallScreenDevice({ fontSize: "40px" })}
`;

export const Text = styled.p`
  font-size: 25px;
  margin: 10px 0px;

  ${extralSmallScreenDevice({
    textAlign: "center",
    fontSize: "20px",
    marginTop: "0px",
  })}
`;

export const Wrapper = styled.div`
  width: 50%;
  display: flex;

  ${extralSmallScreenDevice({ width: "100%" })}
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px 5px;

  @media (max-width: 267px) {
    min-width: 80px;
  }
`;

export const Button = styled.button`
  padding: 0px 10px;
  border: none;
  color: #fff;
  background-color: #008080;
  cursor: pointer;
`;
