const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

// Theme toggler elements
const themeToggler = document.getElementById("theme-toggler");
const body = document.body;

async function serachWikipedia(query) {
  // encodeURIComponent -> is a js function which takes a string and returns string with special characters to encode the query, we use this before sending in url
  const encodedQuery = encodeURIComponent(query);
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${encodedQuery}`;

  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error("Failed to fetch search results from wikipedia API.");
  }

  const json = await response.json();
  return json;
}

function displayResults(results) {
  // Remove the loading spinner
  searchResults.innerHTML = "";

  results.forEach((result) => {
    const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
    const titleLink = `<a href="${url}" target="_blank" rel="noopenr">${result.title}</a>`;
    const urlLink = `<a href="${url}" target="_blank" rel="noopenr">${url}</a>`;

    const resultItem = document.createElement("div");
    resultItem.className = "result-item";
    resultItem.innerHTML = `
            <h3 class="result-title">${titleLink}</h3>
            ${urlLink}
            <p class="result-snippet">${result.snippet}</p>
        `;

    searchResults.appendChild(resultItem);
  });
}

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const query = searchInput.value.trim();

  if (!query) {
    searchResults.innerHTML = "<p>Please enter a valid search term.</p>";
    return;
  }

  searchResults.innerHTML = "<div class='spinner'>Loading...</div>";

  try {
    const results = await serachWikipedia(query);

    if (results.query.searchinfo.totalhits === 0) {
      searchResults.innerHTML = "<p>No results found.</p>";
    } else {
      displayResults(results.query.search);
    }
  } catch (error) {
    console.error(error);
    searchResults.innerHTML =
      "<p>An error occured while searching. Please try again later.</p>";
  }
});

// Event listener for the theme toggler
themeToggler.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  if(body.classList.contains("dark-theme")){
    themeToggler.textContent = "Dark";
    themeToggler.style.background = "#fff";
    themeToggler.style.color = "#333";
}
else{
    themeToggler.textContent = "Light";
    themeToggler.style.background = "#ccc";
    themeToggler.style.color = "#333";
  }
});
