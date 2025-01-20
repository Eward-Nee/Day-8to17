// filter method: create new array by filtering out old elements from old array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let even = numbers.filter(isEven)

function isEven(element) {
    return element % 2 === 0
}

console.log(...even)