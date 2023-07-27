import { Wrapper, Product, Button, Icon } from "./ProductList.style";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  const handleDelete = (id) => {
    deleteProduct(dispatch, id);
  };

  useEffect(() => {
    getProducts(dispatch);
  }, []);

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Products",
      width: 250,
      renderCell: (params) => {
        return (
          <Product>
            <Avatar src={params.row.img.url} alt="" />
            {params.row.title}
          </Product>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 60 },
    {
      field: "price",
      headerName: "Price",
      width: 130,
      renderCell: (params) => {
        return <>${params.row.price}</>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row._id}`}>
              <Button>Edit</Button>
            </Link>
            <Icon>
              <DeleteOutlineIcon onClick={() => handleDelete(params.row._id)} />
            </Icon>
          </>
        );
      },
    },
  ];

  return (
    <Wrapper>
      <DataGrid
        rows={products?.map((item) => ({
          ...item,
          inStock: item.inStock ? "Yes" : "No",
        }))}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        getRowId={(row) => row._id}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Wrapper>
  );
}

export default ProductList;
