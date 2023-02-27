import { Element } from "slate";

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

export const PARAGRAPH_STYLES = [
  "h1",
  "h2",
  "h3",
  "h4",
  "paragraph",
  "multiple"
];
export const CHARACTER_STYLES = ["bold", "italic", "underline", "code"];
