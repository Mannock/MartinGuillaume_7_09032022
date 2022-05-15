import { displayTags } from "./script.js";
import { orchestreur } from "./script.js";

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

// function closeTags
let tagIngredients = [];
let tagAppliances = [];
let tagUstensils = [];

function displayTagsIngredients() {}
function closeTagsIngredients(index) {}
function displayTagsAppliance() {}
function closeTagsAppliance(index) {}
function displayTagsUstensils() {}
function closeTagsUstensils(index) {}

export function displayTagsAbove() {
  let tagsContainer = document.querySelector(
    ".menuNav--buttons-selected-container"
  );

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
