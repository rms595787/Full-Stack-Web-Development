// https://www.w3schools.com/jsref/obj_keyboardevent.asp
const input = document.querySelector("input");

// // keypress - when you presses a key it performs the action
// input.addEventListener("keypress",()=>{
//     console.log("key pressed");
// })

// // keyup - whenever you lift's you finger after pressing key then it performs the action, it will not do anything untill the key is pressed
// input.addEventListener("keyup",()=>{
//     console.log("key up");
// })

// // keydown - will perform action untill the key is pressed, and stops working when you lift your finger from the key
// input.addEventListener("keydown",()=>{
//     console.log("key down");
// })


// USEFULL PROPERTIES AND METHODS
input.addEventListener("keypress",e=>{
    // console.log(e.charCode);    // it will give the ascii value of the character you press
    
    // console.log(e.code);    // it will tell you which key is pressed(like - keyA, keyB, space,comma, etc)

    // console.log(e.key); // it will tell us which key is pressed(like - a,b,c,1,2,etc)

    // console.log(e.ctrlKey)  // it will print true if ctrl is pressed, else false

    console.log(e.shiftKey);    // it will print true if shift key is pressed, else false

})