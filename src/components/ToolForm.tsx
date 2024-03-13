"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { categories } from "@/utils";
import CustomLabel from "@/components/Label";
import Button from "@/components/Button";
import { ITool } from "@/type";

interface ToolFormProps {
  onSubmit: (tool: ITool) => void;
}

const ToolForm: React.FC<ToolFormProps> = ({ onSubmit }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const initialValues: ITool = {
    id: 0, // I want to generate this automatically on form submission
    name: "",
    category: "",
    location: "",
    icon: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm(); // Reset form after submission
      }}
      validate={(values) => {
        const errors: Partial<ITool> = {};
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
          <Field
            as="select"
            id="category"
            name="category"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSelectedCategory(e.target.value)
            }
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </Field>
          {selectedCategory && (
            <div className="mt-4 flex items-center">
              <FontAwesomeIcon
                icon={
                  categories.find((cat) => cat.name === selectedCategory)?.icon
                }
                className="mr-2"
              />
              {selectedCategory}
            </div>
          )}
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
