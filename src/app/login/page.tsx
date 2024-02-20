// LoginForm.tsx
"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomLabel from "@/components/Label";
import Button from "@/components/Button";

const LoginForm: React.FC = () => {
  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Login</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
          // You can handle form submission here
        }}
        validate={(values) => {
          const errors: { [key: string]: string } = {};
          if (!values.email) {
            errors.email = "Email address is required";
          }
          if (!values.password) {
            errors.password = "Password is required";
          }
          return errors;
        }}
      >
        <Form>
          <div className="mb-4">
            <CustomLabel htmlFor="email">Email address</CustomLabel>
            <Field
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
              placeholder="Enter your email address"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 mt-1"
            />
          </div>
          <div className="mb-4">
            <CustomLabel htmlFor="password">Password</CustomLabel>
            <Field
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 mt-1"
            />
          </div>
          <Button type="submit">Login</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
