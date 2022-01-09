import { useEffect } from "react";

export default function Form({ onSubmit, children, clearOnSubmit, ...props }) {
  let form;
  let data = {};
  useEffect(() => {
    form = document.getElementById("form");
  }, []);

  return (
    <form
      {...props}
      id="form"
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(form);

        for (let [key, value] of formData.entries()) {
          data = { ...data, [key]: value };
        }

        onSubmit(data);

        if (clearOnSubmit) {
          form.reset();
        }
      }}
      style={{ width: "100%" }}
    >
      {children}
    </form>
  );
}
