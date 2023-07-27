import {
  Wrapper,
  TitleContainer,
  Title,
  Error,
  Top,
  SlidingRange,
  Slider,
  TopFlex,
  TopBox,
  TopTitle,
  InfoItem,
  InfoKey,
  InfoValue,
  Bottom,
  Left,
  BottomSlider,
  OrderList,
  SingleOrder,
  Image,
  OrderInfo,
  Right,
  Form,
  Label,
  Input,
  BtwWrapper,
  Button,
  SlideButton,
  MobileOnly,
} from "./Order.style";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { updateOrder } from "../../redux/apiCalls";
import Loader from "../../components/loader/Loader";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { getOrderFailure } from "../../redux/orderSlice";

function Order() {
  const params = useParams();
  const order = useSelector((state) =>
    state.order.orders?.find((item) => item._id === params.id)
  );

  const [status, setStatus] = useState("");
  const [slideDir, setSlideDir] = useState("left");
  const isLoading = useSelector((state) => state.order.pending);
  const error = useSelector((state) => state.order.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSlideDirection = (dir) => {
    if (dir === "next") return setSlideDir("right");
    setSlideDir("left");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!status.trim()) return;
    const res = await updateOrder(dispatch, order._id, { ...order, status });
    res && navigate("/orders");
  };

  useEffect(() => {
    dispatch(getOrderFailure());
  }, []);

  return (
    <Wrapper>
      {isLoading && <Loader />}
      <TitleContainer>
        <Title>Order</Title>
        <Link to="/newProduct">
          <Button position="top">Update</Button>
        </Link>
      </TitleContainer>
      {error && <Error>{error?.message}</Error>}
      <Top>
        <SlideButton onClick={() => handleSlideDirection()}>
          <ArrowBackIosOutlinedIcon />
        </SlideButton>
        <SlideButton dir="right" onClick={() => handleSlideDirection("next")}>
          <ArrowForwardIosOutlinedIcon />
        </SlideButton>
        <SlidingRange>
          <Slider slidedir={slideDir}>
            <TopFlex>
              <TopBox>
                <TopTitle>Shipping address</TopTitle>
                <InfoItem>
                  <InfoKey>Country:</InfoKey>
                  <InfoValue> {order.address?.country}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoKey>City:</InfoKey>
                  <InfoValue>{order.address?.city}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoKey>Line1:</InfoKey>
                  <InfoValue> {order.address?.line1}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoKey>ZIP:</InfoKey>
                  <InfoValue> {order.address?.postal_code}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoKey>Status:</InfoKey>
                  <InfoValue> {order.status}</InfoValue>
                </InfoItem>
              </TopBox>
              <TopBox>
                <TopTitle>Order info</TopTitle>
                <InfoItem>
                  <InfoKey>User ID:</InfoKey>
                  <InfoValue> {order.userId}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoKey>Order ID:</InfoKey>
                  <InfoValue>{order._id}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoKey>Amount:</InfoKey>
                  <InfoValue>${order.amount}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoKey>Quantity:</InfoKey>
                  <InfoValue>{order.products?.length}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoKey>Date:</InfoKey>
                  <InfoValue> {order.createdAt.split("T")[0]}</InfoValue>
                </InfoItem>
              </TopBox>
            </TopFlex>
          </Slider>
        </SlidingRange>
      </Top>
      <MobileOnly>
        <Form onSubmit={handleSubmit}>
          <TopTitle>Update order status</TopTitle>
          <Label>Status:</Label>
          <Input
            type="text"
            placeholder={order.status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <BtwWrapper>
            <Button>Update</Button>
          </BtwWrapper>
        </Form>
      </MobileOnly>
      <Bottom>
        <Left>
          <TopTitle>More info</TopTitle>
          <BottomSlider>
            <OrderList>
              {order?.products.map((item) => {
                return (
                  <SingleOrder key={item._id}>
                    <Image src={item.img} alt="" />
                    <OrderInfo>
                      <InfoItem>
                        <InfoKey>Product ID:</InfoKey>
                        <InfoValue>{item._id}</InfoValue>
                      </InfoItem>
                      <InfoItem>
                        <InfoKey>Product name:</InfoKey>
                        <InfoValue>{item.title}</InfoValue>
                      </InfoItem>
                      <InfoItem>
                        <InfoKey>Color:</InfoKey>
                        <InfoValue>{item.color}</InfoValue>
                      </InfoItem>
                      <InfoItem>
                        <InfoKey>Size:</InfoKey>
                        <InfoValue>{item.size}</InfoValue>
                      </InfoItem>
                      <InfoItem>
                        <InfoKey>Quantity:</InfoKey>
                        <InfoValue>{item.quantity}</InfoValue>
                      </InfoItem>
                    </OrderInfo>
                  </SingleOrder>
                );
              })}
            </OrderList>
          </BottomSlider>
        </Left>
        <Right>
          <Form onSubmit={handleSubmit}>
            <TopTitle>Update order status</TopTitle>
            <Label>Status:</Label>
            <Input
              type="text"
              placeholder={order.status}
              onChange={(e) => setStatus(e.target.value)}
            />
            <BtwWrapper>
              <Button>Update</Button>
            </BtwWrapper>
          </Form>
        </Right>
      </Bottom>
    </Wrapper>
  );
}

export default Order;
