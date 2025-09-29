//immediately invoke functions

//named iife
(function one(){
    console.log("hello hajira") //hello hajira
})();  // end with semicolon if having another iife below

//
((name)=>{
    console.log(`my name is ${name}`)
})("marwah")