### What are Events in JavaScript?

  - In JavaScript, events are actions or occurrences that happen in the browser — like a user clicking a button, pressing a key, moving the mouse, or a page loading.
  - JavaScript can listen for these events and respond by running code. This is how interactivity is built into websites.

  **Example:**
  document.getElementById("myBtn").addEventListener("click", function(event) {
    console.log("Button clicked!", event);
});
## The event Object

Whenever an event occurs, JavaScript gives your event listener a special event object that contains all the details about the event.

**Event Object Properties Explained**
| Property               | Description                                                                                  |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| **`type`**             | The type of event (e.g., `'click'`, `'keydown'`, `'mouseover'`).                             |
| **`timestamp`**        | The time (in ms) when the event occurred, measured from when the page was loaded.            |
| **`defaultPrevented`** | A boolean — `true` if `event.preventDefault()` has been called to stop the default behavior. |

**Target-related Properties**
| Property            | Description                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------ |
| **`target`**        | The **actual DOM element** that triggered the event (where the event happened).            |
| **`currentTarget`** | The element that the event listener is **attached to**. Useful in event delegation.        |
| **`srcElement`**    | Same as `target` (used in older versions of IE).                                           |
| **`toElement`**     | In `mouseover`/`mouseout`, the element the pointer moved **to**. (Also older/IE-specific.) |

**Mouse Position Properties**
| Property                     | Description                                                              |
| ---------------------------- | ------------------------------------------------------------------------ |
| **`clientX`**, **`clientY`** | Mouse position relative to the **viewport** (browser window, no scroll). |
| **`screenX`**, **`screenY`** | Mouse position relative to the **physical screen**.                      |

**Keyboard Properties**
| Property       | Description                                                                      |
| -------------- | -------------------------------------------------------------------------------- |
| **`altKey`**   | `true` if the **Alt** key was held during the event.                             |
| **`ctrlKey`**  | `true` if the **Ctrl** key was held.                                             |
| **`shiftKey`** | `true` if the **Shift** key was held.                                            |
| **`keyCode`**  | The **numeric code** of the key pressed. (Deprecated — use `event.key` instead!) |

## Example: Logging Event Details
```js
document.addEventListener("click", function(event) {
    console.log("Event Type:", event.type);
    console.log("Clicked Element:", event.target);
    console.log("Mouse Position:", event.clientX, event.clientY);
    console.log("Alt Key Pressed?", event.altKey);
});
```
## Notes on keyCode:
  - keyCode is considered legacy.
  - You should use event.key instead: 
      ```js
         document.addEventListener("keydown", function(e) {
         console.log("You pressed:", e.key); // e.g., "a", "Enter", "Shift"
        });
        ```

## TL;DR Summary
| Category        | Properties                                           |
| --------------- | ---------------------------------------------------- |
| Event Info      | `type`, `timestamp`, `defaultPrevented`              |
| Target Elements | `target`, `currentTarget`, `srcElement`, `toElement` |
| Mouse Info      | `clientX`, `clientY`, `screenX`, `screenY`           |
| Modifier Keys   | `altKey`, `ctrlKey`, `shiftKey`                      |
| Keyboard        | `keyCode` (legacy), `key` (modern)                   |

