import { removeMask } from "./removeMask";

export default function isPhone(value) {
  if (!value) {
    return { isValid: false, errorMessage: "Please insert a phone number" };
  }
  const phoneWithoutMask = removeMask(value);
  const validPhone = phoneWithoutMask && phoneWithoutMask.length === 11;

  return {
    isValid: validPhone,
    errorMessage: validPhone ? "" : "Invalid phone number!",
  };
}
