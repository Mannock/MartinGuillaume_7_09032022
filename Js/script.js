import { fetchRecipes } from "./data.js";
import { Recipe } from "./Recipe.js";
import { mainSearch } from "./search.js";
import {
  addTaggedIngredientsToArray,
  addTaggedAppliancesToArray,
  addTaggedUstensilsToArray,
} from "./tags.js";
import { displayRecipe } from "./Recipe.js";
import {
  applianceTriage,
  ingredientTriage,
  ustensilTriage,
} from "./sorting.js";
import {
  openDropdownAppliances,
  openDropdownIngredients,
  openDropdownUstensils,
  searchThroughIngredientButton,
  searchThroughApplianceButton,
  searchThroughUstensilButton,
  addIngredientsToList,
  addAppliancesToList,
  addUstensilsToList,
} from "./dropdowns.js";

let search = "";

const recipeList = await fetchRecipes();
export let displayTags = [];
export let allRecipes = [];

// ------------LISTENER

let searchbar = document.getElementById("search");

searchbar.addEventListener("input", (e) => {
  search = e.target.value.toLowerCase();
  if (search.length > 2) {
    orchestreur();
  } else {
    search = "";
    orchestreur();
  }
});

createRecipe(recipeList.data);

function createRecipe(data) {
  const newRecipes = data.map((el) => {
    return new Recipe(
      el.appliance,
      el.description,
      el.id,
      el.ingredients,
      el.name,
      el.servings,
      el.time,
      el.ustensils
    );
  });
  allRecipes = [
    ...newRecipes,
    // ...newRecipes,
    // ...newRecipes,
    // ...newRecipes,
    // ...newRecipes,
    // ...newRecipes,
    // ...newRecipes,
    // ...newRecipes,
    // ...newRecipes,
  ];
  orchestreur();
}

openDropdownIngredients();
openDropdownAppliances();
openDropdownUstensils();
searchThroughIngredientButton();
searchThroughApplianceButton();
searchThroughUstensilButton();

export function orchestreur() {
  const searchResults = mainSearch(search);

  if (searchResults.length == 0) {
    const noMatch = document.getElementById("error-message");
    noMatch.style.display = "block";
    displayRecipe(searchResults);
  } else {
    const noMatch = document.getElementById("error-message");
    noMatch.style.display = "none";

    //1 : 1e tri --> tableau des recettes ingrédients
    const applianceTriageResult = applianceTriage(searchResults);

    //2 : 2e tri (à partir du 1e tri) appareils

    const ustensilTriageResult = ustensilTriage(applianceTriageResult);

    //3 : 3e tri (à partir du 2e tri)ustensiles

    const ingredientTriageResult = ingredientTriage(ustensilTriageResult);

    //4: affichage des recettes triées (à partir du 3e tri)
    displayRecipe(ingredientTriageResult);

    // 5: affichage des dropdowns à partir du 3e tri // APPELLE function
    addIngredientsToList(ingredientTriageResult);
    addAppliancesToList(ingredientTriageResult);
    addUstensilsToList(ingredientTriageResult);

    addTaggedIngredientsToArray();
    addTaggedAppliancesToArray();
    addTaggedUstensilsToArray();
  }
}
