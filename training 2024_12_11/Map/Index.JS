// .map = .forEach except returns as new array
/*
const num = [1, 2, 3, 4, 5]
const squares = num.map(square)

function square(elements) {
    return Math.pow(elements, 2)
}

console.log(squares)
*/

const arrUPD = [`John-gdsghga-2020`, `jan-flniqege-2015`, `Koos-vshfshsjhf-2021`]

const arrFromat = arrUPD.map(format)

function format(elements) {
    const parts = elements.split(`-`)
    return `${parts[2]}#${parts[0]}#${parts[1]}`
}
console.log(arrFromat)
