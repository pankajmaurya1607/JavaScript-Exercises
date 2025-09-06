// 9. Handle URIError for Invalid URI

// Write a JavaScript program that uses a try-catch block to catch and handle a 'URIError' when decoding an invalid URI.

try {
    // Example of an invalid URI (the "%" is not followed by valid hex digits)
    let invalidURI = "https://example.com/page%xy";

    // This will throw a URIError
    let decode = decodeURI(invalidURI)

    console.log("Decoded URI:", decode);
}
catch(err) {
    if(err instanceof URIError) {
        console.error("Caught a URI Error:", err.message)
    }
    else {
        console.error("Other Error:", err.message)
    }
}