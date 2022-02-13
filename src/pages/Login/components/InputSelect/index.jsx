import React from "react";
import { ErrorMessage, useField } from "formik";

import {FormGroup, StyleSelect} from './styled.js';

const InputSelect = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
      <FormGroup>
        <StyleSelect
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
        </StyleSelect>
        <ErrorMessage component="div" name={field.name} className="error" />
      </FormGroup>
  );
};
export default InputSelect;
