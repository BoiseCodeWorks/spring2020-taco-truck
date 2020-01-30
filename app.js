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

  orderElem.textContent = (`
    <h3>You ordered this: ${foods[foodName].name}</h3>
    
  `);

  console.log(`You are in orderFood ${foods[foodName].name}`);

}