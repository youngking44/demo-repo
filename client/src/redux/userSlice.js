import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    pending: false,
    error: null,
  },
  reducers: {
    loginStart: (state) => {
      state.error = null;
      state.pending = true;
    },
    loginSuccess: (state, action) => {
      state.pending = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
    registerStart: (state) => {
      state.error = null;
      state.pending = true;
    },
    registerSuccess: (state, action) => {
      state.pending = false;
      state.currentUser = action.payload;
    },
    registerFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
} = userSlice.actions;

export default userSlice.reducer;
