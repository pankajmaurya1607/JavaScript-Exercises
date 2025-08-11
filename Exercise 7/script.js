// 1. Delayed Callback Execution

// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.


function executeAfterDelay(callback) {
    if(typeof callback !== 'function') {
        console.error("❌ The argument provided is not a function.");
        return;
    }

    setTimeout(() => {
        callback();
    }, 2000);
}

function sayHello() {
    console.log("Hello! This message delayed for 2 second");
    document.getElementById('output').textContent = "Hello! This message delayed for 2 second"
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('delayButton').addEventListener('click', function() {
        executeAfterDelay(sayHello)
    })
})




