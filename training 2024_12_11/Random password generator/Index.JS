
const lblPassword = document.getElementById(`lblPassword`)
const edtPassword = document.getElementById(`edtPassword`)

function btnCreatePasswordClick() {
    let Password = String(edtPassword.value)
    let PswLength = Password.length

    let Alphabet = `abcdefghijklmnopqrstuvwxyz!@#$%1234567890🙂😄😭🍌🍊🍏🔥😜😶🦬🦖`
    let arrNumtoAlphabet = [...Alphabet]
    console.log(arrNumtoAlphabet)

    do {
        if (PswLength < 3) {
            alert(`Your Password must contain 3+ caracters`)
            Password = window.prompt(`Give a 3+ caracter password`)
            PswLength = String(Password).length
        }

    } while (PswLength < 3)

    const imax = 51
    const imin = 0
    let iRandom

    for (let i = 0; i < 12 - PswLength; i++) {

        iRandom = Math.floor(Math.random() * (imax - imin) + 1)
        Password += arrNumtoAlphabet[iRandom]

    }

    let firstC = Password.charAt(0)
    Password = Password.slice(1)
    firstC = firstC.toUpperCase()

    lblPassword.innerHTML = firstC + Password
}