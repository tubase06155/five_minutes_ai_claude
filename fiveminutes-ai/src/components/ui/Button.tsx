"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-medium rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0052FF] disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary: "bg-[#0052FF] hover:bg-[#0041CC] text-white font-semibold",
      ghost: "border border-[#111111] hover:bg-[#111111] text-[#111111] hover:text-white bg-transparent",
      dark: "border border-white hover:bg-white text-white hover:text-[#000000] bg-transparent",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-5 py-2.5 text-sm",
      lg: "px-7 py-3.5 text-sm tracking-wide",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export default Button;
