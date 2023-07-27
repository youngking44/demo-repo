import { Wrapper, Flex } from "./Categories.style";
import { categories } from "../../../../data/data";
import CategoryItem from "../categoryItem/CategoryItem";
import { Container } from "../../../../components/container/Container.style";

function Categories() {
  return (
    <Wrapper>
      <Container>
        <Flex>
          {categories.map((item) => {
            return <CategoryItem item={item} key={item.id} />;
          })}
        </Flex>
      </Container>
    </Wrapper>
  );
}

export default Categories;
