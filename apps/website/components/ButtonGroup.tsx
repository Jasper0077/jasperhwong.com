import classNames from "classnames";

export type ButtonGroupType = {
  label: string;
};

export interface ButtonGroupProps<T> {
  items: Array<T>;
  active?: string;
  onClick?: (label: string) => void;
}

export const ButtonGroup = <T extends ButtonGroupType>({
  items,
  active,
  onClick
}: ButtonGroupProps<T>) => {
  return (
    <span className="isolate inline-flex rounded-md shadow-sm">
      {items.map((item, index) => (
        <button
          type="button"
          key={item.label}
          className={classNames([
            "relative inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10",
            index === 0 && "rounded-l-md",
            index > 0 && "-ml-px",
            index === items.length - 1 && "rounded-r-md",
            active === item.label && "bg-gray-300"
          ])}
          onClick={() => onClick?.(item.label)}
        >
          {item.label}
        </button>
      ))}
    </span>
  );
};
