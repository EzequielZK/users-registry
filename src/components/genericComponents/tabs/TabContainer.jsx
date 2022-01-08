import { Container, Divider, Row, TabButton, Text } from "../../../styles/components";
import { useState } from "react";

export default function TabContainer({ screens = [] }) {
  const [selected, setSelected] = useState(0);
  let TabContent = () => <></>;
  let props = {};
  if (screens.length && screens[selected].component) {
    TabContent = screens[selected].component;
    if (screens[selected].props) {
      props = screens[selected].props;
    }
  }

  return (
    <Container fullWidth>
      <Row fullWidth>
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
        <TabContent {...props} />
      </Container>
    </Container>
  );
}
