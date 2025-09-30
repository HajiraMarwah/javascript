function one(){
    console.log("one called")
    two()
}
function two(){
    console.log("two called")
    three()
}
function three(){
    console.log("three called")
}
one()
two()
three()