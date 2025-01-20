
//Class(ES6 feature)

class products {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    displayproducts() { //in A class, yiu dont spesify function.
        console.log(`Product: ${this.name}`)
        console.log(`Price: R${Number(this.price).toFixed(2)}`)
    }

    calcSalesTax(salesTax) {
        return (Number(this.price) + (this.price * salesTax)).toFixed(2)
    }
}

const salesTax = 0.15

const Product1 = new products(`Sony PS5`, `9000`);
Product1.displayproducts()

const TaxIncPrice1 = Product1.calcSalesTax(salesTax)
console.log(`Price inc tax: R${TaxIncPrice1}`)

const Product2 = new products(`Sony PS6`, `12000`);
Product2.displayproducts()

const TaxIncPrice2 = Product2.calcSalesTax(salesTax)
console.log(`Price inc tax: R${TaxIncPrice2}`)