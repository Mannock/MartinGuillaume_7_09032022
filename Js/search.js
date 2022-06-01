// ---------------------  MAIN SEARCH

import { allRecipes } from "./script.js";
// import { tagsIngredients } from "./tags.js";

// export function mainSearch(search) {
//   // console.log(typeof search);
//   if (search === undefined || search.length < 3) {
//     return allRecipes;
//   } else {
//     let searchResults = allRecipes.filter(
//       (recipe) =>
//         recipe.description.toLowerCase().includes(search) ||
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.ingredients.some((ingredient) =>
//           ingredient.ingredient.toLowerCase().includes(search)
//         )
//     );
//     console.log(searchResults);
//     console.log(searchResults.length);

//     return searchResults;
//   }
// }

export function mainSearch(search) {
  if (search === undefined || search.length < 3) {
    return allRecipes;
  } else {
    let searchResults = [];
    for (let i = 0; i < allRecipes.length; i++) {
      if (allRecipes[i].description.toLowerCase().includes(search)) {
        console.log("YES");
        searchResults.push(allRecipes[i]);
        console.log(searchResults);
      } else if (allRecipes[i].name.toLowerCase().includes(search)) {
        searchResults.push(allRecipes[i]);
      } else if (
        allRecipes[i].ingredients.some((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(search)
        )
      ) {
        searchResults.push(allRecipes[i]);
      }
      console.log(searchResults);
    }
    return searchResults;
  }
}
// ---------------------  DROPDOWN SEARCH
