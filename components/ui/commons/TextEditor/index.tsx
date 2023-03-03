import cn from "classnames";
import React from "react";
import { BaseEditor, createEditor, Descendant } from "slate";
import {
  DefaultElement,
  Editable,
  ReactEditor,
  RenderElementProps,
  RenderLeafProps,
  Slate,
  withReact
} from "slate-react";

import Card from "@ui/commons/cards/Card";
import Toolbar from "@ui/commons/TextEditor/Toolbar";
import useSelection from "hooks/useSelectionChange";
import isHotkey from "is-hotkey";
import { toggleStyle } from "utils/editor";

interface TextEditorProps {
  document: Descendant[];
  onChange?: (value: Descendant[]) => void;
}

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

  return (
    <span
      className={cn(
        leaf.bold && "font-bold",
        leaf.italic && "italic",
        leaf.underline && "underline",
        leaf.code && "prose",
        "inline"
      )}
      {...attributes}
    >
      {children}
    </span>
  );
};

const useEditorConfig = (editor: BaseEditor & ReactEditor) => {
  const onKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => KeyBindings.onKeyDown(editor, event),
    [editor]
  );
  return { renderElement, renderLeaf, onKeyDown };
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

const TextEditor = ({ document, onChange }: TextEditorProps) => {
  const [editor, setEditor] = React.useState(() => withReact(createEditor()));
  const { selection, setSelectionOptimized: setSelection } =
    useSelection(editor);

  const onChangeHandler = React.useCallback(
    (document: Descendant[]) => {
      if (onChange) onChange(document);
      setSelection(editor.selection);
    },
    [editor.selection, onChange, setSelection]
  );

  const { renderElement } = useEditorConfig(editor);

  return (
    <div className="flex flex-col border-gray-700 dark:border-gray-100 border-2 rounded-lg">
      <Toolbar editor={editor} selection={selection} />
      <Card className="rounded-t-none">
        <Slate editor={editor} value={document} onChange={onChangeHandler}>
          <Editable renderElement={renderElement} renderLeaf={renderLeaf} />
        </Slate>
      </Card>
    </div>
  );
};

export default React.memo(TextEditor);
