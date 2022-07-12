var favgame = "Clash Of Clans";
console.log(favgame.length)  //! Returns Length of string

let index=favgame[13]  //!Returns value at entered index 
console.log(index)

console.log(favgame.indexOf("Clans"))  //! Returns the position of the first occurrence of a substring.

console.log(favgame.slice(1,7)) //!Returns a section of a string.

var rahul="I am a coder"

console.log(rahul.toUpperCase()) //!Converts all the alphabetic characters in a string to uppercase.
console.log(rahul.toLowerCase()) //! Converts all the alphabetic characters in a string to lowercase.

console.log(rahul.charAt(3)) //!Returns the character from the specified index.

console.log(favgame.concat(rahul))  //!Joins two or more strings together

console.log(favgame.indexOf("Clans"))  //! Returns the index of the first occurrence of the specified character from the string else -1 if not

let newgame="Call of Duty";
let replace=favgame.replace(newgame); //! Searches a string for a match against a specified string or char and returns a new string by replacing the specified values.
console.log(replace)

console.log(newgame.search("of")) //! Searches a string against a specified value

console.log(newgame.split("\n")) //!Splits a string into an array consisting of substrings.

console.log(newgame.substring(0,11)); //! Returns a substring of a string containing characters from the specified indices.

console.log(newgame.length)




