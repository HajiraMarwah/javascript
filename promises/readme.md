# 🧩 Promises in JavaScript

## 📘 What is a Promise?

A **Promise** in JavaScript represents the **eventual completion (or failure)** of an **asynchronous operation** and its resulting value.

It’s an object that acts as a **placeholder for a future value** — something that will be returned later.

---

## 🔹 Promise States

A Promise can be in one of **three states**:

| State | Meaning |
|--------|----------|
| `pending` | Initial state; neither fulfilled nor rejected |
| `fulfilled` | Operation completed successfully |
| `rejected` | Operation failed |

---

## 🔹 Basic Syntax

```js
const promise = new Promise((resolve, reject) => {
  // Perform async work
  let success = true;

  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Something went wrong!");
  }
});

promise
  .then((result) => console.log(result))  // Success handler
  .catch((error) => console.error(error)) // Error handler
  .finally(() => console.log("Promise completed"));
```
**Example 1: Simulating Async Work**
```js
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = { id: 1, name: "Hajira" };
    resolve(data);
  }, 2000);
});

fetchData.then((result) => console.log(result));
// Output after 2 seconds: { id: 1, name: "Hajira" }
```
**Promise Chaining**-You can chain .then() to perform sequential async actions.
```js
new Promise((resolve) => resolve(2))
  .then((num) => num * 2)
  .then((num) => num + 5)
  .then((result) => console.log(result)); // Output: 9
```
## Combining Multiple Promises
**Promise.all()**-Waits for all promises to resolve.
```js
Promise.all([
  Promise.resolve("A"),
  Promise.resolve("B"),
  Promise.resolve("C"),
]).then((values) => console.log(values)); // ["A", "B", "C"]
```
**Promise.race()**

Returns the first promise that settles (resolves or rejects).
```js
Promise.race([
  new Promise((res) => setTimeout(res, 100, "Fast")),
  new Promise((res) => setTimeout(res, 500, "Slow")),
]).then(console.log); // "Fast"
```
**Promise.allSettled()**

Waits for all promises to settle (either resolve or reject).
```js
Promise.allSettled([
  Promise.resolve("✅ Success"),
  Promise.reject("❌ Failed"),
]).then(console.log);
```
**Async/Await (Built on Promises)**

async/await is syntactic sugar over Promises for cleaner, synchronous-like code.
```js
async function fetchData() {
  try {
    const result = await new Promise((resolve) =>
      setTimeout(() => resolve("Data loaded"), 1000)
    );
    console.log(result);
  } catch (err) {
    console.error("Error:", err);
  }
}

fetchData();
```
## Advantages
- avoid callback hell
- easier chaining the async tasks
- Better error handling

## common pitfalls
- forgetting to return promise
- not handling errors in catch 
- mixing callback and promsies unneccesarily 