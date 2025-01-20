let sNaam = `Eward`
let s = `hoo`
let swhite = `    ds wde         fe     `

/*
alert(sNaam.charAt(0)) //begin
alert(sNaam.charAt(3)) // caracter 4
alert(sNaam.concat(` ` + s)) // adds space and string s to string snaam
alert(sNaam.endsWith(``)) // True or false
alert(sNaam.indexOf(`a`)) //index of caracter in string
alert(sNaam.length) //length of string
alert(sNaam.padEnd(8, '@')) // adds @ to end of string till string is 8 char long.
alert(sNaam.repeat(2)) // Will repeat the string 2 times
alert(sNaam.replace(`w`, `-heh-`)) // replace(caracter to replace, what it is replaced with)
alert(sNaam.toUpperCase()) //turns the entire tring into uppercase
alert(swhite.trim()) // removes leading and ending whitespaces but not spaces between letters.
*/
/*
const phrase = `I like pizza`

let first_word = phrase.slice(0, phrase.indexOf(" ")) // ending is exclusive, thats why not -1 at end
alert(first_word)

let lastChar = phrase.slice(-2) // -1 is the last char. -2 is both the 2 last char in the string.
alert(lastChar)
*/

// slice is like copy in delphi.
// Use the replace like the delete function in delphi

let sentince = `I love pizza`
let copy = sentince.slice(0, sentince.indexOf(` `))
sentince = sentince.slice(sentince.indexOf(` `) + 1)

alert(`The copied part is "${copy}" and the leftover of the sentence is "${sentince}"`)

/*
sentince = sentince.replace(sentince.slice(0, sentince.indexOf(` `) + 1), ``)
alert(sentince)
*/