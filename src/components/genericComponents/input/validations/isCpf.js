import { removeMask } from "./removeMask";

export default function isCpf(value) {
  if (!value) {
    return { isValid: false, errorMessage: "Please insert CPF!" };
  }

  const cpfWithoutMask = removeMask(value);

  if (cpfWithoutMask.length !== 11) {
    return { isValid: false, errorMessage: "Invalid CPF!" };
  }

  const cpfSamesNumbers = checkCpfSameNumbers(cpfWithoutMask);
  if (cpfSamesNumbers) {
    return { isValid: false, errorMessage: "Invalid CPF!" };
  }

  const firstIdNumberTest = cpfWithoutMask.substring(0, 9);
  const secondIdNumberTest = cpfWithoutMask.substring(0, 10);

  const firstVerifyingDigit = calculateCpf(firstIdNumberTest);
  const secondVerifyingDigit = calculateCpf(secondIdNumberTest);

  const firstDigitValid =
    (firstVerifyingDigit < 10 &&
      firstVerifyingDigit === Number(cpfWithoutMask.charAt(9))) ||
    (firstVerifyingDigit >= 10 && Number(cpfWithoutMask.charAt(9)) === 0);

  const secondDigitValid =
    (secondVerifyingDigit < 10 &&
      secondVerifyingDigit === Number(cpfWithoutMask.charAt(10))) ||
    (secondVerifyingDigit >= 10 && Number(cpfWithoutMask.charAt(10)) === 0);

  const validCpf = firstDigitValid && secondDigitValid;

  return { isValid: validCpf, errorMessage: validCpf ? "" : "Invalid CPF!" };
}

//Calculates the CPF to match the index digits
function calculateCpf(testNumber) {
  const { length } = testNumber;
  let i = 0;
  let multiplicator = length + 1;
  const results = [];
  for (; i < length; i++) {
    const digit = Number(testNumber.charAt(i));
    if (multiplicator >= 2) {
      const result = digit * multiplicator;
      results.push(result);
      multiplicator--;
    }
  }

  const total = results.reduce(
    (prevValue, currentValue) => prevValue + currentValue
  );

  const model = total % 11;

  const verifyingDigit = 11 - model;
  return verifyingDigit;
}

//Check if CPF is made of same numbers
function checkCpfSameNumbers(cpf) {
  let equalNumbersCount = 0;
  const singleNumbers = [];

  let i = 0;
  for (; i < 11; i++) {
    const char = cpf.charAt(i);
    if (singleNumbers.indexOf(char) > -1) {
      equalNumbersCount++;
    } else {
      singleNumbers.push(char);
    }
  }
  if (equalNumbersCount === 11) {
    return true;
  }
  return false;
}
