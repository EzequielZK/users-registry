import { Column, Text } from "../../styles/components";
import UserDetailsSection from "./UserDetailsSection";
import { Form, openFeedbackModal } from "../genericComponents";
import editUser from "../../cookies/editUser";
import { useEffect, useState } from "react";
import getUsers from "../../cookies/getUsers";

export default function UserDetails({ id, users, setName }) {
  const [userDetails, setUserDetails] = useState({});

  const setUserDetailsAndUpdate = (newDetails) => {
    const newUsers = users;

    const indexToEdit = newUsers.map((item) => item.id).indexOf(userDetails.id);

    newUsers[indexToEdit] = { ...newUsers[indexToEdit], ...newDetails };

    editUser(userDetails.id, newDetails);
    setUserDetails((state) => ({ ...state, ...newDetails }));
  };

  useEffect(() => {
    const selectedUser = getUsers(id);
    setUserDetails(selectedUser);
  }, []);

  return (
    <Form
      onSubmit={(data) => {
        setUserDetailsAndUpdate(data);
        if (data.name) {
          setName(data.name);
        }

        openFeedbackModal.successModal("Information edited!");
      }}
    >
      <Column fullWidth spacing={4}>
        <Text className="column-item" textAlign="center" variant="h1">
          {userDetails.name}
        </Text>
        <UserDetailsSection
          title="Basic data"
          content={[
            { label: "Name", value: userDetails.name, name: "name" },
            {
              label: "Last name",
              value: userDetails.lastName,
              name: "lastName",
            },
            {
              label: "E-mail",
              value: userDetails.email,
              name: "email",
              validation: "isEmail",
            },
            {
              label: "Phone",
              value: userDetails.phone,
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
              value: userDetails.cep,
              name: "cep",
              validation: "isCep",
              mask: "cepMask",
            },
            {
              label: "Address 01",
              value: userDetails.address1,
              name: "address1",
            },
            {
              label: "Address 02",
              value: userDetails.address2,
              name: "address2",
            },
          ]}
        />
        <UserDetailsSection
          title="Personal data"
          content={[
            {
              label: "Birthdate",
              value: userDetails.birthdate,
              name: "birthdate",
            },
            { label: "CPF", value: userDetails.cpf, name: "cpf", validation:'isCpf', mask:'cpfMask' },
            { label: "Salary", value: userDetails.salary, name: "salary", mask:'moneyMask' },
          ]}
        />
      </Column>
    </Form>
  );
}
