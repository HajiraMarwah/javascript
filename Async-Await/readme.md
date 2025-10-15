#  Understanding `async` in JavaScript

In JavaScript, `async` is a keyword that allows you to write asynchronous (non-blocking) code using a cleaner, more readable syntax. It works hand-in-hand with `await`.

---

##  Why Asynchronous?

JavaScript runs in a **single thread**, so long-running tasks (like fetching data from a server) can **block** the rest of your code from running.

To avoid this, JavaScript uses **asynchronous programming** to allow the rest of your code to run while waiting for a task to finish.

---

## 🔑 What is `async`?

- `async` is used to declare a **function** that always returns a **Promise**.
- Inside an `async` function, you can use the `await` keyword to **pause** execution until a Promise resolves.

---

## 🧪 Basic Syntax

```js
async function myFunction() {
    return "Hello";
}
```
Calling this function returns a Promise, even though it returns a string:
```js
myFunction().then(result => {
    console.log(result); // Output: Hello
});
```
## Using await inside async
```js
function waitOneSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Done waiting!");
        }, 1000);
    });
}

async function run() {
    console.log("Start");
    const result = await waitOneSecond(); // ⏳ waits here
    console.log(result);                  // ✅ prints after 1 second
    console.log("End");
}

run();
```
**Output:**
```sql
Start
Done waiting!
End
```
await pauses the function until the Promise is resolved — without blocking the rest of your program.

## Rules of async / await
  - await can only be used inside async functions.
  - async functions always return a Promise — even if you return a simple value.
  - You can use try...catch to handle errors in async functions.

## Error Handling
```js
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
```
## Chaining vs Async/Await
**Without async:**
```js
fetch('url')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```
**With async/await:**
```js
async function getData() {
    try {
        const res = await fetch('url');
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
```
async/await makes asynchronous code look synchronous, making it easier to write and debug.

## Returning Promises from async functions
```js
async function hello() {
    return "Hello World";
}

hello().then(result => console.log(result)); // "Hello World"
```
This works because async functions always return a Promise.
## Summary
| Keyword | Purpose                                          |
| ------- | ------------------------------------------------ |
| `async` | Declares a function that returns a Promise       |
| `await` | Waits for a Promise to resolve before continuing |
## Best Use Cases for async/await:
  - Fetching data from APIs
  - Delaying execution (e.g., setTimeout)
  - Waiting for multiple async tasks (Promise.all)
  - Cleaner replacement for .then() chains