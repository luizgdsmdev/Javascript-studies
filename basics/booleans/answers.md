#### Exercise 1: Declaring and Verifying Booleans
- **Description**: Practice declaring Boolean variables and checking their types.
- **Task**: Declare three Boolean variables using `let`, `var`, and `const` with values `true`, `false`, and `true`, respectively. Log their values and types using `typeof`.
- **Solution**:
```javascript
let isActive = true;
var isComplete = false;
const hasAccess = true;

console.log(isActive, typeof isActive);
console.log(isComplete, typeof isComplete);
console.log(hasAccess, typeof hasAccess);
```


#### Exercise 2: Using the NOT Operator
- **Description**: Understand the behavior of the `!` operator.
- **Task**: Declare a variable `isEnabled = true`. Log its value, then use the `!` operator to invert it and log the result. Repeat with `isEnabled = false`.
- **Solution**:
```javascript
let isEnabled = true;
console.log(isEnabled);
console.log(!isEnabled);

isEnabled = false;
console.log(isEnabled);
console.log(!isEnabled);
```

#### Exercise 3: Logical AND and OR Operations
- **Description**: Practice using `&&` and `||` operators.
- **Task**: Declare two variables `a = true` and `b = false`. Log the results of `a && b`, `a || b`, and `!a && b`.
- **Solution**:
```javascript
let a = true;
let b = false;

console.log(a && b);
console.log(a || b);
console.log(!a && b);
```

#### Exercise 4: Booleans in Conditional Statements
- **Description**: Use Booleans to control `if` statements.
- **Task**: Declare a variable `isLoggedIn = true`. Write an `if` statement that logs "User is logged in" if `isLoggedIn` is `true`, and "User is logged out" otherwise.
- **Solution**:
```javascript
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("User is logged in");
} else {
  console.log("User is logged out");
}
```

#### Exercise 5: Truthy and Falsy Values
- **Description**: Explore truthy and falsy values using `!!`.
- **Task**: Declare variables with the following values: `0`, `"hello"`, `""`, and `[]`. Use the `!!` operator to convert each to a Boolean and log the results.
- **Solution**:
```javascript
let zero = 0;
let text = "hello";
let empty = "";
let array = [];

console.log(!!zero);
console.log(!!text);
console.log(!!empty);
console.log(!!array);
```

#### Exercise 6: Comparing Null, Undefined, and False
- **Description**: Differentiate between `null`, `undefined`, and `false`.
- **Task**: Declare three variables: `isFalse = false`, `isNull = null`, and an uninitialized variable `isUndefined`. Log their values and types using `typeof`.
- **Solution**:
```javascript
let isFalse = false;
let isNull = null;
let isUndefined;

console.log(isFalse, typeof isFalse);
console.log(isNull, typeof isNull);
console.log(isUndefined, typeof isUndefined);
```

#### Exercise 7: Boolean Conversion with Boolean()
- **Description**: Practice converting values to Booleans using `Boolean()`.
- **Task**: Declare variables with values `42`, `""`, and `null`. Use the `Boolean()` function to convert each to a Boolean and log the results.
- **Solution**:
```javascript
let num = 42;
let empty = "";
let nullValue = null;

console.log(Boolean(num));
console.log(Boolean(empty));
console.log(Boolean(nullValue));
```

#### Exercise 8: Using Booleans in a While Loop
- **Description**: Use Booleans to control a `while` loop.
- **Task**: Declare a variable `isRunning = true` and a counter `count = 0`. Write a `while` loop that logs "Running" and increments `count` until `count` reaches 3, then set `isRunning` to `false`.
- **Solution**:
```javascript
let isRunning = true;
let count = 0;

while (isRunning) {
  console.log("Running");
  count++;
  if (count >= 3) isRunning = false;
}
```

#### Exercise 9: Combining Logical Operators
- **Description**: Combine multiple logical operators in a condition.
- **Task**: Declare variables `isAdmin = true` and `isLoggedIn = false`. Log "Access granted" if `isAdmin` is `true` AND `isLoggedIn` is `true`, or if `isAdmin` is `true` alone. Otherwise, log "Access denied".
- **Solution**:
```javascript
let isAdmin = true;
let isLoggedIn = false;

if (isAdmin && isLoggedIn || isAdmin) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}
```

#### Exercise 10: Avoiding new Boolean()
- **Description**: Understand the pitfalls of `new Boolean()`.
- **Task**: Declare a variable `boolObj = new Boolean(false)`. Log its value, type, and whether it’s truthy using `!!`. Compare it to a primitive `bool = false` using `===`.
- **Solution**:
```javascript
let boolObj = new Boolean(false);
let bool = false;

console.log(boolObj, typeof boolObj);
console.log(!!boolObj);
console.log(boolObj === bool);
```

#### Exercise 11: Truthy/Falsy in Conditional Logic
- **Description**: Use truthy and falsy values in complex conditions.
- **Task**: Declare variables `username = ""`, `age = 0`, and `profile = {}`. Write a function `canAccess` that returns `true` if `username` is non-empty OR `age` is non-zero OR `profile` is truthy. Test with the given values.
- **Solution**:
```javascript
let username = "";
let age = 0;
let profile = {};

function canAccess(username, age, profile) {
  return !!username || !!age || !!profile;
}

console.log(canAccess(username, age, profile));
```

#### Exercise 12: Chaining Logical Operators
- **Description**: Combine multiple logical operators for complex logic.
- **Task**: Declare variables `isActive = true`, `hasError = false`, and `isComplete = true`. Log "Success" if `isActive` is `true` AND either `hasError` is `false` OR `isComplete` is `true`. Otherwise, log "Failure".
- **Solution**:
```javascript
let isActive = true;
let hasError = false;
let isComplete = true;

if (isActive && (!hasError || isComplete)) {
  console.log("Success");
} else {
  console.log("Failure");
}
```

#### Exercise 13: Boolean Conversion Comparison
- **Description**: Compare `Boolean()` and `!!` in a practical scenario.
- **Task**: Write a function `isTruthy(value)` that returns an object with two properties: `viaBoolean` (using `Boolean(value)`) and `viaDoubleNegation` (using `!!value`). Test with inputs `"test"`, `0`, and `null`.
- **Solution**:
```javascript
function isTruthy(value) {
  return {
    viaBoolean: Boolean(value),
    viaDoubleNegation: !!value
  };
}

console.log(isTruthy("test"));
console.log(isTruthy(0));
console.log(isTruthy(null));
```

#### Exercise 14: Handling Edge Cases with new Boolean()
- **Description**: Explore the unexpected behavior of `new Boolean()` in conditions.
- **Task**: Declare `boolObj = new Boolean(false)` and `bool = false`. Use both in an `if` statement to log "Truthy" or "Falsy". Then, compare them using `===` and `valueOf()`.
- **Solution**:
```javascript
let boolObj = new Boolean(false);
let bool = false;

if (boolObj) console.log("Truthy");
else console.log("Falsy");

if (bool) console.log("Truthy");
else console.log("Falsy");

console.log(boolObj === bool);
console.log(boolObj.valueOf() === bool);
```

#### Exercise 15: Boolean in Ternary Operator
- **Description**: Use Booleans with ternary operators for concise logic.
- **Task**: Declare `isValid = true`. Use a ternary operator to assign "Valid" or "Invalid" to a variable `status` based on `isValid`. Log `status`.
- **Solution**:
```javascript
let isValid = true;
let status = isValid ? "Valid" : "Invalid";
console.log(status);
```

#### Exercise 16: Default Boolean Values
- **Description**: Use Booleans as default values for falsy inputs.
- **Task**: Write a function `getStatus(value)` that returns `value || false`. Test with `undefined`, `true`, and `""`.
- **Solution**:
```javascript
function getStatus(value) {
  return value || false;
}

console.log(getStatus(undefined));
console.log(getStatus(true));
console.log(getStatus(""));
```

#### Exercise 17: Complex Boolean Logic in a Loop
- **Description**: Use Booleans to control a loop with complex conditions.
- **Task**: Declare `isRunning = true` and `count = 0`. Write a `while` loop that runs while `isRunning` is `true` AND `count` is less than 5. Inside the loop, log "Looping" and increment `count`. If `count` is 3, set `isRunning` to `false`.
- **Solution**:
```javascript
let isRunning = true;
let count = 0;

while (isRunning && count < 5) {
  console.log("Looping");
  count++;
  if (count === 3) isRunning = false;
}
```

#### Exercise 18: Validating Input with Truthy/Falsy
- **Description**: Validate user input using truthy/falsy checks.
- **Task**: Write a function `isValidInput(input)` that returns `true` if the input is a non-empty string or a non-zero number, and `false` otherwise. Test with `"hello"`, `0`, and `null`.
- **Solution**:
```javascript
function isValidInput(input) {
  return (typeof input === "string" && input !== "") || (typeof input === "number" && input !== 0);
}

console.log(isValidInput("hello"));
console.log(isValidInput(0));
console.log(isValidInput(null));
```

#### Exercise 19: Boolean Methods with Objects
- **Description**: Use `toString()` and `valueOf()` with Boolean objects.
- **Task**: Declare `boolObj = new Boolean(true)`. Log its `toString()` and `valueOf()` results, along with their types. Compare with a primitive `bool = true`.
- **Solution**:
```javascript
let boolObj = new Boolean(true);
let bool = true;

console.log(boolObj.toString(), typeof boolObj.toString());
console.log(boolObj.valueOf(), typeof boolObj.valueOf());
console.log(bool.toString(), typeof bool.toString());
console.log(bool.valueOf(), typeof bool.valueOf());
```

#### Exercise 20: Building a Boolean Validator
- **Description**: Create a function to validate and process Boolean inputs.
- **Task**: Write a function `restrictAccess(user)` that takes an object with `isAdmin` and `isLoggedIn` Boolean properties. Return "Full Access" if both are `true`, "Limited Access" if only `isAdmin` is `true`, and "No Access" otherwise. Test with `{ isAdmin: true, isLoggedIn: true }`, `{ isAdmin: true, isLoggedIn: false }`, and `{ isAdmin: false, isLoggedIn: true }`.
- **Solution**:
```javascript
function restrictAccess(user) {
  if (user.isAdmin && user.isLoggedIn) return "Full Access";
  if (user.isAdmin) return "Limited Access";
  return "No Access";
}

console.log(restrictAccess({ isAdmin: true, isLoggedIn: true }));
console.log(restrictAccess({ isAdmin: true, isLoggedIn: false }));
console.log(restrictAccess({ isAdmin: false, isLoggedIn: true }));
```