const result = document.querySelector(".results");

async function renderData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) throw Error(response.statusText);

    const data = await response.json();
    result.textContent = `Name: ${data.name}`;
    setTimeout(() => {
      result.textContent = `Age: ${data.age}`;
    }, 2000);
  } catch (error) {
    console.log(error);
  }
}

renderData();
