//! Dates
//*Date object is used to get the year, month and day. It has methods to get and set day, month,year, hour, minute, and seconds

const d=new Date() //*new is used to create current date
console.log(d) //! Returns the date from the date object

const d1=new Date(2006,0,24,10,10,10,10) 
console.log(d1) 

const d2=new Date(2006,0,213,10,10,10,10) 
console.log(d2) 

//* You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
const d3= new Date(890)
console.log(d3)

//* new Date(dateString) creates a new date object from a date string:
const d4=new Date("October 13,2012,11:30:55");
console.log(d4)

const d5 = new Date(100000000000);
console.log(d5)

//! Date Methods
//* To display date
console.log(d.toDateString())
console.log(d.toISOString())
console.log(d.toUTCString())
console.log(d.toTimeString())
console.log(d.toString())
console.log(d.toJSON())

//! Other Date methods

console.log(d.getDate())
console.log(d.getDay())
console.log(d.getTime())
console.log(d.getTimezoneOffset())
console.log(d.getFullYear())
console.log(d.getHours())
console.log(d.getMilliseconds())
console.log(d.getMonth())
console.log(d.getSeconds())
console.log(d.getSeconds())
console.log(d.getUTCHours())