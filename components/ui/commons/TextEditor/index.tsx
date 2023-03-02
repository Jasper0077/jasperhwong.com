import classNames from "classnames";
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
    <div className="flex flex-col">
      <Card>
        <Toolbar editor={editor} selection={selection} />
        <Slate editor={editor} value={document} onChange={onChangeHandler}>
          <Editable renderElement={renderElement} renderLeaf={renderLeaf} />
        </Slate>
      </Card>
    </div>
  );
};

export default React.memo(TextEditor);
