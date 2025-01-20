let day = 1

switch (day) {
    case 1:
        console.log(`It is Monday`)
        break
    case 2:
        console.log(`It is Thuesday`)
        break
    case 3:
        console.log(`It is Wednesday`)
        break
    case 4:
        console.log(`It is Thursday`)
        break
    case 5:
        console.log(`It is Vryday`)
        break
    case 6:
        console.log(`It is Saterday`)
        break
    case 7:
        console.log(`It is Sunday`)
        break
    default:
        console.log(`${day} is not a day.`)
}

// Default in the switch means when none of the options where found, the the code in defualt runs.
// Brake is used to brake out of the switch when match is found.

let score = 74
let gradeletter

switch (true) {
    case score >= 80:
        gradeletter = `A`
        break

    case score >= 70:
        gradeletter = `B`
        break

    case score >= 60:
        gradeletter = `C`
        break

    case score >= 50:
        gradeletter = `D`
        break

    case score >= 40:
        gradeletter = `E`
        break

    case score >= 30:
        gradeletter = `F`
        break
}

console.log(`Your grade letter is ${gradeletter}`)