// Overriding Exports:

// 19. Write a JavaScript program to create a module and override its exports dynamically in another file.


import * as utils from "./utils.js"

const user = "Pankaj"

console.log(utils.greet(user));

const greet = (user) => `Hi there, ${user}!`           // overrideen

console.log(greet(user));

