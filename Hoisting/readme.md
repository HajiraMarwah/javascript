# 📝 JavaScript Hoisting

**Hoisting** is a JavaScript mechanism where **variables and function declarations are moved to the top of their scope** before code execution.  

- You can **use functions and variables before they are declared** in your code.  
- **Only declarations are hoisted, not initializations.**  

---

## 🔹 Variable Hoisting

### 1️⃣ `var`
Variables declared with `var` are **hoisted and initialized with `undefined`**.  

```js
console.log(name); // Output: undefined
var name = "Hajira";
console.log(name); // Output: Hajira
```
### 2️⃣ let and const

Variables declared with let or const are hoisted but not initialized.
Accessing them before declaration results in a ReferenceError.
```js
console.log(age); // ReferenceError
let age = 25;

console.log(city); // ReferenceError
const city = "Delhi";

These variables are in a Temporal Dead Zone (TDZ) until declared.
```
### 🔹 Function Hoisting
  ## 1️⃣ Function Declarations
  Function declarations are fully hoisted.
  ```js
  greet(); // Output: Hello World!

function greet() {
  console.log("Hello World!");
}
Function name and body are hoisted.
  ```
  ## 2️⃣ Function Expressions
  Function expressions are not hoisted fully.
  sayHello(); // TypeError: sayHello is not a function
```js
var sayHello = function () {
  console.log("Hi!");
};
Only the variable sayHello is hoisted (as undefined), not the function.
```
## 3️⃣ Arrow Functions

Arrow functions behave the same as function expressions.
```js
sayHi(); // ReferenceError

const sayHi = () => {
  console.log("Hi there!");
};
```

## 🔹 Example: Before and After Execution

### Before Execution
```text
var name;           // hoisted
let age;            // hoisted but in Temporal Dead Zone (TDZ)
const city;         // hoisted but in TDZ
function greet() {} // hoisted with definition
```
## 🔹 Key Points
- Declarations are hoisted, initializations are not.
- var variables → hoisted with undefined.
- let & const → hoisted, but cannot access before declaration.
- Function declarations → fully hoisted.
- Function expressions & arrow functions → not fully hoisted.