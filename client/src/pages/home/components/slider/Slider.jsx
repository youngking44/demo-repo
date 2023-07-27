import {
  Wrapper,
  Arrow,
  SlideWrapper,
  Slide,
  Left,
  Image,
  Right,
  Title,
  Desc,
  Button,
} from "./Slider.style";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import ImageOne from "../../../../assets/image-one.jpg";
import ImageTwo from "../../../../assets/image-two.jpg";
import ImageThree from "../../../../assets/image-three.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slide = (direction) => {
    if (direction === "left") {
      setSlideIndex((prevIndex) => (slideIndex > 0 ? prevIndex - 1 : 0));
    } else {
      setSlideIndex((prevIndex) => (slideIndex < 2 ? prevIndex + 1 : 2));
    }
  };

  return (
    <Wrapper>
      <Arrow type="left" onClick={() => slide("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <SlideWrapper slideIndex={slideIndex}>
        <Slide bg="f5fafd">
          <Left>
            <Image src={ImageOne} alt="" />
          </Left>
          <Right>
            <Title>Promo Season</Title>
            <Desc>
              Don't miss out our new promo! get 40% discount for new arrival
            </Desc>
            <Button>
              <Link to="/products">Shop now</Link>
            </Button>
          </Right>
        </Slide>
        <Slide bg="fcf1ed">
          <Left>
            <Image src={ImageTwo} alt="" />
          </Left>
          <Right>
            <Title>Mike collection</Title>
            <Desc>
              Don't miss out our new promo! get 40% discount for new arrival
            </Desc>
            <Button>
              <Link to="/products">Shop now</Link>
            </Button>
          </Right>
        </Slide>
        <Slide bg="fbf0f4">
          <Left>
            <Image src={ImageThree} alt="" />
          </Left>
          <Right>
            <Title>Mike wears</Title>
            <Desc>
              Don't miss out our new promo! get 40% discount for new arrival
            </Desc>
            <Button>
              <Link to="/products">Shop now</Link>
            </Button>
          </Right>
        </Slide>
      </SlideWrapper>
      <Arrow type="right" onClick={() => slide("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Wrapper>
  );
}

export default Slider;
