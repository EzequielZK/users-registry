import { Column, Divider, Text } from "../../styles/components";
import UserDetailsSection from "./UserDetailsSection";

export default function UserDetails({ name }) {
  return (
    <Column fullWidth spacing={4}>
      <Text className="column-item" textAlign="center" variant="h1">
        {name}
      </Text>
      <UserDetailsSection
        title="Basic data"
        content={[
          { label: "Name", value: "Roberto" },
          { label: "Last name", value: "Silva" },
          { label: "Email", value: "exemplo@email.com" },
          { label: "Phone", value: "Silva" },
        ]}
      />
      <UserDetailsSection
        title="Address"
        content={[
          { label: "CEP", value: "88000-000" },
          { label: "Address 01", value: "Avenida do desenvolvimento, 300" },
          { label: "Address 02", value: "Avenida do desenvolvimento, 300" },
        ]}
      />
      <UserDetailsSection
        title="Personal data"
        content={[
          { label: "Data de nascimento", value: "31/08/1995" },
          { label: "CPF", value: "000.000.000-00" },
          { label: "Renda Mensal", value: "R$ 4.000.00" },
        ]}
      />
    </Column>
  );
}
