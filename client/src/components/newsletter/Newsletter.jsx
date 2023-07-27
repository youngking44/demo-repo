import React from "react";
import {
  Container,
  Title,
  Text,
  Wrapper,
  Input,
  Button,
} from "./Newsletter.style";
import SendIcon from "@mui/icons-material/Send";

function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Text>Get timely updates from your favorite products.</Text>
      <Wrapper>
        <Input placeholder="Your email" />
        <Button>
          <SendIcon />
        </Button>
      </Wrapper>
    </Container>
  );
}

export default Newsletter;
