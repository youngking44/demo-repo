import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    orderId: null,
    products: [],
    quantity: 0,
    total: 0,
    isCharged: false,
  },
  reducers: {
    addProducts: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    updateCart: (state, action) => {
      state.products[
        state.products.findIndex(
          (item) => item._id === action.payload.product._id
        )
      ] = action.payload.product;
      state.total =
        action.payload.type === "add"
          ? state.total + action.payload.product.price
          : state.total - action.payload.product.price;
    },
    clearCart: (state, action) => {
      state.orderId = action.payload;
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    setPayment: (state) => {
      state.isCharged = true;
    },
    clearPayment: (state) => {
      state.isCharged = false;
      state.orderId = null;
    },
  },
});

export const { addProducts, updateCart, clearCart, setPayment, clearPayment } =
  cartSlice.actions;

export default cartSlice.reducer;
