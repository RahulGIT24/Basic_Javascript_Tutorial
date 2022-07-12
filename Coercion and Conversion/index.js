//* Conversion
//* Type Conversion
//! Converting one data type to other is type conversion

let x=10;
x= true
x="String"
console.log(x)
console.log(typeof(x)) //! It returns data type of x as string

// * There are three types of conversions
//! 1. Boolean
//! 2. Strings
//! 3. Numbers

//* Explict Conversion and implicit conversion

//! String Conversion

let str=String(123); //! Explicit Conversion
let str1=123+'';     //! Implicit Conversion
console.log(typeof(str))
console.log(typeof(str1))

//* Code before Explict Conversion
let a='90'
let b=70
console.log(a+b) //! It will return 9070

//* Code after Explict Conversion 

let a1=Number('90') //! The string is converted to number
let b1=70
console.log(a1+b1) //! It will return 160

//! Boolean Conversion

let bool=Boolean('2')
let bool1=Boolean(1)
console.log(bool) //! Retruns true
console.log(bool1) //! Retruns true

if(1){ 
     //! Implicit due to logical context that's why empty if else block not showing error
}
!!2  //! Implicit due to operator that's it is not showing error

//* NOTE-In boolean only user defined data types return true the rest return false

//! Number Conversion

console.log(Number('123')); //!Explicit
console.log(+'123'); //!Implicit
console.log(123 != '456'); //!Implicit
console.log(4>5); //!Implicit
console.log(5/null); //!Implicit
console.log(true | 0); //!Implicit









