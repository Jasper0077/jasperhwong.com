import React from "react";

export interface DropdownItemProps {
  variant?: "a" | "div";
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export interface DropdownProps {
  text: string;
  children: React.ReactNode;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  variant,
  children,
  href,
  onClick
}) => {
  const Tag = variant || "div";

  return (
    <Tag
      className="px-2 py-2 hover:bg-gray-200 cursor-pointer"
      href={href}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
};

const Dropdown = ({ text, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(true);

  React.useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        aria-label="Dropdown"
        className="dark:text-white text-grey-200 focus:ring-4 focus:ring-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center hover:bg-gray-200 dark:hover:bg-gray-800 : transition-all"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {text}
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
