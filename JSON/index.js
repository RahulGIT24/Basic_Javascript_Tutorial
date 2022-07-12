//! An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.

let json_obj = {
    name: "Rahul",
    age: "16",
    profession: "Coding",
    food: "Rajma"  //* Rajma Lover Squad
}
console.log(json_obj);
let myJsonStr = JSON.stringify(json_obj); //*Converts object to string
console.log(myJsonStr)

myJsonStr = myJsonStr.replace("Rahul","Henry") //* As it is now a string so you can use string funtion to replace Rahul with Henry

console.log(myJsonStr)

var newJsonObj = JSON.parse(myJsonStr);  //* Converts it to objects
console.log(newJsonObj)