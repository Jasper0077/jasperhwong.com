import { DetectedNote } from "@/utils/pitchDetector";
import React from "react";

interface Props {
  note: DetectedNote | undefined;
}

export function NoteIndicator({ note }: Props) {
  return (
    <div className="flex flex-col items-center w-[100%]">
      {note && (
        <>
          <span className="text-5xl dark:text-white text-gray-600 mb-8">
            {`${note.name}${note.octave}`}
          </span>
          <span className="text-2xl dark:text-white text-gray-600">
            {`${note.frequency}Hz`}
          </span>
        </>
      )}
    </div>
  );
}
