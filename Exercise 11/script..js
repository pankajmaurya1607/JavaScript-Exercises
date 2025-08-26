// 5. Sequential Async Operations

// Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using Promises and 'async/await'.



// Mock async operation: resolves after a delay
function asyncTask(taskName, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`✅ Finished: ${taskName}`);
            resolve(`${taskName}, result`)
        }, delay)
    })
}


// Function to run async operations sequentially
async function runSequentialTasks() {
    try {
        const result1 = await asyncTask("Task1", 1000);
        console.log("Result 1:", result1);

        const result2 = await asyncTask("Task2", 1500);
        console.log("Result 2:", result2);

        const result3 = await asyncTask("Task3", 500);
        console.log("Result 3:", result3);

        console.log("🎉 All tasks done in sequence!");
    } catch(error) {
        console.error("❌ Error occurred:", error)
    }
}

// Usage
runSequentialTasks();