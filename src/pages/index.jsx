import { useContext, useEffect } from "react";
import { UsersCards } from "../components";
import { EmptyPage } from "../components/genericComponents";
import { StorageContext } from "../context/StorageContext";
import { Row } from "../styles/components";

export default function Home() {
  const { data, getStorageUsers, deleteStorageUser, editStorageUser } =
    useContext(StorageContext);
  useEffect(() => {
    getStorageUsers();
  }, []);

  if (!data.users.length) {
    return (
      <EmptyPage
        text="No users found."
        tip="Register a new user to see it's information in this section."
      />
    );
  }
  return (
    <Row spacing={2} wrap="true">
      {data.users.map((item, index) => (
        <UsersCards
          key={index}
          details={item}
          getUsers={getStorageUsers}
          deleteUser={deleteStorageUser}
          editUser={editStorageUser}
        />
      ))}
    </Row>
  );
}
