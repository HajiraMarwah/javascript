//falsy values
// false,0,-0,null,BigInt 0n,"",undefined,NaN
//truthy values
// "0","false"," ",[],{},function(){}

const emptyObj={}
if(Object.keys(emptyObj).length){
    console.log("object is empty")
}
//nullish coalescing operator ?? :null undefined
let val1=1
// val1=5 ?? 10  //5
// val1 =nul ?? 10 //10
// val1=undefined ?? 2 //2
// val1=null ?? 10 ?? 20  //10 gets first truthy value
console.log(val1) 

let str = "Hello World";
for (let char of str) {
  console.log(`Each char is ${char}`); //
}

const myObject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by app"
}
for(const key in myObject){
    console.log(`${key} is shortcut for ${myObject[key]}`)
}
