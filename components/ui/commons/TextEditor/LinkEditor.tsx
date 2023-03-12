import isUrl from "is-url";
import React from "react";
import {
  BaseEditor,
  BaseElement,
  BaseRange,
  Editor,
  Element,
  Node,
  Path,
  Transforms
} from "slate";
import { ReactEditor } from "slate-react";
import { Button } from "../buttons/Button";

interface Props {
  selectionForLink: BaseRange;
  editor: BaseEditor & ReactEditor;
  editorOffsets: { x: number; y: number } | null;
}

const LinkEditor = ({ selectionForLink, editor, editorOffsets }: Props) => {
  const linkEditorRef = React.useRef<HTMLInputElement>(null);

  const [linkNode, path] = React.useMemo(() => {
    return Array.from(
      Editor.above<BaseElement>(editor, {
        at: selectionForLink,
        match: (n) => Element.isElement(n) && n.type === "link"
      }) || []
    );
  }, [editor, selectionForLink]);

  const [linkURL, setLinkURL] = React.useState((linkNode as BaseElement).url);

  React.useEffect(() => {
    const linkEditorEl = linkEditorRef.current;
    if (linkEditorEl == null) {
      return;
    }

    const linkDOMNode = ReactEditor.toDOMNode(editor, linkNode as Node);
    const rect = linkDOMNode.getBoundingClientRect();

    linkEditorEl.style.display = "block";
    linkEditorEl.style.top = `${rect.y + rect.x - (editorOffsets?.y || 0)}px`;
    linkEditorEl.style.left = `${rect.x - (editorOffsets?.x || 0)}px`;
  }, [editor, editorOffsets, linkNode]);

  React.useEffect(() => {
    setLinkURL((linkNode as BaseElement).url);
  }, [linkNode]);

  // update state if `linkNode` changes
  const onLinkURLChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setLinkURL(event.target.value),
    [setLinkURL]
  );

  const onApply = React.useCallback(() => {
    Transforms.setNodes(editor, { url: linkURL }, { at: path as Path });
  }, [editor, linkURL, path]);

  if (editorOffsets == null) {
    return null;
  }

  return (
    <div>
      <input
        className="rounded-sm border-gray-700 dark:border-gray-100 p-2"
        type="text"
        value={linkURL}
        onChange={onLinkURLChange}
      />
      <Button
        variant="primary"
        disabled={!isUrl(linkURL || "")}
        onClick={onApply}
      >
        Apply
      </Button>
    </div>
  );
};

export default LinkEditor;
