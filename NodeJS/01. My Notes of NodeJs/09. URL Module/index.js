import { URL } from "url";
const myURL = new URL("https://www.example.com:8080/p/a/t/h?query=string#hash");

// Some Operations that we could perform
console.log(myURL.hash);
console.log(myURL.host);
console.log(myURL.hostname);
console.log(myURL.port);
console.log(myURL.href);
console.log(myURL.protocol);
console.log(myURL.search);
console.log(myURL.searchParams);

// Both works the same string and json
console.log(myURL.toString());
console.log(myURL.toJSON());

// if you want to make changes in current url just select them like above = updated version
console.log(myURL.port=3030);
console.log(myURL.port);