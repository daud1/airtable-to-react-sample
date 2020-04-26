import "./signIn.css";

import * as yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";

import { Paper } from "../../shared/components/StyledComponents";
import React from "react";
import { Redirect } from "react-router-dom";

export default function SignIn(props) {
  return (
    <Paper className="card">
      <h3 className=".card-title"> Sign In </h3>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .email("Please enter a valid email address")
            .required("Required"),
          password: yup.string().required("Required"),
        })}
        onSubmit={(values) => {
          console.log(values);
          return <Redirect to="/dashboard" />;
        }}
      >
        <Form>
          <div className="form-group">
            <Field
              className="form-control"
              name="email"
              type="email"
              placeholder="email"
            />
            <ErrorMessage name="email" className="alert-danger" />
          </div>
          <div className="form-group">
            <Field
              className="form-control"
              name="password"
              type="password"
              placeholder="password"
            />
            <ErrorMessage name="password" className="alert-danger" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </div>
        </Form>
      </Formik>
    </Paper>
  );
}
