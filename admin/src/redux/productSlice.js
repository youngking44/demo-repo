import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    pending: false,
    error: null,
  },
  reducers: {
    //* GET PRODUCTS
    getProductStart: (state) => {
      state.pending = true;
      state.error = null;
    },

    getProductSuccess: (state, action) => {
      state.pending = false;
      state.products = action.payload;
    },
    getProductFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },

    //* DELETE PRODUCTS
    deleteProductStart: (state) => {
      state.pending = true;
      state.error = null;
    },
    deleteProductSuccess: (state, action) => {
      state.pending = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteProductFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
    //* UPDATE PRODUCTS
    updateProductStart: (state) => {
      state.pending = true;
      state.error = null;
    },
    updateProductSuccess: (state, action) => {
      state.pending = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload._id)
      ] = action.payload;
    },
    updateProductFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
    //* CREATE PRODUCTS
    createProductStart: (state) => {
      state.pending = true;
      state.error = null;
    },
    createProductSuccess: (state, action) => {
      state.pending = false;
      state.products.push(action.payload);
    },
    createProductFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  createProductStart,
  createProductSuccess,
  createProductFailure,
} = productSlice.actions;

export default productSlice.reducer;
