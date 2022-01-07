import { Column, Input, Text } from "../../../styles/components";

export default function CustomInput({ label, className, ...props }) {
  return (
    <Column className={className}>
      <Text>{label}</Text>
      <Input {...props} />
    </Column>
  );
}
