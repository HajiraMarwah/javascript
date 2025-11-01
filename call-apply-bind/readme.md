# 📘 Call, Apply, and Bind in JavaScript

In JavaScript, **`call()`**, **`apply()`**, and **`bind()`** are methods that allow you to **control the value of `this`** when invoking a function.

---


## 🔹 `call()` Method

**Syntax:**
```js
functionName.call(thisArg, arg1, arg2, ...);
```
 - It’s a predefined method in javascript.
 - This method invokes a function by specifying the owner object.
 - Arguments are passed individually.
```js
function sayHello(){
  return "Hello " + this.name;
}
        
var obj = {name: "Sandy"};
        
sayHello.call(obj);
        
// Returns "Hello Sandy"	
```
**Example-3**
```js
function saySomething(message){
  return this.name + " is " + message;
}     
var person = {name:  "John"};     
saySomething.call(person, "awesome");
// Returns "John is awesome"    
```
## apply() Method
 - Similar to call(), but arguments are passed as an array.
 - Also invokes the function immediately.
```js
function saySomething(message){
  return this.name + " is " + message;
}        
var person = {name:  "John"};
saySomething.apply(person, ["awesome"]);
```
##  bind():

This method returns a new function, where the value of “this” keyword will be bound to the owner object, which is provided as a parameter.
Example with arguments:
```js
var bikeDetails = {
    displayDetails: function(registrationNumber,brandName){
    return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
  }
}
   
var person1 = {name:  "Vivek"};
     
var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
      
// Binds the displayDetails function to the person1 object
        
      
detailsOfPerson1();
//Returns Vivek, bike details: TS0122, Bullet
```