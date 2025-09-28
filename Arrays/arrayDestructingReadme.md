# 📘 Array Destructuring in JavaScript

## 🔹 What is Array Destructuring?  
Array Destructuring is a feature introduced in **ES6 (ECMAScript 2015)** that allows the extraction of values from arrays and assigned into separate variables in a clean and concise way.  

Instead of accessing array elements using indexes, destructuring lets you extract values in a single statement.  

---

## 🔹 Why Use It?  
✅ Makes code shorter and more readable  
✅ Supports default values  
✅ Can skip unwanted values  
✅ Works well with function returns  
✅ Useful in swapping values  

---

## 🔹 Examples

### 1. Basic Destructuring
```js
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
```
## 2. Skipping Items
```js 
const numbers = [1, 2, 3, 4];

const [first, , third] = numbers;

console.log(first); // 1
console.log(third); // 3

```
## 3. Default Values
```js
const fruits = ["Apple"];

const [fruit1, fruit2 = "Banana"] = fruits;

console.log(fruit1); // "Apple"
console.log(fruit2); // "Banana"
```
## 4. Swapping Variables
```js
let x = 5, y = 10;

[x, y] = [y, x];

console.log(x); // 10
console.log(y); // 5
```
## 5. Using Rest Operator (...rest)
```js
const colors = ["Red", "Green", "Blue", "Yellow"];

const [first, second, ...others] = colors;

console.log(first);  // "Red"
console.log(second); // "Green"
console.log(others); // ["Blue", "Yellow"]
```
## 6. Nested Array Destructuring
```js
const numbers = [1, [2, 3], 4];

const [a, [b, c], d] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
```
## 7. Destructuring with Function Return
```js
function getValues() {
  return [100, 200, 300];
}

const [val1, val2, val3] = getValues();

console.log(val1); // 100
console.log(val2); // 200
console.log(val3); // 300
```