import {
  Wrapper,
  Container,
  Flex,
  Left,
  Hamburger,
  Logo,
  Right,
  Icon,
} from "./Topbar.style";
import { Avatar, Badge } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { handleShowSidebar } from "../../redux/navbarSlice";

function Topbar() {
  const showSidebar = useSelector((state) => state.navbar.showSidebar);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Container>
        <Flex>
          <Hamburger onClick={() => dispatch(handleShowSidebar())}>
            {showSidebar ? <CloseIcon /> : <MenuIcon />}
          </Hamburger>
          <Left>
            <Logo>Youngking</Logo>
          </Left>
          <Right>
            <Icon>
              <Badge badgeContent={4} color="warning">
                <NotificationsNoneIcon />
              </Badge>
            </Icon>
            <Icon>
              <Badge badgeContent={4} color="warning">
                <LanguageIcon />
              </Badge>
            </Icon>
            <Icon>
              <SettingsIcon />
            </Icon>
            <Avatar
              src="https://media.gettyimages.com/id/1229892421/photo/berlin-germany-december-01-spacex-owner-and-tesla-ceo-elon-musk-arrives-on-the-red-carpet-for.jpg?s=612x612&w=0&k=20&c=xReo2X0OfYM2lPWVVLyS9kuKn7NbMFy61XSsseeRNQ8="
              alt=""
            />
          </Right>
        </Flex>
      </Container>
    </Wrapper>
  );
}

export default Topbar;
