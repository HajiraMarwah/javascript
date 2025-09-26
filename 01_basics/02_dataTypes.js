let name="hajira"
let age=28
let isLoggedIn=true
let state=null
let id = Symbol("id");
let person = { name: "Hajira", age: 25 };
function greet() {
  return "Hello!";
}

// DataType in javascript

// Primtive data type-These are immutable and stored by value.
// number-represent integer or floating point numbers
//bigInt-Used for very large integers beyond Number.MAX_SAFE_INTEGER.
//string- represent text can use single or double quote(mostly double quotes)
//boolean- represent boolean value either true or false
//null-standalone value or represtation of empty value
//undefined-when value is not defined 
//symbol-represent a unique identifier (often used as object property keys).

//Non-Primitive-These are mutable and stored by reference.

//  1.object-A collection of key–value pairs.
//   example:let person = { name: "Hajira", age: 25 };

//  2.Array- Ordered collection of elements (special kind of object).
// example:let numbers = [1, 2, 3, 4, 5];

// 3.Function- are also objects in JavaScript.
// Example:
// function greet() {
//   return "Hello!";
// }


// Special Notes
// typeof null → "object" (this is a JavaScript bug).
// Functions are technically objects but typeof returns "function".

console.log(typeof(state))  //object
console.log(typeof(undefined))    //undefined
console.log(typeof(greet)) //function
