
/*0
function declaration: define a reusable block of code that performs a task [use when 2+ use]

function expression: a way to define functions as values or as variables. [use when 1 use only]
*/

/*1
//dec:
function dec() {
    //code
}

//exp:
let exp = function () {
    //code
    alert('This works')
}

setTimeout(exp, 3000)
// to invoke var, use ().
//3000 = 3 sec

setTimeout(function ordi() {
    alert('Or does it?')
}, 7000)

*/

/*2
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const sqr = num.map(function (e) {
    return e ** 2
})
alert(sqr)
*/

/*3
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const odd = num.filter(function (element) {
    return element % 2 !== 0
})

alert(odd)
*/

/*4
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const sum = num.reduce(function (prev, next) {
    //accumulative and element
    return prev + next
})
alert(sum)
*/