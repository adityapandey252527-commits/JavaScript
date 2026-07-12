const userEmail = []
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

// falsy values 
// false, 0, -0, bigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, functiion(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}
const emptyObj ={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is Empty");
}