import useThunk from "../hooks/useThunk";
import { removeUser } from "../store";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button loading={isLoading} className="mr-3" onClick={handleClick}>
        <GoTrashcan />
      </Button>
      {error && <div>Error deleting user...</div>}
      <span>{user.name}</span>
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  )
}

export default UsersListItem;
