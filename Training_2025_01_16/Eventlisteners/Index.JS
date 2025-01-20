// event listeners listen for event to happen before itdoes its thing.
// .addeventlistener(event//like a click, callback//to a function)

const title = document.getElementById('Title')

title.addEventListener("click", run) //  mouseover en mouseout is ook opsies.

function run() {
    title.style.fontSize = `2em`
    title.style.color = 'lightGreen'
}
