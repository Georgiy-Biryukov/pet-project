import React, { useState } from 'react';
import { useField } from 'formik';

import {StyleInput, IconEye, StyledInputIcon,FormGroup, StyledError} from './styled.js';

const Input = ({ placeholder, label, icon, isShowIcon, ...props }) => {
	const [field, meta] = useField(props);
	const [isShowPassword, setIsShowPassword] = useState(false);

	const togglePassword = () => {
		setIsShowPassword(!isShowPassword);
	};

	return (
		<FormGroup>
			<label htmlFor={field.name}>{label}</label>
				<StyleInput
					{...field}
					{...props}
					autoComplete="off"
					placeholder={placeholder}
					className={meta.error && meta.touched ? 'input border-error' : 'input'}
					type={isShowIcon ? (isShowPassword ? 'text' : 'password') : props.type}
				/>
				{isShowIcon && (
					<IconEye src={isShowPassword ? icon.visible : icon.hidden} alt="icon" onClick={togglePassword} className="icon" />
				)}
				{<StyledInputIcon src={isShowIcon? icon.password : icon} alt="i" className="icons-inputs" />}

			<StyledError component="div" name={field.name} className="error" />
		</FormGroup>
	);
};
export default Input;
