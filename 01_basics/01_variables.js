const accountId = 14453   // const never be changed
let accountEmail = "aditya23@gmail.com" 
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "gd@gmail.com"
accountPassword = "98992"
accountCity =  "Delhi"


console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
