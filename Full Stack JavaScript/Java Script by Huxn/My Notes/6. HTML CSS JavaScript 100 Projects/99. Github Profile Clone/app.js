const form = document.querySelector("form");
const input = document.querySelector("input");
const reposContainer = document.querySelector(".repos");
const mainContainer = document.querySelector(".main-container");

const API = "https://api.github.com/users/";

async function fetchData(username) {
  try {
    const response = await fetch(`${API}${username}`);

    if (response.status === 403) {
      throw new Error("GitHub API rate limit exceeded");
    }
    if (!response.ok) throw new Error(response.statusText);

    const {
      avatar_url,
      bio,
      blog,
      company,
      followers,
      following,
      location,
      login,
      twitter_username,
    } = await response.json();

    const html = `
        <div class="user-avatar" style="background: url(${avatar_url}) no-repeat center/cover;"></div>
    <p class="user-name">${login}</p>
    <button class="follow">Follow</button>
    <p class="user-bio">${bio}</p>
    <div class="followers-info">
        <a href="#">
            <i class="fa-solid fa-users"></i>
            <span class="followers">${followers}</span> followers
        </a>
        <a href="#">
            <span class="following">${following}</span> following
        </a>

        <div class="icon-container">
            <i class="fa-regular fa-building"></i>
            <a href="${company}" target="_blank" class="company">${company}</a>
        </div>

        <div class="icon-container">
            <i class="fa-sharp fa-solid fa-link"></i>
            <span class="blog">${blog}</span>
        </div>

        <div class="icon-container">
            <i class="fa-sharp fa-solid fa-location-dot"></i>
            <span class="location">${location}</span>
        </div>

        <div class="icon-container">
            <i class="fa-brands fa-solid fa-youtube"></i>
            <span class="blog">${blog}</span>
        </div>

        <div class="icon-container">
            <i class="fa-brands fa-solid fa-twitter"></i>
            <span class="twitter_username">@${twitter_username}</span>
        </div>
    </div>
    `;

    const section = document.createElement("section");
    section.classList.add("about-user");
    section.innerHTML = html;
    mainContainer.insertAdjacentElement("afterbegin", section);
  } catch (error) {
    console.error(error);
  }
}

async function fetchRepos(username) {
  try {
    const response = await fetch(`${API}${username}/subscriptions`);

    if (response.status === 403) {
      throw new Error("GitHub API rate limit exceeded");
    }
    if (!response.ok) throw new Error(response.statusText);

    const data = await response.json();
    // console.log(data);

    data.forEach(
      ({
        name,
        description,
        forks_count,
        language,
        watchers_count,
        git_url,
      }) => {
        // we are getting this originally - "git://github.com/alex/pyelection.git"
        // we are making it - "http://github.com/alex/pyelection"
        // git - http
        // .git - ""
        const modifiedUrl = git_url
          .replace(/^git:/, "http:")
          .replace(/\.git$/, "");

        const singleElement = document.createElement("div");
        singleElement.classList.add("repo-card");

        const html = `
            <a href="${modifiedUrl}" class="repo-title">${name}</a>
            <p class="repo-subtitle">${description}</p>

            <div class="popularity">
                <p class="technology-used">${language}</p>
                <div class="stars">
                    <i class="fa-regular fa-star">${watchers_count}</i>
                </div>

                <div class="fork">
                    <img src="./git-fork_1.svg" alt="Fork SVG" class="fork-svg">
                    <span class="forked">${forks_count}</span>
                </div>
            </div>
            <p class="pill">Public</p>
        `;

        singleElement.innerHTML = html;
        reposContainer.append(singleElement);
      },
    );
  } catch (error) {
    console.error(error);
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const val = input.value;

  if (val) {
    try {
      await fetchData(val);
      await fetchRepos(val);
    } catch (error) {
      console.error(error);
    } finally {
      input.value = "";
    }
  }

  document.querySelector("input").addEventListener("click", () => {
    mainContainer.innerHTML = "";
    reposContainer.innerHTML = "";
  });
});
