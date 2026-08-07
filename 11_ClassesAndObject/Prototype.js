let myName = "Aditya     "
let myChannel = "Chai     "

// console.log(myName.length);
// console.log(myName.trim().length);

let myHero = ["thor", "spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "Sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.Aditya = function(){
    console.log(`Aditya is present in all objects `);
}

Array.prototype.heyAditya = function(){
    console.log(`Aditya Says hello`);
}

// heroPower.Aditya()
// myHero.Aditya()
// myHero.heyAditya()




// Inheritance


const User ={
    name: "Aditya",
    enail: "Aditya@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport ={
    isAvilable: false
}

const TaSupport ={
    makeAssigment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__= User



// Modern  Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)




let anotherUsername = "ChaiAurCode    "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}
anotherUsername.trueLength()
"Aditya".trueLength()
"iceTea".trueLength()