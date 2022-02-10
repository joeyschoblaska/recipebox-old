import React, { useState } from "react";
import { PrinterIcon, UploadIcon, ChevronUpIcon } from "components/Icons";
import ComingSoon from "components/ComingSoon";

const Nav = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div>
      <div className="flex h-16 flex-none items-center bg-purple-600 px-6 font-mono text-purple-100">
        <div className="flex-1">
          <div
            className="flex cursor-pointer"
            onClick={() => setShowAbout(!showAbout)}
          >
            <div className="mr-2">About</div>
            <div className={showAbout ? "rotate-180" : ""}>
              <ChevronUpIcon />
            </div>
          </div>
        </div>
        <div className="mr-4 flex-initial">
          <ComingSoon>
            <UploadIcon />
          </ComingSoon>
        </div>
        <div className="flex-initial">
          <ComingSoon>
            <PrinterIcon />
          </ComingSoon>
        </div>
      </div>
      <div
        className={`${
          showAbout ? "visible" : "hidden"
        } bg-purple-500 p-6 font-mono text-sm text-purple-100`}
      >
        <p>
          Format Markdown recipes as cards from Ben Cohen's{" "}
          <a
            href="http://ftp.gwdg.de/pub/ctan/macros/latex/contrib/cuisine/cuisine.pdf"
            className="underline hover:text-purple-50"
          >
            cuisine package
          </a>{" "}
          for LaTeX, which groups instructions and ingredients together for each
          step.
        </p>
        <ul className="list-inside list-disc pt-3">
          <li>
            Made by{" "}
            <a
              href="https://twitter.com/joeyschoblaska"
              className="underline hover:text-purple-50"
            >
              Joey Schoblaska
            </a>
          </li>
          <li>
            Github:{" "}
            <a
              href="https://github.com/joeyschoblaska/recipebox"
              className="underline hover:text-purple-50"
            >
              joeyschoblaska/recipebox
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
