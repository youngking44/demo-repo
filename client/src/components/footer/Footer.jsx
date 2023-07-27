import { Container } from "../container/Container.style";
import {
  FooterWrapper,
  Flex,
  Left,
  Logo,
  FooterText,
  Social,
  SocialIcon,
  Center,
  List,
  ListItem,
  Title,
  Right,
  ItemWrapper,
  ContactItem,
  Payment,
} from "./Footer.style";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Flex>
          <Left>
            <Logo>Mike</Logo>
            <FooterText>
              There are may variation of passages of lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </FooterText>
            <Social>
              <SocialIcon bg="#3B5999">
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon bg="#E4405F">
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon bg="#55ACEE">
                <TwitterIcon />
              </SocialIcon>
              <SocialIcon bg="#E60023">
                <PinterestIcon />
              </SocialIcon>
            </Social>
          </Left>
          <Center>
            <Title>Useful links</Title>
            <List>
              <ListItem>Home</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Man fashion</ListItem>
              <ListItem>Woman fashion</ListItem>
              <ListItem>Accessories</ListItem>
              <ListItem>My account</ListItem>
              <ListItem>Order tracking</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Terms</ListItem>
              <ListItem>About</ListItem>
            </List>
          </Center>
          <Right>
            <Title>Contact</Title>
            <ItemWrapper>
              <RoomIcon />
              <ContactItem>124 Eleyele Street, Ibadan Oyo State</ContactItem>
            </ItemWrapper>
            <ItemWrapper>
              <PhoneIcon />
              <ContactItem>+234 8144316072</ContactItem>
            </ItemWrapper>
            <ItemWrapper>
              <MailOutlineIcon />
              <ContactItem>contact@mike.dev</ContactItem>
            </ItemWrapper>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
          </Right>
        </Flex>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
