import TextEditor from "@ui/commons/TextEditor";

const RichTextEditor = () => {
  return (
    <div className="flex flex-col justify-center max-w-2xl mx-auto mb-16 w-full">
      <h1 className="text-5xl font-bold text-center tracking-tight text-black-400 dark:text-white">
        Slate Text Editor
      </h1>
      <div className="flex mt-4 text-center">
        <TextEditor />
      </div>
    </div>
  );
};

export default RichTextEditor;
