
const car = {
    manufacturure: `Tayota`,
    year: 2005,
    model: `Corola`,
    List: function () {
        alert(`The manufacturure is ${this.manufacturure}.`)
        alert(`The model is ${this.model}.`)
        alert(`The Year of release is ${this.year}`)
    }
}

car.List()