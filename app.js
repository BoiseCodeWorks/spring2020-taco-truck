//order food
let foods = {
  taco: {
    name: "Taco",
    ingredients: "meat, cheese, lettuce",
    spiciness: "very"
  },
  burrito: {
    name: "Burrito",
    ingredients: "meat, cheese, lettuce",
    spiciness: "very"
  },
  enchilada: {
    name: "Enchilada",
    ingredients: "meat, cheese, lettuce",
    spiciness: "very"
  }
}

let orderElem = document.getElementById('order-list')

function orderFood(foodName) {

  orderElem.innerHTML = (`
    <h3>You ordered this: ${foods[foodName].name}</h3>
    <h4> with ingredients: ${foods[foodName].ingredients}</h4>
    <h4> with spice level: ${foods[foodName].spiciness}</h4>
  `);

  console.log(`You are in orderFood ${foods[foodName].name}`);

}
function drawFood() {

  setTimeout(function () {

  }, 3000);
}