# Event Propagation, Delegation, Bubbling, and Capturing in JavaScript

---

## 1️⃣ Event Propagation

**Definition:** Event propagation is the order in which events are triggered in the DOM tree. There are three phases:

1. **Capturing Phase (Capture)**: Event travels **from the root to the target element**.
2. **Target Phase**: Event reaches the **target element**.
3. **Bubbling Phase (Bubble)**: Event **bubbles up** from the target to the root.

### Example HTML

```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

### Bubbling Example

```javascript
const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => console.log("Parent clicked!"));
child.addEventListener("click", () => console.log("Child clicked!"));
```

**Output when button clicked:**

```
Child clicked!
Parent clicked!
```

* Event bubbles up from child → parent.

### Capturing Example

```javascript
parent.addEventListener("click", () => console.log("Parent clicked (capture)!"), true);
child.addEventListener("click", () => console.log("Child clicked!"), true);
```

**Output:**

```
Parent clicked (capture)!
Child clicked!
```

* `useCapture = true` triggers event in **capturing phase**.

### Stopping Propagation

```javascript
child.addEventListener("click", (e) => {
  console.log("Child clicked!");
  e.stopPropagation(); // stops bubbling/capturing
});
```

* Stops the event from reaching parent.

---

## 2️⃣ Event Delegation

**Definition:** Attaching a **single event listener to a parent** element to handle events on child elements. Relies on **event bubbling**.

### Example

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

```javascript
const list = document.getElementById("list");

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});
```

* Works even for **dynamically added `li` elements**.

### Adding Dynamic Elements

```javascript
const newItem = document.createElement("li");
newItem.textContent = "Item 4";
list.appendChild(newItem);
// Event listener works automatically
```

**Advantages:**

* Fewer listeners → better performance
* Handles dynamic elements
* Centralized code

---

## 3️⃣ Summary Table

| Concept          | Description                                          | Example                                  |
| ---------------- | ---------------------------------------------------- | ---------------------------------------- |
| Bubbling         | Event moves from target → root                       | Child clicked → Parent clicked           |
| Capturing        | Event moves from root → target                       | Parent clicked (capture) → Child clicked |
| Target           | Event reaches the element that triggered it          | button click                             |
| Event Delegation | Parent handles events of child elements via bubbling | UL handles LI clicks                     |

---

💡 **Interview Tips:**

* Understand **event phases**: capture → target → bubble.
* Explain `stopPropagation()` and `preventDefault()`.
* Show **dynamic element handling** using delegation.
* Visual diagrams help explain quickly.
