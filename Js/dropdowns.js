import { displayTags } from "./script.js";

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

export function addIngredientsToList(recipes) {
  let dropdown = document.getElementById("dropdown-ingredients");
  dropdown.innerHTML = "";

  let ingredients = [];
  // console.log(recipes);
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      ingredients.push(ingredient.ingredient);
    });
  });
  let uniqueIngredient = [...new Set(ingredients)];

  let tags = [];
  displayTags.forEach((tag) => {
    tags.push(tag.innerHTML);
  });

  uniqueIngredient.forEach((ingredient) => {
    if (!tags.includes(ingredient)) {
      dropdown.innerHTML += `
        <li class="name-of-item ingredient " tabindex="0">${ingredient}</li>
        `;
    }
  });
}

export function addAppliancesToList(recipes) {
  let dropdown = document.getElementById("dropdown-appliances");
  dropdown.innerHTML = "";

  let appliances = [];
  recipes.forEach((recipe) => {
    appliances.push(recipe.appliance);
  });
  let uniqueAppliance = [...new Set(appliances)];

  let tags = [];
  displayTags.forEach((tag) => {
    tags.push(tag.innerHTML);
  });

  uniqueAppliance.forEach((appliance) => {
    // console.log(appliance);
    if (!tags.includes(appliance)) {
      dropdown.innerHTML += `
        <li class="name-of-item appliance" tabindex="0">${appliance}</li>
        `;
    }
  });
}

export function addUstensilsToList(recipes) {
  let dropdown = document.getElementById("dropdown-ustensils");
  dropdown.innerHTML = "";

  let ustensils = [];
  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      ustensils.push(ustensil);
    });
  });
  let uniqueUstensil = [...new Set(ustensils)];

  let tags = [];
  displayTags.forEach((tag) => {
    tags.push(tag.innerHTML);
  });

  uniqueUstensil.forEach((ustensil) => {
    if (!tags.includes(ustensil)) {
      dropdown.innerHTML += `
        <li class="name-of-item ustensil " tabindex="0">${ustensil}</li>
        `;
    }
  });
}

//------------------
