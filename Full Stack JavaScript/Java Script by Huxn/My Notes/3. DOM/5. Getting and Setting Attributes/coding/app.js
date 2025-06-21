// Getting Attributes
// href - used to get link on console
const a=document.querySelector("a");
console.log(a.href);    // now we can access it
console.log(a.href="https://www.youtube.com/watch?v=CeFQO9MQNqs");  // we can update like this

// value
const input = document.querySelector("input");  // it will select the first input
console.log(input.value); 
// type
console.log(input.type);
console.log(input.type="text");

// getAttribute(attrName)
console.log("type of input: ",input.getAttribute("type"));

const input2=document.querySelectorAll("input");
input2.forEach((e,i)=>{
    if(i==1)
    console.log("placeholder of input: ",e.getAttribute("placeholder"));
    else
    console.log("using for each loop and if control statement to iterate over multiple inputs")
})
// setAttribute(attrName, value)
console.log(input2[1].setAttribute("placeholder","placeholder is changed now"));

// Setting Attributes
a.href="https://www.youtube.com/watch?v=CeFQO9MQNqs";
console.log(input.type="text");
console.log(input.value="bye");
