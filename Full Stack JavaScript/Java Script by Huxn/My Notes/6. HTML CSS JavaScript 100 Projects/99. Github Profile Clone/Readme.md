# 🚀 Project 99

> Creating a **GitHub Profile Clone that fetches real user data and repositories from the GitHub API and dynamically renders them in the UI**.      
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2099.mov)        
<video src="./demo/Project 99.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I built a **GitHub Profile Clone** that allows users to search for a GitHub username and display detailed profile information along with the repositories the user follows.

The project integrates the **GitHub REST API** to retrieve real user data.

API used:

```
https://api.github.com/users/
```

The application dynamically fetches user information and repositories and renders them in the UI.

---

### Handling Form Submission

The search begins when the user submits the form.

```javascript
form.addEventListener("submit", async (e) => {
  e.preventDefault();
});
```

`preventDefault()` stops the page from reloading so that JavaScript can handle the API request and update the UI dynamically.

---

### Fetching User Data from GitHub API

The application sends a request to the GitHub API using `fetch()`.

```javascript
const response = await fetch(`${API}${username}`);
```

Example request:

```
https://api.github.com/users/rahulsharma
```

The response contains a JSON object with user information such as:

* avatar
* bio
* followers
* following
* location
* company
* social links

---

### Using Object Destructuring

Instead of accessing properties repeatedly, destructuring is used.

```javascript
const {
  avatar_url,
  bio,
  company,
  followers,
  following,
  location,
  login,
  twitter_username,
} = await response.json();
```

This makes the code cleaner and easier to read.

---

### Dynamically Creating User Profile UI

The project dynamically creates the user profile using template strings.

Example:

```javascript
const html = `
<div class="user-avatar" style="background: url(${avatar_url}) no-repeat center/cover;"></div>
<p class="user-name">${login}</p>
<p class="user-bio">${bio}</p>
`;
```

Then the UI is injected into the page:

```javascript
mainContainer.insertAdjacentElement("afterbegin", section);
```

`insertAdjacentElement()` inserts the generated HTML directly into the DOM.

---

### Fetching Repository Information

The project also fetches repositories related to the user.

```javascript
const response = await fetch(`${API}${username}/subscriptions`);
```

This returns a list of repositories the user is subscribed to.

From each repository the code extracts:

* repository name
* description
* programming language
* stars (watchers)
* forks

---

### Cleaning Git URLs

GitHub returns repository URLs in this format:

```
git://github.com/user/repository.git
```

The project converts it into a normal web URL.

```javascript
const modifiedUrl = git_url
  .replace(/^git:/, "http:")
  .replace(/\.git$/, "");
```

This makes the link clickable in the browser.

---

### Creating Dynamic Repository Cards

Each repository is displayed as a **repository card**.

Example:

```javascript
const singleElement = document.createElement("div");
singleElement.classList.add("repo-card");
```

The card contains:

* repository name
* description
* technology used
* stars
* forks

This is a common pattern used in **developer portfolio websites and dashboards**.

---

### Handling API Rate Limits

GitHub APIs limit the number of requests.

The project handles this scenario:

```javascript
if (response.status === 403) {
  throw new Error("GitHub API rate limit exceeded");
}
```

This prevents the app from breaking when the limit is reached.

---

### Clearing Previous Search Results

When the user clicks the input field again:

```javascript
mainContainer.innerHTML = "";
reposContainer.innerHTML = "";
```

This clears previous results so that new search results appear cleanly.

---

### Key Learning

This project helped me understand how **real-world applications interact with external APIs, dynamically generate UI components, process API responses, and render structured data such as user profiles and repository information**.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---