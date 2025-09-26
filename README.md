# JavaScript Overview

JavaScript is a **high-level, interpreted programming language** widely used for **web development**. It enables developers to create **dynamic and interactive websites** makes web page more functional, manipulate HTML/CSS, and communicate with servers.

---

## 🔹 Advantages of JavaScript

1. **Client-Side Execution**  
   - Runs directly in the user's browser, reducing server load and improving performance.

2. **Lightweight and Fast**  
   - Interpreted by the browser; executes quickly without compilation.

3. **Versatile**  
   - Can be used for **frontend, backend (Node.js)**, and mobile applications.

4. **Rich User Interfaces**  
   - Enables features like drag-and-drop, sliders, form validation, and animations.

5. **Event-Based Programming**  
   - Can respond to user actions like clicks, typing, or page load efficiently.

6. **Easy Integration**  
   - Works seamlessly with **HTML, CSS**, and other web technologies.

---

## 🔹 Disadvantages of JavaScript

1. **Browser Dependency**  
   - Behavior may differ across different browsers.

2. **Security Risks**  
   - Being client-side, it can be exploited if not properly handled.

3. **Single-Threaded**  
   - Long-running scripts can block the browser UI.

4. **No Compile-Time Checking**  
   - Errors appear at runtime, which can lead to bugs if not tested thoroughly.

5. **Limited Access to System Resources**  
   - Cannot directly read/write files or access hardware for security reasons.

---

## 🔹 Common JavaScript Errors

### 1️⃣ Syntax Errors
- Occur due to **incorrect code structure**.  
```js
let name = "Priyanka
// SyntaxError: Unterminated string literal
```
### 2️⃣ Reference Errors
- Occur when a variable or function is not defined.
```js
console.log(age);
// ReferenceError: age is not defined
```
### 3️⃣ Type Errors
- Occur when a value is used incorrectly based on its type.
```js
let num = 5;
num.toUpperCase();
// TypeError: num.toUpperCase is not a function

```
### 4️⃣ Range Errors
- Occur when a number is outside the allowed range.
```js
let arr = new Array(-1);
// RangeError: Invalid array length


```
### 5️⃣ Eval Errors
- Related to incorrect use of eval() function (rare in modern JS).

# Numbers in JavaScript

JavaScript provides the **Number object** to handle numeric values.  
One important property is `NaN` (Not-a-Number), which occurs when a numeric operation **cannot produce a valid number**.

---

## 🔹 `NaN` (Not-a-Number)

### Description
- Represents a value that is **not a valid number**.  


### Examples:

```js
let result1 = "hello" / 2;  // NaN
let result2 = 0 / 0;        // NaN
console.log(result1);       // NaN
console.log(Number.NaN);    // NaN
```
## Key Points
 - typeof NaN → "number" (even though it’s invalid)
 - Use isNaN(value) to check if a value is NaN:

 ```js
 console.log(isNaN("hello")); // true
 console.log(isNaN(123));     // false
```
 - NaN helps handle invalid numeric operations safely.

 # JavaScript: Static or Dynamic?

JavaScript is a **dynamically typed language**.

---

## 🔹 Dynamic Typing

- In JavaScript, the **type of a variable is determined at runtime**, not at compile time.  
- You **do not need to declare the type** of a variable; it can hold any type of value.  
- The type of a variable can **change during execution**.

### Example:

```js
let data = 10;      // Initially a number
console.log(typeof data); // "number"

data = "Hello";     // Now a string
console.log(typeof data); // "string"

data = true;        // Now a boolean
console.log(typeof data); // "boolean"
```
## Key Points
 - Dynamic typing makes JavaScript flexible and easy to write.
 - It can also lead to runtime errors if types are not handled carefully.
 - Unlike static languages (like Java or C++), you don’t declare variable types explicitly.

## 🔒 Strict Mode in JavaScript

Strict Mode was introduced in **ECMAScript 5 (ES5)** to enforce stricter parsing and error handling in JavaScript code.  
It helps developers write **secure, optimized, and less error-prone** code.

---

### 🔹 How to Enable Strict Mode?
You can enable strict mode by adding `"use strict";` at the **top of a script** or **inside a function**.

```js
"use strict";  // Whole script is in strict mode

function test() {
  "use strict";  // Only this function is in strict mode
}
```
## 🔑 Key Features of Strict Mode

- **Eliminates silent errors** → Errors that were ignored are now thrown.  
- **Disallows undeclared variables** → All variables must be declared with `let`, `const`, or `var`.  
    ```js
      "use strict";
      x = 10; // ❌ Error: x is not defined

    ```
- **Prevents duplicate parameter names** in functions.  
- **Changes `this` behavior** → In functions, `this` is `undefined` instead of the global object.  
- **Reserved keywords restriction** → Keywords like `class`, `enum`, `let`, `implements`, etc. cannot be used as identifiers.  
- **Prevents assignment to read-only properties or non-writable objects**.  
- **Safer eval()** → Variables declared inside `eval()` do not leak into the surrounding scope.  

