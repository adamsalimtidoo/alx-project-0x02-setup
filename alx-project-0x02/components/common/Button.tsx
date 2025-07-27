"use client";

import { cn } from "@/lib/utils";
import React from "react";

type ButtonProps = {
  title: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}) => {
  const base = "rounded-xl font-medium transition duration-200";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    ghost: "text-blue-600 hover:bg-blue-100",
  };
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {title}
    </button>
  );
};

export default Button;
