import React, { DOMAttributes } from "react";
import cn from "classnames";

export interface IconButtonProps extends DOMAttributes<HTMLButtonElement> {
  isActive?: boolean;
  children: React.ReactNode;
  handleClick: () => void;
  ariaLabel?: string;
  classNames?: string;
}

const IconButton = ({
  isActive,
  children,
  handleClick,
  ariaLabel,
  classNames,
  ...props
}: IconButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      type="button"
      className={cn(
        "bg-gray-200 rounded-lg dark:bg-gray-600 hover:ring-2 ring-gray-300 transition-all",
        classNames,
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
