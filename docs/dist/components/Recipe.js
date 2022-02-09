import React from "../../snowpack/pkg/react.js";
const Recipe = ({recipe}) => /* @__PURE__ */ React.createElement("div", {
  className: "mb-8"
}, /* @__PURE__ */ React.createElement("div", {
  className: "mb-2 flex items-end border-b-2 border-gray-700"
}, /* @__PURE__ */ React.createElement("div", {
  className: "flex-grow font-bold"
}, recipe.title), /* @__PURE__ */ React.createElement("div", null, recipe.subtitle)), /* @__PURE__ */ React.createElement("div", null, recipe.body.length > 0 && /* @__PURE__ */ React.createElement("div", {
  className: "border-b border-gray-700 py-2"
}, recipe.body.map((line) => /* @__PURE__ */ React.createElement("div", {
  className: "pb-2"
}, line))), recipe.steps && /* @__PURE__ */ React.createElement("table", {
  className: "mt-4"
}, recipe.steps.map((step) => /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
  className: "whitespace-nowrap pr-4 pb-4 align-top"
}, step.title), /* @__PURE__ */ React.createElement("td", {
  className: "w-[40%] px-4 pb-4 align-top"
}, /* @__PURE__ */ React.createElement("ul", {
  className: "ml-4 list-disc"
}, step.ingredients.map((ingredient) => /* @__PURE__ */ React.createElement("li", null, ingredient)))), /* @__PURE__ */ React.createElement("td", {
  className: "px-4 pb-4 align-top"
}, step.body.map((body) => /* @__PURE__ */ React.createElement("div", null, body))))))));
export default Recipe;
