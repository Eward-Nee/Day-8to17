let apple = `red` //variable

let fruit = [`pear`, `orange`, `grape`] //array

fruit[2] = `apricot` //change array

fruit[3] = `banana` // add a flue to fruit array (array made longer)
fruit.push('coconaut') // add to end of array
fruit.pop() // remove last
fruit.unshift('mango') // add to begining of array
fruit.shift() // removes from begining of array
fruit[-2] = `how` // not counted in when aking for the length of an array
/*
alert(fruit[window.prompt(`Give a number from 0 an 3`)])

let numofFruits = fruit.length
alert(numofFruits)

let index = fruit.indexOf(`how`) //-1 (element not found)
alert(index)

for (let i = 0; i < fruit.length; i++) {
    alert(fruit[i])

}
alert(`alt`);
// alternative:
for (let fruitss of fruit) {
    alert(fruitss);
}

for (let i = -1; i > -1000; i--) {
    if (fruit[i] != undefined) {
        alert(`Hidden storage found at address ${i}. It contains the value "${fruit[i]}"`)
    } else { console.log(`No hidden starage found`) }

}

*/
// To sort : fruit.sort()
//to reverse sort: fruit.sort().reverse()