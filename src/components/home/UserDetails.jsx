import { Column, Text } from "../../styles/components";
import UserDetailsSection from "./UserDetailsSection";

export default function UserDetails({ details }) {
  return (
    <Column fullWidth spacing={4}>
      <Text className="column-item" textAlign="center" variant="h1">
        {details.name}
      </Text>
      <UserDetailsSection
        title="Basic data"
        content={[
          { label: "Name", value: details.name },
          { label: "Last name", value: details.lastName },
          { label: "Email", value: details.email },
          { label: "Phone", value: details.phone },
        ]}
      />
      <UserDetailsSection
        title="Address"
        content={[
          { label: "CEP", value: details.cep },
          { label: "Address 01", value: details.address1 },
          { label: "Address 02", value: details.address2 },
        ]}
      />
      <UserDetailsSection
        title="Personal data"
        content={[
          { label: "Data de nascimento", value: details.birthdate },
          { label: "CPF", value: details.cpf },
          { label: "Renda Mensal", value: details.salary },
        ]}
      />
    </Column>
  );
}
