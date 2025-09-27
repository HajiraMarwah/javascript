// const tinderUser=new Object()// {} -singleton object-is a design pattern where only one instance of an object is created throughout the application
const tinderUser={} //{}-non singleton object
console.log(tinderUser) //{}  for both tinderUser
tinderUser.id="1234",
tinderUser.name="hajira",
tinderUser.isLoggedIn=false;
console.log(tinderUser)

//object inside object

const regularUser={
    email:"hajiranadia2@gmail.com",
    fullName:{
        userFullName:{
            firstName:"hajira",
            lastName:"marwah"
        }
    }
}
console.log(regularUser.fullName.userFullName.firstName) //hajira

//to merge objects 
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3=Object.assign({},obj1,obj2) //syntax assign(taget,source) here {}-target where storing source
// or
const obj3={...obj1,...obj2}
console.log(obj3) 
const users=[
    {
        id:1,
        email:"h1@gmail.com"
    },
      {
        id:1,
        email:"h1@gmail.com"
    },
      {
        id:1,
        email:"h1@gmail.com"
    },
]
users[1].email
console.log(tinderUser) //{ id: '1234', name: 'hajira', isLoggedIn: false }
console.log(Object.keys(tinderUser)) //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)) //[ '1234', 'hajira', false ]
console.log(Object.entries(tinderUser)) //[ [ 'id', '1234' ], [ 'name', 'hajira' ], [ 'isLoggedIn', false ] ]
console.log(Object.hasOwnProperty("isLoggedIn")) //false