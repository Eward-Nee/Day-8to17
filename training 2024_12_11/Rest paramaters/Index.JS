// Rest paramaters: (...rest) allows a funtion work with a var number by bundling them into an array
//used as paramaters

//Spread: expands array into seperate elements
//rest: bundles seperate elements into an array
/*
const food1 = `apple`
const food2 = `milk`
const food3 = `meat`
const food4 = `serial`
const food5 = `oats`

function menu(...foods) { //rest parameter
    // console.log(...foods) //spread operator
    return foods
}

//menu(food1, food2, food3, food4, food5)

const foods = menu(food1, food2, food3, food4, food5)
console.log(foods)

*/

/*
function getAvg(...numbers) {
    let result = 0
    for (let number of numbers) {
        result += number

    }
    return result / numbers.length
}



alert(getAvg(5, 12, 34, 1))
*/

//add strings:

function addStrings(...strings) {
    return strings.join(` `) //add a space between the jioned strings.
}

const strings = [`Mr.`, `John`, `Deer`, `Fredrick`]
console.log(addStrings(...strings))