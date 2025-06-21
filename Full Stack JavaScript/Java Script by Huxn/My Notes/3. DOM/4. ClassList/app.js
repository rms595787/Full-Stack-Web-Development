// classList - it checks how many classes a selected element has, it displays the list of all classes
const h1=document.querySelector("h1");
const h2=document.querySelectorAll("h1");
console.log(h1.classList);
// for each loop
h2.forEach(function(element){
    console.log(element.classList);
});
h2.forEach(element =>{
    console.log(element.classList);
});

// add() - it is used to add classes to specific element
const heading2=document.querySelector("h2");
heading2.classList.add("style"); 

// remove() - it is used to remove classes to specific element, you can also remove elements
heading2.classList.remove("style");
// heading2.remove();   // it will delete selected element

// toggle() - if we have class it will remove and if does not have it will add
heading2.classList.toggle("style");
