import {
  Column,
  Container,
  Divider,
  OutlinedButton,
  Row,
  TabButton,
  Text,
} from "../../../styles/components";
import { useState } from "react";
import { useTheme } from "styled-components";

export default function TabContainer({ allowNavigate = true, screens = [] }) {
  const [selected, setSelected] = useState(0);
  let TabContent = () => <></>;
  let props = {};
  if (screens.length && screens[selected].component) {
    TabContent = screens[selected].component;
    if (screens[selected].props) {
      props = screens[selected].props;
    }
  }

  const goNextTab = () => {
    if (selected + 1 < screens.length) {
      setSelected(selected + 1);
    }
  };

  const goPrevTab = () => {
    if (selected > 0) {
      setSelected(selected - 1);
    }
  };

  const goToFirstTab = () => {
    setSelected(0);
  };

  return (
    <Container fullWidth>
      <Row fullWidth>
        {screens.map((item, index) => (
          <TabButton
            key={index}
            selected={selected === index}
            disabled={!allowNavigate && selected < index}
            onClick={() =>
              allowNavigate || selected > index ? setSelected(index) : {}
            }
          >
            {item.label}
          </TabButton>
        ))}
      </Row>
      <Divider color="tertiary" />
      <Container>
        <Column spacing={2}>
          <TabContent
            {...props}
            selected={selected}
            goNextTab={goNextTab}
            goPrevTab={goPrevTab}
            goToFirstTab={goToFirstTab}
          />
        </Column>
      </Container>
    </Container>
  );
}
