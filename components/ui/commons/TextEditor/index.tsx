import React from "react";
import { createEditor, Descendant } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import Card from "@ui/commons/Card";

const initialValue: Array<Descendant> = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }]
  }
];

const TextEditor = () => {
  const [editor, setEditor] = React.useState(() => withReact(createEditor()));

  return (
    <Card>
      <Slate editor={editor} value={initialValue}>
        <Editable />
      </Slate>
    </Card>
  );
};

export default TextEditor;
