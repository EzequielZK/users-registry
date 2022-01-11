import React, { createContext, useState } from "react";

export const FormContext = createContext({});

export default function Form({ onSubmit, children }) {
  const [data, setData] = useState({});
  const [inputs, setInputs] = useState([]);

  // const fillRequiredLabels = (key, label) => {
  //   inputLabels = { ...inputLabels, [key]: label };
  // };

  function addData(key, value) {
    setData(key, value);
  }

  function getInputRef(callback) {
    const inputRef = callback();
    const currentInputs = inputs;
    currentInputs.push(inputRef);
    setInputs(currentInputs);
  }

  function validateInputs() {
    let i = 0;

    const invalidInputs = [];
    const { length } = inputs;
    for (; i < length; i++) {
      const input = inputs[i];
      if (input.error) {
        invalidInputs.push(input);
      }
    }
    return { isValid: invalidInputs.length, invalidInputs };
  }

  function submit(event) {
    event.preventDefault();
    const { isValid, invalidInputs } = validateInputs();
    if (isValid) {
      onSubmit(data);
    } else {
      console.log(invalidInputs);
    }
  }
  // const removeData = (key) => {
  //   delete data[key];
  // };

  return (
    <FormContext.Provider value={{ addData, getInputRef }}>
      <form id="form" onSubmit={submit}>
        {children}
      </form>
    </FormContext.Provider>
  );
}
