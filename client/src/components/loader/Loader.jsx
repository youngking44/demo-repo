import { Circles } from "react-loader-spinner";
import { Container, Wrapper } from "./Loader.style";

function Loader() {
  return (
    <Container>
      <Wrapper>
        <Circles
          height="80"
          width="80"
          color=" #d8b7e8"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </Wrapper>
    </Container>
  );
}

export default Loader;
