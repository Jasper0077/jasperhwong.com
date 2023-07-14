"use client";

import React from "react";
import ReactDOM from "react-dom";

export interface PortalProps {
  children: React.ReactNode;
}

const Portal = ({ children }: PortalProps) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? ReactDOM.createPortal(
        children,
        document.querySelector("#portal") as HTMLElement
      )
    : null;
};

export default Portal;
