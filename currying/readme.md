# Currying
## Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments.

**Example of a curried function:**
```js
function add (a) {
  return function(b){
    return a + b;
  }
}

add(3)(4) 
```
- For Example, if we have a function f(a,b), then the function after currying, will be transformed to f(a)(b).
- By using the currying technique, we do not change the functionality of a function, we just change the way it is invoked.

**Let’s see currying in action:**
```js
function multiply(a,b){
    return a*b
}
function currying(fn){
    return function(a){
        return function(b){
            return fn(a,b)
        }
    }
}
var curriedMultiply=currying(multiply)
multiply(4,3)
curriedMultiply(4)(3)
```
## Advantage
- Reusability, modularity, functional style
## Disadvantage
-  hurt readbality,adds function nesting, slight performance cost