let myDate=new Date()
console.log(myDate.toDateString()) //Sat Sep 27 2025
console.log(myDate.toString()) //Sat Sep 27 2025 17:11:11 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleDateString()) //9/27/2025
console.log(myDate.toLocaleString()) //9/27/2025, 5:11:11 PM
console.log(typeof myDate) //object

let newMyDate=new Date(2023,0,23)
console.log(newMyDate) //2023-01-22T18:30:00.000Z
console.log(newMyDate.toDateString()) //Mon Jan 23 2023
console.log(newMyDate.toLocaleString())  //1/23/2023, 12:00:00 AM


let myCreatedDate=new Date("2023-01-14")
console.log(myCreatedDate.toDateString()) //Sat Jan 14 2023
console.log(myCreatedDate.toLocaleString()) //1/14/2023, 5:30:00 AM

let secondDate=new Date("9-27-2023") 
console.log(secondDate.toLocaleString()) //9/27/2023, 12:00:00 AM

let myTimeStamp=Date.now()
console.log(myTimeStamp/1000)

let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())