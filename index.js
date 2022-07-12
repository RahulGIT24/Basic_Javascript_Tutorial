//* Author-Rahul
//* Date-19-06-2022
//* Location-Mars

// ! Ways to Print Javascript output

// alert("Hello World") //* Shows a prompt on Webpage 
// document.write("Hello World") //* Prints Hello World on the webpage
// console.log("Hello World")  //* Prints Hello world on console.log

//! Variables in Javascript

// let name; //* Declaring a variable
// name="Rahul" //* Initializing a variable
// console.log(name) //* Prints information stored in variable

//! Ways to assign a variable

// let name="Rahul"   //* It can be overwrite and faster than var used in new tech
// console.log(name)  //* It prints Rahul
// name='Aman'
// console.log(name) //* It overwrites Rahul with Aman
// const name1='Rahul BHai' //* It can't be overwrite
// console.log(name1)
// name1='Rahul Gupta' //* It throws error
// console.log(name1)
// var name2='Rahul'  //* It is used in old technologies

//! Data Types in Java Script

// let name="Rahul" //* String
// let age=16       //* Integer or number
// let good=true    //* Boolean
// let bad=false    //* Boolean
// let marks=98.7   //* Float
// console.log(typeof name) //* Type of a pre determined function is used to find Data type of variable
// console.log(typeof age)
// console.log(typeof good)
// console.log(typeof bad)
// console.log(typeof marks)

//! Operators in Javascript

//* Arithmetic Operators

// let a=90;
// let b=89;
// console.log(a+b) //* Add a and b
// console.log(a-b) //* Subtract a and b
// console.log(a*b) //* Multiply a and b
// console.log(a/b) //* Returns quotient of a and b
// console.log(a%b) //* Returns remainder of a and b

//* Comparison  Operators (>,<,=>,=<,==,===)

// let a=23;
// let b=89;
// console.log(a>b) //*Retuns false

// let a="16";
// let b=16;
// console.log(a==b) //* Returns true because it checks only the info. entered in variable not it's data type
// console.log(a===b)//* Returns false it checks the data type also

//! Logical Operators (&& etc..) will discuss further

//! Control Folow statements 

//* If else and else if statements

// let a=90;
// let b=20;
// let c=10;

// if (a>b && a>c){   //* If 1st condition is true it will be executed
//     console.log(`${a} is greater`) //! Instead of + operator you can use backticks and $ sign to add varible in output statement
// }
// else if (b>c && b>a){       //* If 2nd condition is true it will be executed
//     console.log(b+" is greater")
// }
// else {                      //* If nothing is true it will be executed
//     console.log(c+ " is greater")
// }


//* Switch Statement

// let fruitname=prompt("Enter the fruitname") //*Taking input from user
// switch(fruitname){                          //* Initializing Variable in switch statement
//     case 'Narangi':                         //* Output will be executed if any case statemnt matches the entered fruitname
//         console.log('Price of narangi is 600rs')
//         break;
//     case 'Aam':
//         console.log('Price of aam is 600rs dozen')
//         break;
//     case 'Kela':
//         console.log('Price of Kela is 60rs kilo')
//         break;
//     case 'grapes':
//         console.log('Price of grapes is 400rs')
//         break;
//     case 'Nimbu':
//         console.log('Price of Nimbu is 6000rs')
//         break;
//     default:                //* if fruitname not matches then default statement will be executed
//         console.log(`${fruitname} aaj khatam hogya kal aayega`)
// }


//! Loops In Javascript
//* For Loops
// for(let i=0; i<10; i++){
//     console.log("Hello World")
// }

//* Printing 4's table using for loop
// for(let i=4; i<41; i=i+4){
//     console.log(i)
// }
//* Reversing 4's table
// for(let i=40; i>3; i=i-4){
//     console.log(i)
// }


//* While Loops

// i=0
// while(i<10){
//     console.log(i)
//     i++
// }

//* Printing 4's table using while loop

let i=4;
while (i<41) {
    console.log(i)
    i=i+4
}