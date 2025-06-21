// let form = document.querySelector("form");
// let input = document.querySelector("input");
// let todos = document.querySelector(".todos");

// function getTodo(value) {
//   let todo = document.createElement("div");
//   let textEl = document.createElement("span");

//   // setting values & styles
//   textEl.innerHTML = value;

//   // Appending our element to the dom
//   todo.appendChild(textEl);

//   let closeEl = document.createElement("span");
//   closeEl.innerHTML = "&times;";
//   closeEl.classList.add("delete");

//   // Attaching Events
//   closeEl.addEventListener("click", function (e) {
//     todos.removeChild(todo);
//   });

//   todo.appendChild(closeEl);
//   todo.classList.add("todo");
//   return todo;
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let value = input.value;
//   if (!value.trim()) return;
//   todos.appendChild(getTodo(value));
//   input.value = "";
// });

let form = document.querySelector("form");
let input = document.querySelector("input");
let todos = document.querySelector(".todos");

function getTodo(value) {
  // creating todo
  let todo = document.createElement("div");
  let textEl = document.createElement("span");
  textEl.innerHTML = value;

  // adding text and style
  todo.appendChild(textEl);

  // create delete
  closeEl = document.createElement("span");
  closeEl.innerHTML = "&times";
  closeEl.classList.add("delete");

  // remove child
  closeEl.addEventListener("click", () => {
    todos.removeChild(todo);
  });
  todo.appendChild(closeEl);
  todo.classList.add("todo");
  return todo;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = input.value;
  if (!value.trim()) return;
  todos.appendChild(getTodo(value));
  input.value = "";
});
