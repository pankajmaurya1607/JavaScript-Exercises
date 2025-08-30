// Mixing ES6 and CommonJS Modules:

// 20. Write a JavaScript program that uses an ES6 module to import a CommonJS module and vice versa.



// Import ESM normally
import { callCJS, greetESM } from './esmModule.mjs';

// Import ESM into CommonJS style (dynamic import)
import('./esmModule.mjs').then(esmModule => {
  console.log(esmModule.greetESM("Pankaj (via CommonJS dynamic)"));
});

// Using CommonJS module via ESM
console.log(callCJS("Pankaj"));
console.log(greetESM("Pankaj"));
