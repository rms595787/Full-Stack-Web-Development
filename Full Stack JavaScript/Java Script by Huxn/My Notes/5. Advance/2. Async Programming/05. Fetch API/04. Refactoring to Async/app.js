const btn = document.querySelector(".btn");
btn.addEventListener("click", makeRequest);

function makeRequest() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then((data) => {
      const output = document.querySelector(".all-posts");
      data.forEach((element) => {
        output.innerHTML += `
            <div> (ID): ${element.id} </div>
            <div> (TITLE): ${element.title} </div>
            <div> (BODY): ${element.body} </div>
            <br>
            `;
      });
    })
    .catch((err) => console.log(err));
}
