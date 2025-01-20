
const mH1 = document.querySelector(`h1`)

mH1.addEventListener('click', event => {


    mH1.style.display = `none`


})

document.querySelector(`footer`).addEventListener('click', event => {
    if (mH1.style.display === `none`) {
        mH1.style.display = 'block'
    }
})
