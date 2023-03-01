import areEqual from "deep-equal";
import React from "react";
import { BaseEditor, BaseRange } from "slate";
import { ReactEditor } from "slate-react";

export default function useSelection(editor: BaseEditor & ReactEditor) {
  const [selection, setSelection] = React.useState(editor.selection);
  const setSelectionOptimized = React.useCallback(
    (newSelection: BaseRange | null) => {
      // don't update the component state if selection hasn't changed.
      if (areEqual(selection, newSelection)) {
        return;
      }
      setSelection(newSelection);
    },
    [setSelection, selection]
  );

  return { selection, setSelectionOptimized };
}
