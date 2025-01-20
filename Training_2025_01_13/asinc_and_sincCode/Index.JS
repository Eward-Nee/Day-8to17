
// asinc, sinc

// not in order, in order

// callback method:

function f1(callback) {
    setTimeout(() => { console.log(`first`); callback() }, 4000)
}

function f2() {
    console.log(`second`)
}

f1(f2)