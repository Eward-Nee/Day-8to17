
function car(make, model, year, color) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color
}

const car1 = new car(window.prompt(`The car make`), window.prompt(`The car model`), window.prompt(`The car year`), window.prompt(`The car color`))

alert(`Make: ${car1.make}, model: ${car1.model}, Year of release: ${car1.year}, Color: ${car1.color}`)