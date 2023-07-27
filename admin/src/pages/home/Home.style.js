import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 4;
  padding: 0px 0px 20px;
  overflow-y: scroll;
`;

export const Top = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.h4``;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  color: #fff;
  background-color: #008080;
  transition: opacity 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const Widget = styled.div`
  padding: 20px;
  display: flex;
  gap: 20px;

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 450px) {
    overflow: scroll;
    flex-direction: row;
    scroll-snap-type: x mandatory;
  }
`;
