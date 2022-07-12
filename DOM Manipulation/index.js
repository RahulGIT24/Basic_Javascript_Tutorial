let main= document.getElementById("main"); //* Selecting main through its id
console.log(main)
let nav = document.getElementById('nav');
console.log(main.innerHTML)
console.log(nav.innerHTML)
// nav.innerHTML="<li>DOM</li>" //* Replace all the contents of list with DOM
// console.log(nav.innerHTML)

let container = document.getElementsByClassName("container");//* Selecting container through its class
console.log(container)
console.log(container[0].innerHTML)
console.log(container[1].innerHTML)

let selector=document.querySelector(".container"); //* This is a css selector which returns the first container
console.log(selector)
let selectorID=document.querySelectorAll("#nav>li");
console.log(selectorID)

let tag= document.getElementsByTagName("h1"); //* Used to select tags
console.log(tag)

