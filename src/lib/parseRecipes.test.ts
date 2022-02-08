const parseRecipes = require("./parseRecipes");

it("parses a minimal example", () => {
  const recipes = parseRecipes("# Title\nbody");

  expect(recipes.length).to.equal(1);
  expect(recipes[0].title).to.equal("Title");
  expect(recipes[0].body).to.equal("body");
});
