import useEditorConfig from "hooks/useEditorConfig";
import useSelection from "hooks/useSelectionChange";
import React from "react";
import { createEditor, Descendant } from "slate";
import { Editable, Slate, withReact } from "slate-react";

import Card from "@ui/commons/cards/Card";
import Toolbar from "@ui/commons/TextEditor/Toolbar";

interface TextEditorProps {
  document: Descendant[];
  onChange?: (value: Descendant[]) => void;
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

  const { renderElement, renderLeaf, onKeyDown } = useEditorConfig(editor);

  return (
    <div className="flex flex-col border-gray-700 dark:border-gray-100 border-2 rounded-lg">
      <Toolbar editor={editor} selection={selection} />
      <Card className="rounded-t-none">
        <Slate editor={editor} value={document} onChange={onChangeHandler}>
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            onKeyDown={onKeyDown}
          />
        </Slate>
      </Card>
    </div>
  );
};

export default React.memo(TextEditor);
