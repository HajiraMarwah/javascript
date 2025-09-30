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

**Syntax:**
```js
while (condition) {
  // code to execute
}

```
**Example:**
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
**Syntax:**:
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
### 🔹 4. for...of Loop (ES6+)
Used to loop over values of an iterable (like arrays, strings, maps, sets).
**Example:**
```js
let arr = [10, 20, 30];
for (let value of arr) {
  console.log(value);
}
// Output: 10 20 30

let str = "JS";
for (let char of str) {
  console.log(char);
}
// Output: J S
```
### 🔹 5. for...in Loop
Used to loop over the keys/properties of an object.
**Example:**
```js
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key, obj[key]);
}
// Output:
// a 1
// b 2
// c 3
```
### 🔹 6. Nested Loops
 Loops inside another loop.Useful for working with multi-dimensional arrays.
 **Example:**
 ```js
   for (let i = 1; i <= 3; i++) {
   for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
   }
  }
 // Output:
 // i=1, j=1
 // i=1, j=2
 // i=2, j=1
 // i=2, j=2
 // i=3, j=1
 // i=3, j=2
```
### 🔹 7. break and continue

break → exits the loop immediately.

continue → skips the current iteration and continues with the next.
**Example:**
```js
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}
// Output: 0 1 2

for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
// Output: 0 1 3 4
```
### Summary
- for → Use when you know how many times to run.
- while → Use when the loop depends on a condition.
- do...while → Use when you need the loop to run at least once.
- for...of → Use for values in arrays, strings, sets, maps.
- for...in → Use for object keys.
- Nested loops → Useful for multidimensional data.
- break & continue → Control loop execution.


