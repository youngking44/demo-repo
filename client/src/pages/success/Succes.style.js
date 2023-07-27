import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const Center = styled.div`
  width: 100%;
  max-width: 700px;
  margin: auto;
  padding: 40px 20px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  background-color: ${(props) => (props.bg ? " #43d19e" : "#fff")};
`;

export const Circle = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #43d19e;
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 500;
  margin-top: 20px;
  text-transform: uppercase;
  color: #43d19e;
  opacity: 0.8;
`;

export const Desc = styled.p`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 10px;
  font-style: italic;
  text-transform: ${(props) => props.type !== "processing" && "lowercase"};
  color: ${(props) => props.type === "processing" && "#fff"};
  opacity: ${(props) => props.type !== "processing" && 0.7};
`;

export const Info = styled.p`
  font-size: 25px;
`;

export const Button = styled.button`
  width: 150px;
  height: 45px;
  margin: 20px 0px;
  font-size: 18px;
  border-radius: 100vmax;
  border: none;
  color: #fff;
  background-color: rgb(67, 209, 158);
  transition: 0.3s all ease-in;
  cursor: pointer;

  &:hover {
    background-color: rgba(67, 209, 158, 0.7);
  }
`;
