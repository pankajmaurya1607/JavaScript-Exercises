// Combining Default and Named Exports:

// 4. Write a JavaScript module with both default and named exports. Use both in another file.


import greet, {getUserAge, isAdult, APP_NAME} from "./userUtils.js"

const user = "Pankaj"
console.log(greet(user))

const age = getUserAge(2002)
console.log("Age:", age)

console.log("Is Adult:", isAdult(age))

console.log("App Name:", APP_NAME);


