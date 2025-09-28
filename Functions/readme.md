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
