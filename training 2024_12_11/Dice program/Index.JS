const imgDice = document.getElementById(`imgDice`)
const lblResult = document.getElementById(`lblResult`)

const iMax = 6
const iMin = 1



function btnClick() {
    let iRandom = Math.floor(Math.random() * (iMax - iMin + 1)) + iMin

    switch (iRandom) {
        case 1:

            lblResult.innerHTML = `Your dice number is: 1`
            imgDice.src = `/dice images/dice-1.png`
            break;

        case 2:
            imgDice.src = `/dice images/dice-2.png`
            lblResult.innerHTML = `Your dice number is: 2` // parient:getelementbyid(parient), Child: .innerHTML = child
            break;

        case 3:
            imgDice.src = `/dice images/dice-3.png`
            lblResult.innerHTML = `Your dice number is: 3`
            break;

        case 4:
            imgDice.src = `/dice images/dice-4.png`
            lblResult.innerHTML = `Your dice number is: 4`
            break;

        case 5:
            imgDice.src = `/dice images/dice-5.png`
            lblResult.innerHTML = `Your dice number is: 5`
            break;

        case 6:
            imgDice.src = `/dice images/dice-6.png`
            lblResult.innerHTML = `Your dice number is: 6`
            break;


        default:
            break;
    }
}
