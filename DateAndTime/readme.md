# 📅 JavaScript Date and Time

JavaScript provides the **`Date` object** to work with **dates and times**.  
It can be used to create, manipulate, and format date and time values.  

---

## 🔹 Creating Dates

```js
// Current date and time
let now = new Date();

// Specific date (year, month, day, hours, minutes, seconds, ms)
let specificDate = new Date(2025, 8, 27, 15, 30, 0); // Sep 27, 2025, 15:30:00

// From a date string
let fromString = new Date("2025-09-27T10:00:00");

// From timestamp (milliseconds since Jan 1, 1970)
let fromTimestamp = new Date(1632720000000);
```
## 🔹 Getting Date & Time Example

```js
let today = new Date();

console.log(today.getFullYear());      //  Returns the year (e.g., 2025)
console.log(today.getMonth());         // Returns month index (0–11) month (0 = Jan, 11 = Dec)
console.log(today.getDate());          // Day of the month
console.log(today.getDay());           // Day of week (0 = Sun, 6 = Sat)
console.log(today.getHours());         // Hour (0–23)
console.log(today.getMinutes());       // Minutes (0–59)
console.log(today.getSeconds());       // Seconds (0–59)
console.log(today.getMilliseconds());  // Milliseconds
console.log(today.getTime());          // Timestamp (ms since Jan 1, 1970)
```
## 🔹 Setting Date & Time
```js
let date = new Date();

date.setFullYear(2030);
date.setMonth(11);       // December
date.setDate(25);        // 25th
date.setHours(10, 30, 0); // 10:30:00

console.log(date);

```

## 🔹 Formatting Dates
```js
let d = new Date();

console.log(d.toDateString());   // "Sat Sep 27 2025"
console.log(d.toTimeString());   // "15:45:10 GMT+0530 (India Standard Time)"
console.log(d.toISOString());    // "2025-09-27T10:15:10.000Z"
console.log(d.toLocaleDateString()); // Local format e.g. "9/27/2025"
console.log(d.toLocaleTimeString()); // Local time format

```
## 🔹 Example: Stopwatch
```js
let start = Date.now();

setTimeout(() => {
  let end = Date.now();
  let duration = (end - start) / 1000; // seconds
  console.log(`Elapsed time: ${duration} seconds`);
}, 2000);

```
