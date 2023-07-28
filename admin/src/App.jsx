import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import styled from "styled-components";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Sidebar from "./components/siderbar/Sidebar";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import OrderList from "./pages/orderList/OrderList";
import Order from "./pages/order/Order";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

const Container = styled.div`
  height: calc(100vh - 60px);
  display: flex;
`;

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const admin = currentUser?.isAdmin;

  const ProtectedRoute = ({ children }) => {
    if (!admin) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const CheckAuth = ({ children }) => {
    if (!admin) {
      return children;
    }
    return <Navigate to="/" />;
  };
  return (
    <Router>
      <ScrollToTop />
      {admin && <Topbar />}
      <Container>
        {admin && <Sidebar />}
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <UserList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/:id"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <ProductList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProtectedRoute>
                <Product />
              </ProtectedRoute>
            }
          />
          <Route
            path="/newProduct"
            element={
              <ProtectedRoute>
                <NewProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <OrderList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders/:id"
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <CheckAuth>
                <Login />
              </CheckAuth>
            }
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
