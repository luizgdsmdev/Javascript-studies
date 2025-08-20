### Exercise 1: Declaring Functions with Different Syntaxes
- **Description**: Practice declaring functions using different methods.
- **Task**: Declare three functions using a function declaration, function expression, and arrow function. Each function should take two numbers and return their sum. Log the results of calling each function with arguments `5` and `3`.
- **Expected Output**:
```javascript
8
8
8
```

### Exercise 2: Function Declaration with Hoisting
- **Description**: Demonstrate the hoisting behavior of function declarations.
- **Task**: Call a function that calculates the square of a number before its declaration. Then, define the function using a function declaration and log the result for input `4`.
- **Expected Output**:
```javascript
16
```

### Exercise 3: Anonymous Function Expression
- **Description**: Practice creating an anonymous function expression.
- **Task**: Create an anonymous function expression that multiplies two numbers and assign it to a variable. Call the function with arguments `6` and `7` and log the result.
- **Expected Output**:
```javascript
42
```

### Exercise 4: Arrow Function with Implicit Return
- **Description**: Use an arrow function with implicit return for a simple operation.
- **Task**: Create an arrow function that takes a number and returns its double. Log the result for input `10`.
- **Expected Output**:
```javascript
20
```

### Exercise 5: Constructor Function
- **Description**: Practice creating objects with a constructor function.
- **Task**: Define a constructor function `Car` that takes `brand` and `year` as parameters. Create an instance with `brand = "Toyota"` and `year = 2020`, and log the `brand` property.
- **Expected Output**:
```javascript
Toyota
```

### Exercise 6: Immediately Invoked Function Expression (IIFE)
- **Description**: Use an IIFE to execute code immediately.
- **Task**: Create an IIFE that logs `"IIFE executed!"` to the console.
- **Expected Output**:
```javascript
IIFE executed!
```

### Exercise 7: Named Function Expression
- **Description**: Practice named function expressions and their scope.
- **Task**: Create a named function expression assigned to a variable `factorial`. The function should calculate the factorial of a number recursively. Log the result for input `5`.
- **Expected Output**:
```javascript
120
```

### Exercise 8: Arrow Function with Multiple Parameters
- **Description**: Use an arrow function with multiple parameters and explicit return.
- **Task**: Create an arrow function that takes three numbers and returns their average. Log the result for inputs `10`, `20`, and `30`.
- **Expected Output**:
```javascript
20
```

### Exercise 9: IIFE with Parameters
- **Description**: Pass parameters to an IIFE for immediate execution.
- **Task**: Create an IIFE that takes a name and logs a greeting with that name. Use `"Alice"` as the parameter.
- **Expected Output**:
```javascript
Hello, Alice!
```

### Exercise 10: Function Scope
- **Description**: Explore function scope and variable access.
- **Task**: Create a function `outer` that defines a variable `message = "Outer"`. Inside it, define a function `inner` that logs `message` and a local variable `innerMessage = "Inner"`. Call `inner` and try logging `innerMessage` outside the function.
- **Expected Output**:
```javascript
Outer
Inner
ReferenceError: innerMessage is not defined
```

### Exercise 11: Closure Basics
- **Description**: Practice creating a closure to maintain state.
- **Task**: Create a function `counter` that returns an inner function. The inner function increments a counter variable and returns its value. Call the inner function three times.
- **Expected Output**:
```javascript
1
2
3
```

### Exercise 12: Closure with Private Variables
- **Description**: Use a closure to create private variables.
- **Task**: Create a function `createPerson` that returns an object with methods to get and set a private `name` variable. Set the name to `"Bob"` and log it, then change it to `"Alice"` and log again.
- **Expected Output**:
```javascript
Bob
Alice
```

### Exercise 13: Module Pattern
- **Description**: Implement the module pattern using an IIFE.
- **Task**: Create an IIFE that returns an object with methods to increment and show a private counter. Call `increment` twice and then `show`.
- **Expected Output**:
```javascript
2
```

### Exercise 14: Revealing Module Pattern
- **Description**: Use the revealing module pattern for encapsulation.
- **Task**: Create an IIFE that returns an object with methods to add to and get a private balance. Add `50` and `100`, then log the balance.
- **Expected Output**:
```javascript
150
```

### Exercise 15: Injecting a Namespace Object
- **Description**: Use an IIFE to extend an existing object.
- **Task**: Create an object `utils` and use an IIFE to add a method `square` that returns the square of a number. Call `square(5)` and log the result.
- **Expected Output**:
```javascript
25
```

### Exercise 16: Function Properties
- **Description**: Add and access properties on a function.
- **Task**: Create a function `calculate` and add a property `version = "1.0"`. Log the property value.
- **Expected Output**:
```javascript
1.0
```

### Exercise 17: Deleting Function Properties
- **Description**: Practice deleting properties from a function.
- **Task**: Add a property `description = "Math function"` to a function `math`. Log it, delete it, and log again.
- **Expected Output**:
```javascript
Math function
undefined
```

### Exercise 18: Using `.call()`
- **Description**: Use `.call()` to set the `this` context.
- **Task**: Create a function `greet` that logs `Hello, ${this.name}!`. Call it with an object `{ name: "John" }` using `.call()`.
- **Expected Output**:
```javascript
Hello, John!
```

### Exercise 19: Using `.apply()`
- **Description**: Use `.apply()` to pass arguments as an array.
- **Task**: Create a function `sum` that logs the sum of its arguments. Call it with `[1, 2, 3]` using `.apply()`.
- **Expected Output**:
```javascript
6
```

### Exercise 20: Using `.bind()`
- **Description**: Use `.bind()` to create a function with a fixed `this`.
- **Task**: Create a function `introduce` that logs `I am ${this.name}.`. Bind it to `{ name: "Alice" }` and call the bound function.
- **Expected Output**:
```javascript
I am Alice.
```

### Exercise 21: Default Parameters
- **Description**: Use default parameters in a function.
- **Task**: Create a function `welcome` that takes a `name` parameter with default `"Guest"`. Log a greeting. Call it with and without an argument.
- **Expected Output**:
```javascript
Welcome, Guest!
Welcome, Bob!
```

### Exercise 22: Rest Parameters
- **Description**: Use rest parameters to handle variable arguments.
- **Task**: Create a function `sumAll` that uses rest parameters to sum all arguments. Log the result for `1, 2, 3, 4`.
- **Expected Output**:
```javascript
10
```

### Exercise 23: Higher-Order Function
- **Description**: Create a higher-order function that accepts another function.
- **Task**: Create a function `withLog` that takes a function and logs `"Calling function"` before executing it. Use it with a function that doubles a number.
- **Expected Output**:
```javascript
Calling function
10
```

### Exercise 24: Async Function
- **Description**: Practice async functions with a simple promise.
- **Task**: Create an async function `fetchData` that returns a promise resolving to `"Data fetched"`. Log the result using `.then()`.
- **Expected Output**:
```javascript
Data fetched
```

### Exercise 25: Object.keys() with Functions
- **Description**: Use `Object.keys()` to list function properties.
- **Task**: Create a function `calc` and add two properties: `type = "math"` and `version = "2.0"`. Log the property names using `Object.keys()`.
- **Expected Output**:
```javascript
["type", "version"]
```

### Exercise 26: Object.values() with Functions
- **Description**: Use `Object.values()` to list function property values.
- **Task**: Use the same `calc` function from Exercise 25 and log the property values using `Object.values()`.
- **Expected Output**:
```javascript
["math", "2.0"]
```

### Exercise 27: Object.freeze() with Functions
- **Description**: Prevent modifications to a function’s properties using `Object.freeze()`.
- **Task**: Create a function `frozen` with a property `status = "active"`. Freeze it, attempt to add a new property `version = "1.0"`, and log the result.
- **Expected Output**:
```javascript
undefined
```

### Exercise 28: Object.seal() with Functions
- **Description**: Use `Object.seal()` to restrict adding/deleting properties.
- **Task**: Create a function `sealed` with a property `mode = "on"`. Seal it, try to add a new property `version = "1.0"`, and log the result.
- **Expected Output**:
```javascript
undefined
```

### Exercise 29: hasOwnProperty() with Functions
- **Description**: Check for properties on a function using `hasOwnProperty()`.
- **Task**: Create a function `test` with a property `category = "utility"`. Use `hasOwnProperty()` to check for `category` and `version`.
- **Expected Output**:
```javascript
true
false
```

### Exercise 30: Combining Closures and Higher-Order Functions
- **Description**: Combine closures and higher-order functions for advanced logic.
- **Task**: Create a function `createMultiplier` that takes a factor and returns a function that multiplies its argument by that factor. Use a closure to store the factor. Create two multipliers (factor `2` and `3`) and log results for input `5`.
- **Expected Output**:
```javascript
10
15
```