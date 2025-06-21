// ------------------------------------
// createElement()
// appendChild()
// append()
// prepend()
// insertBefore(what, where)

/* insertAdjacentElement(
    'beforebegin'
    'afterbegin'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------


// ------------------------------------
// Creating Element
const h1=document.createElement("h1");
const body=document.body;
h1.textContent="Greetings!";
h1.classList.add("greetings");
body.appendChild(h1);   // this appends at the last of selected area(here we have selected body, meaning it will add this h1 at the last inside body)
h1.style.color="crimson";
// ------------------------------------

// ------------------------------------
// insertBefore
const ul=document.querySelector("ul");
const newLi=document.createElement("li");
newLi.innerText="I am new li";
// ul.appendChild(newLi);  // this will add at end

const firstLi=document.querySelector("li");
ul.insertBefore(newLi,firstLi);    // while using this we have to pass two paramenters (what we want to add, and before what)
// ------------------------------------

// ------------------------------------
// insertAdjancentElement
const firstP=document.querySelector("p");
const i=document.createElement("i");
i.innerText="I'm an Italic Tag";
i.style.color="crimson";
i.style.fontSize="30px";

// it takes two parameteres(where to insert, what to insert)
firstP.insertAdjacentElement("beforebegin",i);
firstP.insertAdjacentElement("afterbegin",i);
firstP.insertAdjacentElement("beforeend",i);
firstP.insertAdjacentElement("afterend",i);
// ------------------------------------

// ------------------------------------
const section=document.querySelector("section");
const i2=document.createElement("i");
i2.innerText="I'm 2nd Italic Tag";
i2.style.fontSize="25px";
i2.style.color="blue";

const span=document.createElement("span");
span.innerText="Rahul";
span.style.color="crimson";

// section.append(i2);     // it add add at the end of selected element
// section.prepend(i2);    // it add before the selected element

// we can two things simultaneously as well
section.append(i2,span);
section.prepend(i2,span);  
// ------------------------------------

// ------------------------------------
// removeChild and remove
const newList=document.querySelector(".new-list");
const fourthLi=document.querySelector(".fourth");
newList.removeChild(fourthLi);  // it only removes the selected element
// newList.remove();    // it removes the whole element