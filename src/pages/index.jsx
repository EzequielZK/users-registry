import { UsersCards } from "../components";
import {
  Container,
  ContrastContainer,
  OutlinedButton,
  Row,
  Text,
} from "../styles/components";

export default function Home() {
  return (
    <Container>
      <Row spacing={2} wrap>
        <UsersCards name="Roberto" />
        <UsersCards name="Roberto" />
        <UsersCards name="Roberto" />
        <UsersCards name="Roberto" />
      </Row>
    </Container>
  );
}
