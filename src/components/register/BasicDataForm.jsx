import { Column, ContainedButton } from "../../styles/components";
import { CustomInput, Form } from "../genericComponents";
import openFeedbackModal from "../genericComponents/feedbackModal/openFeedbackModal";

export default function BasicDataForm({ setUserData, userData, goNextTab }) {
  return (
    <Form
      onSubmit={(data) => {
        setUserData({ ...userData, ...data });
        goNextTab();
      }}
    >
      <Column className="column-item" spacing={2}>
        <CustomInput
          containerStyle={{ className: "column-item" }}
          name="name"
          label="Name"
          defaultValue={userData.name}
          placeholder="Type your name"
          required
        />
        <CustomInput
          containerStyle={{ className: "column-item" }}
          name="lastName"
          label="Last Name"
          placeholder="Type your last name"
          defaultValue={userData.lastName}
          required
        />
        <CustomInput
          containerStyle={{ className: "column-item" }}
          name="email"
          label="E-mail"
          validation="isEmail"
          placeholder="example@email.com"
          defaultValue={userData.email}
          required
        />
        <CustomInput
          containerStyle={{ className: "column-item" }}
          name="phone"
          label="Phone"
          mask="cpfMask"
          validation="isCpf"
          placeholder="(00) 0 0000-0000"
          defaultValue={userData.phone}
          required
        />
        <div>
          <ContainedButton type="submit">Next</ContainedButton>
        </div>
      </Column>
     </Form>
  );
}
