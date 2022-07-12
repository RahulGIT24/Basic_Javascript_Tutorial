let bread1=prompt("Which bread do you want?")   //! Asking input from user
let veggies1=prompt("What are your favourite veggies?")
let sauces1=prompt("Which sauces do you want?")

function makeSandwich(bread, veggies, sauces) {  //!  Parameters are passed as bread veggies and sauces
    let sandwich = bread + " bread " + veggies + " " + sauces + " sandwich is ready"; //! Variable is made which stores the values given by user
    return sandwich; //! Returns the whole string stored in sandwich
}

let vegsandwich= makeSandwich(bread1, veggies1, sauces1)  //! The makeSandwich function is stores in variable vegsandwich and argumnets are passed into function given by user
console.log(vegsandwich) //! Printing the output in console