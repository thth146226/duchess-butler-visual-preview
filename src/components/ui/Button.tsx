/**
 * Button.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * Premium button component with variants
 */

import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "tertiary";
  size?: "default" | "sm";
  asLink?: boolean;
  href?: string;
}

export default function Button({
  variant = "primary",
  size = "default",
  asLink = false,
  href = "#",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const variantClass =
    variant === "primary"
      ? "btn-primary"
      : variant === "ghost"
        ? "btn-ghost"
        : "btn-tertiary";

  const classes = [
    "btn",
    variantClass,
    size === "sm" ? "btn-sm" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (asLink) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
