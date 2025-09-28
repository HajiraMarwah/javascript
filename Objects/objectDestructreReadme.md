# 📘 Object Destructuring in JavaScript

## 🔹 What is Object Destructuring?  
Object Destructuring is a feature introduced in **ES6 (ECMAScript 2015)** that allows you to extract properties from objects and bind them to  variables in  a simpler, cleaner way.  

Instead of accessing each property one by one using dot notation, destructuring lets you extract values in a single statement.  

---

## 🔹 Why Use It?  
✅ Makes code shorter and more readable  
✅ Allows renaming of variables  
✅ Supports default values  
✅ Handles nested objects easily  
✅ Useful in function parameters  

---

## 🔹 Examples

### 1. Basic Destructuring
```js
const user = { name: "Alice", age: 25 };

const { name, age } = user;

console.log(name); // "Alice"
console.log(age);  // 25
```
## 2. Renaming Variables
```js
const person = { firstName: "John", lastName: "Doe" };

const { firstName: fName, lastName: lName } = person;

console.log(fName); // "John"
console.log(lName); // "Doe"

```
## 3. Default Values
```js
const book = { title: "JavaScript Guide" };

const { title, author = "Unknown" } = book;

console.log(title);  // "JavaScript Guide"
console.log(author); // "Unknown"
```
## 4. Nested Object Destructuring
```js
const student = {
  id: 101,
  name: "Emma",
  scores: {
    math: 90,
    science: 85
  }
};

const { scores: { math, science } } = student;

console.log(math);    // 90
console.log(science); // 85

```
## 5. Destructuring in Function Parameters
```js
function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const user = { name: "Sam", age: 30 };
displayUser(user);

// Output: Name: Sam, Age: 30

```
## 6. Using Rest Operator (...rest)
```js
const car = {
  brand: "Tesla",
  model: "X",
  year: 2024,
  color: "Red"
};

const { brand, ...rest } = car;

console.log(brand); // "Tesla"
console.log(rest);  
// { model: "X", year: 2024, color: "Red" }

```