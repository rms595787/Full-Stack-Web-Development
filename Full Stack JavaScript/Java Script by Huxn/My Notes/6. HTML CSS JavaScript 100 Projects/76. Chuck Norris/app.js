const displayJoke = document.getElementById("display-joke");
const button = document.getElementById("getJoke");

button.addEventListener("click", getRandomJoke);

function getRandomJoke() {
  const ajax = new XMLHttpRequest();
  const url = "https://api.chucknorris.io/jokes/random";
  ajax.open("GET", url, true); // true -> asynchronous

  ajax.onreadystatechange = () => {
    if (ajax.readyState === 4) {
      if (ajax.status === 200) {
        let data = JSON.parse(ajax.responseText);
        displayJoke.innerHTML = `${data.value}`;
      } else {
        ajax.onerror = onerror();
      }
    }
  };
  ajax.send();
}

function onerror() {
  displayJoke.textContent = `Something Went Wrong :(`;
}
