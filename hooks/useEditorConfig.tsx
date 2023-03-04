import cn from "classnames";
import isHotkey from "is-hotkey";
import React from "react";
import { BaseEditor } from "slate";
import {
  DefaultElement,
  ReactEditor,
  RenderElementProps,
  RenderLeafProps
} from "slate-react";
import { toggleStyle } from "utils/editor";

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

const renderLeaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }
  if (leaf.link) {
    children = <a>{children}</a>;
  }

  return (
    <span
      className={cn(
        leaf.bold && "font-bold",
        leaf.italic && "italic",
        leaf.underline && "underline",
        leaf.code && "prose",
        leaf.link && "prose a",
        "inline"
      )}
      {...attributes}
    >
      {children}
    </span>
  );
};

const KeyBindings = {
  onKeyDown: (editor: BaseEditor & ReactEditor, event: React.KeyboardEvent) => {
    if (isHotkey("mod+b", event)) {
      toggleStyle(editor, "bold");
      return;
    }
    if (isHotkey("mod+i", event)) {
      toggleStyle(editor, "italic");
      return;
    }
    if (isHotkey("mod+c", event)) {
      toggleStyle(editor, "code");
      return;
    }
    if (isHotkey("mod+u", event)) {
      toggleStyle(editor, "underline");
      return;
    }
  }
};

const useEditorConfig = (editor: BaseEditor & ReactEditor) => {
  const onKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => KeyBindings.onKeyDown(editor, event),
    [editor]
  );
  return { renderElement, renderLeaf, onKeyDown };
};

export default useEditorConfig;
