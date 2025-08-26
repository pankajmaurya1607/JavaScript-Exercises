// 6. Concurrent API Fetch with Promise.all

// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.


// Function to fetch data from multiple APIs concurrently
function fetchMultilpleAPIs(urls) {
    // Map each URL into a fetch Promise
    const promise = urls.map(url => {
        return fetch(url).then(response => {
            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status} for ${url}`);
            }
            return response.json()// parse JSON response
        })
    })
    // Run all fetches in parallel
    return Promise.all(promise)
}


// Usage Example
const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/comments/1"
];

fetchMultilpleAPIs(urls)
    .then(results => {
        console.log("✅ Combined Results:");
        console.log("Post:", results[0]);
        console.log("User:", results[1]);
        console.log("Comment:", results[2]);
    })
    .catch(error => {
        console.error("❌ Error fetching APIs:", error);
    })