import { clearStringOnlyNumbers } from "./clearStringOnlyNumbers";

export default function moneyMask(value) {
  if (!value) {
    return;
  }

  let newValue = clearStringOnlyNumbers(value);

  const counter = (value.length - 5) / 3;

  newValue = newValue.replace(/^([.\d]+)(\d{2})$/, "R$ $1,$2");
  for (let i = 0; i < counter; i += 1) {
    newValue = newValue.replace(/(\d+)(\d{3})([.,\d]+)$/, "$1.$2$3");
  }

  return newValue
}
