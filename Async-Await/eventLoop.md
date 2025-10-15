# 🔁 JavaScript Event Loop Explained

The **Event Loop** is a fundamental concept in JavaScript's concurrency model. It enables **non-blocking asynchronous operations** even though JavaScript is **single-threaded**.

---

## 🧠 Why the Event Loop Exists

JavaScript runs on a **single thread**, meaning it can only do **one thing at a time**.

So how does it handle:

- Asynchronous tasks (like `fetch`, `setTimeout`, or `click` events)?
- Not freezing the page while waiting?

That’s where the **Event Loop** comes in.

---

## ⚙️ Components of the Event Loop

To understand the Event Loop, you need to know these parts:

### 1. **Call Stack**
- Stores all **function calls**.
- Follows **Last-In-First-Out (LIFO)** order.
- Executes code **line by line**.

### 2. **Web APIs**
- Provided by the **browser** (or Node.js).
- Handles things like:
  - `setTimeout`
  - `DOM events`
  - `fetch`

These are **not part of JavaScript itself**, but are used by it.

### 3. **Callback (Task) Queue**
- When Web APIs finish async tasks, they send callbacks here.
- The Event Loop picks tasks from this queue when the call stack is empty.

### 4. **Microtask Queue**
- Holds tasks like:
  - `.then()` callbacks from Promises
  - `queueMicrotask()`
- Microtasks are prioritized **before** the callback queue.

---

## 🔄 How the Event Loop Works

```text
1. Execute code in the Call Stack (sync code)
2. If an async task (like setTimeout) is called, it's sent to a Web API
3. Web API does its thing (e.g. waits 2s for setTimeout)
4. When done, it puts the callback in the Callback Queue (or Microtask Queue)
5. Event Loop checks:
   - Is the Call Stack empty?
   - If yes, run Microtasks first
   - Then run one task from the Callback Queue
6. Repeat
```
## Visual Diagram
```pgsql
+---------------------+
|     Call Stack      | ← Executes code
+---------------------+
          ↓
+---------------------+
|     Web APIs        | ← Browser APIs handle async
+---------------------+
          ↓
+---------------------+     +---------------------+
| Microtask Queue     | ← Promises, queueMicrotask
+---------------------+     +---------------------+
          ↓                          ↓
      Event Loop —————→ Picks tasks and runs them
          ↑
+---------------------+
| Callback Queue      | ← setTimeout, setInterval
+---------------------+
```
## Example: setTimeout vs Promise
```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```
**output**
```sql
Start
End
Promise
Timeout
```
## Why?
  - setTimeout(..., 0) goes to callback queue
  - Promise.then() goes to microtask queue
  - Microtasks run before the callback queue
  - The call stack runs:
     1. "Start"
     2. "End"
  - All microtasks → "Promise"
  - One task from callback queue → "Timeout"

## Key Takeaways
| Concept         | Summary                                  |
| --------------- | ---------------------------------------- |
| Event Loop      | Coordinates async execution              |
| Call Stack      | Runs synchronous JS code                 |
| Web APIs        | Handle async tasks                       |
| Microtask Queue | For promises and microtasks (runs first) |
| Callback Queue  | For things like `setTimeout`             |
| Single-threaded | Only one operation at a time             |

## Summary
  - JavaScript is single-threaded, but the Event Loop lets it handle async tasks efficiently.
  - It uses queues and Web APIs to manage background work.
  - Microtasks (Promises) have higher priority than callback tasks (setTimeout, events).