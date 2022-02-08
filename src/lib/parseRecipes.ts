interface Recipe {
  title: string;
  body: string;
}

const parseRecipes = (str: string): Recipe[] => {
  let recipes: Recipe[] = [];

  str.split("\n").forEach((line) => {
    const titleMatch = line.match(/^#{1} (.*)/);

    if (titleMatch) {
      recipes.push({
        title: titleMatch[1],
        body: "",
      });
    } else if (recipes.length > 0) {
      const recipe = recipes[recipes.length - 1];
      recipe.body += line;
    }
  });

  return recipes;
};

export default parseRecipes;
