import { Wrapper, Slider, Flex, SliderButton } from "./Categories.style";
import { categories } from "../../../../data/data";
import CategoryItem from "../categoryItem/CategoryItem";
import { Container } from "../../../../components/container/Container.style";
import { useState } from "react";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

function Categories() {
  const [slidingIndex, setSlidingIndex] = useState(0);

  const handleSlide = (dir) => {
    if (dir === "next") {
      setSlidingIndex((prevIndex) =>
        prevIndex < 2 ? prevIndex + 1 : prevIndex
      );
      return;
    }

    setSlidingIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <Wrapper>
      <SliderButton onClick={() => handleSlide("prev")}>
        <ArrowBackIosOutlinedIcon />
      </SliderButton>
      <SliderButton dir="right" onClick={() => handleSlide("next")}>
        <ArrowForwardIosOutlinedIcon />
      </SliderButton>
      <Container style={{ overflow: "hidden" }}>
        <Slider slidingindex={slidingIndex}>
          <Flex>
            {categories.map((item) => {
              return <CategoryItem item={item} key={item.id} />;
            })}
          </Flex>
        </Slider>
      </Container>
    </Wrapper>
  );
}

export default Categories;
