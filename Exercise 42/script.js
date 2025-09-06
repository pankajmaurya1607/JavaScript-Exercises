// 7. Handle RangeError for Invalid Index

// Write a JavaScript program that uses a try-catch block to catch and handle a 'RangeError' when accessing an array with an invalid index.


function getArrayElement(arr, index) {
    if(!Array.isArray(arr)) {
        throw new Error("Invalid Input: parameter must be an array.")
    }

    if(index < 0 || index >= arr.length) {
        throw new RangeError("Invalid index: " + index)
    }

    return arr[index];
}

//Example Usage:
try {
    number = [10, 20, 30, 40]
    console.log(getArrayElement(number, 3));
    console.log(getArrayElement(number, -1));
    console.log(getArrayElement(number, 11));
}
catch(err) {
    if(err instanceof RangeError) {
        console.log("RangeError caught:", err.message);
    }
    else {
        console.log("Other Error:", err.message);
    }
}