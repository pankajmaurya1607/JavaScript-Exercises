// Importing Without Using:

// 18. Write a JavaScript program to import a module for its side effects without directly using any exports.



// Import only for side effects
import './logger.js'

console.log("Main Programm is Running...");

if(globalThis.appLoaded) {
    console.log("✅ App initialized successfully!");
}
