// import { recipes } from "./recipes.js";
import { fetchRecipes } from "./data.js";
import { Recipe } from "./Recipe.js";

//Fetch json
// /créer class receipt et afficher la classe
// let selectedAppliances = [];
let result = [];

const recipeList = await fetchRecipes();
const ingredientDrop = document.getElementsByClassName("dropdown-ingredients");
console.log(ingredientDrop);
let searchResult = document.getElementById("recipeContainer");

let displayTags = [];

console.log(recipeList.data);

let allRecipes = [];

// MAIN SEARCH

// ------------LISTENER
let searchbar = document.getElementById("search");
searchbar.addEventListener("input", (e) => {
  let search = e.target.value.toLowerCase();
  console.log(search);

  orchestreur(search);
  // if (search.length > 2) {
  //   // return differentRecipes;
  //   // mainSearch(search);
  //   orchestreur(search);
  // }
});

function mainSearch(search) {
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

let tryout = mainSearch(allRecipes);
console.log(tryout);

//------------------------------------------------------------//

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

console.log(allRecipes);
// const orderData = data.sort((a, b) => {
//   if (a.name.toLowerCase() < b.name.toLowerCase()) {
//     return -1;
//   }
//   if (a.name.toLowerCase() > b.name.toLowerCase()) {
//     return 1;
//   }
//   return 0;
// });

// console.log(dataArray);

function displayRecipe(data) {
  const recipeContainer = document.getElementById("recipeContainer");
  recipeContainer.innerHTML = data
    .map((rec) => {
      return rec.render();
    })
    .join("");
}

function displaySingleRecipe(data) {
  const recipeContainer = document.getElementById("recipeContainer");
  recipeContainer.innerHTML = data.render();
}

// displayRecipe(allRecipes);

// console.log(allRecipes instanceof Recipe);
// console.log(allRecipes[0] instanceof Recipe);

// function ingredients(data) {
//   data.forEach((el) => {
//     return el.createIngredientsArray();
//   });
// }

// ingredients(allRecipes);

// let ingredientsList = [];
// let appliancesList = [];
// let ustensilsList = [];

//On pourra récupérer dans les recettes triées

// function getAllItems() {
//   allRecipes.forEach((recipe) => {
//     recipe.ingredients.forEach((ingredient) => {
//       ingredientsList.push(ingredient.ingredient);
//     });
//     appliancesList.push(recipe.appliance);
//     ustensilsList.push(...recipe.ustensils);
//   });
// }
// getAllItems();

// let uniqueIngredients = [...new Set(ingredientsList)];
// // console.log(uniqueIngredients);
// let uniqueAppliances = [...new Set(appliancesList)];
// let uniqueUstensils = [...new Set(ustensilsList)];
// console.log(uniqueAppliances);
// console.log(uniqueUstensils);

// function addIngredientsList2(array) {
//   // console.log(uniqueIngredients);
//   let dropdown = document.getElementById("dropdown-ingredients");
//   array.forEach((ingredient) => {
//     dropdown.innerHTML += `
//     <li class="name-of-item " tabindex="0">${ingredient}</li>
//     `;
//   });
// }
// function addUstensilsList() {
//   // console.log(uniqueIngredients);
//   let dropdown = document.getElementById("dropdown-ustensils");
//   uniqueUstensils.forEach((ust) => {
//     dropdown.innerHTML += `
//     <li class="name-of-item ustensil" tabindex="0">${ust}</li>
//     `;
//   });
// }

// function addIngredientsList() {
//   // console.log(uniqueIngredients);
//   let dropdown = document.getElementById("dropdown-ingredients");
//   uniqueIngredients.forEach((ingredient) => {
//     dropdown.innerHTML += `
//     <li class="name-of-item ingredient " tabindex="0">${ingredient}</li>
//     `;
//   });
// }

// function addAppliancesList() {
//   // console.log(uniqueIngredients);
//   let dropdown = document.getElementById("dropdown-appliances");
//   uniqueAppliances.forEach((appliance) => {
//     dropdown.innerHTML += `
//     <li class="name-of-item appliance" tabindex="0">${appliance}</li>
//     `;
//   });
// }

// addIngredientsList();
// addUstensilsList();
// addAppliancesList();

function displayDropdowns(recipes) {}

function addIngredientsToList(recipes) {
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

function addAppliancesToList(recipes) {
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

function addUstensilsToList(recipes) {
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

// ------------------DROPDOWN MENU--------------------------

function openDropdownIngredients() {
  let ingredientButton = document.getElementById("container-1_inactive");
  let ingredientDropdownList = document.getElementById("container-1_active");
  ingredientButton.addEventListener("click", (e) => {
    ingredientButton.style.display = "none";
    ingredientDropdownList.style.display = "block";
  });
  closeDropdownIngredients();
}

function openDropdownAppliances() {
  let applianceButton = document.getElementById("container-2_inactive");
  let applianceDropdownList = document.getElementById("container-2_active");
  applianceButton.addEventListener("click", (e) => {
    applianceButton.style.display = "none";
    applianceDropdownList.style.display = "block";
  });
  closeDropdownAppliances();
}

function openDropdownUstensils() {
  let ustensilsButton = document.getElementById("container-3_inactive");
  let ustensilsDropdownList = document.getElementById("container-3_active");
  ustensilsButton.addEventListener("click", (e) => {
    ustensilsButton.style.display = "none";
    ustensilsDropdownList.style.display = "block";
  });
  closeDropdownUstensils();
}

function closeDropdownIngredients() {
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

function closeDropdownAppliances() {
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

function closeDropdownUstensils() {
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

openDropdownIngredients();
openDropdownAppliances();
openDropdownUstensils();
// -------------------------ADD TAGS UP-----------------------------------

function addListenerToTags() {
  let arrayOfItems = [...document.querySelectorAll(".name-of-item")];
  arrayOfItems.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (!displayTags.some((e) => e.innerHTML === el.innerHTML)) {
        displayTags.push(el);
        orchestreur();
      }
    });
  });
}

function displayTagsAbove() {
  let tagsContainer = document.querySelector(
    ".menuNav--buttons-selected-container"
  );

  tagsContainer.innerHTML = displayTags
    .map((el) => {
      // console.log(el.className);
      if (el.className.includes("ingredient")) {
        return `
        <button class="menuNav--buttonTagSelected ingredients">
        <p>${el.innerHTML}</p>
        <img
        class="menuNav--buttonTagSelected__crossClose"
        src="./img/cross-close.svg"
        alt="supprimer le tags"
        />
        </button>
        `;
      } else if (el.className.includes("appliance")) {
        return `
        <button class="menuNav--buttonTagSelected appliance">
        <p>${el.innerHTML}</p>
        <img
        class="menuNav--buttonTagSelected__crossClose"
        src="./img/cross-close.svg"
        alt="supprimer le tags"
        />
        </button>
        `;
      } else {
        return `
        <button class="menuNav--buttonTagSelected ustensil">
        <p>${el.innerHTML}</p>
        <img
        class="menuNav--buttonTagSelected__crossClose"
        src="./img/cross-close.svg"
        alt="supprimer le tags"
        />
        </button>
        `;
      }
    })
    .join("");

  closeTag();

  addListenerToTags();
}

function applianceTriage(recipes) {
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

  //prends les ingrédients sélectionnés
  //filtre le tableau des recettes par rapport aux ingrédients selectionnés
  // return tableau DE RECETTES trié
  // orchestreur();
}

function ingredientTriage(recipes) {
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

  //prends les appareils sélectionnés
  //filtre le tableau des recettes par rapport aux ingrédients selectionnés
  // return tableau trié
}

function ustensilTriage(recipes) {
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

function orchestreur(search) {
  //
  // if recipe.length ==0
  console.log(search);
  console.log(typeof search);
  const searchResults = mainSearch(search);
  console.log(searchResults);

  if (searchResults.length == 0) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "block";
    displayRecipe(searchResults);
  } else {
    const errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "none";
    // orchestreur(searchResults);

    // const mainTriage = mainSearch(allRecipes);
    // console.log(mainTriage);
    //1 : 1e tri --> tableau des recettes ingrédients
    // const tri1 = applianceTriage(allRecipes);
    const applianceTriageResult = applianceTriage(searchResults);
    // console.log(applianceTriageResult);

    // ingredientTriage(applianceTriageResult);
    // ustensilTriage(applianceTriageResult);
    //2 : 2e tri (à partir du 1e tri) appareils
    // const tri2 = ingredientTriage(tri1);

    const ustensilTriageResult = ustensilTriage(applianceTriageResult);
    // console.log(ustensilTriageResult);

    //3 : 3e tri (à partir du 2e tri)ustensiles
    // const tri3 = ustensilTriage(tri2);
    const ingredientTriageResult = ingredientTriage(ustensilTriageResult);
    // console.log(ingredientTriageResult);

    //4: affichage des recettes triées (à partir du 3e tri)
    displayRecipe(ingredientTriageResult);

    //6: affichage des ingrédients à partir du 3e tri
    // addIngredientsList(tri3);

    //6: affichage des appareils   à partir du 3e tri
    // addIngredientsAppareils(tri3);

    addIngredientsToList(ingredientTriageResult);
    addAppliancesToList(ingredientTriageResult);
    addUstensilsToList(ingredientTriageResult);

    displayTagsAbove();
    // addTagsToArray();

    //6: affichage des ustensiles   à partir du 3e tri
    // addIngredientsUstensils(tri3);
  }
}

function closeTag() {
  let crosses = document.querySelectorAll(
    ".menuNav--buttonTagSelected__crossClose"
  );
  crosses.forEach((cross) => {
    cross.addEventListener("click", (e) => {
      let element = cross.parentNode.firstChild.nextSibling.innerHTML;
      for (var i = 0; i < displayTags.length; i++) {
        if (displayTags[i].innerHTML === element) {
          displayTags.splice(i, 1);
        }
      }
      orchestreur();
    });
  });
}

const searchInput = document.getElementById("ingredients-input");

function searchThroughButton() {
  searchInput.addEventListener("input", (e) => {
    const searchedElement = e.target.value.toLowerCase();
    console.log(searchedElement);
    const filteredArray = uniqueIngredients.filter((el) =>
      el.toLowerCase().includes(searchedElement)
    );
  });
}

// searchThroughButton();

// addTagsToArray();
