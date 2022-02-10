import React from "../../snowpack/pkg/react.js";
const Recipe = ({recipe}) => /* @__PURE__ */ React.createElement("div", {
  className: "mb-8"
}, /* @__PURE__ */ React.createElement("div", {
  className: "mb-2 flex items-end border-b-2 border-gray-700"
}, /* @__PURE__ */ React.createElement("div", {
  className: "flex-grow font-bold"
}, recipe.title), /* @__PURE__ */ React.createElement("div", null, recipe.subtitle)), /* @__PURE__ */ React.createElement("div", null, recipe.body.length > 0 && /* @__PURE__ */ React.createElement("div", {
  className: "border-b border-gray-700 py-2"
}, recipe.body.map((line, i) => /* @__PURE__ */ React.createElement("div", {
  className: "pb-2",
  key: i
}, line))), recipe.steps && /* @__PURE__ */ React.createElement("table", {
  className: "mt-4"
}, /* @__PURE__ */ React.createElement("tbody", null, recipe.steps.map((step, i) => /* @__PURE__ */ React.createElement("tr", {
  key: i
}, /* @__PURE__ */ React.createElement("td", {
  className: "whitespace-nowrap pr-4 pb-4 align-top"
}, step.title), /* @__PURE__ */ React.createElement("td", {
  className: "w-[40%] px-4 pb-4 align-top"
}, /* @__PURE__ */ React.createElement("ul", {
  className: "ml-4 list-disc"
}, step.ingredients.map((ingredient, i2) => /* @__PURE__ */ React.createElement("li", {
  key: i2
}, ingredient)))), /* @__PURE__ */ React.createElement("td", {
  className: "px-4 pb-4 align-top"
}, step.body.map((body, i2) => /* @__PURE__ */ React.createElement("div", {
  key: i2
}, body)))))))));
export default Recipe;
