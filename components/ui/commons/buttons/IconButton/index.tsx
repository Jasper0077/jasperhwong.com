import React from "react";
import cn from "classnames";

export interface IconButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
  ariaLabel?: string;
  classNames?: string;
}

const IconButton = ({
  children,
  handleClick,
  ariaLabel,
  classNames
}: IconButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      type="button"
      className={cn(
        "bg-gray-200 rounded-lg dark:bg-gray-600 hover:ring-2 ring-gray-300 transition-all",
        classNames
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
