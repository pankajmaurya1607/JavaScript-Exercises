// Importing JSON Data:

// 11. Write a JavaScript program to import a JSON file as a module and access its properties.


const config = require("./config.json")

console.log("App Name:", config.appName);
console.log("Version:", config.version);
console.log("Max Users:", config.maxUsers);
console.log("Features:", config.features);
