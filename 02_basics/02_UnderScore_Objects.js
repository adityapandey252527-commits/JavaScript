// const tinderUser = new Object() // singleton objects
const tinderUser ={}

tinderUser.id = "123adc"
tinderUser.name = "Aditya"
tinderUser.isloggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "Aditya@gmail.com",
    fullname:{
        userFullName:{
            FirstName: "Aditya",
            LastName: "Pandey",
        }
    }
}
// console.log(regularUser.fullname.userFullName.FirstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}
// const obj3 ={obj1, obj2}

// const obj3 = Object.assign(obj1, obj2)
// const obj4 = Object.assign({}, obj1, obj2, obj3)

// const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4)

const users =[
    {
        id: 1,
        email: "aditya@gmail.com",
    },
    {
        id: 1,
        email: "aditya@gmail.com",
    },
       {
        id: 1,
        email: "aditya@gmail.com",
    }
]
users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('IsLogged'))