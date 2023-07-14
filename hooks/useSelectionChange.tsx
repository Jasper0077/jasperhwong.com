"use client";

import areEqual from "deep-equal";
import React from "react";
import { BaseEditor, BaseRange } from "slate";
import { ReactEditor } from "slate-react";

export default function useSelection(editor: BaseEditor & ReactEditor) {
  const [selection, setSelection] = React.useState(editor.selection);
  const previousSelection = React.useRef<BaseRange | null>(null);
  const setSelectionOptimized = React.useCallback(
    (newSelection: BaseRange | null) => {
      // don't update the component state if selection hasn't changed.
      if (areEqual(selection, newSelection)) {
        return;
      }
      previousSelection.current = selection;
      setSelection(newSelection);
    },
    [setSelection, selection]
  );

  return {
    previousSelection: previousSelection.current,
    selection,
    setSelectionOptimized
  };
}
