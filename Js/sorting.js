import { displayTags } from "./script.js";

export function applianceTriage(recipes) {
  console.log(displayTags);
  let selectedAppliances = [];
  displayTags.forEach((tag) => {
    if (tag.className.includes("appliance")) {
      selectedAppliances.push(tag.innerHTML);
    }
  });
  let result = recipes.filter((recipe) =>
    recipe.appliance.includes(selectedAppliances)
  );

  return result;
}

export function ingredientTriage(recipes) {
  let selectedIngredients = [];

  displayTags.forEach((tag) => {
    if (tag.className.includes("ingredient")) {
      selectedIngredients.push(tag.innerHTML);
    }
  });
  if (selectedIngredients.length == 0) {
    return recipes;
  }

  let result = recipes.filter((recipe) => {
    const ingredients = [];
    recipe.ingredients.forEach((ingredient) => {
      ingredients.push(ingredient.ingredient);
    });
    let okay = true;
    selectedIngredients.forEach((ingredient) => {
      okay = okay && ingredients.includes(ingredient);
    });
    return okay;
  });

  return result;
}

export function ustensilTriage(recipes) {
  let selectedUstensils = [];
  displayTags.forEach((tag) => {
    if (tag.className.includes("ustensil")) {
      selectedUstensils.push(tag.innerHTML);
    }
  });
  // console.log(selectedUstensils);
  if (selectedUstensils.length == 0) {
    return recipes;
  }

  let result = recipes.filter((recipe) => {
    const ustensils = recipe.ustensils;
    let okay = true;
    selectedUstensils.forEach((ustensil) => {
      okay = okay && ustensils.includes(ustensil);
    });
    return okay;
  });

  return result;

  //prends les ustensiles sélectionnés
  //filtre le tableau des recettes par rapport aux ustensiles selectionnés
  // return tableau trié
}
