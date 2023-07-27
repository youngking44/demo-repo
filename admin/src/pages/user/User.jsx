import {
  Wrapper,
  TitleContainer,
  Title,
  Button,
  UserContainer,
  UserInfo,
  Top,
  TopTextWrapper,
  Text,
  Bottom,
  Info,
  Form,
  Group,
  Label,
  Input,
  Error,
} from "./User.style";
import {
  LocationSearching,
  MailOutline,
  PermIdentity,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "timeago.js";
import { updateUser } from "../../redux/apiCalls";
import { resetError } from "../../redux/userSlice";
import Loader from "../../components/loader/Loader";

function User() {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.user.users.find((user) => user._id === id)
  );
  const { error, pending: isLoading } = useSelector((state) => state.user);
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = {
      username: username.trim(),
      email: email.trim(),
      firstName: fullname.trim().split(" ")[0],
      lastName: fullname.split(" ")[1] || "",
    };

    makeRequest(formValues);
  };

  const makeRequest = async (formValues) => {
    const res = await updateUser(dispatch, id, {
      ...user,
      firstName: formValues.firstName.trim() || user.firstName,
      lastName: formValues.lastName.trim() || user.lastName,
      username: formValues.username || user.username,
      email: formValues.email || user.email,
    });

    res && navigate("/users");
  };

  useEffect(() => {
    dispatch(resetError());
  }, []);

  return (
    <Wrapper>
      <Error>{error?.message}</Error>
      {isLoading && <Loader />}
      <TitleContainer>
        <Title>Edit user</Title>
        <Button type="updateTop">Update</Button>
      </TitleContainer>
      <UserContainer>
        <UserInfo type="show">
          <Top>
            <Avatar src="" alt="" />
            <TopTextWrapper>
              <Text type="name" fw={600}>
                {user.firstName + " " + user.lastName}
              </Text>
            </TopTextWrapper>
          </Top>
          <Bottom>
            <Text type="showTitle">Account details</Text>
            <Info>
              <Text type="id">ID: {user._id}</Text>
            </Info>
            <Info>
              <PermIdentity fontSize="small" />
              <Text type="username">{user.username}</Text>
            </Info>
            <Text type="showTitle">Contact details</Text>
            <Info>
              <MailOutline fontSize="small" />
              <Text type="email">{user.email}</Text>
            </Info>
            <Info>
              <LocationSearching fontSize="small" />
              <Text type="date">{format(user.createdAt)}</Text>
            </Info>
          </Bottom>
        </UserInfo>
        <UserInfo type="update">
          <Text fs="24px" fw="600">
            Edit
          </Text>
          <Form onSubmit={handleSubmit}>
            <Group>
              <Label>Username</Label>
              <Input
                type="text"
                placeholder={user.username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Group>
            <Group>
              <Label>Full name</Label>
              <Input
                type="text"
                placeholder={user.firstName + " " + user.lastName}
                onChange={(e) => setFullname(e.target.value)}
              />
            </Group>
            <Group>
              <Label>Email</Label>
              <Input
                type="text"
                placeholder={user.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Group>
            <Button type="update">Update</Button>
          </Form>
        </UserInfo>
      </UserContainer>
    </Wrapper>
  );
}

export default User;
