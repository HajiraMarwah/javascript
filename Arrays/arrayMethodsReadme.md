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
```js
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

```
### 1️⃣3️⃣ `filter()`- Creates a new array with elements that pass a condition.
```js
let numbers = [1, 2, 3, 4, 5];
let even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

```
### 1️⃣4️⃣ `reduce()`-Reduces array to a single value.
```js
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
```
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
