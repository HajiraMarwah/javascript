# ⚡ Data Type Operations in JavaScript

JavaScript allows different **operations on values**, and the behavior often depends on the **data type**.

---

## 1️⃣ Operations on Numbers

| Operation      | Example             | Result |
|----------------|------------------|--------|
| Addition       | `5 + 3`           | `8`    |
| Subtraction    | `10 - 2`          | `8`    |
| Multiplication | `4 * 2`           | `8`    |
| Division       | `16 / 2`          | `8`    |
| Modulus        | `17 % 3`          | `2`    |
| Exponentiation | `2 ** 3`          | `8`    |
| Increment      | `let x = 5; x++`  | `6` after operation |
| Decrement      | `let x = 5; x--`  | `4` after operation |

---

## 2️⃣ Operations on Strings

| Operation           | Example                  | Result           |
|--------------------|------------------------|----------------|
| Concatenation      | `"Hello " + "World"`     | `"Hello World"` |
| Template Literals  | `` `Hi ${name}` ``       | `"Hi Priyanka"` |
| Access character   | `"Hello"[0]`             | `"H"`          |
| Length             | `"Hello".length`         | `5`            |

> Strings are **immutable**; operations create a **new string**.

---

## 3️⃣ Operations on Booleans

| Operation           | Example               | Result |
|--------------------|---------------------|--------|
| AND (`&&`)          | `true && false`      | `false`|
| OR (`||`)           | `true || false`      | `true` |
| NOT (`!`)           | `!true`              | `false`|
| Comparison          | `true == 1`          | `true` |
| Comparison strict   | `true === 1`         | `false`|

> Booleans are often **used in conditions and loops**.

---


## 4️⃣ Operations on Null and Undefined

| Operation            | Example             | Result      |
|----------------------|------------------|------------|
| Null + Number        | `null + 5`        | `5`        |
| Undefined + Number   | `undefined + 5`   | `NaN`      |
| Boolean conversion   | `Boolean(null)`   | `false`    |
| Boolean conversion   | `Boolean(undefined)` | `false` |

---

## 5️⃣ Operations on Objects & Arrays

- **Objects**: Cannot be directly added or subtracted.  
  ```js
  let obj = {a: 1};
  console.log(obj + 5); // "[object Object]5"

- **Arrays**: Can be concatenated or converted to strings.
```js
let arr = [1, 2];
console.log(arr + [3, 4]);        // "1,23,4"
console.log(arr.concat([3, 4]));  // [1, 2, 3, 4]
```
## 🔹 Key Points
    -Numbers: standard arithmetic operations.
    -Strings: mainly concatenation and template literals.
    -Booleans: used in logical operations (&&, ||, !).
    -null and undefined behave differently in operations.
    -Objects and arrays usually require methods for meaningful operations.
 