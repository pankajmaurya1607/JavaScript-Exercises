// Dynamic Imports:

// 7. Write a JavaScript programme that uses dynamic imports to load a module and invoke its function asynchronously.



// Dynamic import inside an async function
async function run() {
    const user = "Pankaj"
    try {
        // Dynamically load the module
        const greet = await import("./greet.js")
        
        console.log(greet.greet(user));
        console.log(greet.morning(user));
    }
    catch(error) {
        console.log("Failed to load Module:", error);
        
    }
}

run();