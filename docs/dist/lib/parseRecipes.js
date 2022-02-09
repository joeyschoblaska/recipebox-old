const parseRecipes = (str) => {
  let recipes = [];
  str.split("\n").forEach((line) => {
    const titleMatch = line.match(/^#{1} (.*)/);
    const stepMatch = line.match(/^#{2} (.*)/);
    const ingredientMatch = line.match(/^[-\*] (.*)/);
    if (titleMatch) {
      const [title, ...subtitle] = titleMatch[1].split("|");
      recipes.push({
        title,
        subtitle: subtitle.join(" | "),
        body: [],
        steps: []
      });
    } else if (recipes.length > 0) {
      const recipe = recipes[recipes.length - 1];
      if (stepMatch) {
        recipe.steps.push({
          title: stepMatch[1],
          ingredients: [],
          body: []
        });
      } else if (recipe.steps.length == 0 && line) {
        recipe.body.push(line);
      } else {
        const step = recipe.steps[recipe.steps.length - 1];
        if (ingredientMatch) {
          step.ingredients.push(ingredientMatch[1]);
        } else if (line) {
          step.body.push(line);
        }
      }
    }
  });
  return recipes;
};
export default parseRecipes;
