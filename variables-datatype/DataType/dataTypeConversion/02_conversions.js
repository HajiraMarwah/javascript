//basic conversion(with same data type)
console.log(2>1)
console.log(3<6)

//below type of conversion makes in confusion
console.log("2">1) //true
console.log("02">1) //true
console.log(1>"2") //false

console.log(null>0) //false
console.log(null===0)//false
console.log(null>=0)//true(doesnot come predictable result)

console.log(undefined==0)//false
console.log(undefined>0)//false
console.log(undefined<0)//false(undefined its comes faalse)

// == or ===
console.log("2"===2)//false
console.log("2"==2)//true
