const vegan = ["🥝", "🥝", "🥝", "🥝", "🍔", "🥝"]
const isVegan = vegan.every((item) => item === "🥝")

console.log(isVegan); // al no ser todos 🥝 devuelve false



const someIsVegan = vegan.some((item) => item === "🥝")
console.log(someIsVegan)



