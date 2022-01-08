import { Tab } from "../../components/genericComponents";
import { Container, ContrastContainer } from "../../styles/components";

export default function Register() {
  return (
    <ContrastContainer >
      <Tab
        screens={[
          {
            label: "Basic data",
            component: () => <>Basic data</>,
          },
          {
            label: "Address",
            component: () => <>Address</>,
          },
          {
            label: "Personal data",
            component: () => <>Personal data</>,
          },
        ]}
      />
    </ContrastContainer>
  );
}
