// Singleton
// Object.Create

// Object Literals

const mySym = Symbol("key1")  // symbol declared


const JsUser = {
    name: "Aditya",
    "full name": "Aditya Pandey",
    [mySym]: "mykey1", // symbol used
    age: 20,
    loaction: "Noida",
    email: "adityapandey@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Aditya@gmail.com"
// Object.freeze(JsUser)
JsUser.email ="AdityaChatgpt@gmail.com"
// console.log(JsUser.email)
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello Js User");

}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);

}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())