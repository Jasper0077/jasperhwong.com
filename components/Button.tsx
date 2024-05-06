import { cva, VariantProps } from "class-variance-authority";
import cn from "classnames";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium";
  children?: React.ReactNode;
  className?: string;
}

export const buttonStyles = cva("rounded-lg px-2 mx-2", {
  variants: {
    variant: {
      primary:
        "bg-gray-200 dark:bg-gray-600 border-transparent hover:ring-2 ring-gray-300 text-grey-200 dark:text-white",
      secondary: [
        "bg-green-500",
        "text-white",
        "border-gray-400",
        "hover:bg-red-100"
      ]
    },
    size: {
      small: ["text-sm", "py-1", "px-2", "min-w-max", "max-w-24"],
      medium: ["text-base", "py-2", "px-4", "min-w-max", "max-w-32"]
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "medium"
  }
});

export const Button = ({
  variant,
  size,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(buttonStyles({ variant, size }), className, "w-2")}
      {...props}
    >
      {children}
    </button>
  );
};
