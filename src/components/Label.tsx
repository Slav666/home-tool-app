import React, { ReactNode } from "react";
import { ILabel } from "@/type";

const CustomLabel: React.FC<ILabel> = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-700"
    >
      {children}
    </label>
  );
};
export default CustomLabel;
