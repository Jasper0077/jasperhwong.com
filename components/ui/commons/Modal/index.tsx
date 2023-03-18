import cn from "classnames";
import React from "react";

export interface ModalProps {
  children: React.ReactNode;
}

export interface ModalHeaderProps {
  children: React.ReactNode;
}

export interface ModalContentProps {
  children: React.ReactNode;
}

export interface ModalFooterProps {
  children: React.ReactNode;
}

export const ModalHeader = ({ children }: ModalHeaderProps) => {
  return (
    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
      {children}
    </div>
  );
};

export const ModalContent = ({ children }: ModalContentProps) => {
  return <div className="p-6 space-y-6">{children}</div>;
};

export const ModalFooter = ({ children }: ModalFooterProps) => {
  return <div className="p-6 space-y-6">{children}</div>;
};

export const Modal = ({ children }: ModalProps) => {
  return (
    <div
      id="defaultModal"
      aria-hidden="true"
      className={cn(
        "fixed top-0 left-0 right-0",
        "z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
      )}
    >
      <div className="relative w-full h-full max-w-2xl md:h-auto">
        <div className="relative bg-gray-100 dark:bg-gray-900 rounded-lg shadow">
          {children}
        </div>
      </div>
    </div>
  );
};
