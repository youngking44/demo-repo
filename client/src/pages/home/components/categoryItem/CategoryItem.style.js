import styled from "styled-components";
import {
  extralSmallScreenDevice,
  smallScreenDevice,
} from "../../../../style-responsiveness/reponsiveness";

export const Item = styled.div`
  position: relative;
  flex: 1;
  height: 400px;

  ${smallScreenDevice({ width: "calc(100% - 150px)", aspectRatio: "1/1" })}
  ${extralSmallScreenDevice({
    width: "100%",
  })}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  position: absolute;
  top: 0;
  right: 0%;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  text-transform: uppercase;
  background-color: #fff;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-radius: 100vmax;
  }
`;
