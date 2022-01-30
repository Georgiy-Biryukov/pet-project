import React from "react";
import { ErrorMessage, useField } from "formik";
import "./style.css";

const InputRadio = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <div className="form-radio-group">
      <input {...props} {...field} />
      <label htmlFor={field.name}>{label}</label>
      <ErrorMessage
        component="div"
        name={field.name}
        className="error-checkbox"
      />
    </div>
  );
};
export default InputRadio;
