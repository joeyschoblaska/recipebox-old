import React, {useState} from "../../snowpack/pkg/react.js";
import {XIcon} from "./Icons.js";
const ComingSoon = ({children}) => {
  const [hovering, setHovering] = useState(false);
  return /* @__PURE__ */ React.createElement("div", {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
    className: "cursor-pointer"
  }, hovering ? /* @__PURE__ */ React.createElement(XIcon, null) : children);
};
export default ComingSoon;
