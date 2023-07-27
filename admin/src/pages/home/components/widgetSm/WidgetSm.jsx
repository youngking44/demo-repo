import { Visibility } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import {
  Button,
  ButtonText,
  Container,
  JobTitle,
  List,
  ListItem,
  Title,
  User,
  Username,
  Error,
} from "./WidgetSm.style";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../../../requestMethods/requestMethods";
import Loader from "../../../../components/loader/Loader";
import axios from "axios";
import { useSelector } from "react-redux";

function WidgetSm() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const accessToken = useSelector(
    (state) => state.user.currentUser.accessToken
  );

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/users/?new=true`, {
          headers: {
            token: `Bearer ${accessToken}`,
          },
        });
        setUsers(res.data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(true);
      }
    };

    getUsers();
  }, []);

  return (
    <Container>
      <Title>New joined members</Title>
      <List role="list">
        {users?.map((user) => {
          return (
            <ListItem key={user._id}>
              <Avatar src={user.img || ""} alt="Profile picture" />
              <User>
                <Username>{user?.username}</Username>
                {user.job && <JobTitle>Software engineer</JobTitle>}
              </User>
              <Button>
                <Visibility fontSize="small" />
                <ButtonText>Display</ButtonText>
              </Button>
            </ListItem>
          );
        })}
      </List>
      {isLoading && <Loader />}
      {error && (
        <Error>Something went wrong, can't fetch latest memebers.</Error>
      )}
    </Container>
  );
}

export default WidgetSm;
