import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";

function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => {
    return state.user;
  });

  console.log(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>UsersList</div>
  )
};

export default UsersList;