import React, { useState } from "react";
import "./index.css";
import placeholder from "./lib/placeholder";
import parseRecipes from "./lib/parseRecipes";
import Recipe from "./components/Recipe";

const App = () => {
  const [text, setText] = useState(placeholder);
  const recipes = parseRecipes(text);

  return (
    <div className="grid h-full grid-cols-2 gap-2">
      <div className="h-screen bg-gray-500">
        <textarea
          className="h-full w-full resize-none bg-gray-800 p-4 font-mono text-sm text-gray-100 outline-0"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="space-y-4 p-4 font-serif">
        {recipes.map((recipe, i) => (
          <Recipe recipe={recipe} key={i} />
        ))}
      </div>
    </div>
  );
};

export default App;
