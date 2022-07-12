//! Numbers
const num=3;
console.log(typeof(num))

//* Number Methods
console.log(num.toExponential()) //!Converts a number to its exponential form
console.log(num.toPrecision()) //! Formats a number into a specified length.
out=num.toString(); //! Converts an object to a string
console.log(typeof(out))
console.log(num.valueOf()) //! Returns the primitive value of a number.

//! Maths Methods

console.log(Math.ceil(num)); //*Rounds a number upwards to the nearest integer, and returns the result
console.log(Math.exp(num)); //* Returns the value of E^x
console.log(Math.log(12)); //* Returns the logarithmic value of x.
console.log(Math.pow(2,23)); //* Returns the value of x to the power y
console.log(Math.random()); //* Returns a random number between 0 and 1.
console.log(Math.sqrt(4)) //* Returns the square root of a number 4