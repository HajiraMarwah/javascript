# 🌐 Scope and Scope Chain in JavaScript  

In JavaScript, **scope** determines the **accessibility (visibility)** of variables.  
The **scope chain** defines how JavaScript resolves variables when they are not found in the current scope.  

---

## 🔹 What is Scope?  

Scope refers to the **current context of execution** where variables, functions, and objects are accessible.  

### Types of Scope in JavaScript  

1. **Global Scope**  
   - Variables declared outside any function or block.  
   - Accessible from **anywhere** in the code.  

2. **Function Scope (Local Scope)**  
   - Variables declared inside a function.  
   - Accessible **only within that function**.  

3. **Block Scope (ES6 – let & const)**  
   - Variables declared with `let` or `const` inside `{}`.  
   - Accessible only within that block.  

4. **Lexical Scope**  
   - Inner functions can access variables defined in their **outer functions**.  

---

## 🔹 Examples of Scope  

### 1️⃣ Global Scope  
```js
var globalVar = "I am global";

function showGlobal() {
  console.log(globalVar); // Accessible
}
showGlobal();
console.log(globalVar);   // Accessible
```
### 2️⃣ Function Scope
```js
function localScopeExample() {
  var localVar = "I am local";
  console.log(localVar); // Accessible
}
localScopeExample();
console.log(localVar);    // ❌ Error: localVar is not defined
```
 ### 3️⃣Block scope with let/const
```js
{
  let blockVar = "I am block scoped";
  console.log(blockVar); // Accessible here
}
console.log(blockVar);    // ❌ Error: blockVar is not defined
```
### 4️⃣ Lexical Scope
```js
function outer() {
  let outerVar = "Outer variable";

  function inner() {
    console.log(outerVar); // Can access outer variable
  }

  inner();
}
outer();
```