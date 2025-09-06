// 12. Handle ReferenceError

// Write a JavaScript program that uses a try-catch block to catch and handle a 'ReferenceError' when accessing an undefined variable.


try {
  // Trying to access a variable that is not defined
  console.log(nonExistentVar);  // ❌ This will throw ReferenceError
} catch (error) {
  if (error instanceof ReferenceError) {
    console.error("Caught a ReferenceError:", error.message);
  } else {
    console.error("Other Error:", error.message);
  }
} finally {
  console.log("Finally block: This always runs (cleanup or logging).");
}

