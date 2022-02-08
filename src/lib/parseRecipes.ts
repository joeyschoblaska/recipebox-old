interface Recipe {
  title: string;
  body: string;
}

const parseRecipes = (str: string): Recipe[] => {
  const lines = str.split("\n");

  return [
    {
      title: lines[0],
      body: lines.slice(1).join(""),
    },
  ];
};

export default parseRecipes;
