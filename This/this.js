const user={
    username:"hajira",
    price:24,
    welcomMessage:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this) 
    }
}
user.welcomMessage()
user.username="marwah"
user.welcomMessage()

// using function
function one(){
    let username="hajira"
    console.log(this) //comes object if things like global values,microtask,structured clone and alot of performance valation,and fetch  
    console.log(this.username) //undefined
}
one();

const two=function(){
let username="hajira"
    console.log(this) // same like above function comes object if things like global values,microtask,structured clone and alot of performance valation,and fetch  
    console.log(this.username) // same undefined
}
two();

//using arrow fucntion
const three=()=>{
    let username="hajira"
   console.log(this) // {}
    console.log(this.username) //  undefined
}
three()
