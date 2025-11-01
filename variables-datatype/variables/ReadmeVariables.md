# JavaScript Variables

Variables are **containers for storing data values**. In JavaScript, variables can hold different types of data, such as numbers, strings, booleans, objects, and more.

---

## 1️⃣ Declaring Variables

JavaScript provides **three ways** to declare variables:

### 1. `var`
- **Function-scoped** (or globally scoped if declared outside a function)  
- Can be **re-declared** and **updated**  
- Avoid using in modern code due to scoping issues  

```js
var name = "Priyanka";
var name = "Hajira"; // re-declaration allowed
name = "Aisha";      // update allowed
```
### 2. `let`
- **Block-scoped**  (limited to {} block)
- Can be **updated** but cannot be **re-declared** in the same scope
```js
let age = 25;
age = 26; // update allowed
// let age = 30; // Error: already declared in this scope
```
### 2. `const`
- **Block-scoped**  (limited to {} block)
- Cannot be updated or re-declared
- Must be initialized at the time of declaration
```js
const PI = 3.14;
// PI = 3.1415; // Error: assignment to constant variable

```
## 2️⃣ Variable Naming Rules
  - Names can contain letters, digits, $, _
  - Cannot start with a digit
  - Case-sensitive (myVar and myvar are different)
  - Cannot use reserved keywords (let, const, if, for, etc.)

# Difference Between `var`, `let`, and `const` in JavaScript

| Feature              | `var`                           | `let`                           | `const`                          |
|---------------------|--------------------------------|--------------------------------|---------------------------------|
| **Scope**           | Function-scoped or global       | Block-scoped                   | Block-scoped                     |
| **Re-declaration**  | Allowed in the same scope       | Not allowed in the same scope  | Not allowed                      |
| **Re-assignment**   | Allowed                         | Allowed                        | Not allowed (must remain constant) |
| **Hoisting**        | Yes, initialized with `undefined` | Yes, but not initialized (Temporal Dead Zone) | Yes, but not initialized (Temporal Dead Zone) |
| **Initialization**  | Optional                        | Optional                       | Mandatory                        |
| **Use Case**        | Legacy code, avoid in modern JS | Variables that can change      | Constants or values that should not change |

---

### Examples

```js
// var
var name = "Priyanka";
var name = "Hajira"; // re-declaration allowed
name = "Aisha";      // update allowed

// let
let age = 25;
age = 26;            // update allowed
// let age = 30;     // Error: already declared

// const
const PI = 3.14;
// PI = 3.1415;      // Error: assignment to constant variable
```