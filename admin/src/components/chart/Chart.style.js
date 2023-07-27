import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin: ${(props) => props.margin && "0px 20px"};
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgb(0, 0, 0, 0.75);
`;

export const Title = styled.h3`
  margin-bottom: 20px;
`;

export const Error = styled.p`
  color: red;
`;
