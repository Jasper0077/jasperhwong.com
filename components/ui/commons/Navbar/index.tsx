import React from "react";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between w-full max-w-2xl relative border-gray-200 dark:border-gray-700 mx-auto pt-4 pb-4 sm:pb-8  text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
      {children}
    </nav>
  );
};

export default React.memo(Navbar) as typeof Navbar;
