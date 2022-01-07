import { Container, Divider, Row, TabButton } from "../../../styles/components";
import { useState } from "react";

export default function TabContainer({ screens = [] }) {
  const [selected, setSelected] = useState(0);
  let TableContent = () => <></>;
  let props = {};
  if (screens.length && screens[selected].component) {
    TableContent = screens[selected].component;
    if (screens[selected].props) {
      props = screens[selected].props;
    }
  }

  return (
    <Container>
      <Row>
        {screens.map((item, index) => (
          <TabButton
            key={index}
            selected={selected === index}
            onClick={() => setSelected(index)}
          >
            {item.label}
          </TabButton>
        ))}
      </Row>
      <Divider color="background" />
      <Container padding={2}>
        <TableContent {...props} />
      </Container>
    </Container>
  );
}
