# 🚀 Project 100

> Creating a **Wikipedia Search Clone that fetches search results from the Wikipedia API and dynamically displays them with a light/dark theme toggle**.        
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%20100.mov)       
<video src="./demo/Project 100.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this final project I created a **Wikipedia Search Clone** that allows users to search Wikipedia articles and display the results dynamically.
The project integrates the **Wikipedia API**, processes the response data, and updates the UI with search results.

This project also includes a **theme toggler**, allowing the user to switch between light and dark modes.

---

### Fetching Data from Wikipedia API

The project sends a request to the Wikipedia API when a user searches for a topic.

Example endpoint:

```text
https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${encodedQuery}
```

This API returns a list of search results related to the user's query.

Key parameters in the API request:

* `action=query` → tells the API we want to query data
* `list=search` → returns search results
* `format=json` → returns data in JSON format
* `srlimit=10` → limits results to 10 items
* `srsearch` → the search keyword

---

### Encoding Search Queries

Before sending the search term to the API, the query is encoded.

```javascript
const encodedQuery = encodeURIComponent(query);
```

`encodeURIComponent()` ensures that special characters in the search query are properly converted into a URL-safe format.

Example:

```
JavaScript basics → JavaScript%20basics
```

This prevents errors when sending requests to APIs.

---

### Handling API Requests with Fetch

The project uses the **Fetch API** to retrieve data.

```javascript
const response = await fetch(endpoint);
```

After receiving the response:

```javascript
const json = await response.json();
```

This converts the API response into a usable JavaScript object.

---

### Dynamically Rendering Search Results

Each search result is displayed dynamically using DOM manipulation.

Example:

```javascript
const resultItem = document.createElement("div");
resultItem.className = "result-item";
```

Each result contains:

* article title
* article link
* short description snippet

The results are then inserted into the page:

```javascript
searchResults.appendChild(resultItem);
```

This allows the page to **update results without refreshing**.

---

### Building Wikipedia Article Links

Each search result links directly to the full Wikipedia article.

Example:

```javascript
const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
```

Using the `pageid` from the API ensures that each result links to the **exact article page**.

---

### Handling Empty Search Queries

If the user submits an empty search input, the program shows a message instead of sending a request.

Example logic:

```javascript
if (!query) {
  searchResults.innerHTML = "<p>Please enter a valid search term.</p>";
}
```

This improves user experience and prevents unnecessary API requests.

---

### Showing Loading State

While fetching results, a loading spinner is displayed.

Example:

```javascript
searchResults.innerHTML = "<div class='spinner'>Loading...</div>";
```

This gives feedback to users that the search request is being processed.

---

### Implementing a Theme Toggle (Dark / Light Mode)

The project also includes a **theme toggle button**.

Example:

```javascript
body.classList.toggle("dark-theme");
```

This adds or removes a CSS class from the body element.

When the class is active:

* the UI switches to dark mode
* button styles update dynamically

Example logic:

```javascript
if(body.classList.contains("dark-theme"))
```

This checks whether dark mode is currently active and updates the button style accordingly.

Theme toggling is a common feature in modern applications such as:

* documentation websites
* developer tools
* dashboards

---

### Key Learning

This project helped me understand how **modern applications integrate public APIs, process search queries, dynamically render search results, and enhance user experience with features like loading states and theme toggling**.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---