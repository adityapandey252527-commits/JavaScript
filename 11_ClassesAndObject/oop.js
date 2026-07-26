const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`username:${this.username}`);
        // console.log(this)
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)


// const PromiseOne = new Promise()   // here new is constructor
// const date = new Date()


function User(username, logedinCount, isLoggedIn){
    this.username = username;
    this.logedinCount = logedinCount;
    this.isLoggrdIn = isLoggedIn;

    this.greetingm = function(){
        console.log(`welcome ${this.username}`);
    }

    return this  // implicitly defined
}

// const userOne = User("Hitesh", 12, true)
// const userTwo = User("Aditya", 11, false); // value overwrite
// console.log(userOne);


// console.log(userOne.username);
// console.log(userOne.logedinCount);
// console.log(userOne.isLoggrdIn);

const userOne = new  User("Hitesh", 12, true)  
const userTwo = new  User("Aditya", 11, false) 
console.log(userOne.constructor);
// console.log(userTwo);


