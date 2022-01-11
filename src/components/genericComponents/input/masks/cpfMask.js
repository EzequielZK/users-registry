import { clearStringOnlyNumbers } from "./clearStringOnlyNumbers";

export default function cpfMask(value) {
  if (!value) {
    return;
  }
  let newValue = clearStringOnlyNumbers(value);
  if (newValue.length > 11) {
    newValue = newValue.substring(0, 11);
  }
  newValue = newValue.replace(/(\d{3})(\d{3})(\d)/, "$1.$2.$3");
  newValue = newValue.replace(/(\d)(\d{2})$/, "$1-$2");

  //   newValue = newValue.replace(/(\d{3})(\d{2})$/, "$1-$2");

  return newValue;
}
