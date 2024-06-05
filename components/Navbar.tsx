import React from "react";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  return (
    <nav className="relative mx-auto flex w-full max-w-2xl items-center justify-between border-gray-200 bg-gray-50 bg-opacity-60 pb-4 pt-4 text-gray-900 sm:pb-8 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
      {children}
    </nav>
  );
};

export default React.memo(Navbar) as typeof Navbar;
