import Announcement from "./components/announcement/Announcement";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ProductList from "./pages/productList/ProductList";
import Register from "./pages/register/Register";
import Success from "./pages/success/Success";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const isCharged = useSelector((state) => state.cart.isCharged);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const CheckAuth = ({ children }) => {
    if (!currentUser) {
      return children;
    }
    return <Navigate to="/" />;
  };
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/success"
          element={isCharged ? <Success /> : <Navigate to="/" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
