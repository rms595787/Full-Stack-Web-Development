// ____________________________________
// // JavaScript fetch() API
// console.log(fetch("text.txt"));

// // We can handle these text files using these techniques

// // callback
// // new Promise
// // async / await

// ____________________________________

// Here we are going to use Promise

// text() method returns promise
// if resolved, it will return text representation of body

// fetch("textttt.txt") // if you use wrong name of file it will give error that it can not get data
fetch("text.txt")
  .then((res) => res.text())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

/* ERROR WE GET ON WRONG FILE NAME

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /My%20Notes/5.%20Advance/2.%20Async%20Programming/05.%20Fetch%20API/01.%20Reading%20Text%20Files/textttt.txt</pre>
</body>
</html>

*/

// NOTE - this is not the best way to catch error in fetch() api's case

// Fetch API promise only rejects when we have network error(not in other cases).

// we will use "ok" for handling error
// default ok:true
console.log(fetch("text.txt"));

fetch("text.txt")
  // fetch("texttt.txt") // Error: Not Found
  .then((res) => {
    if (!res.ok) throw Error(res.statusText);
    return res.text();
  })
  .then((data) =>
    console.log(`Handling using OK:true
${data}`)
  )
  .catch((err) => console.log(err));

// ***********************************
// Practical use of fetch - printing data on html

const result = document.querySelector(".results");

async function renderData() {
  try {
    const response = await fetch("text.txt"); // getting response from promise(on successful completion)
    // const response = await fetch("texttt.txt");

    if (!response.ok) throw Error(response.statusText);
    const data = await response.text();
    setTimeout(() => {
      result.textContent = data;
    }, 2000);
  } catch (error) {
    console.log(error);
  }
}
renderData();
