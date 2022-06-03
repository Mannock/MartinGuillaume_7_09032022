import { displayTags } from "./script.js";
import { orchestreur } from "./script.js";

let tagsContainer = document.querySelector(
  ".menuNav--buttons-selected-container"
);
let ingredientsContainer = document.querySelector(".ingredients-tags");
let appliancesContainer = document.querySelector(".appareils-tags");
let ustensilssContainer = document.querySelector(".ustensils-tags");

// function closeTags
export let tagsIngredients = [];
export let tagsAppliances = [];
export let tagsUstensils = [];

export function addTaggedIngredientsToArray() {
  const ingredientsResult = document.querySelectorAll(".ingredient");
  ingredientsResult.forEach((ing) => {
    ing.addEventListener("click", (e) => {
      tagsIngredients.push(ing.innerHTML);
      displayTagsIngredients();
      orchestreur();
    });
  });
}

export function displayTagsIngredients() {
  ingredientsContainer.innerHTML = tagsIngredients
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
  tagsIngredients.splice(index, 1);
  displayTagsIngredients();
  orchestreur();
}

export function addTaggedAppliancesToArray() {
  const appliancesResult = document.querySelectorAll(".appliance");
  appliancesResult.forEach((appliance) => {
    appliance.addEventListener("click", (e) => {
      tagsAppliances.push(appliance.innerHTML);
      displayTagsAppliances();
      orchestreur();
    });
  });
}

export function displayTagsAppliances() {
  appliancesContainer.innerHTML = tagsAppliances
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
  ustensilssContainer.innerHTML = tagsUstensils
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
