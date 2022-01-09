import { Column, Input, Text } from "../../../styles/components";

export default function CustomInput({ label, containerStyle, ...props }) {
  return (
    <Column {...containerStyle}>
      <Text variant="h3">{label}</Text>
      <Input {...props} />
    </Column>
  );
}
