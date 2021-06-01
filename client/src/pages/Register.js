import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const Register = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);
  /*****validation***/
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("LAst name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  //   console.log(register);
  //   console.log(handleSubmit);

  const submitData = (e) => {
    e.preventDefault();
    console.log(e);
    // axios.post("api/user", data);
    e.target.reset();
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit(submitData)} className="form">
        <h2>Registration</h2>
        <Form.Group>
          <Form.Label htmlFor="">First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstname"
            {...register("firstname")}
            className={`form-control ${errors.firstname ? "is-invalid" : ""}`}
            onChange={changeData}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="">Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastname"
            {...register("lastname")}
            className={`form-control ${errors.lastname ? "is-invalid" : ""}`}
            onChange={changeData}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="">E-mail</Form.Label>
          <Form.Control
            type="text"
            name="email"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            onChange={changeData}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            {...register("password")}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            onChange={changeData}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={changeData}
            required
          />
        </Form.Group>

        <div>
          <Button
            type="submit"
            variant="success"
            value="Send data"
            className="btn btn-primary"
          >
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Register;
