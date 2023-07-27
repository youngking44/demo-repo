import styled from "styled-components";
import LoginImage from "../../assets/formBg.jpg";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
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
  width: calc(100% - 40px);
  max-width: 320px;
  height: 400px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: -4px -4px 11px #c8c2c2a2, 4px 4px 9px rgba(147, 149, 151, 0.871);
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

export const GroupWrapper = styled.div``;

export const Group = styled.div`
  position: relative;
  width: calc(100% - 30px);
  margin-top: 25px;
  display: flex;
  align-items: center;
  padding: 5px 0px;
  background-color: rgba(105, 105, 105, 0.55);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: #d4cfd9;
  }
`;

export const Error = styled.span`
  display: block;
  margin: 5px;
  color: red;
`;

export const Icon = styled.div`
  align-self: stretch;
  width: 60px;
  border: none;
  border-right: 2px solid rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  border: none;
  color: #fff;
  background-color: transparent;

  &::placeholder {
    color: #fff;
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
