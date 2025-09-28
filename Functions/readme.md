# 📘 Functions in JavaScript

## 🔹 What is a Function?
A **function** in JavaScript is a **block of code** designed to perform a specific task.  
It allows you to **reuse code**, make programs **modular**, and improve readability.  

You define a function once, and you can call it multiple times.

---

## 🔹 Syntax
```js
function functionName(parameters) {
  // code to be executed
  return value; // (optional)
}
```
## 1️⃣ Named Functions in JavaScript
A **named function** is a function that has an **explicit name** when defined.  
It can be created using a **Function Declaration** or a **Function Expression** (with a name).  

Named functions are useful for:
- Code readability  
- Reusability  
- Debugging (stack traces show the function’s name)  

---

## 🔹 Syntax
```js
function functionName(parameters) {
  // code block
  return value;
}
```
1. Function Declaration (Named)-
```js
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
```
2. Named Function Expression
```js
const square = function calculateSquare(num) {
  return num * num;
};

console.log(square(5)); // 25
```
3. Named Function as Callback
```js

function printElement(element) {
  console.log(element);
}

[1, 2, 3].forEach(printElement);

// Output:
// 1
// 2
// 3

```
4. Recursion with Named Function
```js
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
```
## 2️⃣ Anonymous Functions in JavaScript

An **anonymous function** is a function that does not have a name.  
It is often used as a **callback function** or assigned to a variable.  

Since it has no identifier, it cannot be called directly after definition (unless assigned or passed).

---

## 🔹 Examples

### 1. Assigned to a Variable
```js
const greet = function (name) {
  return `Hello, ${name}!`;
};

console.log(greet("Alice")); // "Hello, Alice!"
```
### 2. Used in setTimeout
```js
setTimeout(function () {
  console.log("Runs after 2 seconds");
}, 2000);

```
### 3. Used in Event Listeners
```js
document.getElementById("btn").addEventListener("click", function () {
  console.log("Button clicked!");
});

```
### 4. Used in Array Methods
```js
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6, 8]

```
### 5. Passed as Callback to Another Function
```js
function processUserInput(callback) {
  const name = "John";
  callback(name);
}

processUserInput(function (user) {
  console.log(`Welcome, ${user}!`);
});

```

### 3️⃣ Arrow Functions in JavaScript  

Arrow functions were introduced in **ES6 (ECMAScript 2015)**.  
They provide a **shorter syntax** to write functions and also handle the `this` keyword differently compared to regular functions.  

---

## 🔹 Syntax  

```js
const functionName = (parameters) => {
  // function body
};
 ## Explanation
  - If the function has only one parameter, parentheses can be omitted.
  - If the function has only one statement, the braces {} and return can be omitted.