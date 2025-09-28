// function addTwoNumbers(num1,num2){ // values which we are passing to function is paramaters here num1 and num2
//     console.log(num1+num2)
// }
// addTwoNumbers(2,3) //values which are in function call is called arguments here 2,3

function addTwoNumbers(num1,num2){ // values which we are passing to function is paramaters here num1 and num2
    // let result=num1+num2
    // return result
    return num1+num2
}
console.log(addTwoNumbers(2,3))

function loggedUser(username){
    if(!username){
        console.log("Please enter username")
        return
    }
    return `${username} just logged in `
}
console.log(loggedUser("hajira"))

//if nothing is passed in username it shows undefined
// console.log(loggedUser())//undefined
// console.log(loggedUser(""))  // just logged in


//if i dont need to have undefined then pass default value in username

function loggedUser(username="marwah"){

    return `${username} just logged in `
}
console.log(loggedUser()) //marwah just logged in

//rest operator
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100,200,300,400)) //[ 100, 200, 300, 400 ]

//how use object in fucntion

const user={
    username:"hajira",
    age:28
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and age is ${anyObject.age}`)
}
handleObject(user)//username is hajira and age is 28

//can also directly pass objet inside fucntion call
handleObject({
    username:"hajira",
    age:23
})

//how to use array in fucntion
const newArray=[100,200,300]
function returnSecondValue(getArray){
   return getArray[1]
}
// console.log(returnSecondValue(newArray)) //200
// console.log(returnSecondValue([100,200,300])) //200