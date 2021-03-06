// ---------------------  MAIN SEARCH

import { allRecipes } from "./script.js";

export function mainSearch(search) {
  if (search === undefined || search.length < 3) {
    return allRecipes;
  } else {
    let searchResults = allRecipes.filter(
      (recipe) =>
        recipe.description.toLowerCase().includes(search) ||
        recipe.name.toLowerCase().includes(search) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(search)
        )
    );

    return searchResults;
  }
}

// ---------------------  DROPDOWN SEARCH
