import { openModal } from "..";
import {
  ContrastContainer,
  OutlinedButton,
  Row,
  Text,
} from "../../styles/components";
import UserDetails from "./UserDetails";

export default function UsersCards({ details }) {
  return (
    <ContrastContainer
      className="row-item"
      rounded
      width={300}
      boxShadow="0 10px 10px -10px gray"
    >
      <Row align="center" justify="space-between" fullWidth wrap>
        <Text>{details.name}</Text>
        <OutlinedButton
          onClick={() =>
            openModal.defaultModal(UserDetails, {
              width: 900,
              height: 700,
              props: { details },
            })
          }
        >
          Detalhes
        </OutlinedButton>
      </Row>
    </ContrastContainer>
  );
}
