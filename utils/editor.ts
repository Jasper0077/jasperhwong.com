import { Element, Editor } from "slate";

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

export function toggleStyle(editor: Editor, style: string) {
  const activeStyles = getActiveStyles(editor);
  if (activeStyles.has(style)) {
    Editor.removeMark(editor, style);
  } else {
    Editor.addMark(editor, style, true);
  }
}
