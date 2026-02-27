// copyText
// finalText
// moveBtn
// copyBtn
// ouptut

const copyText = document.querySelector("textarea[name=copyTxt]");
const finalText = document.querySelector("textarea[name=finalTxt]");
const copyBtn = document.querySelector(".copyBtn");
const moverBtn = document.querySelector(".moverBtn");
const output = document.querySelector(".output");

copyBtn.addEventListener("click", () => {
  let temp = copyText.value;
  copyToClipBoard(temp);
});

moverBtn.addEventListener("click", () => {
  let temp = copyText.value;
  finalText.value = temp;
});

// when you click in the textarea the whole text will get selected using below lines easy for using ctrl+C
//  no need for selecting text manually
copyText.addEventListener("click", function () {
  this.select();
});
finalText.addEventListener("click", function () {
  this.select();
});

// copy to clipboard
function copyToClipBoard(str) {
  const outputContainer = document.querySelector(".output-container");
  // Creating TextArea
  const textarea = document.createElement("textarea");
  textarea.value = str; // the string that which we will pass
  outputContainer.appendChild(textarea);
  textarea.select(); // it allows selecting everything which is inside of the textarea
  document.execCommand("copy"); // copy here is a parameter which lets selected text to be copied in the document
  outputContainer.removeChild(textarea);
  output.innerHTML = `<h3>Content Copied</h3>`;
  output.classList.add("added");
  setTimeout(() => {
    output.classList.toggle("added");
    output.textContent = "";
  }, 2000);
}
