"use client";

import { CodeSandbox as EmbeddedCodeSandbox } from "mdx-embed/dist/components/codesandbox";

const CodeSandbox = ({ id }: { id: string }) => {
  return <EmbeddedCodeSandbox codeSandboxId={id} />;
};

export default CodeSandbox;
