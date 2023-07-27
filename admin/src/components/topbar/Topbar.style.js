import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  line-height: 60px;
`;

export const Container = styled.div`
  width: calc(100% - 40px);
  max-width: 1300px;
  margin: 0 auto;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div``;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Logo = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: #00008b;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Icon = styled.div`
  line-height: 100%;

  @media (max-width: 567px) {
    display: none;
  }
`;
