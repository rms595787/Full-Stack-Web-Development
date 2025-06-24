# Compile TypeScript

### Go look for tsconfig.json file on it's website for more details about the configuration

[link](https://www.typescriptlang.org/tsconfig/)

---

### run this command to get "tsconfig.json" file

```ts
Syntax: tsc - init;
```

---

### tsconfig -> target ( is used to translate TypeScript to JavaScript according to the selected version )

"target" : "es2016"
is the default selected version of js conversion
choose ES6 version for latest version of JavaScript Conversion

---

### If you want to compile multiple files at once ( meaning file converting from TypeScript to JavaScript at once )

```ts
syntax;
tsc;
```

---

### If you want certain file to execute/compile every time then do this with you tsconfig.json file

- go to tsconfig.json file

```json
{
  "compilerOptions": {},
  "files": []
}
```

- inside files:[] you are going to mention file names which you want to compile at tsc command of compiling tsc file to js
- like
- - "files": [
    "/Users/rahulsh9956/Documents/Coding/Full-Stack-Web-Development/TypeScript/26. Type Narrowing/index.ts"
    ]

- you must provide entire address for the file if you want to compile it explicitly

---

### include and exclude techniques in tsconfig.json

**Include**

- it is an array of files which we want to execute
- we mention this "include" below "compilerOptions":{}

```json
// Syntax
"complierOptions":{},
"include":["src/**/*", "src/index.ts"],
```

- "src/\*_/_" - this will compile all files under src folder and convert ts files to js files
- "src/index.ts" - this will compile only index.ts file under src folder and leave all other file

**exclude**

- it is an array of files which we do not want to execute
- we mention this "exclude" below "compilerOptions":{}

```json
// Syntax
"complierOptions":{},
"includ": ["src/**/*"], // this will compile all files under src folder
"exclude":["src/index.ts"], // this will leave index.ts file from compiling under src folder
```

### Use of "outDir":"./"

- it is used when we have TypeScript files in another folder and we want that compiled ts file which is now converted to "JavaScript files" should be store in "another folder" we use this.

```json
// syntax
"compilerOptions":{
  "outDir":"./dist",  // folder name where we want compiled js files to be stored
}
```

- run tsc command and compiled js files will get stored in mentioned directory
