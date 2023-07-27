import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 100%;
  flex: 2;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

  @media (max-width: 450px) {
    min-width: 100%;
  }

  @media (max-width: 600px) {
    overflow: scroll;
    scroll-snap-align: center;
  }
`;

export const Title = styled.span`
  font-size: 22px;
  font-weight: 600;
  text-transform: capitalize;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
`;

export const Head = styled.thead``;

export const Body = styled.tbody``;

export const Row = styled.tr``;

export const Heading = styled.th`
  text-align: left;
`;

export const Data = styled.td`
  display: ${(props) => props.display};
  align-items: center;
  gap: 10px;
  font-weight: ${(props) => props.fw};
`;

export const Username = styled.span`
  font-weight: 600;
`;

export const Button = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  cursor: pointer;
`;

export const BlankCover = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbfbff;
`;

export const Error = styled.span`
  color: red;
`;
