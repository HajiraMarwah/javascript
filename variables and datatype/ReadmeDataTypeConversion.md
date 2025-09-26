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
console.log(result1); // "55" (number converted to string)

// String → Number
let result2 = "5" * 2;
console.log(result2); // 10 (string converted to number)

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
console.log(y); // 30

```
## Key Points
   -Implicit conversion happens automatically during operations like +, -, *, etc.
   -Explicit conversion is safer and more predictable.
   -0, "", null, undefined, NaN → converted to false in boolean context.
    -Any non-empty string or non-zero number → converted to true.


