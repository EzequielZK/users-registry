import { openModal } from "..";
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

export default function UsersCards({ details, deleteUser, editUser }) {
  const { name, lastName } = details;
  return (
    <ContrastContainer
      className="row-item"
      rounded
      width="400px"
      boxShadow="0 10px 10px -10px gray"
    >
      <Column spacing={1} align="flex-start" fullWidth wrap="true">
        <Text className="column-item">
          {name} {lastName}
        </Text>
        <Row spacing={2} className="column-item" fullWidth>
          <ContainedButton
            className="row-item"
            fullWidth
            onClick={() =>
              openModal.defaultModal(UserDetails, {
                width: "900px",
                height: "700px",
                props: { userId: details.id, userDetails: details, editUser },
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
              deleteUser(details.id);
              openFeedbackModal.successModal("Usuário deletado com sucesso!");
            }}
          >
            Delete user
          </OutlinedButton>
        </Row>
      </Column>
    </ContrastContainer>
  );
}
