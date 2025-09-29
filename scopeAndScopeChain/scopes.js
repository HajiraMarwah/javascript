//nested scopes
function one(){
    let username="hajira"
    function two(){
        let website="youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()

//if-else
    if(true){
        let username="hajira"
        if(username==="hajira"){
            let website=" youtube"
            console.log(username+website) //hajira youtube // after commenting error this one will execute-
        }
        // console.log(website) //here comes first error not defined
    }
    // console.log(username) //here comes second error