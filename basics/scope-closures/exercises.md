#### Exercise 1: Global Scope Access
- **Description**: Practice accessing a variable in the global scope.
- **Task**: Declare a global variable `message` with the value "Hello, World!". Create a function `displayMessage` that logs `message`. Call the function.
- **Expected Output**:
  ```plaintext
  Hello, World!
  ```

#### Exercise 2: Function Scope
- **Description**: Demonstrate function scope by declaring a variable inside a function.
- **Task**: Create a function `greet` that declares a variable `greeting` with the value "Hi!" and logs it. Try logging `greeting` outside the function.
- **Expected Output**:
  ```plaintext
  Hi!
  ReferenceError: greeting is not defined
  ```

#### Exercise 3: Block Scope
- **Description**: Practice block scope using `let` in an `if` statement.
- **Task**: Declare a variable `isValid` with the value `true`. Inside an `if` block, declare a variable `status` with "Active" and log it. Try logging `status` outside the block.
- **Expected Output**:
  ```plaintext
  Active
  ReferenceError: status is not defined
  ```

#### Exercise 4: Accessing Outer Scope
- **Description**: Show how an inner scope can access an outer scope variable.
- **Task**: Declare a variable `outerVar` with "Outer". Inside a function `innerFunc`, log `outerVar`.
- **Expected Output**:
  ```plaintext
  Outer
  ```

#### Exercise 5: Basic Closure
- **Description**: Create a simple closure to retain access to an outer variable.
- **Task**: Create a function `makeCounter` that declares a variable `count` initialized to 0 and returns an inner function that logs and increments `count`.
- **Expected Output**:
  ```plaintext
  1
  2
  ```

#### Exercise 6: Global Scope Shadowing
- **Description**: Demonstrate variable shadowing in a function scope.
- **Task**: Declare a global variable `name` with "Global". Inside a function `showName`, declare a local `name` with "Local" and log it.
- **Expected Output**:
  ```plaintext
  Local
  ```

#### Exercise 7: Block Scope in Loop
- **Description**: Use block scope in a `for` loop to avoid variable leakage.
- **Task**: Use a `for` loop with `let` to iterate from 1 to 3, logging each number. Try logging the loop variable `i` outside the loop.
- **Expected Output**:
  ```plaintext
  1
  2
  3
  ReferenceError: i is not defined
  ```

#### Exercise 8: Nested Function Scope
- **Description**: Practice accessing variables across nested function scopes.
- **Task**: Declare a variable `outer` with "Outer scope". Inside a function `outerFunc`, declare `middle` with "Middle scope". Inside a nested function `innerFunc`, log both `outer` and `middle`.
- **Expected Output**:
  ```plaintext
  Outer scope, Middle scope
  ```

#### Exercise 9: Closure with Parameter
- **Description**: Use a closure to create a function that adds a specific value.
- **Task**: Create a function `addBy` that takes a parameter `n` and returns a function that adds `n` to its argument. Call the returned function with 5.
- **Expected Output**:
  ```plaintext
  7
  ```

#### Exercise 10: Module Pattern
- **Description**: Implement the module pattern using a closure.
- **Task**: Create a function `createPerson` that defines an object `person` with `{name: "Alice"}`. Return an object with a `getName` method to access the name.
- **Expected Output**:
  ```plaintext
  Alice
  ```

#### Exercise 11: Revealing Pattern
- **Description**: Use the revealing pattern to expose specific methods.
- **Task**: Create a function `createCalculator` with a variable `value` initialized to 0. Define functions `add` (increments by 1) and `getValue` (returns `value`). Return an object exposing only these functions.
- **Expected Output**:
  ```plaintext
  1
  2
  ```

#### Exercise 12: Closure with Multiple Calls
- **Description**: Use a closure to track multiple calls to a function.
- **Task**: Create a function `callTracker` that defines a `calls` variable initialized to 0. Return a function that increments `calls` and logs the number of times it has been called.
- **Expected Output**:
  ```plaintext
  Called 1 times
  Called 2 times
  ```

#### Exercise 13: Block Scope with Const
- **Description**: Demonstrate immutability of `const` in block scope.
- **Task**: In a `for` loop iterating from 1 to 2, declare a `const` variable `index` inside the loop block and log it. Try reassigning `index` inside the loop.
- **Expected Output**:
  ```plaintext
  1
  2
  TypeError: Assignment to constant variable
  ```
- **Solution**:
  ```javascript
  for (let i = 1; i <= 2; i++) {
    const index = i;
    console.log(index);
    // index = 10; // TypeError: Assignment to constant variable
  }
  ```

#### Exercise 14: Closure with Object Property
- **Description**: Use a closure to modify an object’s property.
- **Task**: Create a function `createUpdater` with an object `data` containing `{ count: 0 }`. Return a function that increments `data.count` and returns it.
- **Expected Output**:
  ```plaintext
  1
  2
  ```

#### Exercise 15: hasOwnProperty in Closure
- **Description**: Use `hasOwnProperty()` within a closure to check object properties.
- **Task**: Create a function `createChecker` with an object `obj` containing `{ a: 1 }`. Add an inherited property `b` to `Object.prototype`. Return a function that uses `hasOwnProperty()` to log only own properties of `obj`.
- **Expected Output**:
  ```plaintext
  a: 1
  ```

#### Exercise 16: Module Pattern with Multiple Methods
- **Description**: Implement a module pattern with multiple methods using a closure.
- **Task**: Create a function `createUser` with a private object `{ name: "Bob", age: 25 }`. Return an object with methods `getName`, `getAge`, and `setAge` to access and modify the private data.
- **Expected Output**:
  ```plaintext
  Bob
  25
  30
  ```

#### Exercise 17: IIFE for Private Scope
- **Description**: Use an Immediately Invoked Function Expression (IIFE) to create a private scope.
- **Task**: Create an IIFE that declares a variable `secret` with "Hidden". Inside the IIFE, log `secret`. Try logging `secret` outside the IIFE.
- **Expected Output**:
  ```plaintext
  Hidden
  ReferenceError: secret is not defined
  ```

#### Exercise 18: Closure with Loop
- **Description**: Use a closure to fix variable capture in a loop.
- **Task**: Create a function `createFunctions` that uses a `for` loop to create an array of 3 functions, each logging its index (0 to 2). Use a closure to capture the correct index.
- **Expected Output**:
  ```plaintext
  0
  1
  2
  ```

#### Exercise 19: Garbage Collection in Closure
- **Description**: Demonstrate closure cleanup by removing references.
- **Task**: Create a function `createHeavyClosure` with a large array `data` (e.g., `[1, 2, 3, 4, 5]`). Return a function that logs the array length. Call the function, then set it to `null` to allow garbage collection.
- **Expected Output**:
  ```plaintext
  5
  ```

#### Exercise 20: Nested Closures
- **Description**: Create nested closures to access multiple levels of scope.
- **Task**: Create a function `outer` with a variable `outerVal` ("Outer"). Inside it, define a function `middle` with `middleVal` ("Middle") that returns a function `inner` that logs both `outerVal` and `middleVal`.
- **Expected Output**:
  ```plaintext
  Outer, Middle
  ```