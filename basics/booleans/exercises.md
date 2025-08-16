### Basic Exercises
These exercises focus on fundamental Boolean concepts, such as declaration, logical operations, and truthy/falsy evaluation.

#### Exercise 1: Declaring and Verifying Booleans
- **Description**: Practice declaring Boolean variables and checking their types.
- **Task**: Declare three Boolean variables using `let`, `var`, and `const` with values `true`, `false`, and `true`, respectively. Log their values and types using `typeof`.
- **Expected Output**:
```javascript
true boolean
false boolean
true boolean
```

#### Exercise 2: Using the NOT Operator
- **Description**: Understand the behavior of the `!` operator.
- **Task**: Declare a variable `isEnabled = true`. Log its value, then use the `!` operator to invert it and log the result. Repeat with `isEnabled = false`.
- **Expected Output**:
```javascript
true
false
false
true
```

#### Exercise 3: Logical AND and OR Operations
- **Description**: Practice using `&&` and `||` operators.
- **Task**: Declare two variables `a = true` and `b = false`. Log the results of `a && b`, `a || b`, and `!a && b`.
- **Expected Output**:
```javascript
false
true
false
```

#### Exercise 4: Booleans in Conditional Statements
- **Description**: Use Booleans to control `if` statements.
- **Task**: Declare a variable `isLoggedIn = true`. Write an `if` statement that logs "User is logged in" if `isLoggedIn` is `true`, and "User is logged out" otherwise.
- **Expected Output**:
```javascript
User is logged in
```

#### Exercise 5: Truthy and Falsy Values
- **Description**: Explore truthy and falsy values using `!!`.
- **Task**: Declare variables with the following values: `0`, `"hello"`, `""`, and `[]`. Use the `!!` operator to convert each to a Boolean and log the results.
- **Expected Output**:
```javascript
false
true
false
true
```

#### Exercise 6: Comparing Null, Undefined, and False
- **Description**: Differentiate between `null`, `undefined`, and `false`.
- **Task**: Declare three variables: `isFalse = false`, `isNull = null`, and an uninitialized variable `isUndefined`. Log their values and types using `typeof`.
- **Expected Output**:
```javascript
false boolean
null object
undefined undefined
```

#### Exercise 7: Boolean Conversion with Boolean()
- **Description**: Practice converting values to Booleans using `Boolean()`.
- **Task**: Declare variables with values `42`, `""`, and `null`. Use the `Boolean()` function to convert each to a Boolean and log the results.
- **Expected Output**:
```javascript
true
false
false
```

#### Exercise 8: Using Booleans in a While Loop
- **Description**: Use Booleans to control a `while` loop.
- **Task**: Declare a variable `isRunning = true` and a counter `count = 0`. Write a `while` loop that logs "Running" and increments `count` until `count` reaches 3, then set `isRunning` to `false`.
- **Expected Output**:
```javascript
Running
Running
Running
```

#### Exercise 9: Combining Logical Operators
- **Description**: Combine multiple logical operators in a condition.
- **Task**: Declare variables `isAdmin = true` and `isLoggedIn = false`. Log "Access granted" if `isAdmin` is `true` AND `isLoggedIn` is `true`, or if `isAdmin` is `true` alone. Otherwise, log "Access denied".
- **Expected Output**:
```javascript
Access granted
```

#### Exercise 10: Avoiding new Boolean()
- **Description**: Understand the pitfalls of `new Boolean()`.
- **Task**: Declare a variable `boolObj = new Boolean(false)`. Log its value, type, and whether it’s truthy using `!!`. Compare it to a primitive `bool = false` using `===`.
- **Expected Output**:
```javascript
[Boolean: false] object
true
false
```

#### Exercise 11: Truthy/Falsy in Conditional Logic
- **Description**: Use truthy and falsy values in complex conditions.
- **Task**: Declare variables `username = ""`, `age = 0`, and `profile = {}`. Write a function `canAccess` that returns `true` if `username` is non-empty OR `age` is non-zero OR `profile` is truthy. Test with the given values.
- **Expected Output**:
```javascript
true
```

#### Exercise 12: Chaining Logical Operators
- **Description**: Combine multiple logical operators for complex logic.
- **Task**: Declare variables `isActive = true`, `hasError = false`, and `isComplete = true`. Log "Success" if `isActive` is `true` AND either `hasError` is `false` OR `isComplete` is `true`. Otherwise, log "Failure".
- **Expected Output**:
```javascript
Success
```

#### Exercise 13: Boolean Conversion Comparison
- **Description**: Compare `Boolean()` and `!!` in a practical scenario.
- **Task**: Write a function `isTruthy(value)` that returns an object with two properties: `viaBoolean` (using `Boolean(value)`) and `viaDoubleNegation` (using `!!value`). Test with inputs `"test"`, `0`, and `null`.
- **Expected Output**:
```javascript
{ viaBoolean: true, viaDoubleNegation: true }
{ viaBoolean: false, viaDoubleNegation: false }
{ viaBoolean: false, viaDoubleNegation: false }
```

#### Exercise 14: Handling Edge Cases with new Boolean()
- **Description**: Explore the unexpected behavior of `new Boolean()` in conditions.
- **Task**: Declare `boolObj = new Boolean(false)` and `bool = false`. Use both in an `if` statement to log "Truthy" or "Falsy". Then, compare them using `===` and `valueOf()`.
- **Expected Output**:
```javascript
Truthy
Falsy
false
true
```

#### Exercise 15: Boolean in Ternary Operator
- **Description**: Use Booleans with ternary operators for concise logic.
- **Task**: Declare `isValid = true`. Use a ternary operator to assign "Valid" or "Invalid" to a variable `status` based on `isValid`. Log `status`.
- **Expected Output**:
```javascript
Valid
```

#### Exercise 16: Default Boolean Values
- **Description**: Use Booleans as default values for falsy inputs.
- **Task**: Write a function `getStatus(value)` that returns `value || false`. Test with `undefined`, `true`, and `""`.
- **Expected Output**:
```javascript
false
true
false
```

#### Exercise 17: Complex Boolean Logic in a Loop
- **Description**: Use Booleans to control a loop with complex conditions.
- **Task**: Declare `isRunning = true` and `count = 0`. Write a `while` loop that runs while `isRunning` is `true` AND `count` is less than 5. Inside the loop, log "Looping" and increment `count`. If `count` is 3, set `isRunning` to `false`.
- **Expected Output**:
```javascript
Looping
Looping
Looping
```

#### Exercise 18: Validating Input with Truthy/Falsy
- **Description**: Validate user input using truthy/falsy checks.
- **Task**: Write a function `isValidInput(input)` that returns `true` if the input is a non-empty string or a non-zero number, and `false` otherwise. Test with `"hello"`, `0`, and `null`.
- **Expected Output**:
```javascript
true
false
false
```

#### Exercise 19: Boolean Methods with Objects
- **Description**: Use `toString()` and `valueOf()` with Boolean objects.
- **Task**: Declare `boolObj = new Boolean(true)`. Log its `toString()` and `valueOf()` results, along with their types. Compare with a primitive `bool = true`.
- **Expected Output**:
```javascript
true string
true boolean
true string
true boolean
```

#### Exercise 20: Building a Boolean Validator
- **Description**: Create a function to validate and process Boolean inputs.
- **Task**: Write a function `restrictAccess(user)` that takes an object with `isAdmin` and `isLoggedIn` Boolean properties. Return "Full Access" if both are `true`, "Limited Access" if only `isAdmin` is `true`, and "No Access" otherwise. Test with `{ isAdmin: true, isLoggedIn: true }`, `{ isAdmin: true, isLoggedIn: false }`, and `{ isAdmin: false, isLoggedIn: true }`.
- **Expected Output**:
```javascript
Full Access
Limited Access
No Access
```