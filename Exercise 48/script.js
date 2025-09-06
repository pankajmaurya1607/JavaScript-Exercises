// 13. Handle SyntaxError for JSON Parsing

// Write a JavaScript program that uses a try-catch block to catch and handle a 'SyntaxError' when parsing an invalid JSON string.



function parseJSON(jsonString) {
  try {
    let data = JSON.parse(jsonString);  // May throw SyntaxError
    console.log("Parsed JSON object:", data);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error("Caught a SyntaxError while parsing JSON:", error.message);
    } else {
      console.error("Other Error:", error.message);
    }
  } finally {
    console.log("Finished JSON parsing attempt.\n");
  }
}

// Example usage:
parseJSON('{"name": "Pankaj", "age": 22}');   // ✅ Valid JSON
parseJSON('{"name": "Pankaj", "age": }');     // ❌ Invalid JSON → SyntaxError
parseJSON("Not a JSON at all");               // ❌ Invalid JSON → SyntaxError
