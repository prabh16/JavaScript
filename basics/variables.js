const accountId = 156345
let accountEmail = "p16@gmail.com"
var accountPassword = "13452"
accountCity = "Mohali"
let accountState;

//accountId = 2;// not allowed

accountEmail = "p02@gmail.com"
accountPassword = "12345"
accountCity = "Chandigarh"

console.log(accountId);

/*
Prefer not to use var because of the issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])