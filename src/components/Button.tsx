import React, { ReactNode } from "react";

const Button: React.FC<{
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  children?: ReactNode;
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}> = ({
  type,
  disabled = false,
  color = "primary",
  size = "medium",
  children,
}) => {
  let buttonSizeClass = "py-2 px-4";

  if (size === "small") {
    buttonSizeClass = "py-1 px-2 text-sm";
  } else if (size === "large") {
    buttonSizeClass = "py-3 px-6 text-lg";
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={`w-full py-2 px-4 rounded-md focus:outline-none ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : color === "primary"
          ? "bg-indigo-600 hover:bg-indigo-700"
          : "bg-gray-500 hover:bg-gray-600"
      } text-white`}
    >
      {children}
    </button>
  );
};
export default Button;
