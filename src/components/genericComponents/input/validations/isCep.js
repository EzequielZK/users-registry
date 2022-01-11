import { removeMask } from "./removeMask";

export default function isCep(value) {
  if (!value) {
    return { isValid: false, errorMessage: "Please insert a CEP number" };
  }
  const cepWithoutMask = removeMask(value);
  const validPhone = cepWithoutMask && cepWithoutMask.length === 8;

  return {
    isValid: validPhone,
    errorMessage: validPhone ? "" : "Invalid CEP number!",
  };
}
