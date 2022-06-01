import { displayTags } from "./script.js";
import { orchestreur } from "./script.js";
import { uniqueIngredient } from "./dropdowns.js";

let tagsContainer = document.querySelector(
  ".menuNav--buttons-selected-container"
);
// function closeTags
export let tagsIngredients = [];
export let tagsAppliances = [];
export let tagsUstensils = [];

export function addTaggedIngredientsToArray() {
  const ingredientsResult = document.querySelectorAll(".ingredient");
  ingredientsResult.forEach((ing) => {
    ing.addEventListener("click", (e) => {
      tagsIngredients.push(ing.innerHTML);
      console.log(tagsIngredients);
      displayTagsIngredients();
      orchestreur();
    });
  });
}

export function displayTagsIngredients() {
  console.log(tagsIngredients);
  tagsContainer.innerHTML = tagsIngredients
    .map((el, index) => {
      return `
    <button class=" menuNav--buttonTagSelected ingredientTag">
    <p>${el}</p>
    <img
    class="menuNav--buttonTagSelected__crossClose"
    src="./img/cross-close.svg"
    alt="supprimer le tags"
    />
    </button>
    `;
    })
    .join("");
  document.querySelectorAll(".ingredientTag").forEach((tag, index) => {
    tag.addEventListener("click", (e) => closeTagsIngredients(index));
  });
}

function closeTagsIngredients(index) {
  console.log(index);
  tagsIngredients.splice(index, 1);
  displayTagsIngredients();
  orchestreur();
}

export function addTaggedAppliancesToArray() {
  const appliancesResult = document.querySelectorAll(".appliance");
  appliancesResult.forEach((appliance) => {
    appliance.addEventListener("click", (e) => {
      tagsAppliances.push(appliance.innerHTML);
      console.log(tagsAppliances);
      displayTagsAppliances();
      // closeTagsIngredients();
      orchestreur();
    });
  });
}

export function displayTagsAppliances() {
  console.log(tagsAppliances);
  tagsContainer.innerHTML += tagsAppliances
    .map((el, index) => {
      return `
    <button class=" menuNav--buttonTagSelected applianceTag">
    <p>${el}</p>
    <img
    class="menuNav--buttonTagSelected__crossClose"
    src="./img/cross-close.svg"
    alt="supprimer le tags"
    />
    </button>
    `;
    })
    .join("");
  document.querySelectorAll(".applianceTag").forEach((tag, index) => {
    tag.addEventListener("click", (e) => closeTagsAppliances(index));
  });
}

function closeTagsAppliances(index) {
  console.log(index);
  tagsAppliances.splice(index, 1);
  displayTagsAppliances();
  orchestreur();
}

export function addTaggedUstensilsToArray() {
  const ustensilsResult = document.querySelectorAll(".ustensil");
  ustensilsResult.forEach((ust) => {
    ust.addEventListener("click", (e) => {
      tagsUstensils.push(ust.innerHTML);
      displayTagsUstensils();
      orchestreur();
    });
  });
}

export function displayTagsUstensils() {
  tagsContainer.innerHTML += tagsUstensils
    .map((el, index) => {
      return `
    <button class=" menuNav--buttonTagSelected ustensilTag">
    <p>${el}</p>
    <img
    class="menuNav--buttonTagSelected__crossClose"
    src="./img/cross-close.svg"
    alt="supprimer le tags"
    />
    </button>
    `;
    })
    .join("");
  document.querySelectorAll(".ustensilTag").forEach((tag, index) => {
    tag.addEventListener("click", (e) => closeTagsUstensils(index));
  });
}

function closeTagsUstensils(index) {
  console.log(index);
  tagsUstensils.splice(index, 1);
  displayTagsUstensils();
  orchestreur();
}

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
