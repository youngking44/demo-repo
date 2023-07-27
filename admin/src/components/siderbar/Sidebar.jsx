import { useState } from "react";
import { Wrapper, Menu, Title, List, ListItem } from "./Sidebar.style";
import {
  ChatBubbleOutline,
  DynamicFeed,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  WorkOutline,
} from "@mui/icons-material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleShowSidebar } from "../../redux/navbarSlice";

function Sidebar() {
  const [active, setActive] = useState(true);
  const showSidebar = useSelector((state) => state.navbar.showSidebar);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(handleShowSidebar());
  };
  return (
    <Wrapper showsidebar={`${showSidebar}`}>
      <Menu>
        <Title>Dashboard</Title>
        <List role="list">
          <Link to="/" onClick={handleClick}>
            <ListItem bg={active && "rgb(240 240 255)"}>
              <LineStyleIcon fontSize="small" />
              Home
            </ListItem>
          </Link>
          <ListItem>
            <TimelineIcon fontSize="small" />
            Analytics
          </ListItem>
          <ListItem>
            <TrendingUpIcon fontSize="small" />
            Sales
          </ListItem>
        </List>
      </Menu>
      <Menu>
        <Title>Quick menu</Title>
        <List role="list">
          <Link to="/users" onClick={handleClick}>
            <ListItem>
              <PermIdentity fontSize="small" />
              Users
            </ListItem>
          </Link>
          <Link to="/products" onClick={handleClick}>
            <ListItem>
              <Storefront fontSize="small" />
              Products
            </ListItem>
          </Link>
          <Link to="/orders" onClick={handleClick}>
            <ListItem>
              <AttachMoneyIcon fontSize="small" />
              Transactions
            </ListItem>
          </Link>
          <ListItem>
            <AlignVerticalBottomIcon fontSize="small" />
            Reports
          </ListItem>
        </List>
      </Menu>
      <Menu>
        <Title>Notification</Title>
        <List role="list">
          <ListItem>
            <MailOutline fontSize="small" />
            Mail
          </ListItem>
          <ListItem>
            <DynamicFeed fontSize="small" />
            Feedback
          </ListItem>
          <ListItem>
            <ChatBubbleOutline fontSize="small" />
            Messages
          </ListItem>
        </List>
      </Menu>
      <Menu>
        <Title>Staff</Title>
        <List role="list">
          <ListItem>
            <WorkOutline fontSize="small" />
            Manage
          </ListItem>
          <ListItem>
            <TimelineIcon fontSize="small" />
            Analytics
          </ListItem>
          <ListItem>
            <Report fontSize="small" />
            Reports
          </ListItem>
        </List>
      </Menu>
    </Wrapper>
  );
}

export default Sidebar;
