// 5. Throw Error for Empty Array

// Write a JavaScript function that takes an array as a parameter and throws a custom 'Error' if the array is empty.


function checkArray(arr) {
    if(!Array.isArray(arr)) {
        throw new Error("Invalid Input: parameter must be an array.")
    }
    if(arr.length === 0) {
        throw new Error("Error: Array is Empty")
    }

    return `Array is not Empty, contains ${arr.length} elements.`
}

// Example Uses
try {
    console.log(checkArray([]));
}
catch(err) {
    console.error(err.message);
}

try {
    console.log(checkArray([1, 2, 3]));
}
catch(err) {
    console.error(err.message);
}

try {
    console.log(checkArray("Pankaj"));
}
catch(err) {
    console.error(err.message);
}