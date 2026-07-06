// Primitive Data Types

// 7 types: String, Number, null, undefined, Symbol, Boolean, BigInt

// javaScipt is dynamically Type language-----

const score = 100
const scoreValue = 100.3 // Number

const isLoggedIn = false
const outsideTemp = null // object
let userEmail;


/* symbol */


const id = Symbol('123') //function
const anotherId = Symbol('123')

console.log(id == anotherId) // false


const bigNumber = 2345998783456634n
console.log(typeof bigNumber) // bigInt


// Referance Type (Non Primitve)

// Array, objects, functions

const heros = ["Shaktiman", "Naagraj", "Dooga"] //object
let myObj = {
    name: "aditya",
    age :19,
}

const myFunction = function(){ //functon 
    console.log("Hello World");
}

console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction)
console.log(typeof heros)
console.log(typeof Symbol)


/****************************************************************/

// Stack(Primitive) = copy , Heap(Non-Primitive) = referance

let myYoutubeName = "AdityaPandey.com"

let anotherName = myYoutubeName
anotherName = "ChaiAurCode"

console.log(myYoutubeName)
console.log(anotherName)

let userOne = {
    email:  "User@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "Adityapandey@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)