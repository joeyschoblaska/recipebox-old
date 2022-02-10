import React, { useState, useRef } from "react";
import "styles/index.css";
import placeholder from "lib/placeholder";
import parseRecipes from "lib/parseRecipes";
import Recipe from "components/Recipe";
import Editor from "components/Editor";
import Nav from "components/Nav";

const App = () => {
  const [text, setText] = useState(placeholder);
  const recipes = parseRecipes(text);
  const printRef = useRef<HTMLDivElement>(null);

  return (
    <div className="grid grid-cols-2">
      <div className="flex h-screen flex-col bg-gray-500">
        <div className="overflow-scroll">
          <Editor value={text} setValue={setText} />
        </div>
        <Nav printRef={printRef} />
      </div>
      <div className="no-scrollbar h-screen overflow-scroll p-6 font-serif">
        <div className="mx-auto max-w-prose" ref={printRef}>
          {recipes.map((recipe, i) => (
            <Recipe recipe={recipe} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
