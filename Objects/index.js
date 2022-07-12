//! object syntax
let object={
    Name:"Rahul",
    Age:16,
}

// const obj={ 
//     Name:"Rahul", //* Here name is Property name(Key) and Rahul is it's property value
//     Age:16,  //! Values are separated with commas
//     languages: { //* This is called nesting
//         favlang: 'C++,Javascript,Python'
//     },
//     //! Defining function in an object
//     hire(){
//         console.log("You are hired")
//     }
// };
// console.log(obj)

// //!Calling Function
// obj.hire()

// //! Acessing Properties
// console.log(obj.Name)
// console.log(obj.Age)
// console.log(obj.languages)
// console.log(obj.hire())

// //* Objects are dynamic we can change them while our code is running 

// obj.new="This is new value"
// console.log(obj.new)


//! Other Method to write objects

//* Factory function
function new__func(Rahul){ //* Passing parameter rahul
    return { 
        Name:Rahul, //* Here name is Property name(Key) and Rahul is it's property value
        Age:16,  //! Values are separated with commas
        languages: { //* This is called nesting
            favlang: 'C++,Javascript,Python'
        },
        //! Defining function in an object
        hire(){
            console.log("You are hired")
        }
    };
}
// const new_object=new__func(Hacker); //! Passing Hacker on the place of rahul
// console.log(new_object)

//! Constructor function

function Constructor(Coder){ //! Write the name of function in pascal case
    this.Name=Coder;
    this.hire=function(){
        console.log("You are hired")
    }
}
const constructor = new Constructor("Hackathons")
// constructor.hire()
// console.log(constructor.Name)

//! Delete keyword used to delete properties of an object
// delete Constructor.Name;
// Constructor.newFunc=function constructorFunc() {
//     console.log("You are seeing constuctorFunc")
// }
// delete Constructor.newFunc();
// console.log(Constructor)

//* Constructor Method
const we= new Constructor("Rahul");
console.log(we.constructor)
console.log(constructor.constructor)

const Course_1 = new Function ('Name', `
this.Name = Name;
    this.hire=function(){
        console.log("You are hired")
    }
`)
const course_2 = new Course_1("Java")
course_2.hire();
console.log(course_2.Name)

//! Excercise for Objects

const product = {
    itemName:"phone",
    price:90000,
    discount:2000,
    itemCode:"Iph13",
}

//! Creating product object using factory function
function product_factory(name,price,discount,itemcode) {
    return{
    itemName:name,
    price:price,
    discount:discount,
    itemCode:itemcode,
    };
}
const output=product_factory("Bat",1200,5,"MRF45")
console.log(output)

//! Creating product object using constructor function

function Constructor_product(name,price,discount,itemcode) {
    this.itemName = name,
    this.price = price,
    this.discount = discount,
    this.itemCode = itemcode,
    this.calcu=function discount_calculator() {
        const dis= price*discount/100;
        return `Discount applied is Rs.${dis} and price after discount is ${price-dis}`
    }
}
const football= new Constructor_product("Footaball",600,9,"CR7")
console.log(football)