import { faCheck, faPen, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  Container,
  Divider,
  IconButton,
  Row,
  Text,
} from "../../styles/components";
import { CustomInput } from "../genericComponents";

export default function UserDetailsSection({ title, content = [] }) {
  const [editMode, setEditMode] = useState(false);
  return (
    <Container className="column-item">
      <Row align="center" justify="space-between">
        <Text variant="h2">{title}</Text>
        <Row spacing={2} align="center">
          <IconButton
            className="row-item"
            withoutPadding
            bgColor="transparent"
            type="button"
            onClick={() => setEditMode(!editMode)}
          >
            <FontAwesomeIcon icon={editMode ? faTimes : faPen} />
          </IconButton>
          {editMode && (
            <IconButton
              className="row-item"
              withoutPadding
              bgColor="transparent"
              type="submit"
            >
              <FontAwesomeIcon icon={faCheck} />
            </IconButton>
          )}
        </Row>
      </Row>
      <Divider margin="sm" color="primary" />
      {content.map((item, index) =>
        editMode ? (
          <CustomInput
            {...item}
            defaultValue={item.value}
            readOnly={item.name === "cpf"}
          />
        ) : (
          item.value && (
            <Row className="column-item" spacing={1} key={index}>
              <Text className="row-item" variant="h3">
                {item.label}:
              </Text>
              <Text className="row-item" variant="h4">
                {item.value}
              </Text>
            </Row>
          )
        )
      )}
    </Container>
  );
}
