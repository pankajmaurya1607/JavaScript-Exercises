// 4. Throw Error for Negative Number

// Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is negative.



function checkNegative(num) {
    if(num < 0) {
        throw new Error("Invalid Input: Number cannot be negative.")
    }
    return `${num} is a valid non-negative number.`
}

// ✅ Test cases
try {   
    console.log(checkNegative(10));
    console.log(checkNegative(-2));
}
catch(err) {
    console.log("Error:", err.message);
}
