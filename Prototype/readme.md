## What is a Prototype?

Every JavaScript object has an internal link to another object called its prototype.

__proto__ is the reference to the prototype object.
The prototype object contains properties and methods that can be shared among all objects created from that prototype.


This is how inheritance is implemented in JavaScript.

✅ In simple words:

A prototype is an object from which other objects inherit properties and methods.
```js
function Person(name){
    this.name=name
}
Person.prototype.sayHello=function(){
    console.log(`my name is ${this.name}`)
}
const newP1=new Person("hajira")
newP1.sayHello()
```
## 2️⃣ Prototype Chain
 - When you access a property on an object, JS:
 - Looks for the property on the object itself.
 - If not found, looks in the object’s prototype.
 - Repeats this until it reaches Object.prototype.
 - If not found anywhere, returns undefined.

## 3️⃣ Inheritance in JavaScript
JavaScript uses prototypal inheritance.
Objects inherit directly from other objects, unlike classical inheritance in other languages.
```js
const animal = {
  eats: true,
  walk() { console.log("Walking"); }
};

const rabbit = Object.create(animal);
rabbit.name = "White Rabbit";

console.log(rabbit.eats); // true
rabbit.walk(); // Walking
```

### How do you create inheritance using class and constructor function?

**using constructor**
```js
// Parent constructor
function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.start = function() {
  console.log(`${this.type} started`);
};

// Child constructor
function Car(model) {
  Vehicle.call(this, "Car"); // Call parent constructor to set properties
  this.model = model;
}

// Set up inheritance
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Child-specific method
Car.prototype.drive = function() {
  console.log(`${this.model} is driving`);
};

const myCar = new Car("Tesla");
myCar.start(); // Car started (inherited)
myCar.drive(); // Tesla is driving
```
## Short, Perfect Answer (say this in interviews)

prototype is a property of functions.
__proto__ is a property of objects.

prototype is used to set what will become the __proto__ of objects created by a constructor function.