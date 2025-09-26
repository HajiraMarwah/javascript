//For Number

let score="33"
let scores="33abc"
let scoring=null
let scoreUndefined=undefined
// let scoreBoolean=true
let scoreBoolean=false

 console.log(typeof score)
 let valueInNumber=Number(score)  //string
 console.log(typeof valueInNumber) //number
 console.log(valueInNumber)  //33

 let valueInNumbers=Number(scores)
 console.log(typeof valueInNumbers) //number
 console.log(valueInNumbers)  //NAN  so should not rely on number as js have some issues  doesnt hae strict check


 let valueInNumberScore=Number(scoring)
 console.log(typeof valueInNumberScore) //number
 console.log(valueInNumberScore)   //0

  let valueInNumberUndefined=Number(scoreUndefined)
 console.log(typeof valueInNumberUndefined) //number
 console.log(valueInNumberUndefined)   //NAN

  let valueInNumberBoolean=Number(scoreBoolean)
 console.log(typeof valueInNumberBoolean) //number
 console.log(valueInNumberBoolean)   //1 for true,
 //  0 for false

 //"33"->33
 //"3abc"->NaN
 //true->1, false->0


//  For Boolean
let isLoggedIn=1
let booleanIsloggedIn=Boolean(isLoggedIn)
console.log(booleanIsloggedIn) //true for 1, for 0 its false
// 1 => true,0 => false
// "" => false
//"hajira" => true

//for string
let someNumber=33
let stringNumber=String(someNumber)
console.log(typeof stringNumber) //string
console.log(stringNumber) //33
