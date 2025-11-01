## What is a Closure?

- A closure is created when a function remembers and can access variables from its outer scope — even after that outer function has finished executing.
-  In simple terms:
A closure gives you access to an outer function’s variables from an inner function.
```js
function outer() {
  let count = 0; // variable in outer scope

  function inner() {
    count++;               // inner function uses outer variable
    console.log(count);
  }

  return inner; // return the inner function
}

const counter = outer();  // outer() has finished execution
counter(); // 1
counter(); // 2
counter(); // 3
```
**Advantages of Closures**
  1. Data encapsulation:
   - Keep variables private and safe from external modification.
  2. State preservation:
   - Remember previous values even after the outer function has executed.
  3. Modularity:
   - Helps you organize code into smaller, reusable units.

**Disadvantages of Closures**
  1. Memory usage
  2. Complex debugging
  3. Overuse can reduce readability
