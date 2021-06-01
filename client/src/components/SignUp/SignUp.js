import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormGroup from "react-bootstrap/FormGroup";

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ name: "", password: "", email: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("Required"),
        password: Yup.string()
          .min(6, "Must be 6 characters or more")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(true);
      }}
    >
      <Form className="signupform">
        <p>
          Already have an account? <a href="/login">Sign in</a>
        </p>
        <>
          {" "}
          <h3>Sign up form</h3>
          <p>Register to create user account</p>
          <p>* are required field</p>
        </>
        <FormGroup className="baseForm">
          <label htmlFor="name">Name*</label>
          <Field name="name" type="text" placeholder="Ex: John Deo" />
          <ErrorMessage name="name" />

          <label htmlFor="email">Email Address*</label>
          <Field name="email" type="email" placeholder="Enter email address" />
          <ErrorMessage name="email" />

          <label htmlFor="password">Create Password*</label>
          <Field name="password" type="password" placeholder="Enter password" />
          <ErrorMessage name="password" />
        </FormGroup>
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignupForm;
