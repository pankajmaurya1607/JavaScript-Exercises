// 1. Throw Error for Non-Integer

// Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.


function checkInteger(num) {
    if(!Number.isInteger(num)) {
        throw new Error("Invalid input: Number must be an integer")
    }
    return `${num} is a valid integer`
}


// ✅ Test cases
try {
    console.log(checkInteger(10));
    console.log(checkInteger(3.14));
    console.log(checkInteger(-2));
}
catch(err) {
    console.log("Error:", err.message);
}