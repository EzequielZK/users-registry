export function clearStringOnlyNumbers(value) {
  return value ? `${value}`.replace(/\D/g, "") : value;
}
