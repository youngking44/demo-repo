import styled from "styled-components";
import {
  extralSmallScreenDevice,
  smallScreenDevice,
  mediumScreenDevice,
} from "../../style-responsiveness/reponsiveness";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0px;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-weight: 300;

  ${smallScreenDevice({ fontSize: "25px" })}
`;

export const Flex = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  text-transform: uppercase;
  font-weight: 600;
  color: ${(props) => (props.type === "filled" ? "#fff" : "black")};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  ${smallScreenDevice({
    padding: "5px",
  })}

  @media (max-width: 345px) {
    width: 100%;
    padding: 10px 0px;
    text-align: center;
  }
`;

export const LinkWrapper = styled.div`
  ${smallScreenDevice({ display: "none" })}
`;

export const StyledLink = styled.a`
  text-decoration: underline;
  margin-right: ${(props) => props.type === "first" && "20px"};
`;

export const ShoppingInfo = styled.div`
  padding: 10px 0px;
  display: flex;

  ${mediumScreenDevice({ flexDirection: "column" })}
`;

export const Info = styled.div`
  margin-right: 20px;
  flex: 3;
`;

export const Products = styled.div`
  padding: 10px 0px;
  display: flex;
  gap: 20px;

  ${extralSmallScreenDevice({ flexDirection: "column", gap: "2px" })}
`;

export const ImageWrapper = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Product = styled.div`
  padding: 25px 0px;
  flex: 3;
  display: flex;
`;

export const ProductInfo = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProductTitle = styled.h4`
  text-transform: uppercase;
  font-weight: 300;
`;

export const ProductId = styled.span``;

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: ${(props) => props.bg};
`;

export const ProductSize = styled.span``;

export const PriceInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ProductAmountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ProductAmount = styled.p`
  font-size: 25px;
`;

export const ProductPrice = styled.p`
  font-size: 30px;
`;

export const Summary = styled.div`
  align-self: flex-start;
  padding: 20px 20px;
  border: 1px solid lightgray;
  border-radius: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;

  ${smallScreenDevice({ alignSelf: "center" })}
`;

export const SummaryTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
`;

export const SummaryFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SummaryText = styled.p`
  font-size: ${(props) => props.type === "total" && "24px"};
`;

export const SummaryButton = styled.button`
  width: 100%;
  padding: 10px 0px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  background-color: black;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;
