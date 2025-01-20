// Nested objects = objects inside of other objects
// Child object is enclosed by parient object

// person{address{}, contactInfo{}}
/*
const person = {
    Name: `Jan`,
    Surname: `van Duik`,
    Age: 24,
    IsWorking: true,
    Hobbies: [`swimming`, `eating`, `sleeping`],

    Address: { // This is a child object
        Street: `270 Kaboe st.`,
        District: `Cape City`,
        Country: `South Afrika`,
    }
}

// To loop througth entire object:
for (const property in person.Address) {
    console.log(person.Address[property])
}
    */

class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    };
};

class person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.Address = new Address(...address);
    }
};

const p1 = new person(`Jan`, 24, `Hond st`, `Cape town`, `South afrika`);

console.log(p1);
console.log(p1.Address);