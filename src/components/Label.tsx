import React, { ReactNode } from "react";

const CustomLabel: React.FC<{ htmlFor: string; children: ReactNode }> = ({
  htmlFor,
  children,
}) => {
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
