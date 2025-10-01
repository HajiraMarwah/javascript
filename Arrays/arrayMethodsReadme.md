# 📘 JavaScript Arrays

## 🔹 What is an Array?
An **Array** in JavaScript is a special variable that can hold multiple values in a single variable.  
It is a collection of items stored at **contiguous memory locations** and can be accessed using an **index (0-based indexing).**

✅ Example:
```js
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Mango
```
 ## 🔹 Why use Arrays?
 - Store multiple values in one variable
 - Iterate easily using loops
 - Useful for lists, collections, datasets

## 🔹 Common Used Array Methods

  ### 1️⃣ `push()`- Adds one or more elements to the end of an array.
  ```js
  let numbers = [1, 2, 3];
   numbers.push(4);
   console.log(numbers); // [1, 2, 3, 4]
```
  ### 2️⃣ `pop()`- Adds one or more elements to the end of an array.
  ```js
  let numbers = [1, 2, 3];
  numbers.pop();
  console.log(numbers); // [1, 2]

```
### 3️⃣ `shift()`-Removes the first element of an array.
```js
let numbers = [1, 2, 3];
numbers.shift();
console.log(numbers); // [2, 3]

```
### 4️⃣ `unshift()`-Adds one or more elements to the beginning of an array.
```js
let numbers = [2, 3];
numbers.unshift(1);
console.log(numbers); // [1, 2, 3]

```
### 5️⃣ `concat()`-Combines two or more arrays into a new array.
```js
let a = [1, 2];
let b = [3, 4];
let result = a.concat(b);
console.log(result); // [1, 2, 3, 4]

```
### 6️⃣ `join()`-Joins all elements into a string (default separator: ,).
```js
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.join(" - ")); // Apple - Banana - Mango

```
### 7️⃣ `indexOf()`-Returns the first index of an element.
```js
let nums = [10, 20, 30, 20];
console.log(nums.indexOf(20)); // 1
```
### 8️⃣ `includes()`- Checks if an element exists in the array (true/false).
```js
let fruits = ["Apple", "Banana"];
console.log(fruits.includes("Banana")); // true
console.log(fruits.includes("Mango"));  // false
```
### 9️⃣ `includes()`-Checks if an element exists in the array (true/false).
```js
let fruits = ["Apple", "Banana"];
console.log(fruits.includes("Banana")); // true
console.log(fruits.includes("Mango"));  // false
```
### 🔟 `slice(start, end)`-Returns a shallow copy of a portion of the array (non-destructive).
```js
let nums = [1, 2, 3, 4, 5];
console.log(nums.slice(1, 4)); // [2, 3, 4]
console.log(nums); // [1, 2, 3, 4, 5] (unchanged)
```
### 1️⃣1️⃣ `splice(start, deleteCount, ...items)`-Changes the original array by adding/removing elements.
```js
let nums = [1, 2, 3, 4, 5];
nums.splice(2, 2, 99, 100); 
console.log(nums); // [1, 2, 99, 100, 5]

```
### 1️⃣2️⃣ `map()`-Creates a new array by applying a function to each element.
 **Syntax**  
   ```js
   array.map(function(element, index, array) {
   // return transformed value
     });
  ```
 **Example:**   
```js
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

```
  **Example1**
  ```js
     let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

let names = users.map(user => user.name);

console.log(names);
// ["Alice", "Bob", "Charlie"]

  ```
  ***✅ When to Use map()***
  - When you want to transform each element of an array.
  - To create a new array of the same length.
  - Example use cases: formatting data, extracting properties, converting values.

### 1️⃣3️⃣ `filter()`- Creates a new array with elements that pass a condition provide by callback function.
**Syntax**
```js
array.filter(function(element, index, array) {
  // return true to keep the element
  // return false to exclude the element
});
element → current element being processed
index → index of the current element (optional)
array → the original array (optional)
```
***Example***
```js
let numbers = [1, 2, 3, 4, 5];
let even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

```
***Example 1: Filter Numbers Greater Than 10***
```js
let numbers = [5, 12, 8, 130, 44];

let result = numbers.filter(num => num > 10);

console.log(result); 
// [12, 130, 44]
```
***Example 2: Filter Objects in an Array***
```js
let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 }
];

let adults = users.filter(user => user.age >= 18);

console.log(adults);
// [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 } ]
```
 **✅ When to Use filter()**
  - Extract elements that match a condition.
  - Remove unwanted values.
  - Create a smaller array based on a rule.
### 1️⃣4️⃣ `reduce()`-Reduce method executes a reducer function on each element of an array, resulting in a **single output value**.  

It is often used for **summing, counting, or combining values**. 
**Syntax**
```js
array.reduce(function(accumulator, currentValue, index, array) {
  // return updated accumulator
}, initialValue);
accumulator → accumulates the result of each iteration.
currentValue → the current element being processed.
index → index of the current element (optional).
array → the original array (optional).
initialValue → starting value of the accumulator (optional but recommended).
```
**Example1:Sum of Numbers**
```js
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
```
**Example2:Product of Numbers**
```js
let nums = [2, 3, 4];
let product = nums.reduce((acc, curr) => acc * curr, 1);
console.log(product); 
// 24
```
**Example 3:Flatten an Array**
```js
let nested = [[1, 2], [3, 4], [5, 6]];

let flat = nested.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat); 
// [1, 2, 3, 4, 5, 6]

```
**Example 4: Count Occurrences**
```js
let fruits = ["apple", "banana", "apple", "cherry", "banana"];
let count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); 
// { apple: 2, banana: 2, cherry: 1 }
```
***✅ When to Use reduce()***
  - To calculate a single value from an array (sum, product, max, min).
  - To transform an array into an object or another array.
  - When you want accumulation logic over an array.

### 1️⃣5️⃣ `forEach()`- Executes a function for each array element.
```js
let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(fruit => console.log(fruit));
// Apple, Banana, Mango

```
### 1️⃣6️⃣ `find()`- Returns the first element that satisfies the condition.
```js
let nums = [10, 20, 30, 40];
console.log(nums.find(num => num > 25)); // 30

```

### 1️⃣7️⃣ `findIndex()`- Returns the index of the first element that satisfies the condition.
```js
let nums = [10, 20, 30, 40];
console.log(nums.findIndex(num => num > 25)); // 2

```
### 1️⃣8️⃣ `sort()`-Sorts the array (alphabetically or numerically).
```js
let fruits = ["Banana", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Mango"]

```
### 1️⃣9️⃣ `reverse()`- Reverses the order of array elements.
```js
let nums = [1, 2, 3];
nums.reverse();
console.log(nums); // [3, 2, 1]

```
### 2️⃣0️⃣ `every()`- Checks if all elements pass the condition.
```js
let nums = [2, 4, 6];
console.log(nums.every(num => num % 2 === 0)); // true

```
### 2️⃣1️⃣ `some()`- Checks if at least one element passes the condition.
```js
let nums = [1, 3, 5, 6];
console.log(nums.some(num => num % 2 === 0)); // true

```
### 2️⃣2️⃣ `flat()`-Flattens nested arrays into a single array.
```js
let arr = [1, [2, [3, 4]]];
console.log(arr.flat(2)); // [1, 2, 3, 4]

```
### 2️⃣3️⃣ `flatMap()`-Maps each element and flattens the result.
```js
let nums = [1, 2, 3];
console.log(nums.flatMap(x => [x, x * 2])); // [1, 2, 2, 4, 3, 6]

```
### 2️⃣4️⃣ `fill(value, start, end)`-Fills all elements with a static value.
```js
let nums = [1, 2, 3, 4];
nums.fill(0, 1, 3);
console.log(nums); // [1, 0, 0, 4]

let arr1 = [5, 6, 7, 8];
arr1.fill(9);  
console.log(arr1); // [9, 9, 9, 9] (whole array filled)

```
