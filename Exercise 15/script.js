// 9. API Fetch with Timeout Cancellation

// Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.


// function to fetch data with timeout cancelation
async function fetchWithTimeout(url, timeout = 5000) {
    // create a AbortController instance
    const controller = new AbortController();
    const signal = controller.signal

    // start a timer that abort the fetch after the timeout
    const timer = setTimeout(() => {
        controller.abort();
    }, timeout)

    try {
        const response = await fetch(url, {signal})

        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();    // Return parsed json
    }
    catch(error) {
        if(error.name === "AbortError") {
            throw new Error("Request time out")
        }
        throw error;     // Other errors (like network issues)
    }
    finally {
        clearTimeout(timer)   // Always clear the timer
    }
}

// usage example
fetchWithTimeout("https://jsonplaceholder.typicode.com/posts/1", 2000)
    .then(data => console.log("Data Received: ", data))
    .catch(error => console.error("Error: ", error.message))
