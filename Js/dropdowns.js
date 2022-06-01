import { displayTags, orchestreur } from "./script.js";
import { displayTagsIngredients, addTaggedIngredientsToArray } from "./tags.js";

// -------------------DROPDOWN MENUS

export function openDropdownIngredients() {
  let ingredientButton = document.getElementById("container-1_inactive");
  let ingredientDropdownList = document.getElementById("container-1_active");
  ingredientButton.addEventListener("click", (e) => {
    ingredientButton.style.display = "none";
    ingredientDropdownList.style.display = "block";
  });
  closeDropdownIngredients();
}

export function openDropdownAppliances() {
  let applianceButton = document.getElementById("container-2_inactive");
  let applianceDropdownList = document.getElementById("container-2_active");
  applianceButton.addEventListener("click", (e) => {
    applianceButton.style.display = "none";
    applianceDropdownList.style.display = "block";
  });
  closeDropdownAppliances();
}

export function openDropdownUstensils() {
  let ustensilsButton = document.getElementById("container-3_inactive");
  let ustensilsDropdownList = document.getElementById("container-3_active");
  ustensilsButton.addEventListener("click", (e) => {
    ustensilsButton.style.display = "none";
    ustensilsDropdownList.style.display = "block";
  });
  closeDropdownUstensils();
}

export function closeDropdownIngredients() {
  let ingredientButton = document.getElementById("container-1_inactive");
  let ingredientDropdownList = document.getElementById("container-1_active");
  document.addEventListener("click", (e) => {
    if (
      e.target.parentNode !== ingredientButton &&
      e.target.parentNode !== ingredientDropdownList
    ) {
      ingredientButton.style.display = "block";
      ingredientDropdownList.style.display = "none";
    }
  });
}

export function closeDropdownAppliances() {
  let applianceButton = document.getElementById("container-2_inactive");
  let applianceDropdownList = document.getElementById("container-2_active");
  document.addEventListener("click", (e) => {
    if (
      e.target.parentNode !== applianceButton &&
      e.target.parentNode !== applianceDropdownList
    ) {
      applianceButton.style.display = "block";
      applianceDropdownList.style.display = "none";
    }
  });
}

export function closeDropdownUstensils() {
  let ustensilsButton = document.getElementById("container-3_inactive");
  let ustensilsDropdownList = document.getElementById("container-3_active");
  document.addEventListener("click", (e) => {
    if (
      e.target.parentNode !== ustensilsButton &&
      e.target.parentNode !== ustensilsDropdownList
    ) {
      ustensilsButton.style.display = "block";
      ustensilsDropdownList.style.display = "none";
    }
  });
}

// ------------------ADD ITEMS TO LIST
let tags = [];
let dropdownIngredients = document.getElementById("dropdown-ingredients");
let dropdownAppliances = document.getElementById("dropdown-appliances");
let dropdownUstensils = document.getElementById("dropdown-ustensils");

export let ingredients = [];
export let uniqueIngredient = [];
export let appliances = [];
export let uniqueAppliance = [];
export let ustensiles = [];
export let uniqueUstensil = [];

export function addIngredientsToList(recipes) {
  dropdownIngredients.innerHTML = "";
  ingredients = [];
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      ingredients.push(ingredient.ingredient);
    });
  });
  uniqueIngredient = [...new Set(ingredients)];
  displayIngredients(uniqueIngredient);
}

export function displayIngredients(tableauIngredients) {
  // dropdownIngredients.innerHTML = "";
  tableauIngredients.forEach((ingredient) => {
    {
      dropdownIngredients.innerHTML += `
        <li class="name-of-item ingredient " tabindex="0">${ingredient}</li>
        `;
    }
  });
}

export function displayDropdownIngredients(dropdownSearch) {
  dropdownIngredients.innerHTML = "";
  dropdownSearch.forEach((ingredient) => {
    dropdownIngredients.innerHTML += `
          <li class="name-of-item ingredient " tabindex="0">${ingredient}</li>
          `;
  });
}

export function addAppliancesToList(recipes) {
  dropdownAppliances.innerHTML = "";
  appliances = [];
  recipes.forEach((recipe) => {
    appliances.push(recipe.appliance);
  });
  uniqueAppliance = [...new Set(appliances)];
  displayAppliances(uniqueAppliance);
}

export function displayAppliances(tableauAppliances) {
  // console.log(tags);
  tableauAppliances.forEach((appliance) => {
    {
      dropdownAppliances.innerHTML += `
        <li class="name-of-item appliance " tabindex="0">${appliance}</li>
        `;
    }
  });
}

export function addUstensilsToList(recipes) {
  dropdownUstensils.innerHTML = "";
  ustensiles = [];

  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      ustensiles.push(ustensil);
    });
  });
  let uniqueUstensil = [...new Set(ustensiles)];
  displayUstensils(uniqueUstensil);
}

export function displayUstensils(tableauUstensils) {
  tableauUstensils.forEach((ust) => {
    {
      dropdownUstensils.innerHTML += `
        <li class="name-of-item ustensil " tabindex="0">${ust}</li>
        `;
    }
  });
}

//------------------DROPDOWN SEARCH

export function searchThroughButton() {
  const searchInput = document.getElementById("ingredients-input");
  searchInput.addEventListener("input", (e) => {
    const searchedElement = e.target.value.toLowerCase();
    console.log(searchedElement);

    const filteredArray = uniqueIngredient.filter((el) =>
      el.toLowerCase().includes(searchedElement)
    );
    console.log(filteredArray);
    displayDropdownIngredients(filteredArray);
    addTaggedIngredientsToArray();
  });
}
