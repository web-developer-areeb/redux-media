import useThunk from "../hooks/useThunk";
import { removeUser } from "../store";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          <Button loading={isLoading} className="mr-3" onClick={handleClick}>
            <GoTrashcan />
          </Button>
          {error && <div>Error deleting user...</div>}
          <span>{user.name}</span>
        </div>
      </div>
    </div>
  );
}

export default UsersListItem;
