// 6. Throw Error for Empty String

// Write a JavaScript function that takes a string as a parameter and throws a custom 'Error' if the string is empty.


function checkStringNotEmpty(str) {
    if(typeof str !== "string") {
        throw new Error("Invalid Input: parameter must be string.")
    }

    if(str.length === 0) {
        throw new Error("Error: The string is empty.")
    }
    return "valid string: " + str;
}



try {
    console.log(checkStringNotEmpty("Pankaj"));
}
catch(err) {
    console.log("Error:", err.message);
}

try {
    console.log(checkStringNotEmpty(""));
}
catch(err) {
    console.log("Error:", err.message);
}

try {
    console.log(checkStringNotEmpty(123));
}
catch(err) {
    console.log("Error:", err.message);
}

