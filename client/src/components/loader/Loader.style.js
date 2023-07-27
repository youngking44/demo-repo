import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: calc(100% - 40px);
  min-height: 80vh;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(0, 0%, 95%);
`;
