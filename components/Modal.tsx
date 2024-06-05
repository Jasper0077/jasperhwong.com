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
    <div className="flex items-start justify-between rounded-t border-b p-4 dark:border-gray-600">
      <h3 className="text-grey-200 text-xl font-semibold dark:text-white">
        {title}
      </h3>
      <button
        type="button"
        className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        data-modal-hide="defaultModal"
        onClick={handleClose}
      >
        <svg
          className="h-5 w-5"
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
  return <div className="space-y-6 p-6">{children}</div>;
};

export const ModalFooter = ({ children }: ModalFooterProps) => {
  return <div className="space-y-6 p-6">{children}</div>;
};

export const Modal = ({ open, className, children }: ModalProps) => {
  return (
    <Portal>
      {open && (
        <div
          className={cn(
            "left-0 right-0 top-0",
            "fixed backdrop-blur-sm",
            "z-10 h-[calc(100%-1rem)] w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full",
            className
          )}
        >
          <div className="relative mx-auto max-w-2xl">
            <div className="relative rounded-lg bg-gray-100 shadow-md dark:bg-gray-500">
              {children}
            </div>
          </div>
        </div>
      )}
    </Portal>
  );
};
