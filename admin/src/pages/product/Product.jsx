import {
  Wrapper,
  TitleContainer,
  Title,
  Button,
  Error,
  Top,
  Left,
  Right,
  InfoTop,
  ProductName,
  InfoBottom,
  InfoItem,
  InfoKey,
  InfoValue,
  Bottom,
  Form,
  Group,
  Label,
  IconButton,
  Input,
  FormBottom,
  Select,
  Option,
  Upload,
  Image,
} from "./Product.style";
import { Link, useParams, useNavigate } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { Avatar } from "@mui/material";
import { Publish } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { BASE_URL } from "../../requestMethods/requestMethods";

import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import App from "../../firebase/firebase";
import { updateProduct } from "../../redux/apiCalls";
import Loader from "../../components/loader/Loader";
import { monthArr as months } from "../../data/data";

function Product() {
  const params = useParams();
  const [productStats, setProductStats] = useState([]);
  const [file, setFile] = useState(null);
  const [tempUrl, setTempUrl] = useState("");
  const [formValues, setFormValues] = useState({});
  const [error, setError] = useState(false);
  const isLoading = useSelector((state) => state.product.pending);
  const product = useSelector((state) =>
    state.product.products.find((item) => item._id === params.id)
  );
  const accessToken = useSelector(
    (state) => state.user.currentUser.accessToken
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setTempUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const id = uuid();
    let photoUrl;
    try {
      if (file) {
        const storage = getStorage(App);
        const storageRef = ref(storage, id);
        const uploadedTask = await uploadBytesResumable(storageRef, file);
        photoUrl = await getDownloadURL(uploadedTask.ref);
      }

      const values = {
        title: formValues.title?.trim() || product.title,
        desc: formValues.desc?.trim() || product.desc,
        price: formValues.price?.trim() || product.price,
        img: photoUrl ? { id, url: photoUrl } : product.img,
        inStock: formValues.inStock?.trim() || product.inStock,
        categories: formValues.categories?.trim()
          ? formValues.categories.trim().split(",")
          : product.categories,
        color: formValues.color?.trim()
          ? formValues.color.trim().split(",")
          : product.color,
        size: formValues.size?.trim()
          ? formValues.size.trim().split(",")
          : product.size,
      };

      const updatingErr = await updateProduct(dispatch, params.id, values);
      if (updatingErr) {
        return setError(true);
      }
      navigate("/products");
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    const getProductStats = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/orders/income?pid=${params.id}`,
          {
            headers: {
              token: `Bearer ${accessToken}`,
            },
          }
        );
        const data = [];
        res.data.map(({ _id, total }) =>
          data.push({ name: months[_id - 1], sales: total })
        );

        setProductStats(data);
      } catch (err) {}
    };

    getProductStats();
  }, [months]);

  return (
    <Wrapper>
      {isLoading && <Loader />}
      <TitleContainer>
        <Title>Product</Title>
        <Link to="/newProduct">
          <Button type="create">Create</Button>
        </Link>
      </TitleContainer>
      {error && <Error>Something went wrong, can't update product...</Error>}
      <Top>
        <Left>
          <Chart
            title="Sales Performance"
            data={productStats}
            dataKey="sales"
          />
        </Left>
        <Right>
          <InfoTop>
            <Avatar src={product.img.url} alt="" />
            <ProductName>{product.title}</ProductName>
          </InfoTop>
          <InfoBottom>
            <InfoItem>
              <InfoKey type="id">ID:</InfoKey>
              <InfoValue>{product._id}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoKey>Sales:</InfoKey>
              <InfoValue>{`$${product.price}`}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoKey>In stock:</InfoKey>
              <InfoValue>{product.inStock ? "Yes" : "No"}</InfoValue>
            </InfoItem>
          </InfoBottom>
        </Right>
      </Top>
      <Bottom>
        <Form onSubmit={handleSubmit}>
          <Group>
            <Label>Product Name</Label>
            <Input
              type="text"
              name="title"
              placeholder={product.title}
              onChange={handleChange}
            />
          </Group>
          <Group>
            <Label>Product Description</Label>
            <Input
              type="text"
              name="desc"
              placeholder={product.desc}
              onChange={handleChange}
            />
          </Group>
          <Group>
            <Label>Product Price</Label>
            <Input
              type="text"
              name="price"
              placeholder={`$${product.price}`}
              onChange={handleChange}
            />
          </Group>
          <Group>
            <Label>Product Categories</Label>
            <Input
              type="text"
              name="categories"
              placeholder={product.categories}
              onChange={handleChange}
            />
          </Group>
          <Group>
            <Label>Product Color</Label>
            <Input
              type="text"
              name="color"
              placeholder={product.color}
              onChange={handleChange}
            />
          </Group>
          <Group>
            <Label>Product Size</Label>
            <Input
              type="text"
              name="size"
              placeholder={product.size}
              onChange={handleChange}
            />
          </Group>
          <FormBottom>
            <Upload>
              <Image src={tempUrl || product.img.url} alt="" />
              <Label htmlFor="file">
                <IconButton>
                  <Publish />
                </IconButton>
              </Label>
              <Input type="file" id="file" onChange={handleFile} />
            </Upload>
            <Group gap="large">
              <Label>In Stock</Label>
              <Select name="inStock" id="inStock" onChange={handleChange}>
                <Option value="true">Yes</Option>
                <Option value="false">No</Option>
              </Select>
              <Button type="update">Update</Button>
            </Group>
          </FormBottom>
        </Form>
      </Bottom>
    </Wrapper>
  );
}

export default Product;
