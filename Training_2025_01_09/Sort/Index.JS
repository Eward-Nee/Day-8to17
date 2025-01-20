// Sort()

let arr = [56, 89, 64, 56, 46, 67, 23, 15, 6, 98, 34, 56, 5, 2, 8, 76, 35, 89, 95, 23];

console.log(arr.sort()); // Weird sort

console.log(arr.sort((a, b) => a - b)) // From first to last

console.log(arr.sort((a, b) => b - a)) // From last to first

// Sorting array of objects

let people = [
    { Name: `Qwe`, Age: 35, Fat: true },
    { Name: `Wer`, Age: 27, Fat: false },
    { Name: `Ert`, Age: 21, Fat: false },
    { Name: `Rty`, Age: 32, Fat: false }];

//console.log(people.sort((a, b) => a.Age - b.Age))

//console.log(people.sort((a, b) => a.Name.localeCompare(b.Name)))
// reverse for string only:
console.log(people.sort((a, b) => b.Name.localeCompare(a.Name)))