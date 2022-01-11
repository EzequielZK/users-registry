import { clearStringOnlyNumbers } from "../masks/clearStringOnlyNumbers";

export default function isValidDate(value) {
  if (!value) {
    return;
  }

  console.log({ value });

  let errorMessage = "Invalid date. It cannot be after current date";
  let isValid = true;

  const date = new Date(`${value}T00:00`);
  const today = new Date();

  console.log({ date, today });

  if (date.getFullYear() > today.getFullYear()) {
    isValid = false;
  } else if (date.getFullYear() < today.getFullYear()) {
    errorMessage = "";
  } else {
    if (date.getMonth() > today.getMonth()) {
      isValid = false;
    } else if (date.getMonth() < today.getMonth()) {
      errorMessage = "";
    } else {
      if (date.getDate() > today.getDate()) {
        console.log(date.getDate(), today.getDate());
        isValid = false;
      }
    }
  }

  return { isValid, errorMessage };
}
