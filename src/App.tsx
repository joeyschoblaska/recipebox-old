import React, { useState } from "react";
import "./index.css";

const placeholder = `# Yorkshire Pudding
A lovely Yorkie pudd that me nan used to make.

## 1
* 1/2 pt milk
* 2 oz butter
* 5 oz self-raising flour

Heat the milk and butter until nearly boiling. Add flour and allow to seeth over.

## 2
* 3 eggs
* salt and pepper to taste

Add the reaming eggs and whisk again. Cook at 220C for about 1 hour.
`;

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
