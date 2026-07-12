// if
// <, >, <=, =>, !=, ==, strict checking ===
// 3! = 2


// const isuserLoggedIn = true
// const temperauture = 41

// if(temperauture === 40){
//     console.log(`Temperature is eqaul to ${temperauture}`);
// }
// else{
//     console.log(`Temperature is not equal to  ${temperauture}`);
// }
//     console.log("Executed");


// if(2!==3){
//     console.log("Executed");
// }

// if(2 === "2"){
//     console.log("Executed");
// }


// const score = 200
// if(score>100){
//     var  power = "fly" // var is global
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); // var can be used outside the function

// if(score>100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// const balance = 1000
// if(balance >500) console.log("test"), console.log("test2");

// if(balance < 500){
//     console.log("less than");
// }
// else if(balance < 750){
//     console.log("Less than 750");
// }
// else if(balance < 900){
//     console.log("Less than 900");
// }
// else{
//     console.log("Less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy courses");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}
// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1)



// Terniary Operator
// condition ? true : false

const iceTeaPrice = 1000
iceTeaPrice <=80 ? console.log("Less than 80"): console.log("More than 80")