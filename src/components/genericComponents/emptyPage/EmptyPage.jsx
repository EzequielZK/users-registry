import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Text } from "../../../styles/components";

export default function EmptyPage({ text, tip }) {
  return (
    <Container fullWidth fullHeight justify="center" align="center">
      <FontAwesomeIcon
        style={{ width: 120, height: 120 }}
        icon={faFolderOpen}
      />
      <Text variant="h1" textAlign="center">
        {text}
      </Text>
      {tip && (
        <Text variant="h3" textAlign="center">
          {tip}
        </Text>
      )}
    </Container>
  );
}
