
// super keyword uused in classes to call constructor or access properties and methods of parient(superclass)
// this = this object
// super = the parient

class animal {
    constructor(name, age) {
        this.name = name
        this.age = age //Dry principle(dont repeat yourself)
    }
    move(speed) {
        console.log(`The ${this.name} can move at speeds of ${speed}`)
    }
}

class rabbit extends animal {

    constructor(name, age, runspeed) {
        super(name, age)//must do for every constructor
        this.runspeed = runspeed
    }

    run() {
        console.log(`The ${this.name} can run`)
        super.move(this.runspeed)
    }
}

class fish extends animal {

    constructor(name, age, swimspeed) {
        super(name, age) // must pass in var for parient class to handle
        this.swimspeed = swimspeed
    }

    swim() {
        console.log(`The ${this.name} can swim`)
        super.move(this.swimspeed) //note: only give the super curved brackets when it must send in a var to the super class directly (so not to a function in the superclass)
    }
}


class hawk extends animal {

    constructor(name, age, flyspeed) {
        super(name, age)
        this.flyspeed = flyspeed
    }

    fly() {
        console.log(`The ${this.name} can fly`)
        super.move(this.flyspeed)
    }
}


const Rabbit = new rabbit(`Rabbit`, 12, 67)
const Fish = new fish(`Fish`, 4, 37)
const Hawk = new hawk(`Hawk`, 43, 210)

console.log(Rabbit)
console.log(Fish)
console.log(Hawk)

Fish.swim()