import { Wrapper, User, Button, Icon, Error } from "./UserList.style";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { format } from "timeago.js";
import Loader from "../../components/loader/Loader";

function UserList() {
  const users = useSelector((state) => state.user.users);
  const isLoading = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);
  const accessToken = useSelector(
    (state) => state.user.currentUser.accessToken
  );
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    deleteUser(dispatch, id);
  };

  useEffect(() => {
    const makeRequest = async () => {
      getUsers(dispatch, accessToken);
    };

    accessToken && makeRequest();
  }, [accessToken]);

  const columns = [
    { field: "_id", headerName: "ID", width: 225 },
    {
      field: "User",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <User>
            <Avatar src="" alt="" />
            {params.row.username}
          </User>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "createdAt",
      headerName: "Joined",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row._id}`}>
              <Button>Edit</Button>
            </Link>
            <Icon onClick={() => handleDelete(params.row._id)}>
              <DeleteOutlineIcon />
            </Icon>
          </>
        );
      },
    },
  ];

  return (
    <Wrapper>
      {error && <Error>{"Something went wrong, try again."}</Error>}
      {isLoading && <Loader />}
      <DataGrid
        rows={users.map((user) => ({
          ...user,
          createdAt: format(user.createdAt),
        }))}
        columns={columns}
        getRowId={(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Wrapper>
  );
}

export default UserList;
