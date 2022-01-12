import { useState } from "react";
import { Tab } from "../../components/genericComponents";
import AddressForm from "../../components/register/AddressForm";
import BasicDataForm from "../../components/register/BasicDataForm";
import PersonalDataForm from "../../components/register/PersonalDataForm";
import { ContrastContainer } from "../../styles/components";

export default function Register() {
  const [userData, setUserData] = useState({});
  const clearData = () => {
    setUserData({});
  };
  return (
    <ContrastContainer width="100%">
      <Tab
        allowNavigate={false}
        screens={[
          {
            label: "Step 1",
            title: 'Basic data',
            component: BasicDataForm,
            props: { userData, setUserData },
          },
          {
            label: "Step 2",
            title: 'Address',
            component: AddressForm,
            props: { userData, setUserData },
          },
          {
            label: "Step 3",
            title: 'Personal data',
            component: PersonalDataForm,
            props: { userData, clearData },
          },
        ]}
      />
    </ContrastContainer>
  );
}
