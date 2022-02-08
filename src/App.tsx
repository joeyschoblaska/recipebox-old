import React, { useState } from "react";
import "./index.css";
import placeholder from "./lib/placeholder";

const App = () => {
  const [text, setText] = useState(placeholder);

  return (
    <div className="grid h-full grid-cols-2 gap-2">
      <div className="h-screen bg-gray-500">
        <textarea
          className="h-full w-full resize-none bg-gray-800 p-4 font-mono text-sm text-gray-100 outline-0"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="p-4 font-serif">{text}</div>
    </div>
  );
};

export default App;
