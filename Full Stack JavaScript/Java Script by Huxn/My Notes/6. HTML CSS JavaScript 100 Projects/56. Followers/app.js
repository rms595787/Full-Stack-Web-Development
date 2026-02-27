const followers = document.querySelectorAll(".followers");

followers.forEach((followersCounter) => {
  followersCounter.innerHTML = "0";

  const updateFollowersCounter = () => {
    const target = +followersCounter.getAttribute("data-target");
    const c = +followersCounter.innerText;

    const increment = target / 500; // 500 -> the smaller the number is the faster it increments

    if (c < target) {
      console.log(c + increment);
      followersCounter.innerHTML = `${Math.ceil(c + increment)}`;
      setTimeout(updateFollowersCounter, 1);
    } else {
      followersCounter.innerText = target;
    }
  };

  updateFollowersCounter();
});
