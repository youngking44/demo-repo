import styled from "styled-components";

export const Info = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  transition: all 0.5s ease;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Wrapper = styled.div`
  position: relative;
  flex: 1;
  min-width: 300px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5fbfd;

  &:hover ${Info} {
    opacity: 1;
  }

  @media (max-width: 350px) {
    min-width: 180px;
  }
`;

export const Image = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
  mix-blend-mode: darken;

  @media (max-width: 1300px) {
    object-fit: contain;
  }
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(0, 0, 0);
  background-color: #fff;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
