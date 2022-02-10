import React from "../../snowpack/pkg/react.js";
import {PrinterIcon, UploadIcon} from "./Icons.js";
const Nav = () => /* @__PURE__ */ React.createElement("div", {
  className: "flex h-16 flex-none items-center bg-purple-600 px-6 font-mono text-purple-200"
}, /* @__PURE__ */ React.createElement("div", {
  className: "flex-1"
}, "About"), /* @__PURE__ */ React.createElement("div", {
  className: "mr-4 flex-initial"
}, /* @__PURE__ */ React.createElement(UploadIcon, null)), /* @__PURE__ */ React.createElement("div", {
  className: "flex-initial"
}, /* @__PURE__ */ React.createElement(PrinterIcon, null)));
export default Nav;
