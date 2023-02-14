import { cva, VariantProps } from "class-variance-authority";

export interface ButtonProps extends VariantProps<typeof buttonStyles> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium";
  children: React.ReactNode;
}

export const buttonStyles = cva("rounded px-2 mx-2", {
  variants: {
    variant: {
      primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
      secondary: [
        "bg-green-500",
        "text-white",
        "border-gray-400",
        "hover:bg-red-100"
      ]
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"]
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "medium"
  }
});

export const Button = ({ variant, size, children, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={buttonStyles({ variant, size })}
      {...props}
    >
      {children}
    </button>
  );
};
