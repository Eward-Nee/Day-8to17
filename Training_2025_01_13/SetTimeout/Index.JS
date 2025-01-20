// Settimeout(callback, delay)

function greet() {
    alert(`Hello`)
}

const ID = setTimeout(greet, 2000)

setTimeout(() => { alert(`Hohohoh`) }, 5000)


// cansel:

clearTimeout(ID)

let IDE

function start() {

    function CodeToRun() {
        alert(`Run!`);
    }

    IDE = setTimeout(CodeToRun, 1500)
    console.log(IDE)
}

function stop() {

    clearTimeout(IDE)
    console.log(IDE)

}
