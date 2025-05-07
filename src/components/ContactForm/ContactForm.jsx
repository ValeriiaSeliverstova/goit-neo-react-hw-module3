import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";

export default function ContactForm() {
  return (
    <Formik
      initialValues={{
        username: "",
        number: "",
      }}
      onSubmit={() => {}}
    >
      <Form className={css.contactForm}>
        <label htmlFor="username">Name</label>
        <Field className={css.input} type="text" name="username" />
        <label htmlFor="number">Number</label>
        <Field className={css.input} type="tel" name="number" />
        <button className={css.addContactButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
