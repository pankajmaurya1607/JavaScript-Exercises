// 10. Try-Catch-Finally Example

// Write a JavaScript program that demonstrates the use of the 'try-catch-finally' statement to catch and handle an error, and then execute some cleanup code in the 'finally' block.


function divide(a, b) {
    try {
        console.log("attempting division...")

        if(b === 0) {
            throw new Error("Division by zero is not allowed.")
        }
        let result =  a/b
        console.log("result: ", result);
    }
    catch(error) {
        console.log("Error caught: ", error.message);
    }
    finally {
        console.log("Cleanup: Closing resources / Resetting state / Always runs.");
    }
}


divide(10, 2)
divide(10, 0)