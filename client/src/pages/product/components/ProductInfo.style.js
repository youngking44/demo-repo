import styled from "styled-components";
import {
  extralSmallScreenDevice,
  mediumScreenDevice,
} from "../../../style-responsiveness/reponsiveness";

export const Wrapper = styled.div`
  padding: 50px 0px;
  display: flex;
  gap: 30px;

  ${mediumScreenDevice({ padding: "20px 0px", flexDirection: "column" })}
  ${extralSmallScreenDevice({ padding: "10px  0px", gap: "10px" })}
`;

export const ImageWrapper = styled.div`
  flex: 1;
  height: 80vh;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Info = styled.div`
  flex: 1;
  align-self: flex-start;
  display: grid;
  gap: 20px;

  ${extralSmallScreenDevice({ gap: "8px" })}
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 300;
  text-transform: capitalize;
`;

export const Text = styled.p``;

export const Price = styled.p`
  font-size: 40px;
  font-weight: 400;
`;

export const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;

  ${extralSmallScreenDevice({ width: "100%" })}

  @media (max-width: 290px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const Filter = styled.div`
  display: flex;
`;

export const FilterText = styled.p`
  font-size: 20px;
  margin-right: 10px;
`;

export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: ${(props) => props.bg};
  cursor: pointer;
`;

export const FilterSelection = styled.select`
  padding: 5px;
`;

export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;

  ${extralSmallScreenDevice({ width: "100%" })}
  @media (max-width: 290px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Amount = styled.div`
  text-align: center;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  line-height: 30px;
  border: 1px solid teal;
`;

export const Button = styled.button`
  text-transform: uppercase;
  padding: 15px;
  border: 2px solid #008080;
  background-color: transparent;
  cursor: pointer;
`;

export const Desc = styled.span`
  color: rgba(0, 128, 128, 0.9);
`;
