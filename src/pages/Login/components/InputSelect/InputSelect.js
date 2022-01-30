import React from "react";
import { ErrorMessage, useField } from "formik";

const InputSelect = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="form-group">
        <select
          {...field}
          {...props}
          className={
            meta.error && meta.touched ? "input border-error" : "input"
          }
        >
          <option value="select country" disabled>
            Country
          </option>
          <option value="Ukraine">Ukraine</option>
          <option value="Canada">Canada</option>
          <option value="Italy">Italy</option>
          <option value="France">France</option>
          <option value="Russia">Russia</option>
          <option value="Germany">Germany</option>
        </select>
        <ErrorMessage component="div" name={field.name} className="error" />
      </div>
    </>
  );
};
export default InputSelect;
