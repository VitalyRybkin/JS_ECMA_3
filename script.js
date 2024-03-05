console.log("Задание 1: \"\"Управление персоналом компании\"\"")

class Employee {
    constructor(name) {
        this.name = name
    }

    displayInfo (){
        console.log("Name: ", this.name)
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department
    }

    displayInfo () {
        super.displayInfo()
        console.log("Department: ", this.department)
    }

}

const employee = new Employee("John Smith")
employee.displayInfo()

const manager = new Manager("Jane Doe", "Sales")
manager.displayInfo()

console.log("Задание 2. \"\"Управление списком заказов\"\"")

class Order {

    _products = []
    constructor(orderNumber) {
        this.orderNumber = orderNumber
    }

    get productList() {
        return this._products
    }
    addProduct(product) {
        this.productList.push(product)
    }

    getTotalPrice() {
        let sum = 0
        this.productList.forEach( (elem) => {
            sum += elem.phonePrice
            }
        )
        return sum
    }

}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    get phonePrice() {
        return this.price
    }

    get phoneName() {
        return this.name
    }
}

const order = new Order(12345)

const product1 = new Product("Phone", 500)
order.addProduct(product1)

const product2 = new Product("Headphones", 100)
order.addProduct(product2)

console.log("Order spec:")
order.productList.forEach( (elem) => {
    console.log(elem.phoneName + ": " + elem.phonePrice)
})
console.log("Total order: " + order.getTotalPrice())