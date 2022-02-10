import React, {useState} from "../../snowpack/pkg/react.js";
import {XIcon} from "./Icons.js";
const ComingSoon = ({children}) => {
  const [hovering, setHovering] = useState(false);
  return /* @__PURE__ */ React.createElement("div", {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false)
  }, hovering ? /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", null, "Coming soon"), /* @__PURE__ */ React.createElement("div", {
    className: "ml-2 cursor-pointer"
  }, /* @__PURE__ */ React.createElement(XIcon, null))) : children);
};
export default ComingSoon;
