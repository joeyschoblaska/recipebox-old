import React, {useState} from "../snowpack/pkg/react.js";
import "./index.css.proxy.js";
import placeholder from "./lib/placeholder.js";
import parseRecipes from "./lib/parseRecipes.js";
import Recipe from "./components/Recipe.js";
const App = () => {
  const [text, setText] = useState(placeholder);
  const recipes = parseRecipes(text);
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-screen bg-gray-500"
  }, /* @__PURE__ */ React.createElement("textarea", {
    className: "h-full w-full resize-none bg-gray-800 p-4 font-mono text-sm text-gray-100 outline-0",
    value: text,
    onChange: (e) => setText(e.target.value)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "h-screen space-y-4 overflow-scroll p-4 font-serif"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-prose"
  }, recipes.map((recipe, i) => /* @__PURE__ */ React.createElement(Recipe, {
    recipe,
    key: i
  })))));
};
export default App;
