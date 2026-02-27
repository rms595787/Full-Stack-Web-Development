const textInput = document.querySelector(".text-input");
const wordCount = document.querySelector(".word-count");
const letterCount = document.querySelector(".letter-count");
const spaceCount = document.querySelector(".space-count");

const checks = [atLeastTwoCharacters, abscenceOfThreeConsecutiveCharacters];

function atLeastTwoCharacters(text) {
  const letters = text.match(/[a-z]/gi) || [];
  return letters.length >= 2;
}

function abscenceOfThreeConsecutiveCharacters(text) {
  for (const character of text) {
    const occurrences = Array.from(text).filter((v) => v == character).length;
    if (occurrences >= 3) {
      return false;
    }
  }
  return true;
}

textInput.addEventListener("input", () => {
  const splitted = textInput.value.trim().split(/[\s-]/);
  const letterC = (textInput.value.match(/[a-z]/gi) || []).length;
  const spaceC = (textInput.value.match(/\s+/g) || []).length;
  let wordC = 0;

  outer: for (const text of splitted) {
    for (const check of checks) {
      if (!check(text)) {
        continue outer;
      }
    }
    wordC++;
  }

  wordCount.textContent = wordC;
  letterCount.textContent = letterC;
  spaceCount.textContent = spaceC;
});
