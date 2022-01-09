import saveUser from "../../cookies/saveUser";
import {
  Column,
  ContainedButton,
  OutlinedButton,
  Row,
} from "../../styles/components";
import { CustomInput, Form } from "../genericComponents";
import openFeedbackModal from "../genericComponents/feedbackModal/openFeedbackModal";

export default function PersonalDataForm({
  userData,
  clearData,
  goPrevTab,
  goToFirstTab,
}) {
  return (
    <Form
      clearOnSubmit
      onSubmit={(data) => {
        saveUser({ ...userData, ...data });
        openFeedbackModal.successModal("Usuário salvo com sucesso!");
        clearData();
        goToFirstTab();
      }}
    >
      <Column className="column-item" spacing={2}>
        <CustomInput
          containerStyle={{ className: "column-item" }}
          name="birthdate"
          label="Birthdate"
          placeholder="dd/MM/yyyy"
          defaultValue={userData.birthdate}
          required
        />
        <CustomInput
          containerStyle={{ className: "column-item" }}
          name="cpf"
          label="CPF"
          placeholder="000.000.000-00"
          defaultValue={userData.cpf}
          required
        />
        <CustomInput
          containerStyle={{ className: "column-item" }}
          name="salary"
          label="Salary"
          defaultValue={userData.salary}
          placeholder="R$ 0,00"
          required
        />
        <Row spacing={2}>
          <OutlinedButton className="row-item" onClick={() => goPrevTab()}>
            Back
          </OutlinedButton>
          <ContainedButton className="row-item" type="submit">
            Finish
          </ContainedButton>
        </Row>
      </Column>
    </Form>
  );
}