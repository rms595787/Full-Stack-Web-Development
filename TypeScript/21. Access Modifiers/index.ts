/*

Access Modifiers
In TypeScript, you can use access modifiers to control the visibility of class members (properties and methods). Access modifiers determine the ways in which class members can be accessed from within and outside the class

There are three types of access modifiers in TypeScript
- Pulic
- Private
- Protected

Public: Members marked as public can be accessed from anywhere, both inside and outside the class.

Private: Members marked as private can be accessed from within the class they are defined in.

Protected: Members marked as protected can be accessed from within the class they are defined in, as well as any subclass that extend the class.

*/

class Human {
  first: string; // default -> can be accessible with in the file
  public last: string; // public -> can be accessible anywhere inside or outside class
  private age: number; // private -> accessible within the class
  protected job: string; // protected -> accessible within the class and subclass

  private pri = "Private Variable";
  protected prot = "Protected Variable";
  constructor(first: string, last: string, age: number, job: string) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.job = job;
  }

  getAge(): number {
    return this.age;
  }

  getJob(): string {
    return `${this.job}`;
  }
}

const p1 = new Human("John", "Doe", 20, "Developer");
// we are access
console.log(p1.first); // default access modifier
console.log(p1.last); // public access modifier
// console.log(p1.age); // private access modifier -> Property 'age' is private and only accessible within class 'Human'.
// console.log(p1.job); // Property 'job' is protected and only accessible within class 'Human' and its subclasses.

console.log(p1.getAge());
console.log(p1.getJob());

class Person extends Human {
  // public priv = this.pri; // Error: Property 'pri' is private and only accessible within class 'Human'
  public pro = this.prot; // storing protected variable's data in public variable here
  constructor(first: string, last: string, age: number, job: string) {
    super(first, last, age, job);
  }
}

const huxn = new Person("Huxn", "WebDev", 20, "JS Developer");
console.log(huxn.getJob());
console.log(huxn.pro);
