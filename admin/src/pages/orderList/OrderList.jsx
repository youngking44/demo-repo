import { Wrapper, Button, Icon, Error } from "./OrderList.style";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, deleteOrder } from "../../redux/apiCalls";
import { format } from "timeago.js";
import Loader from "../../components/loader/Loader";

function OrderList() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const isLoading = useSelector((state) => state.order.pending);
  const error = useSelector((state) => state.order.error);
  const accessToken = useSelector(
    (state) => state.user.currentUser.accessToken
  );

  const handleDelete = (id) => {
    deleteOrder(dispatch, id);
  };

  useEffect(() => {
    getOrders(dispatch, accessToken);
  }, []);

  const columns = [
    { field: "_id", headerName: "Order ID", width: 230 },
    {
      field: "amount",
      headerName: "Amount",
      width: 100,
      renderCell: (params) => {
        return `$${params.row.amount}`;
      },
    },
    {
      field: "city",
      headerName: "City",
      width: 100,
      renderCell: (params) => {
        return params.row.address.city;
      },
    },
    {
      field: "country",
      headerName: "Country",
      width: 100,
      renderCell: (params) => {
        return params.row.address.country;
      },
    },
    {
      field: "createdAt",
      headerName: "Date",
      width: 100,
      renderCell: (params) => {
        return format(params.row.createdAt);
      },
    },
    { field: "status", headerName: "Status", width: 100 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/orders/${params.row._id}`}>
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
      {isLoading && <Loader />}
      {error && <Error>{error?.message}</Error>}
      <DataGrid
        rows={orders}
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

export default OrderList;
