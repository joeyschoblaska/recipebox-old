import React, { useState } from "react";
import { XIcon } from "components/Icons";

const ComingSoon = ({ children }: { children: JSX.Element }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="cursor-pointer"
    >
      {hovering ? <XIcon /> : children}
    </div>
  );
};

export default ComingSoon;
