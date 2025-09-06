// 11. Handle EvalError

// Write a JavaScript program that uses a try-catch block to catch and handle an 'EvalError' when evaluating an invalid expression.



function safeEval(expression) {
  try {
    // Simulate an invalid expression case
    if (typeof expression !== "string" || expression.trim() === "") {
      throw new EvalError("Invalid expression passed to eval.");
    }

    let result = eval(expression); // ⚠️ Be careful: eval is unsafe in production
    console.log("Evaluation result:", result);
  } catch (error) {
    if (error instanceof EvalError) {
      console.error("Caught an EvalError:", error.message);
    } else {
      console.error("Other Error:", error.message);
    }
  }
}

// Example usage:
safeEval("2 + 3 * 4");   // ✅ 14
safeEval("");            // ❌ Triggers EvalError
safeEval(12345);         // ❌ Triggers EvalError
