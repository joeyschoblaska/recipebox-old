import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [text, setText] = useState("");

  return (
    <div className="grid grid-cols-2 gap-2 h-full">
      <div className="bg-gray-200 h-screen p-2">
        <textarea
          className="resize-none w-full h-full p-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="p-4">{text}</div>
    </div>
  );
};

export default App;
