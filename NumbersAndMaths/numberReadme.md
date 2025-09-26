# 📝 JavaScript Number Methods

JavaScript provides several **built-in methods** to work with numbers. Numbers in JavaScript are of type `number` and are **primitive** values.

---
## 🔹 Common Number Methods

### 1️⃣ `toString()`
**Definition:** Converts a number to a string.  
**Example:**
```js
let num = 123;
console.log(num.toString()); // "123"
```
### 2️⃣ `toFixed(digits)`
**Definition:** Formats a number to a specified number of decimal places and returns a string. 
**Example:**
```js
let num = 3.14159;
console.log(num.toFixed(2)); // "3.14"
```
### 3️⃣`toPrecision(precision)`
**Definition:** Returns a string representing the number to a specified precision (total number of digits).
**Example:**
```js
let num = 3.14159;
console.log(num.toPrecision(4)); // "3.142"

```

### 4️⃣ `Number.isInteger(value)`
**Definition:** Checks whether the value is an integer.
**Example:**
```js
console.log(Number.isInteger(10));    // true
console.log(Number.isInteger(10.5));  // false

```


### 5️⃣ `Number.isNaN(value)`
**Definition:** Checks whether the value is NaN (Not-a-Number).
**Example:**
```js
console.log(Number.isNaN(NaN));     // true
console.log(Number.isNaN(123));     // false

```
### 6️⃣ `parseInt(string, radix)`
**Definition:** Converts a string to an integer.
**Example:**
```js
console.log(parseInt("100"));    // 100
console.log(parseInt("100px"));  // 100

```
### 7️⃣ `parseFloat(string)`
**Definition:** Converts a string to a floating-point number.
**Example:**
```js
console.log(parseFloat("3.14"));     // 3.14
console.log(parseFloat("3.14px"));   // 3.14

```
### 8️⃣ `toExponential(fractionDigits)`
**Definition:** Returns a string representing the number in exponential (scientific) notation.
**Example:**
```js
let num = 12345;
console.log(num.toExponential(2)); // "1.23e+4"

```
### 9️⃣ `valueOf()`
**Definition:** Returns the primitive numeric value of a Number object.
**Example:**
```js
let num = new Number(123);
console.log(num.valueOf()); // 123

```
