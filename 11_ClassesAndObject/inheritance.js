class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addcourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const chai = new Teacher("Chai", "chai@gmail.com", "123")
chai.addcourse()
// chai.logMe()
const tea = new User("Tea")
tea.logMe()
// console.log(chai === Teacher);
console.log(chai instanceof User);