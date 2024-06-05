import React, { DOMAttributes } from "react";
import cn from "classnames";

export interface IconButtonProps extends DOMAttributes<HTMLButtonElement> {
  isActive?: boolean;
  children: React.ReactNode;
  handleClick: () => void;
  ariaLabel?: string;
  className?: string;
}

const IconButton = ({
  isActive,
  children,
  handleClick,
  ariaLabel,
  className,
  ...props
}: IconButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      type="button"
      className={cn(
        "rounded-lg bg-gray-200 ring-gray-300 transition-all hover:ring-2 dark:bg-gray-600",
        className,
        isActive ? "bg-day-purple dark:bg-night-purple text-white" : ""
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
