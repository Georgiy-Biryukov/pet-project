import React from "react";
import { ErrorMessage, useField } from "formik";

const InputCheckBox = ({ ...props }) => {
  const [field] = useField(props);

  return (
    <div className="form-radio-group">
      <input {...props} {...field} autoComplete="off" />
      <span>Accept terms and conditions</span>
      <ErrorMessage
        component="div"
        name={field.name}
        className="error-checkbox"
      />
    </div>
  );
};
export default InputCheckBox;
