import { ReactNode } from "react";

export interface IButton {
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  children?: ReactNode;
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  destination?: string;
  onClick?: () => void;
}

export interface ILabel {
  htmlFor: string;
  children: ReactNode;
}

export interface ITool {
  id: number;
  name: string;
  category: string;
  location: string;
}
