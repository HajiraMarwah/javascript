# 📌 How JavaScript Executes Code

JavaScript uses the **Execution Context** + **Call Stack** model to run code.

---

## 🔹 1. Execution Context

Whenever JS runs your code, it creates an **Execution Context**.

There are two main phases:

### ① Creation Phase
- A **Global Execution Context (GEC)** is created when your program starts.  
- JavaScript allocates memory for:
  - **Variables**  
    - `var` → created and initialized as `undefined`  
    - `let` / `const` → created but left **uninitialized** (in **TDZ** → Temporal Dead Zone)  
  - **Functions**  
    - Function **declarations** are hoisted with the full function definition  

👉 This is why we say **"hoisting" happens**.
## Example:
```js
let val1 = 10
let val2 = 5

function addNum(num1, num2) {
  let total = num1 + num2
  return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

```
### 🔹 Step 1: Global Execution Context → Creation Phase
 - JS engine scans the code before execution.
 - let val1 → created, uninitialized (TDZ).
 - let val2 → created, uninitialized (TDZ).
 - addNum (function declaration) → hoisted with full function definition.
 - let result1 → created, uninitialized (TDZ).
 - let result2 → created, uninitialized (TDZ).
 ## 📌 Memory snapshot after creation phase:
 ```js
 val1    -> uninitialized
val2    -> uninitialized
addNum  -> function object
result1 -> uninitialized
result2 -> uninitialized

 ```
---

### ② Execution Phase
- The code runs **line by line**.  
- Variables get assigned values.  
- Functions are executed when called.  

## 🔹 Step 2: Global Execution Context → Execution Phase-
    Now code runs line by line.
    1.let val1 = 10 → assigns 10.
    2.Now code runs line by line.
    3.function addNum(...) { ... } → already in memory from creation phase.
  1. Line: let result1 = addNum(val1, val2)
     Call addNum(10, 5).
     A new Function Execution Context is created for addNum.
   # addNum Creation Phase:
     ```js
     num1   -> uninitialized
     num2   -> uninitialized
    total  -> uninitialized
    ```
   # addNum Execution Phase:
     1.num1 = 10
     2.num2 = 5
     3.let total = num1 + num2 → total = 15
     4.return total → returns 15 
    # Back in global:
      ```js 
       result1 = 15
       ```
  2. Line: let result2 = addNum(10, 2)
      Call addNum(10, 2).
      New Function Execution Context created again.
    # addNum Creation Phase:
     ```js
      num1   -> uninitialized
      num2   -> uninitialized
      total  -> uninitialized
     ```
    # addNum Execution Phase:
     num1 = 10
     num2 = 2
     let total = num1 + num2 → total = 12
     return total → returns 12
    # Back in global:
      ```js
   result2 = 12
    ```
## 🔹 Step 3: End of Program
    Final memory state in global:
  ```js
  val1    = 10
  val2    = 5
  addNum  = function definition
  result1 = 15
  result2 = 12
```
---

## 🔹 2. Call Stack
- JavaScript is **single-threaded** → it executes one thing at a time.  
- The **Call Stack** keeps track of function calls.  
- It follows **LIFO (Last In, First Out)** order.  

Example:

```js
function first() {
  console.log("Inside first");
  second();
  console.log("Back to first");
}

function second() {
  console.log("Inside second");
}

console.log("Start");
first();
console.log("End");
```
## Step-by-step:
  - Global context is created.
  - "Start" is printed.
  - first() is pushed on the stack.
  - "Inside first" is printed.
  - second() is called → pushed on stack.
  - "Inside second" is printed.
  - second() finishes → popped from stack.
  - "Back to first" is printed.
  - first() finishes → popped from stack.
  - "End" is printed.
  - Global context is cleared.

## Call Stack Timeline
```js
Initial:         []
After Start:     [Global]
Call first:      [Global, first]
Call second:     [Global, first, second]
Return second:   [Global, first]
Return first:    [Global]
End:             []
```
## ✅ Key Points to Remember

 1. JS runs in two phases: Creation + Execution.
 2. Variables (var) hoisted as undefined, let/const hoisted but uninitialized (TDZ).
 3. Functions are hoisted fully.
 4. Call Stack executes functions in LIFO order.