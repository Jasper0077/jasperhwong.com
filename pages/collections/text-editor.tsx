import TextEditor from "@ui/commons/TextEditor";
import Wrapper from "@ui/commons/Wrapper";
import React from "react";
import { initialValue } from "utils/editor";

const RichTextEditor = () => {
  return (
    <Wrapper>
      <h1 className="text-5xl font-bold text-black-400 dark:text-white">
        Slate Text Editor
      </h1>
      <div className="flex mt-4 text-center">
        <TextEditor document={initialValue} />
      </div>
    </Wrapper>
  );
};

export default RichTextEditor;
