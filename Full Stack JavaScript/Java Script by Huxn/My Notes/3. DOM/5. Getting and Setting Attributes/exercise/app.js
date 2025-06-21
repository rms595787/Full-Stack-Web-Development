// 1. Select the anchor tag
const a=document.querySelector("a");

// 2. Use getAttribute(attrName) to check the attribute.
console.log(document.querySelector("input").getAttribute("placeholder"));

// 3. Select a-two & set "href" attribute
// setAttribute(attrName, value)
const a2=document.querySelector(".a-two");
console.log(a2.setAttribute("href","https://youtube.com"));
console.log(a2.setAttribute("target","_blank"));  