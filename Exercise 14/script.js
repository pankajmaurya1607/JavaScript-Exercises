// 8. Repeated Execution with setInterval

// Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.


function repeatExecution(fn, interval) {
    if(typeof fn != "function") {
        throw new Error("Provided argument is not a function")
    }
    const intervalId = setInterval(fn, interval)
    return intervalId
}


// Example usage
let count = 0;

const intervalId = repeatExecution(() => {
    count++;
    console.log(`Execution: ${count}`);

    if(count == 5) {
        clearInterval(intervalId);
        console.log("Stopped after 5 execution.");
    }
}, 1000)
