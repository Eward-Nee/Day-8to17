/* ForEach: method to iterate over elements of array and applyspecified function (callback) to EACH element

example: arr.ForEach(callback)*/
// element, index, array

let arr = [1, 2, 3, 4, 5]

arr.forEach(squareRoot)
arr.forEach(display)

function Dubble(element, index, array) {
    array[index] = element * 2
}

function tripple(element, index, array) {
    array[index] = element * 3
}

function square(element, index, array) {
    array[index] = Math.pow(element, 2)
}

function cube(element, index, array) {
    array[index] = Math.pow(element, 3)
}

function squareRoot(element, index, array) {
    array[index] = Math.sqrt(element, 2)
}

function display(element) {
    console.log(element)
}