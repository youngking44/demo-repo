import Navbar from "../../components/navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import ProductInfo from "./components/ProductInfo";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { publicRequest } from "../../requestMethod/requestMethod";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);
  return (
    <>
      <Navbar />
      <Announcement />
      <ProductInfo product={product} />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Product;
