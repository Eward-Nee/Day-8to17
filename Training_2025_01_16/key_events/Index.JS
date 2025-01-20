
//keyevents:
// keydown / keyup
let back = document.querySelector('main')

function f() {

    back.style.backgroundColor = `red`
    back.style.height = `200px`
    back.style.aspectRatio = `1/1`
}
document.addEventListener("keydown", (event) => {
    if (event.key === `ArrowUp`) {
        f()
    }
})
