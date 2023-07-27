import {
  Wrapper,
  FormWrapper,
  Modal,
  IconButton,
  Form,
  Title,
  GroupsWrapper,
  GroupContainer,
  Group,
  Icon,
  Input,
  ButtonWrapper,
  Button,
  Error,
} from "./Register.style";
import Navbar from "../../components/navbar/Navbar";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";

import { useState } from "react";
import { registerUser } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerFailure } from "../../redux/userSlice";
import { useEffect } from "react";

const blankInfo = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Register() {
  const [formValues, setFormValues] = useState(blankInfo);
  const [validationErr, setValidationErr] = useState({});
  const err = useSelector((state) => state.user.error);
  const [modalErr, setModalErr] = useState(err);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...importantInfo } = formValues;
    if (Object.keys(validateInput()).length > 0) return;

    const user = await registerUser(dispatch, importantInfo);

    if (user) {
      setFormValues(blankInfo);
      navigate("/");
    }
  };

  const validateInput = () => {
    const errors = {};

    if (!formValues.firstName?.trim()) {
      errors.firstName = "Sorry first name is required";
    }

    if (!formValues.lastName?.trim()) {
      errors.lastName = "Sorry last name is required";
    }

    if (!formValues.username?.trim()) {
      errors.username = "Sorry last username is required";
    }

    if (!formValues.email?.trim()) {
      errors.email = "Sorry email is required";
    }

    if (!formValues.password?.trim()) {
      errors.password = "Sorry password is required";
    }

    if (formValues.password?.trim() !== formValues.confirmPassword?.trim()) {
      errors.confirmPassword = "Sorry passwords didn't match";
    }

    if (!formValues.confirmPassword?.trim()) {
      errors.confirmPassword = "Sorry re-enter your password";
    }
    setValidationErr(errors);
    return errors;
  };

  useEffect(() => {
    setModalErr(err);
    const updateValidationErrors = () => {
      if (!err.message) {
        setValidationErr(err);
      }
    };

    err && updateValidationErrors();
  }, [err]);

  useEffect(() => {
    dispatch(registerFailure(null));
    setValidationErr({});
  }, []);

  return (
    <>
      <Navbar />
      <Wrapper>
        <FormWrapper>
          {modalErr?.message && (
            <Modal>
              {err?.message}
              <IconButton onClick={() => setModalErr(null)}>
                <CloseOutlinedIcon />
              </IconButton>
            </Modal>
          )}
          <Form onSubmit={handleSubmit}>
            <Title>Register here</Title>
            <GroupsWrapper>
              <GroupContainer>
                <Group type="left">
                  <Icon>
                    <PersonOutlineOutlinedIcon />
                  </Icon>
                  <Input
                    type="text"
                    name="firstName"
                    value={formValues.firstName}
                    placeholder="First name"
                    onChange={handleChange}
                  />
                </Group>
                <Error direction="left">{validationErr.firstName}</Error>
              </GroupContainer>
              <GroupContainer>
                <Group type="right">
                  <Icon type="right">
                    <Person2OutlinedIcon />
                  </Icon>
                  <Input
                    type="text"
                    name="lastName"
                    value={formValues.lastName}
                    placeholder="Last name"
                    onChange={handleChange}
                  />
                </Group>
                <Error>{validationErr.lastName}</Error>
              </GroupContainer>
            </GroupsWrapper>
            <GroupsWrapper>
              <GroupContainer>
                <Group type="left">
                  <Icon>
                    <Person4OutlinedIcon />
                  </Icon>
                  <Input
                    type="text"
                    name="username"
                    value={formValues.username}
                    placeholder="Username"
                    onChange={handleChange}
                  />
                </Group>
                <Error direction="left">{validationErr.username}</Error>
              </GroupContainer>
              <GroupContainer>
                <Group type="right">
                  <Icon type="right">
                    <AlternateEmailOutlinedIcon />
                  </Icon>
                  <Input
                    type="text"
                    name="email"
                    value={formValues.email}
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </Group>
                <Error>{validationErr.email}</Error>
              </GroupContainer>
            </GroupsWrapper>
            <GroupsWrapper>
              <GroupContainer>
                <Group type="left">
                  <Icon>
                    <VpnKeyOutlinedIcon />
                  </Icon>
                  <Input
                    type="text"
                    name="password"
                    value={formValues.password}
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </Group>
                <Error direction="left">{validationErr.password}</Error>
              </GroupContainer>
              <GroupContainer>
                <Group type="right">
                  <Icon type="right">
                    <VpnKeyOutlinedIcon />
                  </Icon>
                  <Input
                    type="text"
                    name="confirmPassword"
                    value={formValues.confirmPassword}
                    placeholder="Confirm password"
                    onChange={handleChange}
                  />
                </Group>
                <Error>{validationErr.confirmPassword}</Error>
              </GroupContainer>
            </GroupsWrapper>
            <ButtonWrapper>
              <Button>Register</Button>
            </ButtonWrapper>
          </Form>
        </FormWrapper>
      </Wrapper>
    </>
  );
}

export default Register;
