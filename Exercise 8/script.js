// 2. Callback to Promise Conversion

// Write a JavaScript program that converts a callback-based function to a Promise-based function.



// Original calllback-based function
function fetchDataWithCallback(callback) {
    setTimeout(() => {
        const data = {id: 1, name: "pankaj"}
        const error = null   // set this to simulate an error
        callback(error, data);
    }, 2000)
} 

// convert callback based function to promise based
function fetchDataWithPrimse() {
    return new Promise((resolve, reject) => {
        fetchDataWithCallback((err, data) => {
            if(err) {
                reject(err);
            }
            else resolve(data)
        });
    });
}

// using the promise based function
fetchDataWithPrimse()
    .then(data => {
        console.log("Data received", data);
    })
    .catch(err => {
        console.error("Error: ", err);
    })