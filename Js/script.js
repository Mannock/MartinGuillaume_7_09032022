import { recipes } from "./recipes.js";

//Fetch json
// /créer class receipt et afficher la classe

let dataArray = orderList(recipes);
const searchResult = document.querySelector(".results");
console.log(searchResult);

function orderList(data) {
  const orderData = data.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  return orderData;
}

console.log(dataArray);

createRecipeList(dataArray);

function createRecipeList(recipes) {
  recipes.forEach((recipe) => {
    const cardItem = document.createElement("div");
    cardItem.setAttribute(
      "class",
      "col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-5"
    );

    cardItem.innerHTML = `
    <div class="card">
    <img
      src="https://picsum.photos/300/150"
      class="card-img-top"
      alt="..."
      style="height:15rem"
    />
    <div class="card-body overflow-auto" style="height:15rem">
      <div class="row">
        <div class="col-6" >
        <h5 class="card-title">${recipe.name}</h5>
        </div>
        <div class="col-6 d-flex align-center justify-content-end">
            <div class="px-2 py-0">
                <img src="./img/time-icon.png" class"align-top" alt="time icon">
            </div>
        <h5> ${recipe.time} min</h5>
        </div>
      </div>
      <div class="row" >
        <div class="col-6">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
        </div>
        <div class="col-6 overflow-auto">
          <p class="card-text ">
            ${recipe.description}
          </p>
        </div>
      </div>
    </div>
  </div>
        
        `;
    searchResult.appendChild(cardItem);
  });
}
