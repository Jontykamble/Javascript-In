

let value=121

const reverseValue=()=>{

    let myreverseVal=value.toString().split("").reverse().join("")//reverse value
    let mystringVal=value.toString()//orignal

    if(mystringVal==myreverseVal){
        console.log("True : This no is palindrome")


    }
    else{

        console.log("false:its not palindrome")
    }
}


reverseValue()