import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Announcement from "../../components/announcement/Announcement";
import { Container } from "../../components/container/Container.style";
import {
  Wrapper,
  Title,
  Flex,
  Button,
  LinkWrapper,
  StyledLink,
  ShoppingInfo,
  Info,
  Products,
  ImageWrapper,
  Image,
  Product,
  ProductInfo,
  ProductTitle,
  ProductId,
  ProductColor,
  ProductSize,
  PriceInfo,
  ProductAmountWrapper,
  ProductAmount,
  ProductPrice,
  Summary,
  SummaryTitle,
  SummaryFlex,
  SummaryText,
  SummaryButton,
} from "./Cart.style";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../requestMethod/requestMethod";
import { Link, useNavigate } from "react-router-dom";
import { setPayment, updateCart } from "../../redux/cartSlice";
import { IconButton } from "@mui/material";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.cart.products);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onToken = (token) => {
    setStripeToken(token);
  };

  const handleQuantity = (type, item) => {
    if (type === "add") {
      const product = { ...item, quantity: item.quantity + 1 };
      return dispatch(updateCart({ type: "add", product }));
    }

    const product = {
      ...item,
      quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
    };
    item.quantity > 1 && dispatch(updateCart({ type: "remove", product }));
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        dispatch(setPayment());
        navigate("/success", {
          state: {
            stripeData: res.data,
          },
        });
      } catch (err) {}
    };

    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Container>
          <Title>Your bag</Title>
          <Flex>
            <Button>
              <Link to="/products">Continue shopping</Link>
            </Button>
            <LinkWrapper>
              <StyledLink type="first">Shopping bag(2)</StyledLink>
              <StyledLink>Your Wishlist(2)</StyledLink>
            </LinkWrapper>
            <StripeCheckout
              name="Mike Collection"
              image="https://media.gettyimages.com/id/1131186263/vector/creative-flower-inspiration-vector-logo-design-template.jpg?s=612x612&w=0&k=20&c=owBFDzj8GQO8PNe14RFjBsoiwESEO_Hyhkng6VnY1u8="
              billingAddress
              shippingAddress
              description={`Your total is ${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={import.meta.env.VITE_STRIPE_SEC}
            >
              <Button type="filled">Checkout now</Button>
            </StripeCheckout>
          </Flex>
          <ShoppingInfo>
            <Info>
              {products?.map((product) => {
                return (
                  <Products key={product._id}>
                    <ImageWrapper>
                      <Image src={product.img?.url} alt="" />
                    </ImageWrapper>
                    <Product>
                      <ProductInfo>
                        <ProductTitle>
                          <b>Product:</b> {product.title}
                        </ProductTitle>
                        <ProductId>
                          <b>ID:</b> {product._id}
                        </ProductId>
                        <ProductColor bg={product.color} />
                        <ProductSize>
                          <b>Size:</b> {product.size}
                        </ProductSize>
                      </ProductInfo>
                      <PriceInfo>
                        <ProductAmountWrapper>
                          <IconButton
                            onClick={() => handleQuantity("add", product)}
                          >
                            <AddIcon />
                          </IconButton>
                          <ProductAmount>{product.quantity}</ProductAmount>
                          <IconButton
                            onClick={() => handleQuantity("remove", product)}
                          >
                            <RemoveIcon />
                          </IconButton>
                        </ProductAmountWrapper>
                        <ProductPrice> ${product.price}</ProductPrice>
                      </PriceInfo>
                    </Product>
                  </Products>
                );
              })}
            </Info>
            <Summary>
              <SummaryTitle>Order summary</SummaryTitle>
              <SummaryFlex>
                <SummaryText>Subtotal</SummaryText>
                <SummaryText>$ {cart.total}</SummaryText>
              </SummaryFlex>
              <SummaryFlex>
                <SummaryText>Estimated shipping</SummaryText>
                <SummaryText>$ 5.90</SummaryText>
              </SummaryFlex>
              <SummaryFlex>
                <SummaryText>Shipping discount</SummaryText>
                <SummaryText>$ -5.90</SummaryText>
              </SummaryFlex>
              <SummaryFlex>
                <SummaryText type="total">Total</SummaryText>
                <SummaryText type="total">$ {cart.total}</SummaryText>
              </SummaryFlex>
              <StripeCheckout
                name="Mike Collection"
                image="https://media.gettyimages.com/id/1131186263/vector/creative-flower-inspiration-vector-logo-design-template.jpg?s=612x612&w=0&k=20&c=owBFDzj8GQO8PNe14RFjBsoiwESEO_Hyhkng6VnY1u8="
                billingAddress
                shippingAddress
                description={`Your total is ${cart.total}`}
                amount={cart.total * 100}
                token={onToken}
                stripeKey={import.meta.env.VITE_STRIPE_SEC}
              >
                <SummaryButton>Checkout now</SummaryButton>
              </StripeCheckout>
            </Summary>
          </ShoppingInfo>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Cart;
