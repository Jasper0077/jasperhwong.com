import React from "react";

export interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div
      className="max-w-md bg-light-blue dark:bg-dark-gray rounded-lg shadow 
      dark:border-gray-200 border-dark-gray p-4"
    >
      {children}
    </div>
  );
};

export default Card;
