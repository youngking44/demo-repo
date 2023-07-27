import { useState, useEffect } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Container } from "../../../components/container/Container.style";
import {
  Wrapper,
  ImageWrapper,
  Image,
  Info,
  Title,
  Text,
  Price,
  FilterContainer,
  Filter,
  FilterText,
  FilterColor,
  FilterSelection,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
} from "./ProductInfo.style";
import { addProducts } from "../../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleCart = () => {
    const sameProduct = products.find((item) => item?._id === product._id);
    if (sameProduct) return;
    dispatch(addProducts({ ...product, quantity, size, color }));
  };

  useEffect(() => {
    product && setColor(product.color[0]);
    product && setSize(product.size[0]);
  }, [product]);

  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <Image src={product?.img.url} alt="" />
        </ImageWrapper>
        <Info>
          <Title>Denim jumpsuit</Title>
          <Text>{product?.desc}</Text>
          <Price>${product?.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterText>Color</FilterText>
              {product?.color.map((singleColor) => (
                <FilterColor
                  onClick={() => setColor(singleColor)}
                  bg={singleColor}
                  key={singleColor}
                />
              ))}
            </Filter>
            <Filter>
              <FilterText>Size</FilterText>
              <FilterSelection onChange={(e) => setSize(e.target.value)}>
                {product?.size.map((singleSize) => (
                  <FilterSizeOption key={singleSize}>
                    {singleSize}
                  </FilterSizeOption>
                ))}
              </FilterSelection>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon
                onClick={() =>
                  setQuantity((prev) => (prev > 1 ? prev - 1 : prev))
                }
              />
              <Amount>{quantity}</Amount>
              <AddIcon onClick={() => setQuantity((prev) => prev + 1)} />
            </AmountContainer>
            <Button onClick={handleCart}>Add to cart</Button>
          </AddContainer>
        </Info>
      </Wrapper>
    </Container>
  );
}

export default ProductInfo;
