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
  helperText,
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

  const maskToUse = masks[mask];
  const validationToTest = validations[validation];
  return (
    <Column {...containerStyle}>
      <Text variant="h3">
        {label}
        {props.required && "*"}
      </Text>
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
      <Text color="disabled" variant="h6">
        {helperText}
      </Text>
      {error && (
        <Text color="error" variant="h5">
          {errorMessage}
        </Text>
      )}
    </Column>
  );
}
