import { publicRequest } from "../requestMethod/requestMethod";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
} from "./userSlice";

export const loginUser = async (dispatch, payload) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", {
      username: payload.username,
      password: payload.password,
    });
    dispatch(loginSuccess(res.data));
    return res.data;
  } catch (err) {
    let error = { message: "An unknown error occured" };
    if (err.response) {
      error = err.response.data;
    }
    dispatch(loginFailure(error));
  }
};

export const registerUser = async (dispatch, payload) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", payload);
    dispatch(registerSuccess(res.data));
    return res.data;
  } catch (err) {
    let error = { message: "Something went wrong, try again later." };
    if (err.response) {
      error = err.response.data;
    }
    dispatch(registerFailure(error));
  }
};
