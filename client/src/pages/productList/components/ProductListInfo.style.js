import styled from "styled-components";
import {
  extralSmallScreenDevice,
  smallScreenDevice,
} from "../../../style-responsiveness/reponsiveness";

export const Title = styled.h1`
  margin: 20px 0px;

  @media (max-width: 267px) {
    text-align: center;
  }

  ${extralSmallScreenDevice({ margin: "10px 0px" })}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${smallScreenDevice({ flexDirection: "column" })}
`;

export const Filter = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 267px) {
    flex-direction: column;
  }

  ${extralSmallScreenDevice({ marginBottom: "10px", gap: "10px" })}
`;

export const FilterTitle = styled.h2`
  text-transform: capitalize;

  ${extralSmallScreenDevice({ fontSize: "20px" })}
`;

export const FilterSelection = styled.select`
  padding: 10px;

  ${extralSmallScreenDevice({ padding: "5px" })}
`;

export const FilterOption = styled.option``;
