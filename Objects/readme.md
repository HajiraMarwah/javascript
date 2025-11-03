# 🟦 JavaScript Object Methods

In JavaScript, objects are collections of **key-value pairs**.  
The language provides several **built-in methods** to work with objects efficiently.  

---

## 🔹 1. `Object.keys()`
Returns an array of an object’s  (keys).

```js
const user = { name: "Priya", age: 25, city: "Delhi" };
console.log(Object.keys(user)); 
// ["name", "age", "city"]
```
## 🔹 2. Object.values()
Returns an array of the object’s values.

```js
const user = { name: "Priya", age: 25, city: "Delhi" };
console.log(Object.values(user)); 
// ["Priya", 25, "Delhi"]

```
## 🔹 3. Object.entries()
Returns an array of [key, value] pairs.

```js
const user = { name: "Priya", age: 25 };
console.log(Object.entries(user)); 
// [["name", "Priya"], ["age", 25]]

```
## 🔹 4. Object.assign()
Copies properties from one or more source objects to a target object.

```js
const target = { a: 1 };
const source = { b: 2, c: 3 };
const result = Object.assign(target, source);
console.log(result); 
// { a: 1, b: 2, c: 3 }

```
## 🔹 5. Object.freeze()
Prevents modification of existing properties (no add, remove, or change).

```js
const config = { api: "v1" };
Object.freeze(config);
config.api = "v2";  // ❌ No effect
console.log(config.api); 
// "v1"

```

## 🔹 6. Object.seal()
 Prevents adding/removing properties but allows modifying existing ones.

 ```js
 const person = { name: "Priya", age: 25 };
Object.seal(person);
person.age = 26; // ✅ Allowed
person.city = "Delhi"; // ❌ Not allowed
delete person.age  //not allowed
console.log(person); 
// { name: "Priya", age: 26 }

 ```
## 🔹 7. Object.create()

Creates a new object with the specified prototype.
```js
const parent = { greet: function() { console.log("Hello!"); } };
const child = Object.create(parent);
child.greet(); // "Hello!"

```
## 🔹 8. Object.hasOwn()
Checks if an object has a specific property (not inherited).

```js
const user = { name: "Priya" };
console.log(Object.hasOwn(user, "name")); // true
console.log(Object.hasOwn(user, "age"));  // false

```

## 🔹 9. Object.getOwnPropertyNames()
Returns an array of all property names (including non-enumerable).

```js
const obj = { a: 1, b: 2 };
console.log(Object.getOwnPropertyNames(obj)); 
// ["a", "b"]

```

## 🔹 10. Object.fromEntries()
Converts an array of key-value pairs into an object.

```js
const entries = [["name", "Priya"], ["age", 25]];
const obj = Object.fromEntries(entries);
console.log(obj); 
// { name: "Priya", age: 25 }

```
## 🔹 11. Object.is()
Compares two values for strict equality (similar to ===, but handles edge cases).

```js
console.log(Object.is(25, 25));       // true
console.log(Object.is(NaN, NaN));     // true (unlike ===)
console.log(Object.is(0, -0));        // false

```

### Creating Objects in JavaScript
1. Object literal which is commom
```js
const user={name:"hajira",age:28}
```
2. using new object
```js
const user=new Object()
user.name="hajira"
user.age=28
```

3. using consructor
```js
function User(name,age){
  this.name=name
  this.age=age
}
const u1=new User("hajira",28)
```

4. using class
```js
class User{
    constructor(name,age){
        this.name=name
        this.age=age
    }
}
const user1=new User("hajira",28)
```