import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const buttonStyles = (
  variant: "primary" | "secondary" | "ghost",
  size: "sm" | "md" | "lg"
) =>
  cn(
    "inline-flex items-center justify-center rounded-button font-bold transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none",
    {
      "bg-accent text-bg hover:opacity-90": variant === "primary",
      "border border-border text-text hover:bg-bg-secondary": variant === "secondary",
      "text-text hover:text-accent": variant === "ghost",
    },
    {
      "px-3 py-1.5 text-sm": size === "sm",
      "px-5 py-2.5 text-base": size === "md",
      "px-7 py-3.5 text-lg": size === "lg",
    }
  );

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles(variant, size), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(buttonStyles(variant, size), className)}
        {...props}
      />
    );
  }
);
ButtonLink.displayName = "ButtonLink";

export { Button, ButtonLink };