import React from "react";
import type { RecipeType } from "lib/parseRecipes";

const Recipe = ({ recipe }: { recipe: RecipeType }) => (
  <div className="mb-8">
    <div className="mb-2 flex items-end border-b-2 border-gray-700">
      <div className="flex-grow font-bold">{recipe.title}</div>
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
);

export default Recipe;
