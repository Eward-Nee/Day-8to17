// describe properties/ methods directly owned by class rather as objects from class.
/*
class mathUtils {
    static PI = 3.14159

    static getDiameter(raduis) {
        return raduis * 2
    }

    static getCircumference(raduis) {
        return raduis * 2 * this.PI
    }

    static getArea(raduis) {
        return this.PI * Math.pow(raduis, 2)
    }
}

console.log(mathUtils.PI)
console.log(mathUtils.getDiameter(10))
console.log(mathUtils.getCircumference(10).toFixed(2))
console.log(mathUtils.getArea(10).toFixed(2))
*/

class user {
    static usercount = 0
    constructor(username) {
        this.username = username
        user.usercount++
    }
}

const user1 = new user(`Piet`)
const user2 = new user(`Koos`)
const user3 = new user(`Jan`)
const user4 = new user(`Sarie`)
const user5 = new user(`Anna`)

console.log(`Users: ${user1.username}, ${user2.username}, ${user3.username}, ${user4.username}, ${user5.username}`)
console.log(`Amount of users: ${user.usercount}`)