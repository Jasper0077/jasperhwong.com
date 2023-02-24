import React from "react";

export interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="flex flex-col justify-center max-w-2xl mx-auto mb-16 w-full">
      {children}
    </div>
  );
};

export default Wrapper;
