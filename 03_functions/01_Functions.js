function sayMyname(){
    console.log("A")
    console.log("D")
    console.log("I")
    console.log("T")
    console.log("Y")
    console.log("A")

}
// sayMyname()

// function AddTwoNumber(number1, number2){
//     console.log(number1+number2);
// }

// const result =AddTwoNumber(3, 5)
// console.log("Result:", result)  //undefined

function AddTwoNumber(number1, number2){
   let result = number1+number2
   return result
   
    // return number1+number2
}

// const result =AddTwoNumber(3, 5)
// console.log("Result:", result) 

// console.log("Result:", AddTwoNumber(3, 5))



// function loggedInMessage(username){
//     if(username === undefined){
//         console.log("Please enter a user name");
//         return
//     }
//     return `${username} just logged in`
// }
// // console.log(loggedInMessage("Aditya"))
// console.log(loggedInMessage())



function loggedInMessage(username="Sammy"){
    if(!username){
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
}
// console.log(loggedInMessage("Aditya"))
console.log(loggedInMessage())
