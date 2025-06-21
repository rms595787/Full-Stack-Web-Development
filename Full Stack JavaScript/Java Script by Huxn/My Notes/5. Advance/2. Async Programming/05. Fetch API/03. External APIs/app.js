// The simplest Api to practise
// https://jsonplaceholder.typicode.com

const btn = document.querySelector(".btn");
btn.addEventListener("click", makeRequest);

// Inserting 1 Post

function makeRequest() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => {
      if (!res.ok) new Error(res.statusText);
      return res.json();
    })
    .then((data) => {
      document.querySelector(".id").innerHTML = data.id;
      document.querySelector(".title").innerHTML = data.title;
      document.querySelector(".body").innerHTML = data.body;

      console.log(data.id);
      console.log(data.title);
      console.log(data.body);
    })
    .catch((err) => console.log(err));
}