// 2. Handle TypeError in Try-Catch

// Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object.


try {
    // ❌ This will throw a TypeError
    let obj;
    console.log(obj.name);    
} catch (error) {
    if(error instanceof TypeError) {
        console.log("Caugth a type error:", error.message);
    }
    else {
        console.log("Caught a unexpected error:", error);
    }
}

console.log("✅ Program continues after handling the error...");
