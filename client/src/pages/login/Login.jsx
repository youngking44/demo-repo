import {
  Wrapper,
  FormWrapper,
  Modal,
  IconButton,
  Form,
  Title,
  Group,
  Error,
  Icon,
  Input,
  ButtonWrapper,
  Button,
} from "./Login.style";
import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Person3Icon from "@mui/icons-material/Person3";
import LockIcon from "@mui/icons-material/Lock";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";
import { loginFailure } from "../../redux/userSlice";

function Login() {
  const [isOpened, setIsOpened] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [modalErr, setModalErr] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.user.error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentUser = await loginUser(dispatch, { username, password });
    if (currentUser) {
      navigate("/");
    }
  };

  useEffect(() => {
    setModalErr(error);
  }, [error]);

  useEffect(() => {
    dispatch(loginFailure(null));
  }, []);

  return (
    <>
      <Navbar />
      <Wrapper>
        <FormWrapper>
          {modalErr && (
            <Modal>
              {error?.message}
              <IconButton onClick={() => setModalErr(null)}>
                <CloseOutlinedIcon />
              </IconButton>
            </Modal>
          )}
          <Form onSubmit={handleSubmit}>
            <Title>Login here</Title>
            <Group>
              <Icon>
                <Person3Icon />
              </Icon>
              <Input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Group>
            <Group>
              <Icon onClick={() => setIsOpened(!isOpened)}>
                {isOpened ? <LockOpenIcon /> : <LockIcon />}
              </Icon>
              <Input
                type={isOpened ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Group>
            <ButtonWrapper>
              <Button>Login</Button>
            </ButtonWrapper>
          </Form>
        </FormWrapper>
      </Wrapper>
    </>
  );
}

export default Login;
