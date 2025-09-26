✅ Primitive Data Types

Definition:
Basic, built-in data types that hold a single value directly in memory. They are immutable (cannot be changed once created).

Types:
  Number → integers & floats (10, 3.14)
  String → sequence of characters ("Hello")
  Boolean → true / false
  Undefined → declared but not assigned
  Null → intentional empty value
  Symbol → unique identifier
  BigInt → very large integers


Example:let age = 25;           // Number
let name = "Priyanka";  // String
let isAdmin = true;     // Boolean
let x;                  // Undefined
let y = null;           // Null



✅ Non-Primitive (Reference) Data Types
Definition:
Complex data types that can hold multiple values. Stored as references (memory address), not actual values. They are mutable.

Types:
   -object → key-value pairs
   -Array → ordered collection of values
   -Function → callable objects

Example:let person = { name: "Priyanka", age: 25 }; // Object
let numbers = [1, 2, 3, 4];                 // Array
function greet() { return "Hi!"; }          // Function


Example: Value vs Reference
// Primitive (value copy)
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (not affected)

// Non-Primitive (reference copy)
let obj1 = { name: "Priyanka" };
let obj2 = obj1;
obj2.name = "Hajira";
console.log(obj1.name); // "Hajira"

👉 In short:
Primitive = simple, stored by value, immutable.
Non-Primitive = complex, stored by reference, mutable.
