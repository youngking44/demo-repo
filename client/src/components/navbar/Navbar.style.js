import styled from "styled-components";
import {
  smallMobile,
  smallScreenDevice,
  largeScreenDevice,
  extralSmallScreenDevice,
} from "../../style-responsiveness/reponsiveness";

export const Header = styled.header`
  height: 60px;
  line-height: 60px;
  background: #fff;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${smallMobile({
    position: "relative",
    height: "60px",
    alignItems: "flex-start",
  })}
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  ${largeScreenDevice({ flex: 1 })};
`;

export const Language = styled.span`
  ${extralSmallScreenDevice({ display: "none" })};
`;

export const Search = styled.div`
  margin-right: 10px;
  border: 1px solid lightgray;
  line-height: 1;

  ${smallMobile({
    display: "flex",
    alignItems: "center",
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
  })}
`;

export const Input = styled.input`
  padding: 4px 6px;
  border: none;

  ${smallMobile({ flex: 1 })}
  ${smallScreenDevice({ width: "100px" })}
`;

export const Center = styled.div`
  font-size: 35px;
  font-weight: bold;
  margin-right: 10px;
  text-align: ${(props) => props.align};

  ${extralSmallScreenDevice({ fontSize: "20px" })}
  ${largeScreenDevice({ flex: 1 })};
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;

  ${extralSmallScreenDevice({ gap: "7px" })}
`;

export const MenuItem = styled.div`
  text-transform: uppercase;
  line-height: 1;

  @media (max-width: 267px) {
    display: ${(props) => props.type === "register" && "none"};
  }
`;
