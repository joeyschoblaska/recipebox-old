import React from "../../snowpack/pkg/react.js";
import SimpleEditor from "../../snowpack/pkg/react-simple-code-editor.js";
import * as prism from "../../snowpack/pkg/prismjs.js";
import "../../snowpack/pkg/prismjs/components/prism-markdown.js";
import "../styles/prism.css.proxy.js";
const Editor = ({
  value,
  setValue
}) => /* @__PURE__ */ React.createElement(SimpleEditor, {
  value,
  onValueChange: (v) => setValue(v),
  highlight: (v) => prism.highlight(v, prism.languages.md, "markdown"),
  className: "h-full w-full resize-none bg-gray-800 p-4 font-mono text-sm text-gray-100",
  textareaClassName: "outline-0",
  padding: 14
});
export default Editor;
