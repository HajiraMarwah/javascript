# 📝 JavaScript String Methods

JavaScript provides many **built-in methods** to manipulate strings. Strings are **immutable**, so most methods return a **new string** without changing the original.

---

## 🔹 Common String Methods

### 1️⃣ `length`
**Definition:** Returns the number of characters in a string.  
**Example:**
```js
let str = "Hello";
console.log(str.length); // 5
```

### 2️⃣ `toUpperCase()` / `toLowerCase()`
**Definition:**Converts the string to uppercase or lowercase.  
**Example:**
```js
let str = "Hello";
console.log(str.toUpperCase()); // "HELLO"
console.log(str.toLowerCase()); // "hello"
```
### 3️⃣ `charAt(index)` / `charCodeAt(index)`
**Definition:** Returns the character or its Unicode at the given index.
**Example:**
```js
let str = "Hello";
console.log(str.charAt(1));     // "e"
console.log(str.charCodeAt(1)); // 101
```
### 4️⃣ `indexOf()` / `lastIndexOf()`
**Definition:** Finds the position of a substring.
**Example:**
```js
let str = "Hello World";
console.log(str.indexOf("o"));       // 4 (first occurrence)
console.log(str.lastIndexOf("o"));   // 7 (last occurrence)

```
### 5️⃣ `trim()` / `trimStart()` / `trimEnd()`
**Definition:** Removes whitespace from the string.

**Example:**
```js
let str = "   Hello World   ";
console.log(str.trim());      // "Hello World"
console.log(str.trimStart()); // "Hello World   "
console.log(str.trimEnd());   // "   Hello World"

```
### 6️⃣ `split(separator)` / `join()`
**Definition:** Converts a string to an array (split) or array to string (join).
**Example:**
```js
let str = "a,b,c";
let arr = str.split(",");  // ["a","b","c"]
console.log(arr.join("-")); // "a-b-c"

```
### 7️⃣ `replace(searchValue, newValue)` / `replaceAll(searchValue, newValue)`
**Definition:** Replaces a substring with a new value.
**Example:**
```js
let str = "Hello World";
console.log(str.replace("World", "JS"));      // "Hello JS"
console.log(str.replaceAll("l", "L"));        // "HeLLo WorLd"

```
### 8️⃣ `includes()` / `startsWith()` / `endsWith()`
**Definition:** Checks the presence of a substring in a string.
**Example:**
```js
let str = "Hello World";
console.log(str.includes("World"));  // true
console.log(str.startsWith("Hello"));// true
console.log(str.endsWith("JS"));     // false

```
### 9️⃣ `repeat(n)`
**Definition:** Repeats the string n times.
**Example:**
```js
let str = "Hi! ";
console.log(str.repeat(3)); // "Hi! Hi! Hi! "

```
### 🔟 ``slice(start, end)``
**Definition:** The `slice()` method returns a **shallow copy of a portion of an array** into a new array without modifying the original array.  
 ## Explanation:
     -start → index at which to begin extraction (inclusive)
     -end → index at which to end extraction (exclusive, optional)
**Example:**
```js
let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(1, 4); // extracts elements from index 1 to 3
console.log(newArr); // [2, 3, 4]
console.log(arr);    // [1, 2, 3, 4, 5] (original array unchanged)

```
### 1️⃣1️⃣ `splice(start, deleteCount, item1, item2, ...)`
**Definition:** The `splice()` method **changes the contents of an array** by removing or replacing existing elements and/or adding new elements in place.  

**Parameters:**
- `start` → Index at which to start changing the array.  
- `deleteCount` → Number of elements to remove.  
- `item1, item2, ...` → Elements to add to the array (optional).  

**Example:**
```js
let arr = [1, 2, 3, 4, 5];
let removed = arr.splice(2, 2, 6, 7); // removes 2 elements starting at index 2, adds 6 and 7
console.log(arr);     // [1, 2, 6, 7, 5]
console.log(removed); // [3, 4] (removed elements)



