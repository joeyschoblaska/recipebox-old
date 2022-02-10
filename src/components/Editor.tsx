import React, { Dispatch, SetStateAction } from "react";
import SimpleEditor from "react-simple-code-editor";
import * as prism from "prismjs";
import "prismjs/components/prism-markdown";
import "styles/prism.css";

const Editor = ({
  value,
  setValue,
}: {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}) => (
  <SimpleEditor
    value={value}
    onValueChange={(v) => setValue(v)}
    highlight={(v) => prism.highlight(v, prism.languages.md, "markdown")}
    className="w-full flex-1 resize-none bg-gray-800 p-4 font-mono text-sm text-gray-100"
    textareaClassName="outline-0"
    padding={20}
  />
);

export default Editor;
