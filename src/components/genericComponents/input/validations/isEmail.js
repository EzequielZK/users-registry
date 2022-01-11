export default function isEmail(value) {
  if (!value) {
    return { isValid: false, errorMessage: "Please insert an email!" };
  }
  value.trim();
  const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
  return {
    isValid: validEmail,
    errorMessage: validEmail ? "" : "Invalid e-mail!",
  };
}
