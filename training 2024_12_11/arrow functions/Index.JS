/*
Arrow functions: a consise way to write functions epressions for simple functions
*/

const greet = () => { alert(`Hello`) }
greet()

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const even = num.filter((element) => { return element % 2 === 0 })
alert(even)