"use client";

import React from "react";
import { type ButtonProps } from "@/interfaces";
import { cn } from "@/lib/utils";

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  size = "medium",
  shape = "rounded-md",
  className = "",
}) => {
  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-blue-600 text-white hover:bg-blue-700 transition",
        sizeStyles[size],
        shape,
        className
      )}
    >
      {title}
    </button>
  );
};

export default Button;
