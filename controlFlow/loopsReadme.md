# 🔁 Loops in JavaScript

Loops in JavaScript are used to **repeat a block of code** until a specific condition becomes false.  
They help reduce repetition and make programs shorter and cleaner.

---

## 📌 Types of Loops in JavaScript

### 🔹 1. `for` Loop
Used when the number of iterations is **known**.

**Syntax:**
```js
for (initialization; condition; update) {
  // code to execute
}
```
**Example:**
```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0 1 2 3 4
```
### 🔹 2. while Loop
  Used when the number of iterations is unknown and depends on a condition.
Runs as long as the condition is true.

**Syntax**
```js
while (condition) {
  // code to execute
}

```
**Example**
```js
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
// Output: 0 1 2
```
### 🔹 3. do...while Loop
Similar to while, but ensures the loop executes at least once before checking the condition.
**Syntax**:
```js
do {
  // code to execute
} while (condition);
```
**Example:**
```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);
// Output: 0 1 2
```
