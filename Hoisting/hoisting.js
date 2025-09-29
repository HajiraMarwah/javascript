console.log(addOne(5)) //6
function addOne(num){
    return num+1
}


console.log(addTwo(5)) //cannot access
const addTwo=function(num){
    return num+1
}