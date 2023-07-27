import styled from "styled-components";
import LoginImage from "../../assets/formBg.jpg";

export const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  padding: 30px 0px;
  background-image: url(${LoginImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    background-position: left;
  }
`;

export const FormWrapper = styled.div`
  border-radius: 15px;
  box-shadow: -4px -4px 11px #c8c2c2a2, 4px 4px 9px rgba(147, 149, 151, 0.871);
  overflow: hidden;

  @media (max-width: 630px) {
    width: calc(100% - 60px);
  }
`;

export const Modal = styled.div`
  position: relative;
  padding: 10px 20px;
  text-align: center;
  color: red;
  background-color: #fff;
`;

export const IconButton = styled.button`
  position: absolute;
  top: 0;
  right: 20px;
  bottom: 0;
  border: none;
  color: red;
  background-color: transparent;
  cursor: pointer;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  padding: 30px 0px;
  color: #c9c3cd;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
`;

export const GroupsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 630px) {
    flex-direction: column;
    gap: 0px;
  }
`;

export const GroupContainer = styled.div`
  width: calc(100% - 30px);
`;

export const Group = styled.div`
  position: relative;
  margin-top: 25px;
  display: flex;
  flex-direction: ${(props) => props.type === "right" && "row-reverse"};
  align-items: center;
  padding: 5px 0px;
  background-color: rgba(105, 105, 105, 0.55);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: ${(props) => props.type === "right" && 0};
    left: ${(props) => props.type === "left" && 0};
    width: 5px;
    height: 100%;
    background: #d4cfd9;
  }

  @media (max-width: 630px) {
    flex-direction: row;

    &::before {
      left: 0;
    }
  }
`;

export const Icon = styled.div`
  align-self: stretch;
  width: 60px;
  border: none;
  border-right: ${(props) =>
    props.type !== "right" && "2px solid rgba(255, 255, 255, 0.6)"};
  border-left: ${(props) =>
    props.type === "right" && "2px solid rgba(255, 255, 255, 0.6)"};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 630px) {
    border: none;
    border-right: 2px solid rgba(255, 255, 255, 0.6);
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: none;
  color: #fff;
  background-color: transparent;

  &::placeholder {
    color: #fff;
  }

  @media (max-width: 630px) {
    text-align: center;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 25px;
  text-align: center;
`;

export const Button = styled.button`
  font-size: 18px;
  padding: 15px 40px;
  border: none;
  text-transform: uppercase;
  color: #fff;
  background: rgba(163, 159, 159, 0.55);
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover,
  &:focus {
    border-radius: 100vmax;
  }
`;

export const Error = styled.div`
  margin-top: 5px;
  margin-left: ${(props) => props.direction === "left" && "10px"};
  color: red;
`;
