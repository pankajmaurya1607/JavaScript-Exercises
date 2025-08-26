// 7. API Fetch with Retry Mechanism

// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.



// function to fetch data with retry mechanism
async function fetchWithRetry(url, retries = 3, delay = 1000) {
    try {
        const response = await fetch(url)
        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return await response.json();
    } catch(error) {
        if(retries > 0) {
            console.warn(`⚠️ Fetch failed: ${error.message}. Retrying in ${delay}ms... (${retries} retires left)`)

            // wait before retry
            await new Promise(resolve => setTimeout(resolve, delay))

            // retry again with one less retry count
            return fetchWithRetry(url, retries-1, delay)    
        }
        else {
            throw new Error(`❌ Failed after multiple retries: ${error.message}`)
        }
    }
}

// Usage Example
const url = "https://jsonplaceholder.typicode.com/posts/1"

fetchWithRetry(url, 3, 2000)
    .then(data => {
        console.log("✅ Data received:", data)
        
    })
    .catch(error => {
        console.error("❌ Error:", error.message)
    })