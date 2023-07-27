import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 4;
  padding: 5px 20px;
  overflow-y: scroll;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  margin-right: 20px;
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: #3bb077;
  cursor: pointer;
`;

export const Icon = styled.div`
  color: red;
  cursor: pointer;
`;

export const Error = styled.p`
  margin-bottom: 10px;
  text-align: center;
  color: red;
`;
