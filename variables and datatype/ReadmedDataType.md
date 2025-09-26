# JavaScript Data Types

---

## ✅ Primitive Data Types

### Definition
Basic, built-in data types that hold a single value directly in memory.  
They are **immutable** (cannot be changed once created).

### Types
- **Number** → integers & floats (`10`, `3.14`)  
- **String** → sequence of characters (`"Hello"`)  
- **Boolean** → `true` / `false`  
- **Undefined** → declared but not assigned  
- **Null** → intentional empty value  
- **Symbol** → unique identifier  
- **BigInt** → very large integers  

### Example
```js
let age = 25;           // Number
let name = "Priyanka";  // String
let isAdmin = true;     // Boolean
let x;                  // Undefined
let y = null;           // Null
```
# ✅ Non-Primitive (Reference) Data Types in JavaScript

---

## 📖 Definition
Non-primitive data types are **complex data structures** that can hold multiple values.  
They are stored as **references** (memory addresses), not as actual values.  
They are **mutable**, meaning their contents can be changed.

---

## 🗂️ Types of Non-Primitive Data Types

1. **Object** → Stores key-value pairs.  
2. **Array** → Stores an ordered collection of values.  
3. **Function** → Callable objects that can execute code.  

---

## 💻 Examples

### Object
```js
let person = { name: "Priyanka", age: 25 }; 
console.log(person.name); // "Priyanka"
```
 
### Array
```js
// Array example
let fruits = ["Apple", "Banana", "Mango"];

// Access values
console.log(fruits[0]); // "Apple"

// Add a value
fruits.push("Orange");
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

// Modify a value
fruits[1] = "Grapes";
console.log(fruits); // ["Apple", "Grapes", "Mango", "Orange"]

// Iterate through values
fruits.forEach(fruit => console.log(fruit));

```
### Function
```js
// Simple function
function greet() {
  return "Hello, Priyanka!";
}
console.log(greet()); // "Hello, Priyanka!"

// Function with parameters
function add(a, b) {
  return a + b;
}
console.log(add(5, 7)); // 12

// Function as a variable (first-class citizen in JS)
let sayHi = function(name) {
  return `Hi, ${name}!`;
};
console.log(sayHi("Hajira")); // "Hi, Hajira!"

// Arrow function
let multiply = (x, y) => x * y;
console.log(multiply(4, 6)); // 24

```

# 📊 Primitive vs Non-Primitive Data Types

| Feature            | Primitive Data Types                              | Non-Primitive Data Types                  |
|--------------------|--------------------------------------------------|-------------------------------------------|
| **Definition**     | Basic, built-in types                            | Complex, reference-based types             |
| **Storage**        | Stored **by value**                              | Stored **by reference**                    |
| **Mutability**     | Immutable (cannot be changed)                    | Mutable (can be changed)                   |
| **Examples**       | Number, String, Boolean, Null, Undefined, Symbol, BigInt | Object, Array, Function             |
| **Copy Behavior**  | Creates a **new independent copy**               | Copies only the **reference (address)**    |
| **Memory**         | Stored in **stack**                              | Stored in **heap**                         |
