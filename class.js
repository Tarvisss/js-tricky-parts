class Product{
    constructor(name, price){
        this.name = name,
        this.price = price
    }
    clean() {
        console.log("cleaning in process. please wait....")
        setTimeout(() => {
            
            console.log(`Your ${this.name} is now clean!!!`);
        }, 5000); // Runs 5 seconds after you call .clean()
    }

    displayProduct(){
        console.log(`Product: ${this.name}`)
        console.log(`Price: $${this.price}`)
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }

    calculateTotalBasket(products){
        const total = products.reduce((acc, product) => {
            return acc + product.price;
        },0);
        const finalTotal = total + (total * salesTax)
        return `Your total is $${finalTotal.toFixed(2)}`


    }
}

const salesTax = 0.06;

const product1 = new Product("shirt", 20.00)
const product2 = new Product("pants", 22.00)
const product3 = new Product("jordans", 128.63)
