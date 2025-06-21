// 1. Create a class name "Hero", properties (name, level)
// 2. Create greet method which will just greet
// 3. Create Instance of "hero" class
// 4. Create New class name "Mega", inherit properties from "hero" class & provide property of spell
// 5. Create instance of "Mega" class

class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  greet() {
    return `Hello, Sir ${this.name}!`;
  }
}

const hero1 = new Hero("Spidy", 4);
console.log(hero1);

class Mega extends Hero {
  constructor(name, level, spell) {
    super(name, level);
    this.spell = spell;
  }
}

const mega1 = new Mega("Harry Potter", 9, "fly");
console.log(mega1);
console.log(mega1.greet());
console.log(mega1.spell);
