/*
for (let i = 20; i >= 0; i -= 2) {
    console.log(i)
}
*/

for (let i = 0; i <= 20; i++) {

    if (i === 13) {
        continue //skip
    } else if (i === 18) {
        break //quit loop
    } else {
        console.log(i)
    }
}
