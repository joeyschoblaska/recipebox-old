import React, { useState } from "react";
import "styles/index.css";
import placeholder from "lib/placeholder";
import parseRecipes from "lib/parseRecipes";
import Recipe from "components/Recipe";
import Editor from "components/Editor";

const App = () => {
  const [text, setText] = useState(placeholder);
  const recipes = parseRecipes(text);

  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="h-screen bg-gray-500">
        <Editor value={text} setValue={setText} />
      </div>
      <div className="h-screen space-y-4 overflow-scroll p-4 font-serif">
        <div className="mx-auto max-w-prose">
          {recipes.map((recipe, i) => (
            <Recipe recipe={recipe} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
