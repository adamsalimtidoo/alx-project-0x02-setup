"use client";

import React from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={cn("bg-white rounded-2xl shadow-md p-4", className)}>
      {children}
    </div>
  );
};

export default Card;
