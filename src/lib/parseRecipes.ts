interface Recipe {
  title: string;
  body: string[];
  steps: Step[];
}

interface Step {
  title: string;
  ingredients: string[];
  body: string[];
}

const parseRecipes = (str: string): Recipe[] => {
  let recipes: Recipe[] = [];

  str.split("\n").forEach((line) => {
    const titleMatch = line.match(/^#{1} (.*)/);
    const stepMatch = line.match(/^#{2} (.*)/);
    const ingredientMatch = line.match(/^[-\*] (.*)/);

    if (titleMatch) {
      // push a new recipe onto the array
      recipes.push({
        title: titleMatch[1],
        body: [],
        steps: [],
      });
    } else if (recipes.length > 0) {
      const recipe = recipes[recipes.length - 1];

      if (stepMatch) {
        // push a step onto the last recipe
        recipe.steps.push({
          title: stepMatch[1],
          ingredients: [],
          body: [],
        });
      } else if (recipe.steps.length == 0) {
        // no steps parsed yet, push onto recipe body
        recipe.body.push(line);
      } else {
        const step = recipe.steps[recipe.steps.length - 1];

        // push ingredient or body onto the last step
        if (ingredientMatch) {
          step.ingredients.push(ingredientMatch[1]);
        } else {
          step.body.push(line);
        }
      }
    }
  });

  return recipes;
};

export default parseRecipes;