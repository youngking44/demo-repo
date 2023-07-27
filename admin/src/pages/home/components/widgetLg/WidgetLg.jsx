import {
  Body,
  Button,
  Container,
  Data,
  Head,
  Heading,
  Row,
  Table,
  Title,
  Username,
  BlankCover,
  Error,
} from "./WidgetLg.style";
import { useState, useEffect } from "react";
import Loader from "../../../../components/loader/Loader";
import { BASE_URL } from "../../../../requestMethods/requestMethods";
import { format } from "timeago.js";
import axios from "axios";
import { useSelector } from "react-redux";

function WidgetLg() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const accessToken = useSelector(
    (state) => state.user.currentUser.accessToken
  );

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/orders`, {
          headers: {
            token: `Bearer ${accessToken}`,
          },
        });
        setOrders(res.data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(true);
      }
    };

    getOrders();
  }, []);

  return (
    <Container>
      <Title>Latest transanctions</Title>
      <Table>
        <Head>
          <Row>
            <Heading>Customer</Heading>
            <Heading>Date</Heading>
            <Heading>Amount</Heading>
            <Heading>Status</Heading>
          </Row>
        </Head>
        <Body>
          {orders?.map((order) => {
            return (
              <Row key={order._id}>
                <Data display="flex">
                  <Username>{order.userId}</Username>
                </Data>
                <Data fw={600}>{format(order.createdAt)}</Data>
                <Data fw={600}>${order.amount}</Data>
                <Data>
                  <Button color="#3bb077" bg="#e5faf2">
                    {order.status}
                  </Button>
                </Data>
              </Row>
            );
          })}
        </Body>
      </Table>
      {orders.length === 0 && <BlankCover>No transaction...</BlankCover>}
      {isLoading && <Loader />}
      {error && <Error>Something went wrong, can't fetch latest orders.</Error>}
    </Container>
  );
}

export default WidgetLg;
