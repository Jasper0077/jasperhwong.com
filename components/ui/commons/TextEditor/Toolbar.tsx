import { BaseEditor, BaseRange, BaseSelection } from "slate";
import React from "react";
import IconButton from "@ui/commons/buttons/IconButton";
import Dropdown from "@ui/commons/Dropdown";
import { PARAGRAPH_STYLES, CHARACTER_STYLES } from "./constants";
import {
  getActiveStyles,
  getTextBlockStyle,
  toggleBlockType,
  toggleStyle
} from "utils/editor";
import { ReactEditor } from "slate-react";

export interface ToolbarProps {
  editor: BaseEditor & ReactEditor;
  selection?: BaseRange | ((newSelection: BaseSelection) => void) | null;
}

const Toolbar = ({ editor, selection }: ToolbarProps) => {
  const onBlockTypeChange = React.useCallback(
    (targetType: string) => {
      if (targetType === "multiple") {
        return;
      }
      toggleBlockType(editor, targetType);
    },
    [editor]
  );

  const blockType = getTextBlockStyle(editor);

  return (
    <div className="flex items-center justify-between mx-6 my-2 space-x-12">
      <div>
        <Dropdown text={blockType ?? "h1"} className="w-24 h-9 z-10">
          {PARAGRAPH_STYLES.map((s, index) => {
            return (
              <Dropdown.Item
                key={s + index}
                variant="div"
                onClick={() => onBlockTypeChange(s)}
              >
                {s}
              </Dropdown.Item>
            );
          })}
        </Dropdown>
      </div>
      <div className="flex flex-row space-x-4 justify-center items-center">
        {CHARACTER_STYLES.map(({ style, icon }, index) => {
          return (
            <IconButton
              isActive={getActiveStyles(editor).has(style)}
              className="rounded w-9 h-9 flex items-center justify-center text-center"
              key={style + index}
              handleClick={() => console.log("debug", style)}
              onClick={(event) => {
                event.preventDefault();
                if (style === "link") {
                  onBlockTypeChange(style);
                  toggleStyle(editor, style);
                  return;
                }
                toggleStyle(editor, style);
              }}
            >
              {icon}
            </IconButton>
          );
        })}
      </div>
    </div>
  );
};

export default Toolbar;
