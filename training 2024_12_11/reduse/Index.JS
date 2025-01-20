// .reduce reduces elements of array into a single value
/*
const prices = [120, 154, 564, 108, 46, 530]
const total = prices.reduce(sum)

alert(`$${total.toFixed(2)}`)

function sum(accumilator, element) { //accumilator: prev; element: next
    return accumilator + element
}
*/

const grades = [56, 79, 65, 94, 46, 94, 82, 73, 72, 71, 76, 70]
const totalavg = grades.reduce(avg)
const max = Math.max(...grades)

alert(max)
alert((totalavg / grades.length).toFixed(2))

/*
Another method for max

function getMax(accumilator, element){
    return Math.max(accumilator + element)
}
*/

function avg(accumilator, element) {
    return (accumilator + element)
}

