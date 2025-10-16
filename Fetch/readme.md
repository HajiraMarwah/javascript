# 🌐 JavaScript `fetch()` API

The `fetch()` method in JavaScript is used to **make HTTP requests** to servers (e.g., to get or send data to APIs). It is a part of the modern **Fetch API** and returns a **Promise** that resolves to the `Response` object.

---

## 📦 Basic Syntax

```js
fetch(url, options)
  .then(response => response.json())
  .then(data => {
    // Handle the data
  })
  .catch(error => {
    // Handle errors
  });
```
 - url: The endpoint you're fetching data from.
 - options: An optional object to configure the request (method, headers, body, etc.)

 ## Example: GET Request
 ```jsx
 fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```
## Example: POST Request
```js
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Alice',
    age: 30
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```
## Notes
  - fetch() is asynchronous and returns a Promise.
  - Use response.json() to parse JSON responses.
  - If the response is not 2xx, fetch() does not throw an error — you must manually check response.ok

## Checking for Errors
```jsx
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP error! status: ' + response.status);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));
```
## Common HTTP Methods with fetch
| Method | Description          |
| ------ | -------------------- |
| GET    | Retrieve data        |
| POST   | Send new data        |
| PUT    | Update existing data |
| DELETE | Delete data          |

## Headers Example
```js
headers: {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer your-token-here'
}
```
## ✅ Summary
 - fetch() is the modern way to make HTTP requests in JavaScript.
 - It is Promise-based and cleaner than older XMLHttpRequest.
 - Always handle errors and check the response status.