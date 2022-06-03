import { tagsIngredients, tagsAppliances, tagsUstensils } from "./tags.js";

export function applianceTriage(recipes) {
  let selectedAppliances = [];

  tagsAppliances.forEach((tag) => {
    selectedAppliances.push(tag);
  });

  if (selectedAppliances.length == 0) {
    return recipes;
  }
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

  tagsIngredients.forEach((tag) => {
    selectedIngredients.push(tag);
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

  tagsUstensils.forEach((tag) => {
    selectedUstensils.push(tag);
  });
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
}
