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
import cn from "classnames";
import classNames from "classnames";

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

const TextEditor = () => {
  const [editor, setEditor] = React.useState(() => withReact(createEditor()));
  const { renderElement } = useEditorConfig(editor);

  return (
    <Card>
      <Slate editor={editor} value={initialValue}>
        <Editable renderElement={renderElement} renderLeaf={renderLeaf} />
      </Slate>
    </Card>
  );
};

export default React.memo(TextEditor);
