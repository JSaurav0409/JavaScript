const accountId = 124563
let accountName = "Mr. X"
var accountPassword = "121212" // Do not use var , as it have problem on scope.
accountCity = "Mumbai"
let accountState;

// accountId = 124567 // const cannot change after declaring

accountName = "Mr. Y"
accountPassword = "123456"
accountCity = "Pune"

console.table([accountId,accountName, accountPassword, accountCity, accountState])

console.log(accountId);