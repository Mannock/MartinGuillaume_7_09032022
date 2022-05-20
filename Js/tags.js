import { displayTags } from "./script.js";
import { orchestreur } from "./script.js";
import { uniqueIngredient } from "./dropdowns.js";

let tagsContainer = document.querySelector(
  ".menuNav--buttons-selected-container"
);
// function closeTags
let tagsIngredients = [];
let tagsAppliances = [];
let tagsUstensils = [];

export function addTaggedIngredientsToArray() {
  const ingredientsResult = document.querySelectorAll(".ingredient");
  ingredientsResult.forEach((ing) => {
    ing.addEventListener("click", (e) => {
      tagsIngredients.push(ing.innerHTML);
      console.log(tagsIngredients);
      displayTagsIngredients();
      // closeTagsIngredients();
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
    // console.log(tag);
    tag.addEventListener("click", (e) => closeTagsIngredients(index));
  });
}
function closeTagsIngredients(index) {
  console.log(index);
  tagsIngredients.splice(index, 1);
  displayTagsIngredients();
  orchestreur();
}

function displayTagsAppliance() {}
function closeTagsAppliance(index) {}
function displayTagsUstensils() {}
function closeTagsUstensils(index) {}

export function displayTagsAbove() {
  // console.log(uniqueIngredient);

  tagsContainer.innerHTML = displayTags
    .map((el, index) => {
      // console.log(el.className);
      if (el.className.includes("ingredient")) {
        return `
      <button onclick="closeTag(${index})" class="menuNav--buttonTagSelected ingredients">
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

export function closeTag(index) {
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
        // juste récupérer l'index de l'élément sur lequel on clique
        // en créant l'élément, lui passer l'index. Récupérer l'index au clic.
      }
      orchestreur();
    });
  });
}
