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
  min-height: 350px;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
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

export const Display = styled.div`
  width: 100%;
  padding: 0px 20px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const Price = styled.span`
  font-weight: 600;
  color: #ffa500;
`;

export const Desc = styled.span`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
