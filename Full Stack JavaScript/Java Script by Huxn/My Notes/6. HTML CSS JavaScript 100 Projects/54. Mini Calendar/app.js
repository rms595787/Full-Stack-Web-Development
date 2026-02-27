const monthEl = document.getElementById("month");
const dayNameEl = document.getElementById("day");
const dayNumEl = document.getElementById("day-number");
const yearEL = document.getElementById("year");

const date = new Date();
const month = date.getMonth();
monthEl.innerHTML = date.toLocaleDateString("en", {
  month: "long",
});
dayNameEl.innerHTML = date.toLocaleDateString("en", {
  weekday: "long",
});
dayNumEl.innerHTML = date.getDate();
yearEL.innerHTML = date.getFullYear();
