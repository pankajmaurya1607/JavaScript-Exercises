// 4. Parallel URL Downloads with Promises

// Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.


function downloadUrls(urls) {
    const promises = urls.map(url => 
        fetch(url).then(response => {
            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            return response.json();
        })
    )
    return Promise.all(promises);
}


const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3"
]

downloadUrls(urls)
    .then(contents => {
        contents.forEach((content, i) => {
            console.log(`✅ Content from url ${i+1}:`, content)
        })
    })
    .catch(error => {
        console.error("❌ Error while downloading:", error);
    })