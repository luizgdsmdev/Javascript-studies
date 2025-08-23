### Error handling in JavaScript
This section is meant to cover everything we should know about error handling in JavaScript.  
- [What is Error Handling in JavaScript](#what-is-error-handling-in-javascript)
- [The Role of Errors](#the-role-of-errors)
- [Throwing Custom Errors](#throwing-custom-errors)
- [Finally Block](#finally-block)
- [Error Objects and Types](#error-objects-and-types)
- [Best Practices for Error Handling](#best-practices-for-error-handling)


Go back to [basics listing](https://github.com/luizgdsmdev/-Javascript-studies/blob/main/basics/intro.md).  

#### What is Error Handling in JavaScript
Error handling refers to the process of **handling runtime errors** to **prevent program crashes** and ensure **graceful recovery** or feedback.   
Such errors could occur when the **program faces unexpected conditions** like invalid input, network failure, and so on. It's crucial to the system's health, especially when dealing with large amounts of data, external sources, or user interaction.   
In JavaScript, such handling can be done by using the ``try...catch`` statements, allowing developers to ensure more secure executions and respond to issues without halting the program.
- ``try``: this block contains the piece of code that might throw an error, ensuring the execution inside its block.
- ``catch``: in case of an error, the ``catch`` block will handle it following the instructions inside the block.
````javascript
try {
    console.log(invalidVariable);
} catch (error) {
    console.log(error);//Shows ReferenceError: invalidVariable is not defined
}
````

#### The Role of Errors
Errors are **objects** in JavaScript that indicate **something went wrong during the execution** of the program and, without proper handling, have the potential to **disrupt the normal flow** of the code and **possibly halt the program**. 

###### Types of errors:
From the three main errors listed below, only one can be caught by the ``try...catch``:
- **Runtime errors**: occurs during the **code execution**, like acessing undefined variables, and **can be catch** by the ``try...catch``.
- **Syntax errors**: occur when the logical rules of the code language writing are broken, like a missing parentheses, being **thrown during code parsing**. These errors cannot be caught by the ``try...catch``, since it prevents the code execution.
- **Logical errors**: bugs in the code logic that produces incorrect results **but don't throw errors**. These errors cannot be caught by the ``try...catch``.
````javascript
//Runtime error: error was caught
try {
    console.log(invalidVariable);
} catch (error) {
    console.log(error);//Shows ReferenceError: invalidVariable is not defined
}
console.log("After try...catch block");//Still being executed

//-------------------------------------------------------------------------------------
//SyntaxError: Shows Uncaught SyntaxError, because there's a missing curly bracket at
//the function declaration, try...catch don't handle it, and the execution is halted
try {
    function myFunction()
        console.log("Syntax error.");
    }
} catch (error) {
    console.log(error);
}

//-------------------------------------------------------------------------------------
//Logical error: a number was expected, but the logic was broken by trying
//to add 'undefined + 10', resulting in a 'NaN'
let num = Number();
try {
    num = undefined + 10;
} catch (error) {
    console.log(error);//The error wasn't caught
}

console.log(num);//Shows NaN
````

#### Throwing Custom Errors
It's also possible to **throw custom errors** through ``throw`` statements, which enables specific error conditions to be handled explicitly.   
It's often used to validate inputs or special conditions before proceeding, signing exceptional cases, like invalid or not formatted inputs, to trigger the ``catch`` block.
````javascript
try {
    let age = -5;
    if (age < 0) throw new Error("Age cannot be negative");
    console.log("Age:", age);
} catch (error) {
    console.log("Error:", error.message);//Shows Error: Age cannot be negative
}
````



#### Finally Block
The ``finally`` block is **optional** and **executes regardless of an error occurring**. Often used for cleanup purposes or final actions, like closing resources or resetting states, or closing connections.   
````javascript
try {

} catch(error) {

}finally{
    //If no errors occur, the finally is executed right after the try block
    //If any error occurs, it's executed after the catch block
}
````

#### Error Objects and Types
JavaScript errors are instances of the ``Error`` class or its subclasses, each with a ``name`` and ``message`` property.
- Common Error Types:
  - ``Error``: Generic error.
  - ``ReferenceError``: Accessing an undefined variable.
  - ``TypeError``: Invalid operation on a value (like calling a non-function).
  - ``SyntaxError``: Invalid JSON or code syntax.
  - ``RangeError``: Value out of valid range (like excessive recursion).

- Accessing Error Details:
  - ``error.name``: Type of error (like "ReferenceError").
  - ``error.message``: Description of the error.
  - ``error.stack``: Stack trace for debugging (non-standard but often supported).
````javascript
try {
    let x = undefinedVar;//Throws ReferenceError
} catch (error) {
    console.log(error.name);//Shows ReferenceError
    console.log(error.message);//Shows undefinedVar is not defined
    console.log(error.stack);//Shows stack trace
}
````



#### Best Practices for Error Handling
- **Use Specific Error Types**: catch specific errors when possible, to handle different cases accordingly.
````javascript
try {
    let result = JSON.parse("invalid");
} catch (error) {
    if (error instanceof SyntaxError) {
        console.error("Invalid JSON: ", error.message);//Shows Invalid JSON:  Unexpected token 'i', "invalid" is not valid JSON
    } else {
        console.error("Error at json input:", error.message);
    }
}
````
- **Avoid Empty Catch Blocks**: always log or handle errors to avoid silent failures.
````javascript
//Not useful
try { riskyOperation(); } catch (error) {}

//Better approach
try { riskyOperation(); } catch (error) { console.error("Connection failed at database:", error); }
````

- **Use ``finally`` for Cleanup**: ensure resources are released, especially in asynchronous code.
````javascript
let resource = { id: "dbConnection" };//Simulated resource
try {
    console.log("Using resource:", resource.id);//Simulate resource usage
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Releasing resource:", resource.id);//Cleanup
    resource = null;
}
````

- **Meaningful Errors**: Use descriptive messages for custom errors that could provide clear context..
````javascript
//Not useful
throw new Error("Something went wrong");

//Better approach
throw new Error("Invalid user input: age must be positive");
````

- **Handle Asynchronous Errors**: use ``try...catch`` in async functions or ``.catch()`` for **Promises**.
````javascript
async function fetchData() {
    try {
        let response = await fetch("invalid-url");
    } catch (error) {
        console.error("Fetch at 'fetchData' function failed:", error.message);
    }
}
````

- **Don't Overuse ``try...Catch``**: wrap only the code that is likely to throw errors, keeping code readable and performant.
- **Log Errors for Debugging**: Include ``error.stack`` or context to diagnose issues.
