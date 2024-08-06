// innerText
const p = document.querySelector("p");
console.log(p.innerText);

// Note
// Here we created a variable 'p' where we are storing selected query from document which is paragraph having tag name 'p'
// Then we are printing its innerText

// textContent
console.log(p.textContent);

// innerHTML
console.log(p.innerHTML);

// Important Note
/*

Why innerHTML doesn't work with block elements(like h1, table tags etx.)?

1.  If you add any block tags like(h1(heading), table, and other tags with block property) inside of tags which have inline property 
then innerHTML will not work properly and it will not be able select such block tags

REASON

innerHTML is not able to select such block element tags because the browser corrects the html on its own and adding block tag inside inline tags is not the right syntax
hence it starts from inline paragraph(p tag) and once block tag comes it(innerHTML) stops selecting elements and after block tags it again it starts selecting elements.

*/

// Changing text inside of elements using innerText

const heading1 = document.querySelector("h1");
heading1.innerText = "Text Changing using innerText";
console.log(heading1);

// Changing text inside of elements using innerHTML
const heading2 = document.getElementById("h1 second tag");
heading2.innerHTML = "<i>123</i>";
console.log(heading2);
