import cn from "classnames";
import React from "react";
import Portal from "./Portal";

export interface ModalProps {
  open: boolean;
  className?: string;
  children: React.ReactNode;
}

export interface ModalHeaderProps {
  title: string;
  handleClose: () => void;
}

export interface ModalContentProps {
  children: React.ReactNode;
}

export interface ModalFooterProps {
  children: React.ReactNode;
}

export const ModalHeader = ({ title, handleClose }: ModalHeaderProps) => {
  return (
    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
      <h3 className="text-xl font-semibold text-grey-200 dark:text-white">
        {title}
      </h3>
      <button
        type="button"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        data-modal-hide="defaultModal"
        onClick={handleClose}
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close</span>
      </button>
    </div>
  );
};

export const ModalContent = ({ children }: ModalContentProps) => {
  return <div className="p-6 space-y-6">{children}</div>;
};

export const ModalFooter = ({ children }: ModalFooterProps) => {
  return <div className="p-6 space-y-6">{children}</div>;
};

export const Modal = ({ open, className, children }: ModalProps) => {
  return (
    <Portal>
      {open && (
        <div
          className={cn(
            "top-0 left-0 right-0",
            "fixed backdrop-blur-sm",
            "z-10 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full",
            className
          )}
        >
          <div className="relative max-w-2xl mx-auto">
            <div className="relative bg-gray-100 dark:bg-gray-500 rounded-lg shadow-md">
              {children}
            </div>
          </div>
        </div>
      )}
    </Portal>
  );
};
