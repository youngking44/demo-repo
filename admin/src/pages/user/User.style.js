import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 4;
  padding: 5px 20px;
  overflow-y: scroll;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  text-transform: capitalize;
  color: grey;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

export const UserInfo = styled.div`
  flex: ${(props) => (props.type === "show" ? 1 : 2)};
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const TopTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  font-size: ${(props) => (props.type === "showTitle" ? "14px" : props.fs)};
  font-weight: ${(props) => (props.type === "showTitle" ? "600" : props.fw)};
  color: ${(props) => props.type === "showTitle" && "#afaaaa"};
`;

export const Bottom = styled.div`
  margin-top: 20px;
`;

export const Info = styled.div`
  margin: 20px 0px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #444;
`;

export const Form = styled.form``;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  cursor: ${(props) => props.htmlFor === "file" && "pointer"};
`;

export const Input = styled.input`
  width: 250px;
  height: 30px;
  border: none;
  border-bottom: 1px solid grey;
  display: ${(props) => props.type === "file" && "none"};

  &:focus {
    padding: 8px;
  }

  @media (max-width: 350px) {
    width: 100%;
  }
`;

export const Error = styled.p`
  text-align: center;
  color: red;
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: ${(props) => props.type === "update" && 600};
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) =>
    props.type === "updateTop" ? "teal" : "darkblue"};
  transition: all 0.6s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 576px) {
    display: ${(props) => props.type === "updateTop" && "none"};
  }
`;
