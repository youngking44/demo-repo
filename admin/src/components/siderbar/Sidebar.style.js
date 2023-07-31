import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  height: auto;
  padding: 30px;
  background-color: #fbfbff;

  @media (max-width: 768px) {
    position: absolute;
    height: 100%;
    z-index: 999;
    transform: translateX(
      ${(props) => (props.showsidebar === "true" ? "0%" : "-100%")}
    );
    transition: all 0.5s ease;
  }
`;

export const Menu = styled.div`
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  font-size: 14px;
  text-transform: capitalize;
  color: rgb(187, 186, 186);
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgb(240 240 255);
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  transition: all 0.3s ease;
  background-color: lightblue;
  cursor: pointer;

  &:hover {
    filter: brightness(93%);
  }
`;
