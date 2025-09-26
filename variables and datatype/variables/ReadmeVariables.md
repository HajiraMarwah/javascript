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
