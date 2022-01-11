import React, { createContext, useState } from "react";
import { openFeedbackModal } from "..";

export const FormContext = createContext({});

export default function Form({ onSubmit, children }) {
  const [data, setData] = useState({});
  const [inputErrors, setInputErrors] = useState({});

  function addData(key, value) {
    let newData = data;
    newData = { ...newData, [key]: value };
    setData(newData);
  }

  function removeData(key) {
    const newData = data;
    delete newData[key];
    setData(newData);
  }

  function getInputErrors(name, error) {
    let savedInputs = inputErrors;
    savedInputs = { ...savedInputs, [name]: error };
    setInputErrors(savedInputs);
  }

  function validateInputs() {
    let key;

    let isValid = true;

    for (key in inputErrors) {
      const error = inputErrors[key];
      if (error) {
        isValid = false;
      }
    }

    return { isValid };
  }

  function submit(event) {
    event.preventDefault();
    const { isValid } = validateInputs();
    if (isValid) {
      onSubmit(data);
    } else {
      openFeedbackModal.errorModal(
        "Alguns campos não foram preenchidos corretamente. Corrijá-os para prosseguir!"
      );
    }
  }

  return (
    <FormContext.Provider value={{ addData, removeData, getInputErrors }}>
      <form id="form" onSubmit={submit} style={{ width: "100%" }}>
        {children}
      </form>
    </FormContext.Provider>
  );
}
