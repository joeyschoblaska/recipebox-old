import React, {useState} from "../snowpack/pkg/react.js";
import "./styles/index.css.proxy.js";
import placeholder from "./lib/placeholder.js";
import parseRecipes from "./lib/parseRecipes.js";
import Recipe from "./components/Recipe.js";
import Editor from "./components/Editor.js";
const App = () => {
  const [text, setText] = useState(placeholder);
  const recipes = parseRecipes(text);
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-screen bg-gray-500"
  }, /* @__PURE__ */ React.createElement(Editor, {
    value: text,
    setValue: setText
  })), /* @__PURE__ */ React.createElement("div", {
    className: "no-scrollbar h-screen overflow-scroll p-6 font-serif"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-prose"
  }, recipes.map((recipe, i) => /* @__PURE__ */ React.createElement(Recipe, {
    recipe,
    key: i
  })))));
};
export default App;
