const emoji = document.querySelector("#emoji");
const emojiArr = [
  "😀",
  "🤣",
  "😅",
  "😇",
  "😍",
  "🥰",
  "😎",
  "🤩",
  "🥳",
  "😤",
  "🤯",
  "🥶",
  "🤠",
  "💀",
  "👻",
  "🤡",
];
emoji.addEventListener("mouseover", () => {
  emoji.innerText = emojiArr[Math.floor(Math.random() * emojiArr.length)];
});
