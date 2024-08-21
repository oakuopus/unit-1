const drinks = [
  "Soda",
  "Coffee",
  "Lemonade",
  "Iced tea",
  "Juice",
  "Milkshake",
  "Water",
  "Milk",
  "Beer",
  "Martini",
  "Margarita",
  "Wine",
  "Daiquari",
];

let mDrinks = drinks.filter((drink) => drink.startsWith("M"));
console.log(mDrinks);
// Expected Outcome
// mDrinks = ['Milkshake', 'Milk', 'Martini', 'Margarita']
// I changed it to filter through and only allow the drinks that start with "M", this is easily done with the .startsWith() method.
/////////////////////////////////////////////////////////////////////
const colors = [
  "red",
  "black",
  "white",
  "blue",
  "purple",
  "orange",
  "green",
  "yellow",
];
let newArray = colors.map((color, index) => {
  return {color: color,  index: index}
});
console.log(newArray);
// I created the parameters color and index, color being the current value and index being the index or the current value. From there it is very simple to return a new array of objects with the color and index properties.


// Expected Outcome
// [
//   { color: "red", index: 0 },
//   { color: "black", index: 1 },
//   { color: "white", index: 2 },
//   { color: "blue", index: 3 },
//   { color: "purple", index: 4 },
//   { color: "orange", index: 5 }
// ];

///////////////////////////////////////////////////////////
const pets = ["snake", "dog", "cat", "fish", "lizard", "bird", "rabbit"];

let upPets = pets.map((pet) => {
  return pet.charAt(0).toUpperCase() + pet.slice(1);
});
console.log(upPets);
// Expected Outcome
// pets = ["Snake", "Dog", "Cat", "Fish", "Lizard", "Bird", "Rabbit"];
///////////////////////////////////////////////////////////////

// I took the first charachter of each pet, and capitalized it, and then added the rest of the characters to the capitalized letter.

