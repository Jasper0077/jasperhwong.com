import React from "react";

export interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div
      className="max-w-md bg-gray-200 dark:bg-gray-700 rounded-lg shadow 
      dark:border-gray-200 border-gray-700 p-4"
    >
      {children}
    </div>
  );
};

export default Card;
