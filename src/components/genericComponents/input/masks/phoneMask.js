import { clearStringOnlyNumbers } from "./clearStringOnlyNumbers";

export default function phoneMask(value) {
  if (!value) {
    return;
  }
  let newValue = clearStringOnlyNumbers(value);
  if(newValue.length > 11){
    newValue = newValue.substring(0, 11);
  }

  newValue = newValue.replace(/(\d{2})(\d{1})(\d)/, "($1) $2 $3");

  newValue = newValue.replace(/(\d{4})(\d{4})$/, "$1-$2");

  return newValue;
}
