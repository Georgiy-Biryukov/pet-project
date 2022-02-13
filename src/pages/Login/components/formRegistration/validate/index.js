import * as Yup from 'yup';

export const validate = Yup.object({
	firstName: Yup.string().min(2, 'Must be more then two letters').required('Name is required'),
	email: Yup.string().email('Email is invalid').required('Email is required'),
	password: Yup.string().min(6, 'Password must be at least 6 charaters').required('Password is required'),
	country: Yup.string().oneOf(['Ukraine', 'Canada', 'Italy', 'France', 'Russia', 'Germany'], 'Required'),
	gender: Yup.string().required('Gender is required'),
	license: Yup.boolean().oneOf([true], 'License is required').required(),
});
