import { openModal } from "..";
import {
  ContrastContainer,
  OutlinedButton,
  Row,
  Text,
} from "../../styles/components";
import UserDetails from "./UserDetails";

export default function UsersCards({ name }) {
  return (
    <ContrastContainer
      className="row-item"
      rounded
      width={300}
      boxShadow="0 10px 10px -10px gray"
    >
      <Row align="center" justify="space-between" fullWidth wrap>
        <Text >{name}</Text>
        <OutlinedButton
          onClick={() =>
            openModal.defaultModal(UserDetails, {
              width: 900,
              height: 700,
              props: { name },
            })
          }
        >
          Detalhes
        </OutlinedButton>
      </Row>
    </ContrastContainer>
  );
}
