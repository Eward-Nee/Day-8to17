
//innherhatince allows new class to inheirit properties from another class class (parient-->child)
// helps with code reusability
//use extends 

class animal {
    alive = true

    eat() {
        console.log(`This ${this.name} is eating`)
    }

    sleep() {
        console.log(`This ${this.name} is sleeping`)
    }
}

class rabbit extends animal {
    name = `rabbit`
}

class fish extends animal {
    name = `fish`
}

class lion extends animal {
    name = `lion`
}

const Rabbit = new rabbit()
const Fish = new fish()
const Lion = new lion()

Rabbit.sleep()

//Remember case sensitivity