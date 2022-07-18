//! Arrow Functions  /
//* It is a shortcut to write a function
// function greet(params) {
//     console.log("Good Morning");
// }

//* Arrow Functions
// greet = ()=>{
//     console.log("Good Morning");
// }

greet = setTimeout(() => {
  console.log("I am displaying after 3 secs");
}, 3000);

//* Adding two numbers using arrow functions

let add = (a, b) => {
  return a + b;
};

console.log(add(12, 90));

//* Ultra shortcut to add two numbers

let sum2 = (a, b) => a + b;
console.log(sum2(12, 56));

//* When you are taking one argument you don't need to add brackets

let half = a => a / 2;
console.log(half(3));

//* When you are taking two arguments you  need to add brackets
let num = (a, b) => console.log(a + b);
num(67, 90);

//* you should have to use closed brackets if no arguments are given

greet = () => console.log("Good Morning");
greet();

let obj1 = {
  greeting: "Good Morning", //! it is outside the funtion but still it will work because in arrow functions parent this.greeting works but in a simple function it will return undefined

  names: ["Rahul", "Khiladi", "Sabka Baap"],
  speak() {
    this.names.forEach((student) => {
      console.log(this.greeting + " Kukadoo Koo " + student);
    });
  },
};
obj1.speak();
