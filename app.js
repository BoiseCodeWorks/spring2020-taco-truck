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
function orderFood(foodName) {
  document.getElementById('order-list')
  console.log(`You are in orderFood ${foods[foodName].name}`);

}