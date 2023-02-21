import { Element } from "slate";

export const initialValue: Element[] = [
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

export default initialValue;
