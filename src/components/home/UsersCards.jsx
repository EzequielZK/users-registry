import { useEffect, useState } from "react";
import { openModal } from "..";
import deleteUser from "../../cookies/deleteUser";
import editUser from "../../cookies/editUser";
import getUsers from "../../cookies/getUsers";
import {
  Column,
  ContainedButton,
  ContrastContainer,
  OutlinedButton,
  Row,
  Text,
} from "../../styles/components";
import { openFeedbackModal } from "../genericComponents";
import UserDetails from "./UserDetails";

export default function UsersCards({ details, setUsers, users }) {
  const [name, setName] = useState('');

  useEffect(() => {
    const selectedUser = getUsers(details.id);
    setName(`${selectedUser.name} ${selectedUser.lastName}`);
  }, []);

  return (
    <ContrastContainer
      className="row-item"
      rounded
      width={400}
      boxShadow="0 10px 10px -10px gray"
    >
      <Column spacing={1} align="flex-start" fullWidth wrap>
        <Text className="column-item">{name}</Text>
        <Row spacing={2} className="column-item" fullWidth>
          <ContainedButton
            className="row-item"
            fullWidth
            onClick={() =>
              openModal.defaultModal(UserDetails, {
                width: 900,
                height: 700,
                props: { id: details.id, users, setName },
              })
            }
          >
            Details
          </ContainedButton>
          <OutlinedButton
            className="row-item"
            fullWidth
            color="error"
            onClick={() => {
              const newUsers = deleteUser(details.id);
              setUsers(newUsers);
              openFeedbackModal.successModal("Usuário deletado com sucesso!")
            }}
          >
            Delete user
          </OutlinedButton>
        </Row>
      </Column>
    </ContrastContainer>
  );
}
