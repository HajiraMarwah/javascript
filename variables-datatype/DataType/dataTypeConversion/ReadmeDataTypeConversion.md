# 🔄 Data Type Conversion in JavaScript

Data type conversion is the process of **changing a value from one type to another**.  
JavaScript allows both **automatic (type coercion)** and **manual (explicit conversion)**.

---

## 1️⃣ Implicit Conversion (Type Coercion)

JavaScript automatically converts one type to another when needed.

### Examples:

```js
// Number → String
let result1 = 5 + "5"; 
console.log("result1",result1); // "55" (number converted to string)

// String → Number
let result2 = "5" * 2;
console.log("result2",result2); // 10 (string converted to number)

// Boolean → Number
let result3 = true + 1;
console.log(result3); // 2 (true is 1, false is 0)
```
## 2️⃣ Explicit Conversion (Manual)

You can manually convert values using JavaScript functions.

### Examples:

```js
// To String
let num = 10;
let str = String(num);
console.log(str); // "10"

// To Number
let strNum = "20";
let num2 = Number(strNum);
console.log(num2); // 20

// To Boolean
let value = 0;
let boolVal = Boolean(value);
console.log(boolVal); // false

// Using unary + for conversion to number
let x = "30";
let y = +x;
console.log("y value ",y); // 30

```
## 🔹 Key Points

- Implicit conversion happens automatically during operations like `+`, `-`, `*`, etc.
- Explicit conversion is safer and more predictable.
- `0`, `""`, `null`, `undefined`, `NaN` → converted to `false` in boolean context.
- Any non-empty string or non-zero number → converted to `true`.
- Use explicit conversion when you want clear and predictable behavior.
- Type coercion can cause unexpected results, always check your operations.

### 3️⃣ Operations on Logical Operators in JavaScript

Logical operators in **JavaScript**, unlike in many other programming languages,  
do **not always return `true` or `false`**.  
Instead, they return **one of the operands**.

---

#### 🔹 OR (`||`) Operator
- If the **first value** is **truthy**, then the **first value** is returned.  
- Otherwise, the **second value** is returned.

**Example:**
```js
console.log(5 || 10);     // 5  (since 5 is truthy)
console.log(null || "Hi"); // "Hi" (first is falsy, so returns second)
```
#### 🔹AND (`&&`) Operator
- If **both values** are **truthy**, the **second value** is returned.  
- If the **first value** is **falsy**, then the **first value** is returned.
- If the **second value** is **falsy**, then the **second value** is returned.

**Example:**
```js
console.log(5 && 10);     // 10 (both truthy, returns second)
console.log(0 && 10);     // 0  (first is falsy, returns first)
console.log(5 && null);   // null (second is falsy, returns second)

```
 # 🔹 Summary

 - || → returns the first truthy value.
 - && → returns the first falsy value (or last truthy if none falsy).

# Comparison Operators in JavaScript

## 1️⃣ `==` (Equality / Loose Equality)

Checks if two values are equal **after type coercion** (automatic conversion).

### Examples:

```js
5 == "5";           // true (string converted to number)
true == 1;          // true
null == undefined;  // true

```
## 2️⃣ === (Strict Equality)

Checks if two values are equal without type conversion.

Both value and type must be the same.
###  Example:
```js
5 === "5"; // false (different types)
true === 1; // false
null === undefined; // false
```
## 🔹 Key Points
  - == → allows type coercion; can lead to unexpected results.
  - === → strict equality; safer and recommended.
  - Similarly, != is loose inequality, and !== is strict inequality.





