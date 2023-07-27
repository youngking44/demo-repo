import { Item, Image, Info, Title, Button } from "./CategoryItem.style";
import { Link } from "react-router-dom";

function CategoryItem({ item }) {
  return (
    <Item>
      <Link to={`/products/${item?.cat}`}>
        <Image src={item?.img} alt="" />
        <Info>
          <Title>{item?.title}</Title>
          <Button>Shop now</Button>
        </Info>
      </Link>
    </Item>
  );
}

export default CategoryItem;
