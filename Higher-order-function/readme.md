## What is a Higher-Order Function?
 - A Higher-Order Function (HOF) is a function that does any one (or both) of these things:
  1. Takes another function as an argument
  2. Returns a function as a result
 - A Higher-Order Function is a function that works with other functions — either by taking them in or giving them out.

 **Example 1: Passing a function as an argument**
 ```js
 function greet(name){
    console.log(`Name is ${name}`)
 }
 function processUser(callback){
    const name="hajira"
    callback(name)
 }
 processUser(greet)
 ```
 **Example 2: Returning a function**
 ```js
 function multiplier(factor){
    return function(number){
        return number * factor
    }
}
const double=multiplier(2)
console.log(double(5))
```
**Example 3: Combining HOFs**
```js
const numbers=[1,2,3,4,5,6,7,8,9,10]
const result=numbers.
 filter(num=>num%2===0)
 .map(num=>num*num)
 .reduce((sum,num)=>sum+num,0)
 console.log(result)
 ```
 ## Advantage
 1. Code reusability
 2. Cleaner and concise code    
 3. modular code design

 ## Disadvantages
 1. Can be confusing for beginners 
 2. Performance overhead
 3. Harder debugging