import React from "react";
import { PrinterIcon, UploadIcon } from "components/Icons";

const Nav = () => (
  <div className="flex h-16 flex-none items-center bg-purple-600 px-6 font-mono text-purple-200">
    <div className="flex-1">About</div>
    <div className="mr-4 flex-initial">
      <UploadIcon />
    </div>
    <div className="flex-initial">
      <PrinterIcon />
    </div>
  </div>
);

export default Nav;
