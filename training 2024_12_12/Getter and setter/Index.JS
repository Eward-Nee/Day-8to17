//Getter: readable
//Setter: wriable


/*
class rectangle {

    constructor(width, height) {
        this.width = width
        this.height = height

    }

    set width(newwidth) {
        if (newwidth > 0) {
            this._width = newwidth
        } else {
            console.error(`width must be greater than 0`)
        }
    }

    set height(newheight) {
        if (newheight > 0) {
            this._height = newheight
        } else {
            console.error(`height must be greater than 0`)
        }
    }
    //setters is writable, but not readable, thus you must have both.
    get width() {
        return this._width
    }

    get height() {
        return this._height
    }

    //can also do more and access them as if they where properties.
    get area() {
        return this._height * this._width
    }
}

const Rectangle = new rectangle(10, 10)
console.log(Rectangle.width)
console.log(Rectangle.height)
console.log(Rectangle.area)
*/

class Person {
    constructor(FirstName, LastName, Age) {
        this.FirstName = FirstName
        this.LastName = LastName
        this.Age = Age
    }


    set FirstName(NewFirstName) {
        if (typeof NewFirstName === `string` && NewFirstName.length > 0) {
            this._FirstName = NewFirstName
        } else {
            console.error(`error`)
        }
    }

    get FirstName() {
        return this._FirstName
    }
}

const person = new Person(`John`, `Peet`, 19)

console.log(person)