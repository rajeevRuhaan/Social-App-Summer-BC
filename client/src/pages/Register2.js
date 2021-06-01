import React from "react";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";

const Register2 = (errors, touched, isSubmitting) => (
  <Form>
    <div>
      {touched.email && errors.email && <p>{errors.email}</p>}
      <Field type="email" name="email" placeholder="Email" />
    </div>
    <div>
      {touched.password && errors.password && <p>{errors.password}</p>}
      <Field type="password" name="password" placeholder="Password" />
    </div>

    <button disabled={isSubmitting}>Submit</button>
  </Form>
);

const FormikApp = withFormik({
  mapPropsToValues(email, password) {
    return {
      email: email || "",
      password: password || "",
    };
  },
  //   validationSchema: Yup.object().shape({
  //     email: Yup.string().email("Email not valid").required("Email is required"),
  //     password: Yup.string()
  //       .min(6, "Password must be 9 character or longer")
  //       .required("Password is required"),
  //   }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if (values.email === "rajeev@test.com") {
        setErrors({ email: "That is already exist" });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
    console.log(values);
  },
})(Register2);

export default FormikApp;
