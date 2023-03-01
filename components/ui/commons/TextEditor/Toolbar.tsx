import { BaseRange, BaseSelection } from "slate";
import React from "react";
import IconButton from "@ui/commons/buttons/IconButton";
import Dropdown from "@ui/commons/Dropdown";
import { PARAGRAPH_STYLES, CHARACTER_STYLES } from "./constants";
import { getActiveStyles, toggleStyle } from "utils/editor";
import { useSlateStatic } from "slate-react";

export interface ToolbarProps {
  selection?: BaseRange | ((newSelection: BaseSelection) => void) | null;
}

const Toolbar = ({ selection }: ToolbarProps) => {
  const editor = useSlateStatic();
  return (
    <div className="flex justify-start items-center my-2 space-x-4 z-10">
      <Dropdown text={PARAGRAPH_STYLES[0]} className="w-24 h-9">
        {PARAGRAPH_STYLES.map((s, index) => {
          return (
            <Dropdown.Item
              key={s + index}
              variant="div"
              onClick={() => console.log("debug", s)}
            >
              {s}
            </Dropdown.Item>
          );
        })}
      </Dropdown>
      {CHARACTER_STYLES.map(({ style, icon }, index) => {
        return (
          <IconButton
            isActive={getActiveStyles(editor).has(style)}
            classNames="rounded w-9 h-9 flex items-center justify-center text-center"
            key={style + index}
            handleClick={() => console.log("debug", style)}
            onMouseDown={(event) => {
              event.preventDefault();
              toggleStyle(editor, style);
            }}
          >
            {icon}
          </IconButton>
        );
      })}
    </div>
  );
};

export default Toolbar;
