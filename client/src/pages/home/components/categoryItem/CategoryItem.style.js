import styled from "styled-components";

export const Item = styled.div`
  position: relative;
  flex: 1;
  height: 400px;

  @media (max-width: 800px) {
    min-width: calc(calc(100% - 20px) / 2);
  }

  @media (max-width: 630px) {
    height: 280px;
  }

  @media (max-width: 530px) {
    min-width: 100%;
    height: 350px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  position: absolute;
  top: 0;
  right: 0%;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  text-transform: uppercase;
  background-color: #fff;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-radius: 100vmax;
  }
`;
