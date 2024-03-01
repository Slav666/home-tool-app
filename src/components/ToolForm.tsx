"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomLabel from "@/components/Label";
import Button from "@/components/Button";

interface Tool {
  id: number;
  name: string;
  category: string;
  location: string;
}

interface ToolFormProps {
  onSubmit: (tool: Tool) => void;
}

const ToolForm: React.FC<ToolFormProps> = ({ onSubmit }) => {
  const initialValues: Tool = {
    id: 0, // I want to generate this automatically on form submission
    name: "",
    category: "",
    location: "",
  };

  const categories: string[] = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
    "Category 7",
    "Category 8",
    "Category 9",
    "Category 10",
  ];

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm(); // Reset form after submission
      }}
      validate={(values) => {
        const errors: Partial<Tool> = {};
        if (!values.name) {
          errors.name = "Required";
        }
        if (!values.category) {
          errors.category = "Required";
        }
        if (!values.location) {
          errors.location = "Required";
        }
        return errors;
      }}
    >
      <Form>
        <div>
          <CustomLabel htmlFor="name">Tool Name:</CustomLabel>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className="text-red-500" />
        </div>
        <div>
          <CustomLabel htmlFor="category">Category:</CustomLabel>
          <Field as="select" id="category" name="category">
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Field>
          <ErrorMessage
            name="category"
            component="div"
            className="text-red-500"
          />
        </div>
        <div>
          <CustomLabel htmlFor="location">Location:</CustomLabel>
          <Field type="text" id="location" name="location" />
          <ErrorMessage
            name="location"
            component="div"
            className="text-red-500"
          />
        </div>
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};

export default ToolForm;
