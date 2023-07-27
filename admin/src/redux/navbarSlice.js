import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    showSidebar: false,
  },
  reducers: {
    handleShowSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
  },
});

export const { handleShowSidebar } = navbarSlice.actions;

export default navbarSlice.reducer;
