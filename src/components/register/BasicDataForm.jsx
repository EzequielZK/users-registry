import { Input, OutlinedButton } from "../../styles/components";
import { Form } from "../genericComponents";

export default function BasicDataForm() {
  return (
    <Form
      onSubmit={(data) => {
        console.log(data);
      }}
    >
      <Input name="name" pattern="[A-Za-z]" />
      <OutlinedButton type="submit">Submit</OutlinedButton>
    </Form>
  );
}
