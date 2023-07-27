import { Container } from "../../../components/container/Container.style";
import {
  Title,
  Wrapper,
  Filter,
  FilterTitle,
  FilterSelection,
  FilterOption,
} from "./ProductListInfo.style";

function ProductListInfo({ category, handleFilters, handleSort }) {
  return (
    <Container>
      <Title>{category}</Title>
      <Wrapper>
        <Filter>
          <FilterTitle>Filter products:</FilterTitle>
          <FilterSelection name="color" onChange={handleFilters}>
            <FilterOption disabled>Color</FilterOption>
            <FilterOption>white</FilterOption>
            <FilterOption>black</FilterOption>
            <FilterOption>red</FilterOption>
            <FilterOption>blue</FilterOption>
            <FilterOption>yellow</FilterOption>
            <FilterOption>green</FilterOption>
          </FilterSelection>
          <FilterSelection name="size" onChange={handleFilters}>
            <FilterOption disabled>Size</FilterOption>
            <FilterOption>XS</FilterOption>
            <FilterOption>S</FilterOption>
            <FilterOption>M</FilterOption>
            <FilterOption>L</FilterOption>
            <FilterOption>XL</FilterOption>
          </FilterSelection>
        </Filter>
        <Filter>
          <FilterTitle>Sort products:</FilterTitle>
          <FilterSelection onChange={handleSort}>
            <FilterOption value="newest">Newest</FilterOption>
            <FilterOption value="asc">Price(asc)</FilterOption>
            <FilterOption value="desc">Price(desc)</FilterOption>
          </FilterSelection>
        </Filter>
      </Wrapper>
    </Container>
  );
}

export default ProductListInfo;
