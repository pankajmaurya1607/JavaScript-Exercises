// Importing CommonJS inside ESM
import cjsModule from './cjsModule.cjs';

export function callCJS(name) {
  return cjsModule.greet(name);
}

// Exporting a function from ESM
export function greetESM(name) {
  return `Hello from ESM, ${name}!`;
}
