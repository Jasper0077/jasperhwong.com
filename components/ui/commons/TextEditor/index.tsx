/* eslint-disable prettier/prettier */
import React from "react";
import { BaseEditor, createEditor } from "slate";
import {
  Slate,
  Editable,
  withReact,
  RenderElementProps,
  ReactEditor,
  RenderLeafProps
} from "slate-react";
import Card from "@ui/commons/cards/Card";
import { DefaultElement } from "slate-react";
import { initialValue } from "utils/editor";
import { CHARACTER_STYLES, PARAGRAPH_STYLES } from "./constants";
import classNames from "classnames";
import Dropdown from "../Dropdown";
import IconButton from "../buttons/IconButton";

function renderElement(props: RenderElementProps) {
  const { element, children, attributes } = props;
  switch (element.type) {
    case "paragraph":
      return <p {...attributes}>{children}</p>;
    case "h1":
      return <h1 {...attributes}>{children}</h1>;
    case "h2":
      return <h2 {...attributes}>{children}</h2>;
    case "h3":
      return <h3 {...attributes}>{children}</h3>;
    case "h4":
      return <h4 {...attributes}>{children}</h4>;
    default:
      // For the default case, we delegate to Slate's default rendering.
      return <DefaultElement {...props} />;
  }
}

const renderLeaf = ({ children, leaf }: RenderLeafProps) => {
  let el = <>{children}</>;
  if (leaf.code) {
    el = <code className="inline">{children}</code>;
  }

  return (
    <span
      className={classNames(
        leaf.bold && "font-bold",
        leaf.italic && "italic",
        leaf.underline && "underline",
        leaf.code && "prose",
        "inline"
      )}
    >
      {el}
    </span>
  );
};

export function useEditorConfig(editor: BaseEditor & ReactEditor) {
  return { renderElement };
}

const Toolbar = () => {
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
            classNames="rounded w-9 h-9 flex items-center justify-center text-center"
            key={style + index}
            handleClick={() => console.log("debug", style)}
          >
            {icon}
          </IconButton>
        );
      })}
    </div>
  );
};

const TextEditor = () => {
  const [editor, setEditor] = React.useState(() => withReact(createEditor()));
  const { renderElement } = useEditorConfig(editor);

  return (
    <div className="flex flex-col">
      <Toolbar />
      <Card>
        <Slate editor={editor} value={initialValue}>
          <Editable renderElement={renderElement} renderLeaf={renderLeaf} />
        </Slate>
      </Card>
    </div>
  );
};

export default React.memo(TextEditor);
