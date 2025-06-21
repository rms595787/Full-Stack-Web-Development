


// Events in JS
// JS's interaction with HTML is handled through events that occur when the user or the browser manipulates a page. When the page loads, it is called an event. When the user clicks a button, that click too is an event.

// --------------------------------
// ----------- BAD WAY-----------

// Example of bad way of handling event 

// 1.
// Bad way 1 (inline)
// never use js like that we have used here inline property onclick

// <button onclick="alert('Ay')">Click Me</button>

// 2.
const secondBtn=document.querySelector(".second-btn");
secondBtn.onmouseover=function(){console.log("Rahul Sharma");}
secondBtn.onclick=function(){console.log("Sharma Ji");}

// --------------------------------


// ----------- GREAT WAY-----------

const best=document.querySelector(".best");

function greetings(){
    console.log("Hello Mr.");
}
best.addEventListener("click",greetings);   // passing feature and function
best.addEventListener("click",function(){console.log("Good Bye!")});
best.addEventListener("click",()=>console.log("Namaste India!"));
// --------------------------------


// ----------- Event (e) Object -----------

const p=document.querySelector(".para");

// event is a special object here which gives information about the operation we are performing
// ex - here we are using click it gives info about that click event
p.addEventListener("click",(event)=>{console.log(event)});

const form=document.querySelector("form");
const input=document.querySelector("input");

// event = e
// event can also be written as e
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(e)
    console.log(input.value);
});

// --------------------------------