import React from "react";
import cn from "classnames";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        "max-w-md bg-gray-200 dark:bg-gray-700 rounded-lg shadow dark:border-gray-200 border-gray-700 p-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
