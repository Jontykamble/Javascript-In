
let value=10
const revValue=()=>{

    let myRevval=value.toString().split("").reverse().join("")
    let myStrval=value.toString()


    if(myStrval==myRevval){
        console.log("True  ")
    }
    else{
        console.log("false")
    }

}



revValue()