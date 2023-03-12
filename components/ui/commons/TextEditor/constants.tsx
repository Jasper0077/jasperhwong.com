import { BaseText } from "slate";

export const PARAGRAPH_STYLES = [
  "h1",
  "h2",
  "h3",
  "h4",
  "paragraph",
  "link",
  "multiple"
];

export const CHARACTER_STYLES: {
  style: keyof Omit<BaseText, "text">;
  icon: JSX.Element;
}[] = [
  {
    style: "bold",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-bold"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6z"></path>
        <path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7"></path>
      </svg>
    )
  },
  {
    style: "italic",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-italic"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M11 5l6 0"></path>
        <path d="M7 19l6 0"></path>
        <path d="M14 5l-4 14"></path>
      </svg>
    )
  },
  {
    style: "underline",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-underline"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M7 5v5a5 5 0 0 0 10 0v-5"></path>
        <path d="M5 19h14"></path>
      </svg>
    )
  },
  {
    style: "code",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-code"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M7 8l-4 4l4 4"></path>
        <path d="M17 8l4 4l-4 4"></path>
        <path d="M14 4l-4 16"></path>
      </svg>
    )
  },
  {
    style: "link",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-link"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"></path>
        <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"></path>
      </svg>
    )
  }
];
