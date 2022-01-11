import { clearStringOnlyNumbers } from "./clearStringOnlyNumbers";

export default function cepMask(value) {
  if (!value) {
    return;
  }
  let newValue = clearStringOnlyNumbers(value);

  if (newValue.length > 8) {
    newValue = newValue.substring(0, 8);
  }

  newValue = newValue.replace(/(\d{5})(\d)/, "$1-$2");

  return newValue;
}
