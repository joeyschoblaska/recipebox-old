import React from "../../snowpack/pkg/react.js";
import {PrinterIcon} from "./Icons.js";
import ReactToPrint from "../../snowpack/pkg/react-to-print.js";
const PrintButton = ({printRef}) => /* @__PURE__ */ React.createElement(ReactToPrint, {
  trigger: () => /* @__PURE__ */ React.createElement("button", null, /* @__PURE__ */ React.createElement(PrinterIcon, null)),
  content: () => printRef.current,
  documentTitle: "recipes"
});
export default PrintButton;
