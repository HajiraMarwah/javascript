# What is Recursion in JavaScript
## Recursion means
  - a function calling itself until a specific condition (called the base case) is met.
  - It’s used to solve problems that can be broken down into smaller, similar subproblems.

**Structure of a Recursive Function**
```js
function recursiveFunction() {
  // Base case – stopping condition
  if (condition) {
    return result;
  }

  // Recursive case – function calling itself
  return recursiveFunction();
}
```
**Factorial**
```js
function factorial(n) {
  if (n === 1) {  // base case
    return 1;
  }
  return n * factorial(n - 1); // recursive call
}

console.log(factorial(5)); // Output: 120
```
**Advantages of Recursion**
 1. Makes code cleaner and readable
 2. reduces complecx loops

**Disadvantages**
1. can be slowe(more memory used for call stack)
2. Risk of stack overflow if base case is missing or incorrect

**Common Uses of Recursion**
 - Factorials and Fibonacci
 - Tree traversal (DOM, binary trees)
 - Searching and sorting (e.g., QuickSort, MergeSort)
 - File system navigation\
 