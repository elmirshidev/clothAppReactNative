import * as yup from 'yup';

export const validation = yup.object().shape({
  username: yup
    .string()
    .min(4, 'Username should not be smaller than 4 chars.')
    .max(10, 'Password should not excced 10 chars.')
    .required('Username is required'),
  email: yup.string().email().required('Email is required'),
  password: yup
    .string()
    .min(4, 'Password should not be smaller than 4 chars.')
    .max(10, 'Password should not excced 10 chars.')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  checkbox: yup
    .boolean()
    .oneOf([true], 'You must accept terms and conditions')
    .required('You must accept terms and conditions'),
});
