# 📝 JavaScript Math Methods

The `Math` object in JavaScript provides **properties and methods** for performing mathematical tasks. `Math` is **not a constructor**, so all methods are **static** and accessed as `Math.method()`.

---

## 🔹 Common Math Methods

### 1️⃣ `Math.abs(x)`
**Definition:** Returns the **absolute value** of `x`.  
**Example:**
```js
console.log(Math.abs(-5)); // 5
```
### 2️⃣ `Math.round(x)`
**Definition:** Rounds `x` to the nearest integer.  
**Example:**
```js
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4

```
### 3️⃣ `Math.ceil(x)`
**Definition:** Rounds `x` up to the nearest integer.  
**Example:**
```js
console.log(Math.ceil(4.1)); // 5

```
### 4️⃣ `Math.floor(x)`
**Definition:** Rounds `x` down to the nearest integer.
**Example:**
```js
console.log(Math.floor(4.9)); // 4
```
### 5️⃣ `Math.max(a, b, ...)`
**Definition:** Returns the largest number among the arguments.
**Example:**
```js
console.log(Math.max(1, 5, 3)); // 5

```
### 6️⃣ `Math.min(a, b, ...)`
**Definition:** Returns the smallest number among the arguments.
**Example:**
```js
console.log(Math.min(1, 5, 3)); // 1

```
### 7️⃣ `Math.pow(base, exponent)`
**Definition:** Returns base raised to the exponent power. 
**Example:**
```js
console.log(Math.pow(2, 3)); // 8

```
### 8️⃣ `Math.sqrt(x)`
**Definition:** Returns the square root of x.
**Example:**
```js
console.log(Math.sqrt(16)); // 4

```
### 9️⃣ `Math.random()`
**Definition:** Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).  
**Example:**
```js
console.log(Math.random()); // 0.123456 (example)

```
### 🔟 `Math.trunc(x)`
**Definition:** Returns the integer part of a number by removing any fractional digits.  
**Example:**
```js
console.log(Math.trunc(4.9)); // 4
console.log(Math.trunc(-4.9)); // -4

```
### 1️⃣1 `Math.floor(Math.random() * n)`
**Definition:** Common pattern to generate a random integer from 0 to n-1.
**Example:**
```js
let n = 10;
let randomInt = Math.floor(Math.random() * n);
console.log(randomInt); // 0 to 9

```
