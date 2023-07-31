import { Container } from "../container/Container.style";
import {
  Header,
  Flex,
  Left,
  Language,
  Search,
  Input,
  Center,
  Right,
  MenuItem,
} from "./Navbar.style";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logOut } from "../../redux/userSlice";

function Navbar() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) => state.cart.quantity);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logOut());
  };

  return (
    <Header>
      <Container>
        <Flex>
          {pathname !== "/register" && pathname !== "/login" && (
            <Left>
              <Language>EN</Language>
              <Search>
                <Input placeholder="Search" />
                <SearchIcon style={{ fontSize: "14px", color: "grey" }} />
              </Search>
            </Left>
          )}
          <Center
            align={
              pathname === "/register" || pathname === "/login"
                ? "left"
                : "center"
            }
          >
            <Link to="/">Mike</Link>
          </Center>
          <Right>
            {pathname !== "/" && (
              <MenuItem>
                <Link to="/">Home</Link>
              </MenuItem>
            )}
            <MenuItem type="register">
              <Link to="/register">Register</Link>
            </MenuItem>
            {currentUser ? (
              <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
            ) : (
              <MenuItem>
                <Link to="/login">Sign in</Link>
              </MenuItem>
            )}
            {pathname !== "/register" && pathname !== "/login" && (
              <MenuItem>
                <Badge badgeContent={quantity} color="secondary">
                  <Link to={quantity > 0 && "/cart"}>
                    <ShoppingCartOutlined />
                  </Link>
                </Badge>
              </MenuItem>
            )}
          </Right>
        </Flex>
      </Container>
    </Header>
  );
}

export default Navbar;
