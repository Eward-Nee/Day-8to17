/*Array of objects*/

const Fruits = [
    { Name: `Apple`, color: `Red`, Calories: 95 },
    { Name: `Pear`, color: `Green`, Calories: 87 },
    { Name: `Banana`, color: `Yellow`, Calories: 106 },
    { Name: `Watermelon`, color: `Green`, Calories: 38 },
    { Name: `Grape`, color: `Green`, Calories: 5 }] // objects in {}

/*
for (let i = 0; i < Fruits.length; i++) {
    alert(`Name: ${Fruits[i].Name}, Color: ${Fruits[i].color}, Amount of Calories per 100g: ${Fruits[i].Calories}`);

}
*/

// For each:
/*
Fruits.forEach(Fruits => alert(Fruits.Name))
*/

// Map method (New array based on old array)
/*
const FruitsNames = Fruits.map(Fruits => Fruits.Name)

FruitsNames.forEach(FruitsNames => {
    alert(FruitsNames)
});
*/

// Filter: New array where condition is met
/*
const GreenFruits = Fruits.filter(Fruits => Fruits.color === `Green`);
GreenFruits.forEach(GreenFruits => {
    console.log(GreenFruits)
});
*/
// Reduce(): Stores one array only

//Terminary operator: condition?True:false

const MaxFruit = Fruits.reduce((max, Fruits) => Fruits.Calories > max.Calories
    ? Fruits : max);

const LeastFruit = Fruits.reduce((min, Fruits) => Fruits.Calories < min.Calories
    ? Fruits : min);

console.log(LeastFruit)
