import {
  Wrapper,
  Center,
  Circle,
  Title,
  Desc,
  Info,
  Button,
} from "./Succes.style";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../requestMethod/requestMethod";
import DoneIcon from "@mui/icons-material/Done";
import axios from "axios";
import { clearPayment, clearCart } from "../../redux/cartSlice";

function Success() {
  const location = useLocation();
  const cart = useSelector((state) => state.cart);
  const stripeData = location.state?.stripeData;
  const currentUser = useSelector((state) => state.user.currentUser);
  const orderId = useSelector((state) => state.cart.orderId);
  const [accessToken, setAccessToken] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clearPaymentHistory = () => {
    dispatch(clearPayment());
    navigate("/");
  };

  useEffect(() => {
    const getToken = () => {
      setAccessToken(currentUser.accessToken);
    };

    currentUser?.accessToken && getToken();
  }, [currentUser?.accessToken]);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await axios.post(
          `${BASE_URL}/orders`,
          {
            userId: currentUser._id,
            products: cart?.products.map((product) => ({
              productId: product._id,
              quantity: product.quantity,
              title: product.title,
              color: product.color,
              size: product.size,
              img: product.img?.url,
            })),
            amount: cart.total,
            address: stripeData.billing_details.address,
          },
          {
            headers: {
              token: `Bearer ${accessToken}`,
            },
          }
        );

        dispatch(clearCart(res.data._id));
      } catch (err) {
        console.log(err);
      }
    };

    if (accessToken && stripeData && cart.quantity > 0) {
      createOrder();
    }
  }, [stripeData?.id, cart?.total, accessToken]);

  return (
    <Wrapper>
      {orderId ? (
        <Center>
          <Circle>
            <DoneIcon style={{ fontSize: "80px", color: "#fff" }} />
          </Circle>
          <Title>Thank you</Title>
          <Desc>For shopping with us!</Desc>
          <Info>Your order was completed successfully.</Info>
          <Info>Order id: {orderId}</Info>
          <Button onClick={clearPaymentHistory}>Home</Button>
        </Center>
      ) : (
        <Center bg>
          <Desc type="processing">Wait while processing your order...</Desc>
        </Center>
      )}
    </Wrapper>
  );
}

export default Success;
