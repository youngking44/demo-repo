import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 4;
  overflow-y: scroll;
`;

export const TitleContainer = styled.div`
  margin: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1``;

export const Error = styled.p`
  text-align: center;
  color: red;
`;

export const Top = styled.div`
  padding: 0px 20px;
  position: relative;
`;

export const SlidingRange = styled.div`
  @media (max-width: 567px) {
    overflow: hidden;
  }
`;

export const Slider = styled.div`
  transition: all 0.6s ease;
  transform: translateX(
    ${(props) => (props.slidedir === "left" ? "0%" : "-100%")}
  );
`;

export const TopFlex = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 567px) {
    gap: 0px;
    padding-left: 5px; //* Added 5px padding to the left side so as to show the box-shadow when overflow
  }
`;

export const TopBox = styled.div`
  flex: 1;
  margin: 20px 0px;
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgb(0, 0, 0, 0.75);

  @media (max-width: 567px) {
    min-width: 100%;
  }
`;

export const TopTitle = styled.h3`
  margin-bottom: 10px;
  text-transform: capitalize;
`;

export const InfoItem = styled.div`
  display: flex;
`;

export const InfoKey = styled.span`
  flex: 1;
  margin-right: ${(props) => props.type === "id" && "5px"};

  @media (max-width: 1140px) {
    margin-right: 10px;
  }
`;

export const InfoValue = styled.span`
  flex: 1;
  font-weight: 300;
`;

export const Bottom = styled.div`
  display: flex;
  margin: 0px 20px 20px;
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgb(0, 0, 0, 0.75);
`;

export const Left = styled.div`
  @media (min-width: 1141px) {
    flex: 2;
  }
`;

export const BottomSlider = styled.div``;

export const OrderList = styled.div``;

export const SingleOrder = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 1140px) {
    flex-direction: column;
  }

  @media (max-width: 860px) {
    flex-direction: row;
    gap: 10px;
  }

  @media (max-width: 605px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 200px;
  object-fit: cover;

  @media (max-width: 1140px) {
    width: 100%;
  }
`;

export const OrderInfo = styled.div`
  margin-left: 15px;

  @media (max-width: 1140px) {
    margin: 15px 0px 0px;
  }
`;

export const Right = styled.div`
  flex: 1;
  margin-left: 30px;

  @media (max-width: 860px) {
    display: none;
  }
`;

export const Form = styled.form``;

export const Label = styled.label`
  color: gray;
`;

export const Input = styled.input`
  margin-left: 10px;
  padding: 10px;
`;

export const Button = styled.button`
  font-size: 16px;
  width: 80px;
  padding: 5px;
  border-radius: 5px;
  border: none;
  color: #fff;
  background-color: teal;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.6;
  }
`;

export const BtwWrapper = styled.div`
  padding: 20px 0px;
`;

export const SlideButton = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  right: ${(props) => props.dir === "right" && 0};
  left: ${(props) => props.dir !== "right" && 0};
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;

  @media (max-width: 567px) {
    display: block;
  }
`;

export const MobileOnly = styled.div`
  display: none;
  margin: 0px 20px 20px;
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgb(0, 0, 0, 0.75);

  @media (max-width: 860px) {
    display: block;
  }
`;
