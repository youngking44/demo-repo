import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    users: [],
    pending: false,
    error: null,
  },
  reducers: {
    //* LOGIN USER
    loginStart: (state) => {
      state.pending = true;
      state.error = null;
    },

    loginSuccess: (state, action) => {
      state.pending = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },

    //* GET USERS
    getUsersStart: (state) => {
      state.pending = true;
      state.error = null;
    },
    getUsersSuccess: (state, action) => {
      state.pending = false;
      state.users = action.payload;
    },
    getUsersFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },

    //* DELETE USERS
    deleteUserStart: (state) => {
      state.pending = true;
      state.error = null;
    },
    deleteUserSuccess: (state, action) => {
      state.pending = false;
      state.users.splice(
        state.users.findIndex((user) => user._id === action.payload),
        1
      );
    },
    deleteUserFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },

    //* UPDATE USER
    updateUserStart: (state) => {
      state.pending = true;
      state.error = null;
    },
    updateUserSuccess: (state, action) => {
      state.pending = false;
      state.users[
        state.users.findIndex((item) => item._id === action.payload._id)
      ] = action.payload;
    },
    updateUserFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
    resetError: (state) => {
      state.error = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  resetError,
} = userSlice.actions;
export default userSlice.reducer;
