import { Column, Text } from "../../styles/components";
import UserDetailsSection from "./UserDetailsSection";
import { Form, openFeedbackModal } from "../genericComponents";
import { useContext } from "react";
import { StorageContext } from "../../context/StorageContext";

export default function UserDetails({ userId, editUser }) {
  const { data } = useContext(StorageContext);
  const userIndex = data.users.map((item) => item.id).indexOf(userId);

  const {
    name,
    lastName,
    email,
    phone,
    cep,
    address1,
    address2 = "",
    birthdate,
    cpf,
    salary,
  } = data.users[userIndex];
  return (
    <Form
      onSubmit={(data) => {
        editUser(userId, data);

        openFeedbackModal.successModal("Information edited!");
      }}
    >
      <Column fullWidth spacing={4}>
        <Text className="column-item" textAlign="center" variant="h1">
          {name} {lastName}
        </Text>
        <UserDetailsSection
          title="Basic data"
          content={[
            { label: "Name", value: name, name: "name" },
            {
              label: "Last name",
              value: lastName,
              name: "lastName",
            },
            {
              label: "E-mail",
              value: email,
              name: "email",
              validation: "isEmail",
              mask: "emailMask",
            },
            {
              label: "Phone",
              value: phone,
              name: "phone",
              validation: "isPhone",
              mask: "phoneMask",
            },
          ]}
        />
        <UserDetailsSection
          title="Address"
          content={[
            {
              label: "CEP",
              value: cep,
              name: "cep",
              validation: "isCep",
              mask: "cepMask",
            },
            {
              label: "Address 01",
              value: address1,
              name: "address1",
            },
            {
              label: "Address 02",
              value: address2,
              name: "address2",
            },
          ]}
        />
        <UserDetailsSection
          title="Personal data"
          content={[
            {
              label: "Birthdate",
              value: birthdate,
              name: "birthdate",
            },
            {
              label: "CPF",
              value: cpf,
              name: "cpf",
              validation: "isCpf",
              mask: "cpfMask",
            },
            {
              label: "Salary",
              value: salary,
              name: "salary",
              mask: "moneyMask",
            },
          ]}
        />
      </Column>
    </Form>
  );
}
