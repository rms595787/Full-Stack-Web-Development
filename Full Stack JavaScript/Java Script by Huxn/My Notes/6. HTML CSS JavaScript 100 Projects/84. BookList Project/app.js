const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const booklist = document.getElementById("book-list");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (title.value === "" && author.value === "" && year.value === "") {
    alert("Fill The Form");
  } else {
    const newRow = document.createElement("section");

    // creating new title
    const newTitle = document.createElement("div");
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    // creating new Author
    const newAuthor = document.createElement("div");
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);

    // creating new year
    const newYear = document.createElement("div");
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);

    booklist.appendChild(newRow);
  }
});
