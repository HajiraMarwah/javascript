1. Optional Chaining (?.)

Access deeply nested properties without errors if intermediate property is null or undefined.
```js
const user = { name: "Alice", address: { city: "NY" } };
console.log(user?.address?.city); // "NY"
console.log(user?.company?.name); // undefined, no error
```
2. Nullish Coalescing (??)
Returns right-hand side value only if left-hand side is null or undefined.
Differs from || (which considers 0 or "" as falsy)
```js
let count = 0;
console.log(count || 10); // 10 (because 0 is falsy)
console.log(count ?? 10); // 0 (because 0 is not null/undefined)
```

## Iterators & Generators
Iterators

Objects that implement .next() to iterate.
```js
const arr = [1,2,3];
const it = arr[Symbol.iterator]();
console.log(it.next()); // {value: 1, done: false}
console.log(it.next()); // {value: 2, done: false}
```

## Generators

Functions that can pause & resume execution using yield.
```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
const g = gen();
console.log(g.next().value); // 1
console.log(g.next().value); // 2
```
## 7️⃣ Memory Leaks
 - Common causes:
  1. Global variables unnecessarily used
  2. Closures retaining references
  3. DOM elements not removed properly
  4. Timers / Event listeners not cleared

## Shallow Copy vs Deep Copy

**Shallow copy: Only top-level properties are copied (nested objects still reference original)**

let obj1 = { a: 1, b: { c: 2 } };
let obj2 = { ...obj1 };
obj2.b.c = 5;
console.log(obj1.b.c); // 5 → shallow copy


**Deep copy: Nested objects are also copied independently**

let obj3 = JSON.parse(JSON.stringify(obj1));
obj3.b.c = 10;
console.log(obj1.b.c); // 5 → deep copy
