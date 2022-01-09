import {
  Column,
  ContainedButton,
  OutlinedButton,
  Row,
} from "../../styles/components";
import { CustomInput, Form } from "../genericComponents";

export default function AddressForm({
  setUserData,
  userData,
  goNextTab,
  goPrevTab,
}) {
  return (
    <Form
      onSubmit={(data) => {
        console.log({ data });
        setUserData({ ...userData, ...data });
        goNextTab();
      }}
    >
      <Column className="column-item" spacing={2}>
        <CustomInput
          containerStyle={{ className: "column-item" }}
          name="cep"
          label="Zip code"
          placeholder="00000-000"
          defaultValue={userData.cep}
          required
        />
        <CustomInput
          containerStyle={{ className: "column-item" }}
          name="address1"
          label="Address 01"
          placeholder="Type your first address"
          defaultValue={userData.address1}
          required
        />
        <CustomInput
          containerStyle={{ className: "column-item" }}
          name="address2"
          label="Address 02"
          defaultValue={userData.address2}
          placeholder="Type your second address"
        />
        <Row spacing={2}>
          <OutlinedButton className="row-item" onClick={() => goPrevTab()}>
            Back
          </OutlinedButton>
          <ContainedButton className="row-item" type="submit">
            Next
          </ContainedButton>
        </Row>
      </Column>
    </Form>
  );
}
