// 1. Check the innerText of "first" element
// 2. Check the textContent of "second" element
// 3. Check the innerHTML of "third" element

const first = document.querySelector(".first");
console.log(first.innerText);

// NOTE
/*
If you want to iterate any class using getElementsByClassName() you have to ues for loop in order to iterate the content
*/
const first2 = document.getElementsByClassName("first");
for (let i = 0; i < first2.length; i++) {
  console.log(first2[i].innerText);
}

const second = document.querySelector(".second");
console.log(second.textContent);

const second2 = document.getElementsByClassName("second");
for (i = 0; i < second2.length; i++) {
  console.log(second2[i].textContent);
}
const third = document.querySelector(".third");
console.log(third.innerHTML);

const third2 = document.getElementsByClassName("third");
for (i = 0; i < third2.length; i++) {
  console.log(third2[i].innerHTML);
}
