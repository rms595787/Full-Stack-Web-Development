let firstli=document.querySelector("li");

// selecting parentElement
console.log("Selecting parentElement");
console.log(firstli);   // li
console.log(firstli.parentElement); // ul
console.log(firstli.parentElement.parentElement);   // body
console.log(firstli.parentElement.parentElement.parentElement); // html document
console.log(firstli.parentElement.parentElement.parentElement.parentElement);   // null

// selecting children
console.log("\nSelecting Children");
const ul=document.querySelector("ul");
console.log(ul);
console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);
console.log(ul.children[3]);
console.log(ul.children[0].innerText="one");

// selecting nextElementSibling
console.log("\nSelecting nextElementSibling");
console.log(firstli.nextElementSibling.innerText);
console.log(firstli.nextElementSibling.nextElementSibling.innerText);
console.log(firstli.nextElementSibling.nextElementSibling.nextElementSibling.innerText);
console.log(firstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);
// console.log(firstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText);  
// if you try to return the text it will throw error because there is no previous then this, if you just try to access it will throw null(in case you do not access innerText of it)

// Selecting previousElementSibling
console.log("\nSelecting previousElementSibling")
const fourthli=document.querySelector(".fourth");
console.log(fourthli.innerText);
console.log(fourthli.previousElementSibling.innerText);
console.log(fourthli.previousElementSibling.previousElementSibling.innerText);
console.log(fourthli.previousElementSibling.previousElementSibling.previousElementSibling.innerText);
// console.log(fourthli.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText);
// if you try to return the text it will throw error because there is no previous then this, if you just try to access it will throw null(in case you do not access innerText of it)
