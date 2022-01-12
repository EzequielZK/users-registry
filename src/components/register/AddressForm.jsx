import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  Column,
  ContainedButton,
  IconButton,
  OutlinedButton,
  Row,
  Text,
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
        setUserData({ ...userData, ...data });
        goNextTab();
      }}
    >
      <Column className="column-item" spacing={2} align="flex-start">
        <CustomInput
          containerStyle={{ className: "column-item", fullWidth: true }}
          name="cep"
          label="Zip code"
          placeholder="00000-000"
          mask="cepMask"
          validation="isCep"
          defaultValue={userData.cep}
          required
        />
        <AddressSection userData={userData} />

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

function AddressSection({ userData }) {
  const [addresses, setAddresses] = useState([1]);
  return (
    <Column fullWidth className="column-item" align="flex-start" spacing={2}>
      {addresses.map((item, index) => (
        <CustomInput
          key={item}
          helperText={index === 0 && "You can add at up to 02 addresses"}
          containerStyle={{
            className: "column-item row-item",
            fullWidth: true,
          }}
          name={`address${item}`}
          label={`Address ${item < 10 ? `0${item}` : item}`}
          placeholder="Type your address"
          defaultValue={userData.address1}
          required
        />
      ))}
      <IconButton
        className="row-item"
        withoutPadding
        bgColor="transparent"
        type="button"
        onClick={() =>
          setAddresses((state) => {
            if (addresses.length <= 1) {
              return [...state, state.length + 1];
            }
            const currentAddress = state;
            currentAddress.pop();
            return [...currentAddress];
          })
        }
      >
        <Row spacing={1} align="center">
          <FontAwesomeIcon
            className="row-item"
            icon={addresses.length > 1 ? faTimes : faPlus}
            style={{
              width: 15,
              height: 15,
              color: addresses.length > 1 && "red",
            }}
          />
          <Text
            className="row-item"
            color={addresses.length <= 1 ? "primary" : "error"}
            variant="h3"
          >
            {addresses.length <= 1 ? "Add address" : "Remove Address"}
          </Text>
        </Row>
      </IconButton>
    </Column>
  );
}
