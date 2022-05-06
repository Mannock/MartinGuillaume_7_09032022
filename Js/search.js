// ---------------------  MAIN SEARCH

import { allRecipes } from "./script.js";

export function mainSearch(search) {
  console.log(typeof search);
  if (search === undefined || search.length < 3) {
    return allRecipes;
  }

  let searchResults = allRecipes.filter(
    (recipe) =>
      recipe.description.toLowerCase().includes(search) ||
      recipe.name.toLowerCase().includes(search) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(search)
      )
  );
  console.log(searchResults);
  console.log(searchResults.length);

  return searchResults;
}

// ---------------------  DROPDOWN SEARCH
