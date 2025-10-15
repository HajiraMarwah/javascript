# 📘 Understanding `async` in JavaScript

In JavaScript, `async` is a keyword that allows you to write asynchronous (non-blocking) code using a cleaner, more readable syntax. It works hand-in-hand with `await`.

---

## 🧠 Why Asynchronous?

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
