// 3. HTTP GET with Promises

// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.


// Function to make an HTTP GET request using Promises
function httpGet(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    reject(`HTTP error! status: ${response.status}`)
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(err => reject(err))
    });
}

// Usage
httpGet("https://jsonplaceholder.typicode.com/posts/1")
    .then(data => {
        console.log("✅ Response data:", data);
    })
    .catch(error => {
        console.error("❌ Error:", error);
    })
