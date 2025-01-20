// local first, global second.
// Good to use local onstead of global

let x = 3 //global

function function1() {
    let x = 2 //local - var only exitst in funcion in witch it is declared
    alert(x) // x = 2
}

function function2() {
    let x = 1
    alert(x) // x = 1
}

function function3() {
    alert(x) // x = 3
}

function function4() {
    let w = x + 4
    alert(w)
}

function1()
function2()
function3()
function4()