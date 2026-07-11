const user = {
    username: "Aditya",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam" // context change
// user.welcomeMessage()
// console.log(this);



// function chai(){
//     let username = "aditya"
//     console.log(this.username)
// }
// chai()

// const chai = function chai(){
//     let username = "aditya"
//     console.log(this.username)
// }
// chai()

const chai = () =>{
    let username = "aditya"
    console.log(this)
}
// chai()

// const addtwo = (num1, num2) =>{
//     return num1+num2
// }
// console.log(addtwo(3,4))

// const addtwo = (num1, num2) => num1+num2
// const addtwo = (num1, num2) => (num1+num2)
console.log(addtwo(3,4))

const addtwo = (num1, num2) => ({username: "Aditya"})


// const myArray =[2,5,7,9,11]
// myArray.forEach()