//! Declaring a class
// class Product {
//     constructor(itemName,price,discount,productcode){
//         this.itemName = itemName
//         this.price = price
//         this.discount = discount
//         this.productcode = productcode
//     }
// }


// let bal = new Product("Ball")


//! Creating Object using Class expression

// const Product1 = class{
//     constructor(itemName,price,discount,productcode){
//         this.itemName = itemName,
//         this.price = price,
//         this.discount = discount,
//         this.productcode = productcode
//     }
// };

// let chair = new Product1("Chair", 499,15,"C10")
// console.log(chair)
// console.log(Product1.name)
// console.log(Product.name)

//! Getter and Setter Methods
// const Product1 = class{
//     constructor(itemName,price,discount,productcode){
//         this.itemName = itemName,
//         this.price = price,
//         this.discount = discount,
//         this.productcode = productcode
//     }
//     get getDisVal(){ //* Getter method
//         return this.discount
//     }
//     set setDisVal(value){ //* Setter Method
//         this.discount = value
//     }
//     //* Method Expression
//     get DisVal(){
//         return this.discount * this.price/100
//     }
// };
// let chair = new Product1("Chair", 499,15,"C10")
// console.log(chair)

//! Extending Classes
class Product {
    constructor(itemName){
        this.itemName = itemName
    }

    getItemName(){
        return `${this.itemName} is our product`
    }

}


class Furniture extends Product {
    constructor(itemName){ //* Super call the constructor of parent class
        super(itemName);
    }
    getItemName(){
        return `${this.itemName} is furniture`
    }
}

let ball = new Product("Ball")
let chair = new Furniture("Chair")