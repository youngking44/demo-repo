import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 4;
  padding: 5px 20px;
  overflow-y: scroll;
`;

export const TitleContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1``;

export const Error = styled.p`
  color: red;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 940px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 1;

  @media (max-width: 1050px) {
    width: 100%;
  }
`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgb(0, 0, 0, 0.75);
`;

export const Bottom = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgb(0, 0, 0, 0.75);
`;
export const InfoTop = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ProductName = styled.span`
  font-weight: 600;
`;

export const InfoBottom = styled.div`
  margin-top: 10px;
`;

export const InfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

export const InfoKey = styled.span`
  margin-right: ${(props) => props.type === "id" && "5px"};
`;

export const InfoValue = styled.span`
  font-weight: 300;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Group = styled.div`
  min-width: 40%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.gap === "large" ? "10px" : "5px")};
`;

export const Label = styled.label`
  color: gray;
`;

export const IconButton = styled.div`
  cursor: pointer;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid gray;
  display: ${(props) => props.type === "file" && "none"};
`;

export const FormBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const Select = styled.select`
  width: 50%;
  margin-bottom: 10px;
  padding: 10px;
`;

export const Option = styled.option``;

export const Upload = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 450px) {
    margin-bottom: 20px;
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  border-radius: 10px;
  object-fit: cover;
`;

export const Button = styled.button`
  font-size: 16px;
  width: ${(props) => (props.type === "create" ? "80px" : "fit-content")};
  padding: ${(props) => (props.type === "create" ? "5px" : "15px 50px")};
  border-radius: ${(props) => (props.type === "create" ? "5px" : "100vmax")};
  border: none;
  font-weight: ${(props) => props.type === "update" && 600};
  color: #fff;
  background-color: ${(props) =>
    props.type === "update" ? "darkblue" : "teal"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 567px) {
    padding: 5px;
    font-weight: 400;
    border-radius: 5px;
  }
`;
