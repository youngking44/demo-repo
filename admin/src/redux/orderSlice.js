import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    pending: false,
    error: null,
  },
  reducers: {
    //* GET ORDERS
    getOrderStart: (state) => {
      state.pending = true;
      state.error = null;
    },

    getOrderSuccess: (state, action) => {
      state.pending = false;
      state.orders = action.payload;
    },
    getOrderFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },

    //* DELETE ORDERS
    deleteOrderStart: (state) => {
      state.pending = true;
      state.error = null;
    },
    deleteOrderSuccess: (state, action) => {
      state.pending = false;
      state.orders.splice(
        state.orders.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteOrderFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },

    //* UPDATE ORDERS
    updateOrderStart: (state) => {
      state.pending = true;
      state.error = null;
    },
    updateOrderSuccess: (state, action) => {
      state.pending = false;
      state.orders[
        state.orders.findIndex((item) => item._id === action.payload._id)
      ] = action.payload;
    },
    updateOrderFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
  },
});

export const {
  getOrderStart,
  getOrderSuccess,
  getOrderFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure,
  updateOrderStart,
  updateOrderSuccess,
  updateOrderFailure,
} = orderSlice.actions;

export default orderSlice.reducer;
