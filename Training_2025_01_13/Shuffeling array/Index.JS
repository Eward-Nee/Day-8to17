
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// Fisher yates algorithm

shuffel(cards)

console.log(cards)

function shuffel(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));

        //destructoring:
        //[original, random index] -- enclosed like arrays
        [array[i], array[random]] = [array[random], array[i]]

    }
}