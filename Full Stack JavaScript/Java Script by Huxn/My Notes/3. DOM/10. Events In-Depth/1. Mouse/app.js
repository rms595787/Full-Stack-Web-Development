// https://www.w3schools.com/jsref/obj_mouseevent.asp

// 1. click
// 2. contextmenu
// 3. dblclick
// 4. mousedown
// 5. mouseenter
// 6. mouseleave
// 7. mousemove
// 8. mouseout
// 9. mouseover
// 10. mouseup

let one=document.querySelector(".click");
let two=document.querySelector(".contextmenu");
let three=document.querySelector(".dblclick");
let four=document.querySelector(".mousedown");
let five=document.querySelector(".mouseenter");
let six=document.querySelector(".mouseleave");
let seven=document.querySelector(".mousemove");
let eight=document.querySelector(".mouseout");
let nine=document.querySelector(".mouseover");
let ten=document.querySelector(".mouseup");

// changes color when you click on the line
// when you click the mouse buttom presses and leaves that after that changes the color of line
one.addEventListener("click",()=>{
    one.classList.toggle("red");
})

// changes color when you right click on the line
two.addEventListener("contextmenu",()=>{
    two.classList.toggle("blue");
})

// changes color on double click the line
three.addEventListener("dblclick",()=>{
    three.classList.toggle("teal");
})

// change color when you click on the line
// in mousedown when you presses the mouse button it changes the color you don't wait for button to leave(action happens at the time you press button)
// but in click feature you press and leave after that action happens
four.addEventListener("mousedown",()=>{
    four.classList.toggle("steelblue");
})

// changes color when mouse enters that area of line
five.addEventListener("mouseenter",()=>{
    five.classList.toggle("orange");
})

// changes color when you hover mouse over the line area and leave that area(on leaving it will perform the action)
// it is a much better feature than mouseout because it only applies to the selected element if you are out of it's boundaries it will trigger
six.addEventListener("mouseleave",()=>{
    six.classList.toggle("purple");
})

// changes color when you move in that area (it changes multiple times like if you moved a little in that area it will change it's color and still if you are not out of that area and if you move it go back to it's orginal state and it will keep on doing same thing untill you leave the area)
seven.addEventListener("mousemove",()=>{
    seven.classList.toggle("pink");
})

// changes color when you are our of the boundaries of line
// it's not a better feature because it deals with dom hierarchy(meaning parent and children of the selected element like div as parennt, span as a child in paragraph)
eight.addEventListener("mouseout",()=>{
    eight.classList.toggle("crimson");
})

// changes color when mouse comes over the area
nine.addEventListener("mouseover",()=>{
    nine.classList.toggle("chocolate");
})

// changes color when you click on the selected area
ten.addEventListener("mouseup",()=>{
    ten.classList.toggle("aqua");
})