export class Recipe {
  constructor(
    appliance,
    description,
    id,
    ingredients,
    name,
    servings,
    time,
    ustensils
  ) {
    this.appliance = appliance;
    this.description = description;
    this.id = id;
    this.ingredients = ingredients;
    this.name = name;
    this.servings = servings;
    this.time = time;
    this.ustensils = ustensils;
  }


  appliance() {

         
  }

  render() {
    let ingredientsList = "";

    this.ingredients.forEach((ingredient) => {
      if (ingredient.quantity) {
        if (ingredient.unit && ingredient.quantity) {
          ingredientsList += `<li><strong class = 'ingredient'>${ingredient.ingredient}</strong> : ${ingredient.quantity} ${ingredient.unit}</li>`;
        } else {
          ingredientsList += `<li><strong class = 'ingredient'>${ingredient.ingredient}</strong> : ${ingredient.quantity}</li>`;
        }
      } else {
        ingredientsList += `<li><strong class = 'ingredient'>${ingredient.ingredient}</strong></li>`;
      }
    });

    return `
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-5">
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
          <h5 class="card-title">${this.name}</h5>
          </div>
          <div class="col-6 d-flex align-center justify-content-end">
              <div class="px-2 py-0">
                  <img src="./img/time-icon.png" class"align-top" alt="time icon">
              </div>
          <h5> ${this.time} min</h5>
          </div>
        </div>
        <div class="row" >
          <div class="col-6">
            <ul class="list-group list-group-flush list-unstyled">
              ${ingredientsList}
            </ul>
          </div>
          <div class="col-6 overflow-auto">
            <p class="card-text ">
              ${this.description}
            </p>
          </div>
        </div>
      </div>
      </div>
  </div>
        
        `;
  }

  // createIngredientsArray() {
  //   let ingredientsList = [];
  //   this.ingredients.forEach((ingredient) => {
  //     ingredientsList.push(ingredient);
  //   });
  // }
}
