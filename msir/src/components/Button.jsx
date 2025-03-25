// src/components/Button.jsx
import React from 'react';

export default function Button({ 
  variant = "solid", 
  size = "md", 
  children, 
  className = "", 
  ...props 
}) {
  // Base button styles
  const baseStyle = "font-semibold bg-green-600 rounded focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  // Variant styles
  const variantStyle = variant === "outline" 
    ? "border border-primary text-primary bg-transparent" 
    : "bg-primary text-white";

  // Size styles
  const sizeStyle = size === "sm" 
    ? "px-3 py-1.5 text-sm"
    : size === "md" 
    ? "px-4 py-2 text-base"
    : size === "lg"
    ? "px-6 py-3 text-lg"
    : "px-4 py-2 text-base"; // Default size

  // Combine all styles
  const combinedClasses = `${baseStyle} ${variantStyle} ${sizeStyle} ${className}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
