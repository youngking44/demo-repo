import {
  Wrapper,
  FormWrapper,
  Modal,
  IconButton,
  Form,
  Title,
  GroupWrapper,
  Group,
  Icon,
  Input,
  Error,
  ButtonWrapper,
  Button,
} from "./Login.style";
import { useState, useEffect } from "react";
import Person3Icon from "@mui/icons-material/Person3";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { loginUser } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure } from "../../redux/userSlice";

function Login() {
  const [isOpened, setIsOpened] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validationErr, setValidationErr] = useState({});
  const [modalErr, setModalErr] = useState(null);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    validateValues();
    if (username && password) {
      loginUser(dispatch, { username, password });
    }
  };

  const validateValues = () => {
    setValidationErr({});
    if (!username.trim()) {
      setValidationErr((prevErr) => ({
        ...prevErr,
        username: "Username is required",
      }));
    }

    if (!password.trim()) {
      setValidationErr((prevErr) => ({
        ...prevErr,
        password: "Password is required",
      }));
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
            <GroupWrapper>
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
              <Error>{validationErr.username}</Error>
            </GroupWrapper>
            <GroupWrapper>
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
              <Error>{validationErr.password}</Error>
            </GroupWrapper>
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
