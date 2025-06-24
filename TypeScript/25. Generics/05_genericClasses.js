"use strict";
class Box {
    constructor(initialContent) {
        this.content = initialContent;
    }
    getContent() {
        return this.content;
    }
    setContent(newContent) {
        this.content = newContent;
    }
}
const stringBox = new Box("Hello, TypeScript");
console.log(stringBox.getContent());
stringBox.setContent("New Content Added");
console.log(stringBox.getContent());
const numberBox = new Box(20);
console.log(numberBox.getContent());
numberBox.setContent(100);
console.log(numberBox.getContent());
