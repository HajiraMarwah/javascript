# 🔑 `this` Keyword in JavaScript  

The **`this` keyword** in JavaScript refers to the **execution context** — the object that is calling the function.  
Its value depends on **how and where** a function is invoked, not where it is defined.  

---

## 🔹 General Rules of `this`

1. In the **global scope** → `this` refers to the global object (`window` in browsers, `global` in Node.js).  
2. Inside an **object method** → `this` refers to the object.  
3. Inside a **regular function** →  
   - Non-strict mode → `this` is the global object.  
   - Strict mode → `this` is `undefined`.  
4. In an **arrow function** → `this` is **lexically bound**, meaning it inherits `this` from the surrounding context.  
5. In **event handlers** → `this` usually refers to the element that triggered the event.  
6. With **`call`, `apply`, and `bind`** → you can explicitly set the value of `this`.  

---

## 🔹 Examples  

### 1️⃣ Global Scope  
```js
console.log(this); 
// In browser: Window
// In Node.js: {}
```

### 2️⃣ Inside an Object Method
```js
const person = {
  name: "Hajira"
  greet: function () {
    console.log("Hello, " + this.name);
  }
};

person.greet(); 
// Output: Hello, Hajira
```

### 3️⃣ Regular Function (Non-strict vs Strict Mode)
```js
function showThis() {
  console.log(this);
}

// Non-strict mode
showThis(); 
// Window (in browser) and Global object(in node.js)

// Strict mode
"use strict";
function strictShowThis() {
  console.log(this);
}
strictShowThis(); 
// undefined

```
### 4️⃣ Arrow Function and this
```js
const person = {
  age: 25,
  showAge: () => {
    console.log(this.age);
  }
};

person.showAge(); 
// undefined, because arrow functions don’t have their own `this`
// It inherits from the outer scope (global in this case).

```

### 5️⃣ Event Handler Example
```js
<button id="btn">Click Me</button>

<script>
document.getElementById("btn").addEventListener("click", function () {
  console.log(this); 
  // Refers to the <button> element
});
</script>
```
### 6️⃣ Using call, apply, and bind
```js 
const person = { name: "Priyanka" };

function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

greet.call(person, "Hello");  // Hello, Priyanka
greet.apply(person, ["Hi"]);  // Hi, Priyanka

const boundGreet = greet.bind(person);
boundGreet("Welcome");        // Welcome, Priyanka
```
