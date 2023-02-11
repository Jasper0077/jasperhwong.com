import React from "react";

export interface DropdownItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export interface DropdownProps {
  label: string;
  children: React.ReactNode;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  onClick
}) => {
  return (
    <div
      className="px-2 py-2 hover:bg-gray-200 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const Dropdown = ({ label, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(true);

  React.useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && <>{children}</>}
    </div>
  );
};

Dropdown.Item = DropdownItem;
export default Dropdown;
