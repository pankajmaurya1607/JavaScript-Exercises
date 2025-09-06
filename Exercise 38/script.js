// 3. Throw Error for Division by Zero

// Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.


function safeDivision(a, b) {
    if(b === 0) {
        throw new Error("Division by aero not allowed.")
    }
    return a/b
}

// ✅ Test cases
try { 
    console.log(safeDivision(10, 2));
    console.log(safeDivision(10, 0));
}
catch(err) {
    console.log("Error:", err.message);
}