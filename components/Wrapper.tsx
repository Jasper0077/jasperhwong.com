import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col justify-center">
      {children}
    </div>
  );
};

export default Wrapper;
