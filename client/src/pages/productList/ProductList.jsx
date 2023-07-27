import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import ProductListInfo from "./components/ProductLIstInfo";
import Products from "../../components/products/Products";
import { useParams } from "react-router-dom";

function ProductList() {
  const { category } = useParams();
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("");

  const handleFilters = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFilters({ ...filters, [name]: value });
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSort(value);
  };

  return (
    <>
      <Navbar />
      <Announcement />
      <ProductListInfo
        category={category}
        handleFilters={handleFilters}
        handleSort={handleSort}
      />
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </>
  );
}

export default ProductList;
