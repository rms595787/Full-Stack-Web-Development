const squares = document.querySelectorAll(".square");
const timeLeft = document.getElementById("time-left");
const score = document.getElementById("score");

let result = 0;
let hiPosition;
let currentTime = 60;
let timerId = null;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("emoji");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9) + 1];
  randomSquare.classList.add("emoji");
  hiPosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hiPosition) {
      result++;
      score.textContent = result;
      hiPosition = null;
    }
  });
});

function moveEmoji() {
  timerId = setInterval(randomSquare, 500);
}

moveEmoji();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  if (currentTime == 0) {
    clearInterval(countDownTimerId)
    clearInterval(timerId);
    alert(`Game Over! Your Final Score Is ${result}`)
  }
}

let countDownTimerId = setInterval(countDown, 1000);
