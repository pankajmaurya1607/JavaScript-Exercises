// Circular Dependency:

// 16. Write a JavaScript program to create two modules that import each other and handle the circular dependency.


import { callB } from "./moduleA.js"
import { callA } from "./moduleB.js"


console.log(callA());
console.log(callB());
