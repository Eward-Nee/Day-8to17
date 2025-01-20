/* 
spread operator: ...

allows an iterable like a string or array to be expanded into several elements (unpacks elements)
*/

let numbers = [1, 2, 3, 4, 5]
let max = Math.max(...numbers) // must use te spread operator to brake down the array, cause "[1,2,3,4,5]" is NaN
let min = Math.min(...numbers)


//alert(min)

let username = `John Dog`
let letters = [...username].join(`-`)

//alert(letters)

// You can also make a exact copy of a array, or join 2 togetherr using the spread operator.

let fruits = [`mango`, `apple`, `banana`]
let meat = [`T-Bone`, `pork-ribs`, `Fillet`]

let foods = [...fruits, ...meat, `eggs`, `milk`]

alert(foods)