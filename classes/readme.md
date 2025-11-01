## What is a Class in JavaScript?

 - A class in JavaScript is a blueprint for creating objects.
It allows you to define properties and methods in one place.
 - Think of a class like a template — and objects are things built from that template.

 **Example**
 ```js
 class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new Person("Hajira", 25);
person1.greet();
const person2 = new Person("Aisha", 30);
person2.greet()
```
## How It Works
 - class keyword → defines a new class.
 - constructor() → a special method that runs when a new object is created (used for initializing values).
 - this keyword → refers to the current object created from the class.
 - Methods → functions inside the class that define behavior.

 ## Advantages
  1. Encapsulation-Keeps related data and behavior together.
  2.Resusable,cleaner

## Disadvantage
1. Syntactic sugar:
Classes are built on top of JS’s existing prototype system 
2. Tight coupling:
Overuse of classes can make code harder to refactor or test.
3. Less flexibility:
In functional programming patterns, functions may be more flexible and easier to reuse.