import { Element, Editor, BaseEditor, Transforms, Range } from "slate";
import { ReactEditor } from "slate-react";

export const initialValue: Element[] = [
  {
    type: "h1",
    children: [{ text: "Heading 1" }]
  },
  {
    type: "h2",
    children: [{ text: "Heading 2" }]
  },
  {
    type: "paragraph",
    children: [
      { text: "Hello World! This is my paragraph inside a sample document." },
      { text: "Bold text.", bold: true },
      { text: "Italic text.", italic: true },
      { text: "Bold and underlined text.", bold: true, underline: true },
      { text: "variableFoo", code: true }
    ]
  }
];

export function getActiveStyles(editor: Editor) {
  return new Set(Object.keys(Editor.marks(editor) ?? {}));
}

export function toggleStyle(editor: BaseEditor & ReactEditor, style: string) {
  const activeStyles = getActiveStyles(editor);
  if (activeStyles.has(style)) {
    Editor.removeMark(editor, style);
  } else {
    Editor.addMark(editor, style, true);
  }
}

export function getTextBlockStyle(editor: BaseEditor & ReactEditor) {
  const selection = editor.selection;
  if (selection == null) {
    return null;
  }
  // gives the forward-direction points in case the selection was
  // was backwards.
  const [start, end] = Range.edges(selection);

  //path[0] gives us the index of the top-level block.
  let startTopLevelBlockIndex = start.path[0];
  const endTopLevelBlockIndex = end.path[0];

  let blockType = null;
  while (startTopLevelBlockIndex <= endTopLevelBlockIndex) {
    const [node] = Editor.node(editor, [startTopLevelBlockIndex]);
    if (Element.isElement(node) && blockType == null) {
      blockType = node.type;
    } else if (Element.isElement(node) && blockType !== node.type) {
      return "multiple";
    }
    startTopLevelBlockIndex++;
  }

  return blockType;
}

export function toggleBlockType(
  editor: BaseEditor & ReactEditor,
  blockType: string
) {
  const { selection } = editor;
  if (!selection) return;

  const currentBlockType = getTextBlockStyle(editor);
  const changeTo = currentBlockType === blockType ? "paragraph" : blockType;
  Transforms.setNodes(
    editor,
    { type: changeTo },
    // Node filtering options supported here too. We use the same
    // we used with Editor.nodes above.
    {
      at: Editor.unhangRange(editor, selection),
      match: (n) => Element.isElement(n) && Editor.isBlock(editor, n)
    }
  );
}
