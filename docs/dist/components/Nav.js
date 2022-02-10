import React, {useState} from "../../snowpack/pkg/react.js";
import {PrinterIcon, UploadIcon, ChevronUpIcon} from "./Icons.js";
import ComingSoon from "./ComingSoon.js";
const Nav = () => {
  const [showAbout, setShowAbout] = useState(false);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex h-16 flex-none items-center bg-purple-600 px-6 font-mono text-purple-100"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex cursor-pointer",
    onClick: () => setShowAbout(!showAbout)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mr-2"
  }, "About"), /* @__PURE__ */ React.createElement("div", {
    className: showAbout ? "rotate-180" : ""
  }, /* @__PURE__ */ React.createElement(ChevronUpIcon, null)))), /* @__PURE__ */ React.createElement("div", {
    className: "mr-4 flex-initial"
  }, /* @__PURE__ */ React.createElement(ComingSoon, null, /* @__PURE__ */ React.createElement(UploadIcon, null))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-initial"
  }, /* @__PURE__ */ React.createElement(ComingSoon, null, /* @__PURE__ */ React.createElement(PrinterIcon, null)))), /* @__PURE__ */ React.createElement("div", {
    className: `${showAbout ? "visible" : "hidden"} bg-purple-500 p-6 font-mono text-sm text-purple-100`
  }, /* @__PURE__ */ React.createElement("p", null, "Format Markdown recipes as cards from Ben Cohen's", " ", /* @__PURE__ */ React.createElement("a", {
    href: "http://ftp.gwdg.de/pub/ctan/macros/latex/contrib/cuisine/cuisine.pdf",
    className: "underline hover:text-purple-50"
  }, "cuisine package"), " ", "for LaTeX, which groups instructions and ingredients together into steps."), /* @__PURE__ */ React.createElement("ul", {
    className: "list-inside list-disc pt-3"
  }, /* @__PURE__ */ React.createElement("li", null, "Made by", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/joeyschoblaska",
    className: "underline hover:text-purple-50"
  }, "Joey Schoblaska")), /* @__PURE__ */ React.createElement("li", null, "Source:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/joeyschoblaska/recipebox",
    className: "underline hover:text-purple-50"
  }, "joeyschoblaska/recipebox")))));
};
export default Nav;
