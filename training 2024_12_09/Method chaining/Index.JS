let username1 = window.prompt(``)
let username2 = username1
// Method-chaining

username1 = username1.trim().charAt(0).toUpperCase() + username1.slice(1).toLowerCase()
alert(`Method chained: ${username1}`)

// no-method-chaining

username2 = username2.trim()
let username2_first = username2.charAt(0)
username2_first = username2_first.toUpperCase()

let username2_rest = username2.slice(1)
username2_rest = username2_rest.toLowerCase()
username2 = username2_first + username2_rest
alert(`Non method chained: ${username2}`)

