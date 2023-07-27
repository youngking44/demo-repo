import styled from "styled-components";

export const FeaturedWrapper = styled.div`
  position: relative;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const Featured = styled.div`
  width: 100%;

  @media (max-width: 650px) {
    overflow: hidden;
  }
`;

export const Slider = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  transition: all 0.6s ease;

  @media (max-width: 650px) {
    padding: 10px 10px 0px;
    transform: translateX(
      ${(props) =>
        props.slideindex !== 2 &&
        `calc( calc(calc(calc(100% - 20px) / 2) + 10px) * ${props.slideindex} * -1)`}
    );
  }

  @media (max-width: 430px) {
    transform: translateX(${(props) => props.slideindex * -100}%);
  }
`;

export const FeaturedItem = styled.div`
  flex: 1;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  cursor: pointer;

  @media (max-width: 650px) {
    min-width: calc(calc(100% - 20px) / 2);
  }

  @media (max-width: 430px) {
    min-width: 100%;
  }
`;

export const FeaturedTitle = styled.h4`
  font-size: 20px;
`;

export const FeaturedMoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const FeaturedMoney = styled.p`
  font-size: 30px;
  font-weight: 600px;
`;

export const FeaturedMoneyRate = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const FeaturedSub = styled.p`
  font-size: 15px;
  color: grey;
`;

export const IconButton = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  right: ${(props) => props.dir === "right" && "0px"};
  left: ${(props) => props.dir !== "right" && "0px"};
  transform: translateY(-50%);
  cursor: pointer;

  @media (max-width: 650px) {
    display: block;
  }
`;
