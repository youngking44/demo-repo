import {
  Wrapper,
  Title,
  Form,
  Group,
  Label,
  InputWrapper,
  Input,
  Image,
  IconButton,
  TextWrapper,
  Text,
  Select,
  Option,
  Button,
  Error,
} from "./NewProduct.style";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { createProduct } from "../../redux/apiCalls";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import App from "../../firebase/firebase";
import Loader from "../../components/loader/Loader";

function NewProduct() {
  const [categories, setCategories] = useState([]);
  const [cat, setCat] = useState("");
  const [color, setColor] = useState([]);
  const [col, setCol] = useState("");
  const [sizes, setSizes] = useState([]);
  const [size, setSize] = useState("");
  const [file, setFile] = useState(null);
  const [localUrl, setLocalUrl] = useState("");
  const [formValues, setFormValues] = useState({});
  const [validationErr, setValidationErr] = useState({});
  const [error, setError] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const isLoading = useSelector((state) => state.product.pending);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setLocalUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleCategories = (action) => {
    setCat("");
    if (action === "add") {
      return setCategories((prev) => (cat.trim() ? [...prev, cat] : prev));
    }

    setCategories((prev) => (categories.length > 0 ? prev.slice(0, -1) : prev));
  };

  const handleColor = (action) => {
    setCol("");
    if (action === "add") {
      return setColor((prev) => (col.trim() ? [...prev, col] : prev));
    }

    setColor((prev) => (color.length > 0 ? prev.slice(0, -1) : prev));
  };

  const handleSizes = (action) => {
    setSize("");
    if (action === "add") {
      return setSizes((prev) => (size.trim() ? [...prev, size] : prev));
    }

    setSizes((prev) => (sizes.length > 0 ? prev.slice(0, -1) : prev));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const others = {
      size: sizes,
      color,
      categories,
    };
    setFormValues((prev) => ({ ...prev, ...others }));
    const errors = validateInputs();
    setValidationErr(errors);

    if (Object.values(errors).length > 0) return;
    setIsSubmit(true);
  };

  const validateInputs = () => {
    const errors = {};
    if (!file) {
      errors.img = "Product image is required.";
    }
    if (!formValues.title?.trim()) {
      errors.title = "Product name is required.";
    }
    if (!formValues.desc?.trim()) {
      errors.desc = "Description is required.";
    }
    if (!formValues.price?.trim()) {
      errors.price = "Product price is required.";
    }
    if (categories?.length === 0) {
      errors.cat = "Enter at least one product category.";
    }
    if (color?.length === 0) {
      errors.color = "Enter at least one product color.";
    }
    if (sizes?.length === 0) {
      errors.size = "Enter at least one product size.";
    }
    return errors;
  };

  useEffect(() => {
    const submitForm = async () => {
      console.log("Submitting form values....", formValues);
      try {
        const id = uuid();
        const storage = getStorage(App);
        const storageRef = ref(storage, id);
        const uploadedTask = await uploadBytesResumable(storageRef, file);
        const photoUrl = await getDownloadURL(uploadedTask.ref);
        const myError = await createProduct(dispatch, {
          ...formValues,
          img: { id, url: photoUrl },
        });

        if (myError) {
          return setError(true);
        }
        setIsSubmit(false);
        navigate("/products");
      } catch (err) {
        setError(true);
      }
    };

    isSubmit && submitForm();
  }, [isSubmit]);

  return (
    <Wrapper>
      {error && (
        <Error>
          {"Something went wrong, refresh your browser and try again..."}
        </Error>
      )}
      {isLoading && <Loader />}
      <Title>New product</Title>
      <Form onSubmit={handleSubmit}>
        <Group>
          <Label htmlFor="file">
            Upload image
            <CloudUploadIcon fontSize="large" style={{ color: "lightblue" }} />
          </Label>
          <Input id="file" type="file" onChange={handleFile} />
          {localUrl && <Image src={localUrl} alt="" />}
          {!file && <Error>{validationErr.img}</Error>}
        </Group>
        <Group>
          <Label type="bold">Name</Label>
          <Input
            type="text"
            name="title"
            placeholder="Apple Airpod"
            onChange={handleChange}
          />
          <Error>{validationErr.title}</Error>
        </Group>
        <Group>
          <Label type="bold">Description</Label>
          <Input
            type="text"
            name="desc"
            placeholder="Latest and modern Apple Airpod"
            onChange={handleChange}
          />
          <Error>{validationErr.desc}</Error>
        </Group>
        <Group>
          <Label type="bold">Price</Label>
          <Input
            type="number"
            name="price"
            placeholder="100"
            onChange={handleChange}
          />
          <Error>{validationErr.price}</Error>
        </Group>
        <Group>
          <Label type="bold">Categories</Label>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Add category one after the other e.g men"
              value={cat}
              onChange={(e) => setCat(e.target.value)}
            />
            <IconButton
              bg="green"
              type="button"
              onClick={() => handleCategories("add")}
            >
              <AddIcon />
            </IconButton>
            <IconButton
              bg="red"
              type="button"
              onClick={() => handleCategories("remove")}
            >
              <CloseIcon />
            </IconButton>
          </InputWrapper>
          <TextWrapper margin={categories.length > 0 ? "yes" : "no"}>
            {categories.map((cat) => (
              <Text key={uuid()}>{cat}</Text>
            ))}
          </TextWrapper>
          <Error>{validationErr.cat}</Error>
        </Group>
        <Group>
          <Label type="bold">Color</Label>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Add color one after the other e.g men"
              value={col}
              onChange={(e) => setCol(e.target.value)}
            />
            <IconButton
              bg="green"
              type="button"
              onClick={() => handleColor("add")}
            >
              <AddIcon />
            </IconButton>
            <IconButton
              bg="red"
              type="button"
              onClick={() => handleColor("remove")}
            >
              <CloseIcon />
            </IconButton>
          </InputWrapper>
          <TextWrapper margin={color.length > 0 ? "yes" : "no"}>
            {color.map((cl) => (
              <Text key={uuid()}>{cl}</Text>
            ))}
          </TextWrapper>
          <Error>{validationErr.color}</Error>
        </Group>
        <Group>
          <Label type="bold">Size</Label>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Add size one after the other e.g men"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
            <IconButton
              bg="green"
              type="button"
              onClick={() => handleSizes("add")}
            >
              <AddIcon />
            </IconButton>
            <IconButton
              bg="red"
              type="button"
              onClick={() => handleSizes("remove")}
            >
              <CloseIcon />
            </IconButton>
          </InputWrapper>
          <TextWrapper margin={sizes.length > 0 ? "yes" : "no"}>
            {sizes.map((siz) => (
              <Text key={uuid()}>{siz}</Text>
            ))}
          </TextWrapper>
          <Error>{validationErr.size}</Error>
        </Group>
        <Group>
          <Label type="bold">In Stock</Label>
          <Select name="inStock" onChange={handleChange}>
            <Option value="true">Yes</Option>
            <Option value="false">No</Option>
          </Select>
        </Group>
        <Button>Create</Button>
      </Form>
    </Wrapper>
  );
}

export default NewProduct;
