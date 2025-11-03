# ✨ Rest and Spread Operators in JavaScript

## 🚀 Overview
Both **Rest (`...`)** and **Spread (`...`)** operators use the **same syntax** — three dots (`...`), but they perform **opposite actions** depending on the context.  

- **Rest** → packs values into one.  
- **Spread** → unpacks values from one.

---

##  1. Rest Operator (`...`)

The **Rest Operator** collects multiple values and combines them into a **single array** or **object**.  
It’s commonly used in **function parameters** and **destructuring**.

---

### 🧩 Example: Rest in Functions
```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```
Here, ...numbers gathers all arguments into an array called numbers.

### Example: Rest in Object Destructuring
```js
const user = { name: "Hajira", age: 25, city: "Chennai" };
const { name, ...details } = user;

console.log(name);     // "Hajira"
console.log(details);  // { age: 25, city: "Chennai" }
```
## 2. Spread Operator (...)

The Spread Operator takes an array or object and expands it into individual elements.
It’s useful for copying, merging, or passing arguments easily.
### Example: Spread in Arrays
```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const combined = [...arr1, ...arr2];

console.log(combined); // [1, 2, 3, 4, 5]
```
## Example: Copying an Array
```js
const numbers = [10, 20, 30];
const copy = [...numbers];

console.log(copy); // [10, 20, 30]
```
## Example: Spread in Objects
```js
const user = { name: "Hajira", age: 25 };
const updatedUser = { ...user, city: "Chennai" };

console.log(updatedUser);
// { name: "Hajira", age: 25, city: "Chennai" }
```
