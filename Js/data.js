export const fetchRecipes = async () => {
  const res = await fetch("Js/recipes.json");
  return res.json();
};
