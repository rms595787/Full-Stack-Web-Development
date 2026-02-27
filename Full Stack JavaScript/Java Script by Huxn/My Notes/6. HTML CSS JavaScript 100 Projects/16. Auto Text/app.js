const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Awesome", "Fun", "Cool", "Life", "Famous", "Weird"];

const typingDelay = 200;
const erasingDelay = 200;
// Delay between current and next text
const newLetterDelay = 2000;

let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) {
    // if we have words in array
    setTimeout(type, newLetterDelay);
  }
});

function type() {
  if (charIndex < words[index].length) {
    // this will check whether the length of word is less than the charIndex or not
    typedText.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newLetterDelay); // whole word got typed now switching to new word so erase the current word
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    index++;
    if (index >= words.length) {
      index = 0;
    }
    setTimeout(type, typingDelay + 1100);
  }
}
