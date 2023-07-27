import styled from "styled-components";
import {
  smallMobile,
  extralSmallScreenDevice,
  smallScreenDevice,
} from "../../style-responsiveness/reponsiveness";

export const FooterWrapper = styled.footer`
  padding: 20px 0px;
  background-color: #fff;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  ${smallMobile({ flexDirection: "column", gap: "5px" })}

  ${extralSmallScreenDevice({ flexDirection: "column", gap: "10px" })}
`;

export const Left = styled.div`
  flex: 1;
`;

export const Logo = styled.h1`
  font-size: 35px;
  font-weight: bold;
`;

export const FooterText = styled.p`
  margin: 10px 0px;
`;

export const Social = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;

  ${extralSmallScreenDevice({ gap: "8px" })}
`;

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: ${(props) => props.bg};
`;

export const Center = styled.div`
  flex: 1;

  ${extralSmallScreenDevice({ display: "none" })}
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;

  ${smallScreenDevice({ marginRight: "10px" })}
`;

export const Title = styled.h3`
  margin-bottom: 20px;

  ${extralSmallScreenDevice({ marginBottom: "8px" })}
`;

export const Right = styled.div`
  flex: 1;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  ${smallMobile({ marginBottom: "8px" })}
`;

export const ContactItem = styled.span`
  margin-left: 10px;
`;

export const Payment = styled.img`
  width: 100%;
`;
