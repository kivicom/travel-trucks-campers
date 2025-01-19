import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import validationSchema from './validationSchema';
import Button from '../Button/Button';
import styles from './BookingForm.module.css';

const initialValues = {
  name: '',
  email: '',
  date: '',
  message: '',
};

const BookingForm = () => {
  const formIds = {
    name: 'name',
    email: 'email',
    date: 'date',
    message: 'message',
  };

  const displayNotification = bookingDate => {
    toast.success(
      `Thank you for your booking! Your camper is reserved for ${bookingDate}. We look forward to making your trip special!`,
      {
        duration: 4000,
        position: 'top-center',
      }
    );
  };

  const handleFormSubmit = (values, { resetForm }) => {
    const bookingDate = values.date
      ? values.date.toLocaleDateString('en-GB')
      : 'a future date';
    displayNotification(bookingDate);
    resetForm();
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Book your campervan now</h3>
      <p className={styles.description}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className={styles.form}>
            <ErrorMessage
              name="name"
              component="span"
              className={styles.error}
            />
            <Field
              id={formIds.name}
              name={formIds.name}
              placeholder="Name*"
              className={styles.input}
            />

            <ErrorMessage
              name="email"
              component="span"
              className={styles.error}
            />
            <Field
              id={formIds.email}
              name={formIds.email}
              type="email"
              placeholder="Email*"
              className={styles.input}
            />

            <ErrorMessage
              name="date"
              component="span"
              className={styles.error}
            />
            <DatePicker
              selected={values.date}
              onChange={date => setFieldValue('date', date)}
              minDate={new Date()}
              id={formIds.date}
              placeholderText="Booking date*"
              className={styles.input}
            />

            <ErrorMessage
              name="message"
              component="span"
              className={styles.error}
            />
            <Field
              as="textarea"
              id={formIds.message}
              name={formIds.message}
              placeholder="Comment"
              className={`${styles.input} ${styles.textarea}`}
            />

            <Button text="Confirm Booking" className={styles.button} />
          </Form>
        )}
      </Formik>
      <Toaster />
    </div>
  );
};

export default BookingForm;
