import { useEffect, useState } from "react";
import { UsersCards } from "../components";
import { EmptyPage } from "../components/genericComponents";
import getUsers from "../cookies/getUsers";
import {
  Row,
} from "../styles/components";


export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersList = getUsers();
    setUsers(usersList);
  }, []);

  useEffect(() => {
    const usersList = getUsers();
    setUsers(usersList);
  }, [users.length]);

  if (!users.length) {
    return (
      <EmptyPage
        text="No users found."
        tip="Register a new user to see it's information in this section."
      />
    );
  }
  return (
      <Row spacing={2} wrap>
        {users.map((item, index) => (
          <UsersCards
            key={index}
            details={item}
            setUsers={setUsers}
            users={users}
          />
        ))}
      </Row>
  );
}


