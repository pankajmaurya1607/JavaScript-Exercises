// Import all as Alias:

// 3. Write a JavaScript programme that imports all exports from a module as a single object and use its properties.


import * as MathsUtil from "./mathsUtills.js"

console.log("Addition", MathsUtil.add(2, 4));
console.log("Subtraction", MathsUtil.sub(8, 4));
console.log("Multiplication", MathsUtil.mul(2, 4));
console.log("PI", MathsUtil.PI);
