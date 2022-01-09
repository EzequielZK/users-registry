import { openModal } from "..";
import deleteUser from "../../cookies/deleteUser";
import {
  Column,
  ContainedButton,
  ContrastContainer,
  OutlinedButton,
  Row,
  Text,
} from "../../styles/components";
import UserDetails from "./UserDetails";

export default function UsersCards({ details, setUsers }) {
  return (
    <ContrastContainer
      className="row-item"
      rounded
      width={400}
      boxShadow="0 10px 10px -10px gray"
    >
      <Column spacing={1} align="flex-start" fullWidth wrap>
        <Text className="column-item">{details.name}</Text>
        <Row spacing={2} className="column-item" fullWidth>
          <ContainedButton
            className="row-item"
            fullWidth
            onClick={() =>
              openModal.defaultModal(UserDetails, {
                width: 900,
                height: 700,
                props: { details },
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
            }}
          >
            Delete user
          </OutlinedButton>
        </Row>
      </Column>
    </ContrastContainer>
  );
}
