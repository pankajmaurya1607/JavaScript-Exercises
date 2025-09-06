// 8. Multiple Catch Blocks

// Write a JavaScript program that shows the use of multiple catch blocks to handle different types of errors separately.

function demoError(type) {
    if(type === "type") {
        throw new TypeError("This is a typeError!")
    }
    else if(type === "range") {
        throw new RangeError("This is a RangeError!")
    }
    else if(type === "syntax") {
        throw new SyntaxError("This is a SyntaxError!")
    }
    else {
        throw new Error("This is a general Error")
    }
}

try {
    const type = "syntax"
    demoError(type);
}
catch(err) {
    if(err instanceof TypeError) {
        console.log("Error:", err.message);
    }
    else if(err instanceof RangeError) {
        console.log("Error:", err.message);
    }
    else if(err instanceof SyntaxError) {
        console.log("Error:", err.message);
    }
    else {
        console.log("Error:", err.message);
    }
}