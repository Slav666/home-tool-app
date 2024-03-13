"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomLabel from "@/components/Label";
import Button from "@/components/Button";
import axios from "./api/axios";
import { userAgent } from "next/server";

const RegisterForm: React.FC = () => {
  const REGISTER_URL = "/register";
  const handleSubmit = async (e: any) => {
    // e.preventDefault();
    // if button enabled with JS hack
    // const v1 = USER_REGEX.test(user);
    // const v2 = PWD_REGEX.test(pwd);
    // if (!v1 || !v2) {
    //     setErrMsg("Invalid Entry");
    //     return;
    // }
    try {
      const response = await axios.post(REGISTER_URL, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      //     JSON.stringify({ user, pwd }),
      //     {
      //         headers: { 'Content-Type': 'application/json' },
      //         withCredentials: true
      //     }
      // );
      // console.log(response?.data);
      // console.log(response?.accessToken);
      // console.log(JSON.stringify(response))
      // setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      // setUser('');
      // setPwd('');
      // setMatchPwd('');
    } catch (err) {
      // if (!err?.response) {
      //     setErrMsg('No Server Response');
      // } else if (err.response?.status === 409) {
      //     setErrMsg('Username Taken');
      // } else {
      //     setErrMsg('Registration Failed')
      // }
      // errRef.current.focus();
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Register</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validate={(values) => {
          const errors: { [key: string]: string } = {};
          if (!values.username) {
            errors.username = "Username is required";
          }
          if (!values.email) {
            errors.email = "Email is required";
          } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Password is required";
          }
          return errors;
        }}
        onSubmit={handleSubmit}
        // onSubmit={(userData) => {
        //   axios
        //     .post("http://localhost:3500/register", userData)
        //     .then((response) => {
        //       console.log("Registration successful:", response.data);
        //       // Handle successful registration (e.g., redirect user)
        //     })
        //     .catch((error) => {
        //       console.error("Registration failed:", error);
        //       // Handle registration error (e.g., display error message)
        //     });
        // }}
      >
        {({ isValid }) => (
          <Form>
            <div className="mb-4">
              <CustomLabel htmlFor="username">Username</CustomLabel>
              <Field
                type="text"
                id="username"
                name="username"
                className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                placeholder="Enter your username"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>
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
            <Button type="submit" disabled={!isValid}>
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
