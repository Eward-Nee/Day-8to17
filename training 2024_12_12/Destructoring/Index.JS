
// array destructoring: []
// object destructoring: {}

/*
// Example 1
// swap values of 2 var

let a = 1;
let b = 2;

[a, b] = [b, a]; //left is destructoring, right is new array.
console.log(a);
// a=2
// b=1
*/

//----------------------------------------------------------

/*
// Example 2
// swap 2 elements in an array
let colors = [`red`, `green`, `blue`];
[colors[0], colors[1]] = [colors[1], colors[0]];
console.log(colors);

// 
*/

//----------------------------------------------------------

/*
// Example 3
// array to var

let arr = [`q`, `w`, `e`, `r`, `t`, `y`]
let [c1, c2, c3, ...cr] = arr
alert(c1)
alert(c2)
alert(c3)
alert(cr)
*/

//----------------------------------------------------------

/*
// Example 4
// values out of objects

const obj = {
    firstname: `John`,
    surname: 'Hond',
    age: 43,
}

const { firstname, surname = `ehh`/*default value for if obj has no value, it will defualt to this.*//*, age } = obj
alert(firstname)
alert(surname)
alert(age)
*/

//----------------------------------------------------------

//*
// Example 5
// destructoring in function params

function nm({ firstname, surname, age }) {
    alert(`name and age: ${firstname} ${surname}, ${age}`)
}

const obj = {
    firstname: `John`,
    surname: 'Hond',
    age: 43,
}

nm(obj)

//*/

