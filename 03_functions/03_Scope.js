// var c = 300
let a = 300

if(true){

    let a  = 10
    const b = 20
    // console.log("Inner: ", a)

}

// console.log(a);
// console.log(b);

function one(){
    const username = "Aditya"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "aditya"
    if(username === "aditya"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website); // error 
}

// console.log(username);  // error

/// ---------------------------- Interesting --------------------------------------

console.log(addone(5))
function addone(num){
    return num + 1
}

addTwo(5) //  Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
