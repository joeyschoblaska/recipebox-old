import React, {useState} from "../../snowpack/pkg/react.js";
import {UploadIcon, ChevronUpIcon} from "./Icons.js";
import ComingSoon from "./ComingSoon.js";
import PrintButton from "./PrintButton.js";
import About from "./Nav/About.js";
const Nav = ({printRef}) => {
  const [showAbout, setShowAbout] = useState(false);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex h-16 flex-none items-center bg-purple-600 px-6 font-mono text-purple-100"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-initial cursor-pointer",
    onClick: () => setShowAbout(!showAbout)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mr-2"
  }, "About"), /* @__PURE__ */ React.createElement("div", {
    className: showAbout ? "rotate-180" : ""
  }, /* @__PURE__ */ React.createElement(ChevronUpIcon, null))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mr-4 flex-initial"
  }, /* @__PURE__ */ React.createElement(ComingSoon, null, /* @__PURE__ */ React.createElement(UploadIcon, null))), /* @__PURE__ */ React.createElement("div", {
    className: "h-6 flex-initial"
  }, /* @__PURE__ */ React.createElement(PrintButton, {
    printRef
  }))), /* @__PURE__ */ React.createElement("div", {
    className: showAbout ? "visible" : "hidden"
  }, /* @__PURE__ */ React.createElement(About, null)));
};
export default Nav;
