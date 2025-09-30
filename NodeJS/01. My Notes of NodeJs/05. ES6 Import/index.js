// In here if you are importing any feature from other file
// you must provide extension of file like ".js" else you will get error

import greet from "./greet.js";
import {p1,p2,p3} from "./peoples.js";
greet("Rahul");

// now you have no longer access to these
// console.log(__filename);
// console.log(__dirname);

// This error happens because __dirname and __filename exist only in CommonJS modules, not in ES modules.
// Since your package.json has "type": "module", Node.js treats .js files as ESM by default.

console.log(p1,p2,p3);