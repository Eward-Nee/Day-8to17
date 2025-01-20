/*
Callback: a function that is used as an argument for another function

used for asynchronous operations:
1. reading files
2. Network requests
3. Interacting with a database
*/

Hello(no, Bey)
function Hello(callback1, callback2) { //will always finnish first before other functions run
    alert("Hello")
    callback1()
    callback2()
}

function Bey() {
    alert("Bey")
}

function no() {
    alert(`No`)
}
