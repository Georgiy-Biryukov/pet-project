import React from 'react';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';

import Input from '../Input';
import InputRadio from '../inputRadio';
import InputSelect from '../InputSelect';
import InputCheckBox from '../InputCheckBox';
import { validate } from './validate';
import email from '../../../../assets/images/email.png';
import password from '../../../../assets/images/password.png';
import eyeBlock from '../../../../assets/images/eye-blocked.png';
import eye from '../../../../assets/images/eye.png';
import user from '../../../../assets/images/user.png';

import './style.css';

const FormRegistration = () => {
	const navigate = useNavigate();

	const onSubmitForm = (values) => {
		localStorage.setItem(values, JSON.stringify(values));
		localStorage.setItem('auth', JSON.stringify('true'));
		navigate('/home');
	};

	const iconsForPassword = {
		password: password,
		visible: eye,
		hidden: eyeBlock,
	}

	return (
		<Formik
			initialValues={{
				firstName: '',
				email: '',
				password: '',
				country: 'select country',
				gender: '',
				license: false,
			}}
			validationSchema={validate}
			onSubmit={(values) => onSubmitForm(values)}
		>
			{({ isValid }) => (
				<div className="form-container">
					<Form>
						<h2>Create a new account</h2>
						<Input name="firstName" type="text" placeholder="Name" className="input" icon= {user} />
						<Input name="email" type="mail" placeholder="Your email" className="input" icon= {email} />
						<Input name="password" placeholder="Your password" className="input" icon={iconsForPassword} isShowIcon />
						<InputSelect name="country" type="select" className="input" />
						<div className="radio-box">
							<InputRadio type="radio" name="gender" value="Male" label="Male" />
							<InputRadio type="radio" name="gender" value="Female" label="Female" />
						</div>
						<div className="checkbox">
							<InputCheckBox type="checkbox" name="license" />
						</div>
						<button
							type="submit"
							disabled={!isValid}
							className={!isValid ? 'btn-submit' : 'btn-submit btn-submit-active'}
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
