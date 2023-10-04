import {
  Wrapper,
  Image,
  Info,
  Icon,
  Display,
  Flex,
  Title,
  Price,
  Desc,
} from "./Product.style";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Wrapper>
      <Image src={product?.img.url} alt="" />
      <Display>
        <Flex>
          <Title>{product?.title}</Title>
          <Price>${product?.price}</Price>
        </Flex>
        <Desc>{product?.desc}</Desc>
      </Display>
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <Link to={`/product/${product?._id}`}>
            <SearchOutlinedIcon />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </Wrapper>
  );
}

export default Product;
