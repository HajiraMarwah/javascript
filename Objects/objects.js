const mySym=Symbol("myKey")
const jsUser={
    name:"hajira",
    "full name":"hajira marwah",
    [mySym]:"key1", //to get it as symbol  need to make key value in array
    email:"hajira12@gmail.com",
    age:28,
    isLoggedIn:false,
    lastLoginDays:["Monday","sunday"]
}
console.log(jsUser.email)//hajira12@gmail.com
console.log(jsUser["email"]) //hajira12@gmail.com
console.log(jsUser["full name"]) //hajira marwah
console.log(jsUser[mySym]) //key1
console.log(typeof(mySym)) //symbol

jsUser.email="nadiya12@gmail.com"
// Object.freeze(jsUser)
jsUser.email="hajNadiya@gmail.com" //this wont apply as freezed it above
console.log(jsUser)
// {
//   name: 'hajira',
//   'full name': 'hajira marwah',
//   email: 'nadiya12@gmail.com',
//   age: 28,
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'sunday' ],
//   [Symbol(myKey)]: 'key1'
// }

jsUser.greeting=function(){
    console.log("Hello js user")
}
console.log(jsUser.greeting()) // Hello js user

jsUser.greetingTwo=function(){
    console.log(`Hello js user ${this.name}`) //use this keyword if we have  same object reference
}
console.log(jsUser.greetingTwo()) //Hello js user hajira