const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

getData();

filter.addEventListener("input", (e) => filterData(e.target.value));

async function getData() {
  // const res = await fetch("https://randomuser.me/api?results=50");
  const res = await fetch("https://randomuser.me/api/0.8/?results=50"); // old version
  const { results } = await res.json();

  result.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");
    listItems.push(li);

    li.innerHTML = `
        <img src="${user.user.picture.large}" alt="${user.user.name.first}"/>
        <div class="user.user-info">
            <h4>${user.user.name.first} ${user.user.name.last}</h4>
            <p>${user.user.location.city}, ${user.user.location.state}</p>
        </div>
    `;

    result.appendChild(li);
  });
}

function filterData(serachItem) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(serachItem.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

// toggler
let toggler = document.getElementById("switch");

toggler.addEventListener("click", () => {
  if (toggler.checked === true) {
    document.body.style.backgroundColor = `rgb(17,17,17)`;
    document.querySelector(".header").style.backgroundColor = "crimson";
  } else {
    document.body.style.backgroundColor = "";
    document.querySelector(".header").style.backgroundColor = "";
  }
});
