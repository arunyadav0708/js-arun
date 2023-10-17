const accountId = 14553
let accountEmail = "arun@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "aru@n.com"
accountPassword = "212345"
accountCity = "Bangaluru"



/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])