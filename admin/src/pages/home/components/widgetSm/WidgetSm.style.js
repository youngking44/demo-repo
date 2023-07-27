import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  flex: 1;
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

  @media (max-width: 1100px) {
    width: fit-content;
  }

  @media (max-width: 450px) {
    min-width: 100%;
    scroll-snap-align: center;
  }
`;

export const Title = styled.span`
  font-size: 22px;
  font-weight: 600;
  text-transform: capitalize;
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px;

  @media (max-width: 290px) {
    justify-content: flex-start;
    gap: 10px;
  }
`;

export const User = styled.div``;

export const Username = styled.p`
  font-weight: 600;
`;

export const JobTitle = styled.p`
  font-weight: 300;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;

  @media (max-width: 290px) {
    display: none;
  }
`;

export const ButtonText = styled.span`
  margin-left: 5px;
`;

export const Error = styled.span`
  color: red;
`;
