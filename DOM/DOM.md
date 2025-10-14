# 🌳 Understanding the DOM in JavaScript

## 🧩 What is the DOM?

**DOM (Document Object Model)** is a programming interface provided by browsers that represents the structure of an HTML or XML document as a **tree of objects**.

Each element, attribute, and piece of text becomes a **node** in this tree.  
JavaScript can use the DOM API to **access, modify, add, or delete** elements dynamically.

### 📘 Example

```html
<html>
  <body>
    <h1 id="title">Hello World</h1>
    <p class="text">Welcome to the DOM tutorial.</p>
  </body>
</html>
```
**The DOM tree structure looks like this:**
```less
Document
 └── html
     ├── head
     └── body
         ├── h1 (id="title")
         └── p (class="text")
```
## DOM Selectors

Selectors are methods used to access elements in the DOM.
**1. By ID**
```js
document.getElementById("title");
```
  - Returns a single element (the first match).
  - If no element is found, returns null.

**2. By Class Name**
```js
document.getElementsByClassName("text");
```
   - Returns a live HTMLCollection of all matching elements.
   - Access using index, e.g., elements[0].
**3. By Tag Name**
```js
document.getElementsByTagName("p");
```
Returns a live HTMLCollection of all <p> elements.

**4. Using Query Selectors**
```js
document.querySelector("#title");       // Selects first element matching selector
document.querySelectorAll(".text");     // Selects all elements matching selector
```
## HTMLCollection vs NodeList
| Feature     | HTMLCollection                                       | NodeList                                 |
| ----------- | ---------------------------------------------------- | ---------------------------------------- |
| Returned by | `getElementsByTagName()`, `getElementsByClassName()` | `querySelectorAll()`, `childNodes`       |
| Type        | Live (auto-updates when DOM changes)                 | Static (does not auto-update)            |
| Access      | By index or named items                              | By index                                 |
| Iteration   | Can be looped using `for` loop only                  | Can be looped using `for` or `forEach()` |
| Example     | `document.getElementsByClassName("text")`            | `document.querySelectorAll(".text")`     |

## Example Code
```js
// HTML:
// <ul>
//   <li class="item">Apple</li>
//   <li class="item">Banana</li>
// </ul>

const htmlCollection = document.getElementsByClassName("item");
const nodeList = document.querySelectorAll(".item");

console.log(htmlCollection); // HTMLCollection(2)
console.log(nodeList);       // NodeList(2)

// Add a new element dynamically
const newItem = document.createElement("li");
newItem.className = "item";
newItem.textContent = "Cherry";
document.querySelector("ul").appendChild(newItem);

console.log(htmlCollection.length); // 3 (live update)
console.log(nodeList.length);       // 2 (static)
```

## Summary
| Concept        | Description                                        |
| -------------- | -------------------------------------------------- |
| DOM            | Object model representing HTML as a tree           |
| Selector Types | ID, Class, Tag, Query                              |
| HTMLCollection | Live list of elements                              |
| NodeList       | Static list of nodes                               |
| Common Uses    | Access, modify, create, or delete HTML dynamically |

## Quick Tip:

Always prefer querySelector() and querySelectorAll() for modern, flexible, CSS-style selection.

## Example in Action
```js
const title = document.querySelector("#title");
title.textContent = "DOM Mastered!";

const paragraphs = document.querySelectorAll(".text");
paragraphs.forEach(p => p.style.color = "blue");
```