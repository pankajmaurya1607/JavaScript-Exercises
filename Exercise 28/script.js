// Tree Shaking:

// 13. Write a JavaScript program to create a module with multiple exports and import only the functions needed.


import { add, mul } from "./mathsUtil.js"     // tree shaking

console.log(add(2, 4));
console.log(mul(2, 4));