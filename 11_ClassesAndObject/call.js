// function SetUsername(username){
//         // complex DB calls
//     this.username = username
//     console.log("Called");
// }
// function createUser(username, email, password){
//     SetUsername(username)
    
//     this.email = email
//     this.password = password
// }
// const chai = new createUser("Aditya", "aditya@gmail.com",'123')
// console.log(chai)


function SetUsername(username){
        // complex DB calls
    this.username = username
    console.log("Called");
}
function createUser(username, email, password){
    SetUsername.call(this, username)  //for referance hold  .call  (this, username)  using this
    
    this.email = email
    this.password = password
}
const chai = new createUser("Aditya", "aditya@gmail.com",'123')
console.log(chai)