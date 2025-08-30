// Aggregating Exports:

// 10. Write a JavaScript program to aggregate exports from two different modules into one module and use them.



// import {sum, mul, toUpper, tolower} from "./utils.js"
import * as utils from "./utils.js"


console.log(utils.sum(3, 4));
console.log(utils.mul(3, 4));
console.log(utils.toUpper("Pankaj"));
console.log(utils.tolower("Pankaj"));



