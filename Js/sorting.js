import { displayTags } from "./script.js";
import { tagsIngredients, tagsAppliances, tagsUstensils } from "./tags.js";

export function applianceTriage(recipes) {
  let selectedAppliances = [];
  console.log(recipes);

  tagsAppliances.forEach((tag) => {
    console.log(tag);
    selectedAppliances.push(tag);
    console.log(selectedAppliances);
  });

  if (selectedAppliances.length == 0) {
    return recipes;
  }
  console.log(recipes);
  let result = recipes.filter((recipe) => {
    const appliances = [];
    appliances.push(recipe.appliance);
    // recipe.appliance.forEach((app) => {
    //   appliances.push(app);
    // });
    let okay = true;
    selectedAppliances.forEach((appliance) => {
      okay = okay && appliances.includes(appliance);
    });
    return okay;
  });

  return result;
}

export function ingredientTriage(recipes) {
  let selectedIngredients = [];

  console.log(tagsIngredients);

  tagsIngredients.forEach((tag) => {
    console.log(tag);
    selectedIngredients.push(tag);
    console.log(selectedIngredients);
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

  console.log(tagsUstensils);

  tagsUstensils.forEach((tag) => {
    selectedUstensils.push(tag);
  });
  // console.log(selectedUstensils);
  if (selectedUstensils.length == 0) {
    return recipes;
  }

  let result = recipes.filter((recipe) => {
    const ustensils = [];
    recipe.ustensils.forEach((ust) => {
      ustensils.push(ust);
    });
    let okay = true;
    selectedUstensils.forEach((ust) => {
      okay = okay && ustensils.includes(ust);
    });
    return okay;
  });

  return result;

  // let result = recipes.filter((recipe) => {
  //   const ustensils = [];
  //   let okay = true;
  //   selectedUstensils.forEach((ustensil) => {
  //     okay = okay && ustensils.includes(ustensil);
  //   });
  //   return okay;
  // });

  // return result;

  //prends les ustensiles sélectionnés
  //filtre le tableau des recettes par rapport aux ustensiles selectionnés
  // return tableau trié
}
