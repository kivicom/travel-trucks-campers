import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters long')
    .max(50, 'Name cannot exceed 50 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: 'Invalid email address',
      excludeEmptyString: true,
    })
    .required('Email is required'),
  text: Yup.string()
    .min(1, 'Text must be at least 1 character long')
    .max(200, 'Text cannot exceed 200 characters'),
  date: Yup.date().nullable().typeError('Invalid date format'),
});

export default validationSchema;
