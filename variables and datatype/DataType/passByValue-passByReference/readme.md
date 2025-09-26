# Pass by Value vs Pass by Reference in JavaScript

In JavaScript, how data is passed to functions depends on whether it is a **primitive** or **non-primitive** type.

---
## 🔹 Pass by Value in JavaScript

**Definition:**  
Pass by Value means that when a **primitive data type** (like `Number`, `String`, `Boolean`, `null`, `undefined`, `Symbol`, `BigInt`) is passed to a function,  
the function receives a **copy of the original value**.  
Any changes made to the parameter **inside the function** do **not affect** the original variable.

---

### Key Points
- Only applies to **primitive types**: `Number`, `String`, `Boolean`, `null`, `undefined`, `Symbol`, `BigInt`.  
- Modifying the parameter inside the function **does not affect** the original variable.  
- Safe to pass because original data remains unchanged.

### Example:

```js
let x = 10;

function changeValue(num) {
  num = 20;   // Only modifies the local copy
}

changeValue(x);

console.log(x); // 10 (original value remains unchanged)
```

## 🔹 Pass by Reference in JavaScript

**Definition:**  
Pass by Reference means that when a **non-primitive data type** (like `Object`, `Array`, or `Function`) is passed to a function,  
the function receives a **reference to the original memory location** instead of a copy of the value.  
Any changes made to the parameter **inside the function** affect the **original object**.

---

### Key Points
- Only applies to **non-primitive types**: `Object`, `Array`, `Function`.  
- Modifying the object or array inside the function **affects the original**.  
- Allows updating data without returning a new object.

### Example:

```js
let person = { name: "Alice", age: 25 };

function updatePerson(obj) {
  obj.name = "Bob";      // Modifies the original object
  obj.age = 30;
}

updatePerson(person);

console.log(person.name); // "Bob"
console.log(person.age);  // 30
```