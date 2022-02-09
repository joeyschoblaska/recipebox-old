import React, { useState } from "react";
import "./index.css";
import placeholder from "./lib/placeholder";
import parseRecipes from "./lib/parseRecipes";

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
        {recipes.map((recipe) => (
          <div className="mb-8">
            <div className="mb-2 flex items-end border-b-2 border-gray-700">
              <div className="flex-grow text-lg font-bold">{recipe.title}</div>
              <div>{recipe.subtitle}</div>
            </div>
            <div>
              {recipe.body.length > 0 && (
                <div className="border-b border-gray-700 py-2">
                  {recipe.body.map((line) => (
                    <div className="pb-2">{line}</div>
                  ))}
                </div>
              )}
              {recipe.steps && (
                <table className="mt-4">
                  {recipe.steps.map((step) => (
                    <tr>
                      <td className="whitespace-nowrap pr-4 pb-4 align-top">
                        {step.title}
                      </td>
                      <td className="w-[40%] px-4 pb-4 align-top">
                        <ul className="ml-4 list-disc">
                          {step.ingredients.map((ingredient) => (
                            <li>{ingredient}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-4 pb-4 align-top">
                        {step.body.map((body) => (
                          <div>{body}</div>
                        ))}
                      </td>
                    </tr>
                  ))}
                </table>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
