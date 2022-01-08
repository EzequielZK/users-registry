import { useEffect } from "react";
import { Tab } from "../../components/genericComponents";
import BasicDataForm from "../../components/register/BasicDataForm";
import saveUser from "../../cookies/saveUser";
import { Container, ContrastContainer } from "../../styles/components";

export default function Register() {
  return (
    <ContrastContainer width="100%">
      <Tab
        screens={[
          {
            label: "Basic data",
            component: BasicDataForm,
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
