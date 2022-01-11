import { useContext, useEffect, useState } from "react";
import { Column, Input, Text } from "../../../styles/components";
import { FormContext } from "../form/Form";
import masks from "./masks";
import validations from "./validations";

export default function CustomInput({
  label,
  containerStyle,
  mask,
  validation,
  ...props
}) {
  const [value, setValue] = useState(props.defaultValue);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { addData, removeData, getInputErrors } = useContext(FormContext);

  useEffect(() => {
    if (!value) {
      setError(false);
      setErrorMessage("");
      removeData(props.name);
    } else {
      if (validationToTest) {
        const { isValid, errorMessage } = validationToTest(value);

        setError(!isValid);
        setErrorMessage(errorMessage);
        if (isValid) {
          addData(props.name, value);
        } else {
          removeData(props.name);
        }
      } else {
        addData(props.name, value);
      }
    }
  }, [value]);

  useEffect(() => {
    getInputErrors(props.name, error);
  }, [error]);

  function sendRef() {
    return {
      name: props.name,
      label: props.label,
      value,
      error,
    };
  }

  const maskToUse = masks[mask];
  const validationToTest = validations[validation];
  return (
    <Column {...containerStyle}>
      <Text variant="h3">{label}</Text>
      <Input
        {...props}
        value={value}
        error={error}
        onChange={(event) =>
          setValue(
            maskToUse ? maskToUse(event.target.value) : event.target.value
          )
        }
      />
      {error && (
        <Text color="error" variant="h5">
          {errorMessage}
        </Text>
      )}
    </Column>
  );
}
