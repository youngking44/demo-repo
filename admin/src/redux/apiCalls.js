import { publicRequest, userRequest } from "../requestMethods/requestMethods";
import {
  getOrderStart,
  getOrderSuccess,
  getOrderFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure,
  updateOrderStart,
  updateOrderSuccess,
  updateOrderFailure,
} from "./orderSlice";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  createProductFailure,
  createProductStart,
  createProductSuccess,
} from "./productSlice";
import {
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
} from "./userSlice";

//* LOGIN USER
export const loginUser = async (dispatch, payload) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", {
      username: payload.username,
      password: payload.password,
    });
    dispatch(loginSuccess(res.data));
  } catch (err) {
    let error = { message: "Something went wrong." };

    if (err.response) {
      error = err.response.data;
    }
    dispatch(loginFailure(error));
  }
};

//* GET PRODUCTS
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    let error = { message: "Something went wrong." };

    if (err.response) {
      error = err.response.data;
    }
    dispatch(getProductFailure(error));
  }
};

//* DELETE PRODUCTS
export const deleteProduct = async (dispatch, id) => {
  dispatch(deleteProductStart());
  try {
    await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    let error = { message: "Something went wrong." };

    if (err.response) {
      error = err.response.data;
    }
    dispatch(deleteProductFailure(error));
  }
};

//* UPDATE PRODUCTS
export const updateProduct = async (dispatch, id, product) => {
  dispatch(updateProductStart());
  try {
    const res = await userRequest.put(`/products/${id}`, product);
    dispatch(updateProductSuccess(res.data));
  } catch (err) {
    let error = { message: "Something went wrong." };

    if (err.response) {
      error = err.response.data;
    }
    dispatch(updateProductFailure(error));
    return error;
  }
};

//* CREATE PRODUCTS
export const createProduct = async (dispatch, payload) => {
  dispatch(createProductStart());
  try {
    const res = await userRequest.post("/products", payload);
    dispatch(createProductSuccess(res.data));
  } catch (err) {
    let error = { message: "Something went wrong." };

    if (err.response) {
      error = err.response.data;
    }
    dispatch(createProductFailure(error));
    return error;
  }
};

//* GET USERS
export const getUsers = async (dispatch, token) => {
  dispatch(getUsersStart());
  try {
    const res = await userRequest.get("/users", {
      headers: {
        token: `Bearer ${token}`,
      },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    let error = { message: "Something went wrong." };

    if (err.response) {
      error = err.response.data;
    }
    dispatch(getUsersFailure(error));
  }
};

//* DELETE USER
export const deleteUser = async (dispatch, id) => {
  dispatch(deleteUserStart());
  try {
    await userRequest.delete(`/users/${id}`);
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    let error = { message: "Something went wrong." };
    if (err.response) {
      error = err.response.data;
    }
    dispatch(deleteUserFailure(error));
  }
};

export const updateUser = async (dispatch, id, user) => {
  dispatch(updateUserStart());
  try {
    const res = await userRequest.put(`/users/${id}`, user);
    dispatch(updateUserSuccess(res.data));
    return res.data;
  } catch (err) {
    let error = { message: "Something went wrong." };

    if (err.response) {
      error = err.response.data;
    }
    dispatch(updateUserFailure(error));
  }
};

//* GET ORDERS
export const getOrders = async (dispatch, token) => {
  dispatch(getOrderStart());
  try {
    const res = await userRequest.get("/orders", {
      headers: {
        token: `Bearer ${token}`,
      },
    });
    dispatch(getOrderSuccess(res.data));
  } catch (err) {
    dispatch(getOrderFailure({ message: "Something went wrong, try again" }));
  }
};

//* DELETE ORDER
export const deleteOrder = async (dispatch, id) => {
  dispatch(deleteOrderStart());
  try {
    await userRequest.delete(`/orders/${id}`);
    dispatch(deleteOrderSuccess(id));
  } catch (err) {
    let error = { message: "Something went wrong." };
    if (err.response) {
      error = err.response.data;
    }
    dispatch(deleteOrderFailure(error));
  }
};

//* UPDATE ORDER
export const updateOrder = async (dispatch, id, order) => {
  dispatch(updateOrderStart());
  try {
    const res = await userRequest.put(`/orders/${id}`, order);
    dispatch(updateOrderSuccess(res.data));
    return res.data;
  } catch (err) {
    let error = { message: "Something went wrong." };

    if (err.response) {
      error = err.response.data;
    }
    dispatch(updateOrderFailure(error));
  }
};
