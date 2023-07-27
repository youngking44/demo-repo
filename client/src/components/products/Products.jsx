import { useState, useEffect } from "react";
import { Wrapper, ProductWrapper, Error } from "./Products.style";
import { Container } from "../container/Container.style";
import Product from "../product/Product";
import { publicRequest } from "../../requestMethod/requestMethod";
import Loader from "../loader/Loader";

function Products({ category, filters, sort }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      try {
        const res = await publicRequest.get(
          category ? `products/?category=${category}` : "products/"
        );
        setProducts(res.data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [category, filters, products]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Wrapper>
      {error && <Error>Something went wrong, can't fetch products.</Error>}
      <Container>
        <ProductWrapper>
          {category
            ? filteredProducts?.map((product) => {
                return <Product product={product} key={product?._id} />;
              })
            : products?.slice(0, 8).map((product) => {
                return <Product product={product} key={product?._id} />;
              })}
        </ProductWrapper>
      </Container>
      {isLoading && <Loader />}
    </Wrapper>
  );
}

export default Products;
