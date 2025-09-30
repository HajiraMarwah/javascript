# 📌 JavaScript `if` Statement

The `if` statement is used to execute a block of code **only if a specified condition is true**.  
It is a fundamental part of **control flow** in JavaScript.

---

## 🔹 Syntax

```js
if (condition) {
  // code to execute if condition is true
}
condition → an expression that evaluates to true or false.
The block inside { } runs only if the condition is true.
```
## 🔹 1: Simple if
```js
let age = 20;

if (age >= 18) {
  console.log("You are an adult."); // You are an adult.
}
```
```js
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if(loggedInFromEmail &&  loggedInFromEmail){
   console.log("Allow to buy course")
}
if(loggedInFromGoogle || loggedInFromEmail){
  console.log("user logged in")
}
```
## 🔹 2: if-else Statement
  Execute one block if condition is true, another if false.
```js
  let age = 15;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```
## 🔹 3:else if Ladder
   Check multiple conditions in order.
  ```js
    let score = 75;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}
```
## 🔹 4. Ternary Operator (? :)
 The ternary operator is a compact way of writing an if-else.
   # Syntax
   ```js
   condition ? expressionIfTrue : expressionIfFalse

   ```
   # Example
    ```js
    let age = 18;
    let message = (age >= 18) ? "Adult" : "Minor";
    console.log(message);
    ```
## ✅ Key Points
 - if executes code only when the condition is true.
 - else executes code when the if condition is false.
 - else if allows multiple conditions to be checked in order.
 - Conditions can use comparison operators (==, ===, >, <, >=, <=) and logical operators (&&, ||, !).


