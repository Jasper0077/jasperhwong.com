import { DetectedNote } from "@/utils/pitchDetector";
import React from "react";

interface Props {
  note: DetectedNote | undefined;
}

export function NoteIndicator({ note }: Props) {
  return (
    <div className="flex w-[100%] flex-col items-center">
      {note && (
        <>
          <span className="mb-8 text-5xl text-gray-600 dark:text-white">
            {`${note.name}${note.octave}`}
          </span>
          <span className="text-2xl text-gray-600 dark:text-white">
            {`${note.frequency}Hz`}
          </span>
        </>
      )}
    </div>
  );
}
