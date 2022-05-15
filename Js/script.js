import { fetchRecipes } from "./data.js";
import { Recipe } from "./Recipe.js";
import { mainSearch } from "./search.js";
import { displayTagsAbove } from "./tags.js";
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
  addIngredientsToList,
  addAppliancesToList,
  addUstensilsToList,
} from "./dropdowns.js";

let search = "";

const recipeList = await fetchRecipes();
export let displayTags = [];
export let allRecipes = [];

console.log(recipeList.data);

// ------------LISTENER

let searchbar = document.getElementById("search");

searchbar.addEventListener("input", (e) => {
  console.log(search);
  search = e.target.value.toLowerCase();
  if (search.length > 2) {
    orchestreur();
  }
});

createRecipe(recipeList.data);

function createRecipe(data) {
  allRecipes = data.map((el) => {
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
  orchestreur();
}

openDropdownIngredients();
openDropdownAppliances();
openDropdownUstensils();

export function orchestreur() {
  console.log(search);
  // console.log(searchTest);

  // console.log(typeof search);
  const searchResults = mainSearch(search);
  console.log(searchResults);

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

    // 5: affichage des dropdowns à partir du 3e tri
    addIngredientsToList(ingredientTriageResult);
    addAppliancesToList(ingredientTriageResult);
    addUstensilsToList(ingredientTriageResult);
    searchThroughButton(ingredientTriageResult);

    displayTagsAbove();
  }
}

function searchThroughButton() {
  const searchInput = document.getElementById("ingredients-input");
  searchInput.addEventListener("input", (e) => {
    const searchedElement = e.target.value.toLowerCase();
    console.log(searchedElement);

    // const filteredArray = uniqueIngredient.filter((el) =>
    //   el.toLowerCase().includes(searchedElement)
    // );
  });
}

// const searchInput = document.getElementById("ingredients-input");

// function searchThroughButton() {
//   searchInput.addEventListener("input", (e) => {
//     const searchedElement = e.target.value.toLowerCase();
//     console.log(searchedElement);
//     const filteredArray = uniqueIngredients.filter((el) =>
//       el.toLowerCase().includes(searchedElement)
//     );
//   });
// }

// searchThroughButton();

// addTagsToArray();
