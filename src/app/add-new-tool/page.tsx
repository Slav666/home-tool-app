"use client";
import React from "react";
import ToolForm from "@/components/ToolForm";

const AddNewToolPage: React.FC = () => {
  const handleSubmit = (values: any) => {
    // Handle form submission logic here
    console.log("Form values:", values);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Add New Tool</h1>
      <ToolForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddNewToolPage;
