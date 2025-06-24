# Declaration Files

[link](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)

#### Create a index.ts file and write code

```ts
console.log(document);
```

- press ctrl and click on document
- it will open "lib.dom.d.ts" this is a declaration file which holds type of data which is being stored in document file
- you can look for types that are being used and specify types accoring to your need
- but be careful before editing anything

## You can check how many libraries and dependencies uses d.ts files with this github repository

[link](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types)

### Working with axios library

- first we setup npm

```js
// Syntax
// run this command in your terminal
npm init -y

npm i axios // to install axios library
```

- create a typescript file like index.ts write code in it

```ts
// console.log(document);

// Using axios library to demostrate more d.ts files
import axios, { AxiosResponse } from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log("Todo: ", response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error", error.message);

      if (error.response) {
        console.log("Status: ", error.message);
        console.log("Data: ", error.response.data);
      }
    } else {
      console.log("Error", error.message);
    }
  }
};

fetchData();
```

- compile this ts code in js and run js file to get the todo from jsonplaceholder website
