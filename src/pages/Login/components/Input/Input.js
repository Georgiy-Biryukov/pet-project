import React, { useState } from "react";
import { ErrorMessage, useField } from "formik";
import styled from "styled-components";
import email from "../../../../assets/images/email.png";
import password from "../../../../assets/images/password.png";
import eyeBlock from "../../../../assets/images/eye-blocked.png";
import eye from "../../../../assets/images/eye.png";
import user from "../../../../assets/images/user.png";
import "./style.css";

// const FormInput = styled.input`
//   box-sizing: border-box;
//   background: #f5f8fa;
//   border-radius: 8px;
//   width: 350px;
//   height: 45px;
//   padding: 0 0 0 40px;
//   outline: none;
//   border: 1px solid #dbe0e4;
// `;

const Input = ({ placeholder, label, iconName, isShowIcon, ...props }) => {
  const [field, meta] = useField(props);

  const [isShowPassword, setIsShowPassword] = useState(false);

  const togglePassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const getIcon = () => {
    switch (iconName) {
      case "firstName":
        return user;

      case "email":
        return email;

      case "password":
        return password;

      default:
        return false;
    }
  };

  return (
    <div className="form-group">
      <label htmlFor={field.name}>{label}</label>
      <div className="password-box">
        <input
          {...field}
          {...props}
          autoComplete="off"
          placeholder={placeholder}
          className={
            meta.error && meta.touched ? "input border-error" : "input"
          }
          type={
            isShowIcon ? (isShowPassword ? "text" : "password") : props.type
          }
        />
        {isShowIcon && (
          <img
            src={isShowPassword ? eye : eyeBlock}
            alt="icon"
            onClick={togglePassword}
            className="icon"
          />
        )}
        {getIcon() && <img src={getIcon()} alt="i" className="icons-inputs" />}
      </div>

      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};
export default Input;
