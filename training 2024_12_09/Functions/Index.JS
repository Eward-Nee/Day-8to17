/*
function HyppyBday() {
    alert(`Happy b day`)
}

HyppyBday()

function Hoii(name, age) {
    alert(`Hoii there you dumb ${name}. You are ${age} old, and you will die that age too.`)
}

Hoii(`Eward`, 18)
*/


function Add(x, y) {

    return x + y //Must return the thing for the function to become the value
}

function sub(x, y) {
    return x - y
}

alert(Add(5, 10))
alert(sub(10, 5))

function even(number) {

    return (number % 2 === 0) ? (true) : (false)
}

alert(even(window.prompt(`Enter your number`)))

// string.includes(`x`) = true/false