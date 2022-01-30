import React from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

import Input from "../Input/Input";
import InputRadio from "../inputRadio/inputRadio";
import InputSelect from "../InputSelect/InputSelect";
import InputCheckBox from "../InputCheckBox/InputCheckBox";
import * as Yup from "yup";
import "./style.css";

const FormRegistration = () => {
  const navigate = useNavigate();

  const validate = Yup.object({
    firstName: Yup.string()
      .min(2, "Must be more then two letters")
      .required("Name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    country: Yup.string().oneOf(
      ["Ukraine", "Canada", "Italy", "France", "Russia", "Germany"],
      "Required"
    ),
    gender: Yup.string().required("Gender is required"),
    license: Yup.boolean().oneOf([true], "License is required").required(),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        email: "",
        password: "",
        country: "select country",
        gender: "",
        license: false,
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        localStorage.setItem(values, JSON.stringify(values));
        localStorage.setItem("auth", JSON.stringify("true"));
        navigate("/home");
      }}
    >
      {({ isValid }) => (
        <div className="form-container">
          <Form>
            <h2>Create a new account</h2>
            <Input
              name="firstName"
              type="text"
              placeholder="Name"
              className="input"
              iconName="firstName"
            />
            <Input
              name="email"
              type="mail"
              placeholder="Your email"
              className="input"
              iconName={"email"}
            />
            <div className="password-box">
              <Input
                name="password"
                placeholder="Your password"
                className="input"
                iconName={"password"}
                isShowIcon
              />
            </div>

            <InputSelect name="country" type="select" className="input" />
            <div className="radio-box">
              <InputRadio
                type="radio"
                name="gender"
                value="Male"
                label="Male"
              />
              <InputRadio
                type="radio"
                name="gender"
                value="Female"
                label="Female"
              />
            </div>
            <div className="checkbox">
              <InputCheckBox type="checkbox" name="license" />
            </div>

            <button
              type="submit"
              disabled={!isValid}
              className={
                !isValid ? "btn-submit" : "btn-submit btn-submit-active"
              }
            >
              Sign in
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default FormRegistration;
