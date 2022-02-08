import React, { useState } from "react";
import "./index.css";
import placeholder from "./lib/placeholder";

const App = () => {
  const [text, setText] = useState(placeholder);

  return (
    <div className="grid grid-cols-2 gap-2 h-full">
      <div className="bg-gray-500 h-screen">
        <textarea
          className="resize-none w-full h-full p-4 outline-0 bg-gray-800 text-gray-100 font-mono text-sm"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="p-4 font-serif">{text}</div>
    </div>
  );
};

export default App;
