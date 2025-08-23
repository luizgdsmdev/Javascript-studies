1. **Basic Try-Catch for ReferenceError**
   - **Description**: Write a `try-catch` block to handle a `ReferenceError` caused by accessing an undefined variable. Log the error message.
   - **Task**: Write the code and explain what error is caught.
   - **Expected Answer**: Outputs "Error: undefinedVar is not defined". The `ReferenceError` is caught in the `catch` block, and the program continues.

2. **Handling Invalid JSON**
   - **Description**: Use `try-catch` to parse invalid JSON and log a custom error message if parsing fails.
   - **Task**: Write the code and describe the error type.
   - **Expected Answer**: Outputs "Failed to parse JSON: Unexpected token i in JSON at position 0". A `SyntaxError` is caught.

3. **Throwing a Custom Error**
   - **Description**: Write a function that checks if a number is positive. Throw a custom error if it’s negative, and handle it with `try-catch`.
   - **Task**: Write the code and explain the custom error.
   - **Expected Answer**: Outputs "Number must be positive". The custom `Error` is thrown and caught.

4. **Using Finally Block**
   - **Description**: Write a `try-catch-finally` block that attempts to access an array element. Log a message in `finally` to confirm cleanup.
   - **Task**: Write the code and verify `finally` execution.
   - **Expected Answer**: Outputs "Error: undefined is not an object" and "Cleanup done". The `finally` block always executes.

5. **Catching TypeError**
   - **Description**: Write a `try-catch` block to handle a `TypeError` caused by calling a non-function. Log the error name and message.
   - **Task**: Write the code and identify the error type.
   - **Expected Answer**: Outputs "Name: TypeError Message: notFn is not a function". A `TypeError` is caught.

6. **Handling SyntaxError in JSON**
   - **Description**: Write a `try-catch` block to parse valid and invalid JSON. Log success or error messages.
   - **Task**: Write the code and test both cases.
   - **Expected Answer**: Outputs "Success: { name: 'Luiz' }" for valid JSON; for invalid JSON, it catches a `SyntaxError`.

7. **Empty Catch Block Issue**
   - **Description**: Write a `try-catch` block with an empty `catch` that attempts to divide by zero. Then, fix it by logging the error.
   - **Task**: Write both versions and explain why empty `catch` is bad.
   - **Expected Answer**: Empty `catch` hides errors (silent failure); logging reveals "Error: Division by zero" (or similar).

8. **Validating Input with Custom Error**
   - **Description**: Write a function that validates a string length (> 3). Throw a custom error if invalid, and handle it.
   - **Task**: Write the code and test with valid/invalid inputs.
   - **Expected Answer**: Outputs "String too short" for invalid input; valid input returns the string.

9. **Using Finally for Resource Cleanup**
   - **Description**: Simulate opening a resource (e.g., a connection) and use `finally` to close it, even if an error occurs.
   - **Task**: Write the code and verify `finally` execution.
   - **Expected Answer**: Outputs "Error: Connection failed" and "Connection: closed". `finally` ensures cleanup.

10. **Catching Specific Error Types**
    - **Description**: Write a `try-catch` block that parses JSON and handles `SyntaxError` specifically, with a fallback for other errors.
    - **Task**: Write the code and test with invalid JSON.
    - **Expected Answer**: Outputs "Invalid JSON: Unexpected token i in JSON at position 0". Specific error handling improves clarity.

11. **Throwing RangeError**
    - **Description**: Write a function that checks if an array index is valid. Throw a `RangeError` if out of bounds, and handle it.
    - **Task**: Write the code and test with an invalid index.
    - **Expected Answer**: Outputs "RangeError Index out of bounds".

12. **Error Stack Trace**
    - **Description**: Write a `try-catch` block that throws a custom error and logs its stack trace for debugging.
    - **Task**: Write the code and verify the stack trace.
    - **Expected Answer**: Outputs the stack trace, showing the error’s origin (varies by environment).

13. **Multiple Catch Blocks (Nested Try-Catch)**
    - **Description**: Write a nested `try-catch` block where an outer function calls an inner function that may throw an error. Handle errors at both levels.
    - **Task**: Write the code and test error propagation.
    - **Example**:
    - **Expected Answer**: Outputs "Inner catch: Inner error" and "Outer catch: Inner error".

14. **Handling Null Reference**
    - **Description**: Write a `try-catch` block to access a property of a potentially `null` object. Handle the resulting `TypeError`.
    - **Task**: Write the code and test with `null`.
    - **Expected Answer**: Outputs "Error: Cannot read properties of null (reading 'property')".

15. **Asynchronous Error Handling with Promises**
    - **Description**: Write an async function that uses `fetch` with an invalid URL. Handle the error using `try-catch`.
    - **Task**: Write the code and test with an invalid URL.
    - **Expected Answer**: Outputs "Fetch failed: Failed to fetch" (or similar). Async errors are caught in `try-catch`.

16. **Promise Chain Error Handling**
    - **Description**: Create a Promise chain that throws an error in one step. Use `.catch()` to handle it.
    - **Task**: Write the code and verify error handling.
    - **Expected Answer**: Outputs "Error: Promise error". The `.catch()` handles the thrown error.

17. **Custom Error Class**
    - **Description**: Create a custom error class and use it to throw an error for invalid input. Handle it with `try-catch`.
    - **Task**: Write the code and test the custom error.
    - **Expected Answer**: Outputs "ValidationError Invalid input".

18. **Error Handling with Finally in Async Code**
    - **Description**: Write an async function that fetches data and uses `finally` to log cleanup, regardless of success or failure.
    - **Task**: Write the code and test with an invalid URL.
    - **Expected Answer**: Outputs "Error: Failed to fetch" and "Fetch cleanup complete".

19. **Preventing Silent Failures**
    - **Description**: Write a function that processes an array but may throw errors for invalid elements. Fix a silent failure by logging errors.
    - **Task**: Write bad and good versions of the code.
    - **Expected Answer**: Outputs "Error: Non-number found" in the fixed version; bad version silently fails.

20. **Complex Error Propagation**
    - **Description**: Write a function that calls another function that may throw an error. Handle errors at multiple levels and log the stack trace.
    - **Task**: Write the code and test error propagation.
    - **Expected Answer**: Outputs "Outer caught: Inner failure" and "Main caught: Outer error: Inner failure" with stack trace.
