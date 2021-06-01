import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useForm } from "react-hook-form";

const Register3 = () => {
  const {
    values,
    errors,
    touched,
    getFieldProps,
    handleSubmit,
    setValues,
    isSubmitting,
    setSubmitting,
    resetForm,
    dirty,
    submitCount,
    isValid,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be more than 8 characters")
        .required("Required"),
    }),

    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      setTimeout(() => {
        setSubmitting(false);
        alert("form submitted");
        resetForm();
        // route to success page
      }, 1000);
    },
  });

  return (
    <>
      <div className="formWrapper">
        <form className="baseForm" noValidate onSubmit={handleSubmit}>
          <header className="baseFormHeader">
            <h1 className="baseFormHeading">register</h1>
          </header>
          <div className="formRow col-2">
            <div className="formFieldWrap">
              <label className="formFieldLabel" htmlFor="firstName">
                first name
              </label>
              <span className="errorMessage">
                {touched["firstName"] && errors["firstName"]}
              </span>
              <div className="formFieldWrapInner">
                <input
                  type="text"
                  id="firstName"
                  className="firstName formField"
                  {...getFieldProps("firstName")}
                />
              </div>
            </div>
            <div className="formFieldWrap">
              <label className="formFieldLabel" htmlFor="lastName">
                last name
              </label>
              <span className="errorMessage">
                {touched["lastName"] && errors["lastName"]}
              </span>
              <div className="formFieldWrapInner">
                <input
                  type="text"
                  {...getFieldProps("lastName")}
                  id="lastName"
                  className="lastName formField"
                />
              </div>
            </div>
          </div>
          <div className="formRow col-1">
            <label className="formFieldLabel" htmlFor="username">
              username
            </label>
            <span className="errorMessage">
              {touched["username"] && errors["username"]}
            </span>
            <div className="formFieldWrapInner">
              <input
                type="text"
                {...getFieldProps("username")}
                id="username"
                className="username formField"
              />
            </div>
            <span className="passwordCue">Optional</span>
          </div>
          <div className="formRow col-1">
            <label className="formFieldLabel" htmlFor="email">
              email address
            </label>
            <span className="errorMessage">
              {touched["email"] && errors["email"]}
            </span>
            <div className="formFieldWrapInner">
              <input
                type="email"
                {...getFieldProps("email")}
                id="email"
                className="email formField"
              />
            </div>
          </div>
          <div className="formRow col-1">
            <label className="formFieldLabel" htmlFor="password">
              password
            </label>
            <span className="errorMessage">
              {touched["password"] && errors["password"]}
            </span>
            <div className="formFieldWrapInner">
              <input
                type="password"
                {...getFieldProps("password")}
                id="password"
                className="password formField"
              />
            </div>
            <span className="passwordCue">Minimum length is 8 characters</span>
          </div>
          <div className="formRow col-1">
            {/* When isValid is false and when isSubmitting is true */}
            <button
              type="submit"
              disabled={!(isValid && dirty) || isSubmitting}
            >
              {(isSubmitting && "Working on it...") || "Submit"}
            </button>
          </div>
        </form>
      </div>
      <div className="console">
        <header className="baseFormHeader">
          <p className="baseFormHeading">Form Submission Output</p>
          {submitCount > 0 && <pre>{JSON.stringify(values, null, 2)}</pre>}
        </header>
      </div>
      <div className="console">
        <header className="baseFormHeader">
          <p className="baseFormHeading">Errors</p>
          {<pre>{JSON.stringify(errors, null, 2)}</pre>}
        </header>
      </div>
    </>
  );
};

export default Register3;
