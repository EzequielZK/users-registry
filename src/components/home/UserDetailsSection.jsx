import { Column, Container, Divider, Row, Text } from "../../styles/components";

export default function UserDetailsSection({ title, content = [] }) {
  return (
    <Container className="column-item">
      <Text variant="h2">{title}</Text>
      <Divider margin="sm" color="primary" />
      {content.map((item, index) => (
        <Row className="column-item" spacing={1} key={index}>
          <Text className="row-item" variant="h3">
            {item.label}:
          </Text>
          <Text className="row-item" variant="h4">
            {item.value}
          </Text>
        </Row>
      ))}
    </Container>
  );
}
