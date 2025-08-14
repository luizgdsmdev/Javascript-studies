#### Exercise 1: Creating and Checking Number Types
- **Description**: Practice declaring numbers and verifying their types and equality.
- **Task**: Declare three variables using `let`, `var`, and `const` to store an integer, a floating-point number, and a number in scientific notation. Log their values and types using `typeof`. Verify that `5` and `5.0` are equal using strict equality (`===`).
###### Code:
```javascript
let integer = 42;
var float = 3.14;
const scientific = 1e5;
console.log(integer, typeof integer);
console.log(float, typeof float);
console.log(scientific, typeof scientific);
console.log(5 === 5.0);
```

#### Exercise 2: Immutability of Numbers
- **Description**: Demonstrate that numbers are immutable by reassigning a new value.
- **Task**: Create a variable `num` with the value `10`. Add `5` to it and reassign the result to `num`. Log the value before and after to show immutability.
###### Code:
```javascript
let num = 10;
console.log(num);
num = num + 5;
console.log(num);
```

#### Exercise 3: Number Literals
- **Description**: Work with different number literal formats.
- **Task**: Declare variables using hexadecimal (`0xFF`), octal (`0o77`), and binary (`0b11`) literals. Log their decimal equivalents and verify their type is `"number"`.
###### Code:
```javascript
let hex = 0xFF;
let octal = 0o77;
let binary = 0b11;
console.log(hex, typeof hex);
console.log(octal, typeof octal);
console.log(binary, typeof binary);
```

#### Exercise 4: Converting Strings to Numbers
- **Description**: Practice converting strings to numbers using `Number()`.
- **Task**: Create a variable `strNum` with the string value `"123.45"`. Use `Number()` to convert it to a number and log its value and type. Try converting an invalid string (e.g., `"abc"`) and log the result.
###### Code:
```javascript
let strNum = "123.45";
let num = Number(strNum);
console.log(num, typeof num);
console.log(Number("abc"));
```

#### Exercise 5: Converting Other Types
- **Description**: Explore how `Number()` handles non-string types.
- **Task**: Use `Number()` to convert `true`, `false`, `null`, and `undefined` to numbers. Log the results and their types.
###### Code:
```javascript
console.log(Number(true), typeof Number(true));
console.log(Number(false), typeof Number(false));
console.log(Number(null), typeof Number(null));
console.log(Number(undefined), typeof Number(undefined));
```

#### Exercise 6: Number() vs. new Number()
- **Description**: Understand the difference between number primitives and objects.
- **Task**: Create a number using `Number(42)` and another using `new Number(42)`. Compare them with `===` and log their types.
###### Code:
```javascript
let numPrim = Number(42);
let numObj = new Number(42);
console.log(typeof numPrim);
console.log(typeof numObj);
console.log(numPrim === numObj);
console.log(numPrim === numObj.valueOf());
```

#### Exercise 7: Basic Arithmetic
- **Description**: Practice basic arithmetic operations.
- **Task**: Perform addition, subtraction, multiplication, division, modulus, and exponentiation on two numbers `a = 20` and `b = 3`. Log each result.
###### Code:
```javascript
let a = 20;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
```

#### Exercise 8: Operator Precedence
- **Description**: Understand operator precedence in arithmetic expressions.
- **Task**: Create an expression using multiple arithmetic operators (e.g., `5 + 3 * 2`). Predict the result based on precedence, then log it. Use parentheses to change the precedence and log the new result.
###### Code:
```javascript
console.log(5 + 3 * 2);
console.log((5 + 3) * 2);
```

#### Exercise 9: Floating-Point Precision
- **Description**: Explore floating-point precision issues.
- **Task**: Add `0.1` and `0.2`, then compare the result to `0.3` using `===`. Log the actual result to observe the precision issue. Use `Number.EPSILON` to perform a safer comparison.
###### Code:
```javascript
let sum = 0.1 + 0.2;
console.log(sum);
console.log(sum === 0.3);
console.log(Math.abs(sum - 0.3) < Number.EPSILON);
```

#### Exercise 10: Large Number Precision
- **Description**: Investigate precision loss with large numbers.
- **Task**: Create a variable with `Number.MAX_SAFE_INTEGER` and add `1` to it. Log the result and check if it equals `Number.MAX_SAFE_INTEGER + 1`. Then, add `2` and check again to observe precision loss.
###### Code:
```javascript
let bigNum = Number.MAX_SAFE_INTEGER;
console.log(bigNum + 1);
console.log(bigNum + 1 === bigNum);
console.log(bigNum + 2);
```

#### Exercise 11: Comparing null, undefined, and zero
- **Description**: Practice comparing `null`, `undefined`, and `zero`.
- **Task**: Declare variables with `null`, `undefined`, and `0`. Compare them using `==` and `===`, and log the results. Perform addition with `5` on each and log the outcomes.
###### Code:
```javascript
let undef;
let nullVar = null;
let zero = 0;
console.log(undef == nullVar);
console.log(undef === nullVar);
console.log(nullVar == zero);
console.log(undef + 5);
console.log(nullVar + 5);
console.log(zero + 5);
```

#### Exercise 12: Type Coercion with Arithmetic
- **Description**: Understand type coercion in arithmetic operations.
- **Task**: Add a number (`10`) to a string (`"5"`), `null`, and `undefined`. Log the results and their types to observe coercion behavior.
###### Code:
```javascript
console.log(10 + "5", typeof (10 + "5"));
console.log(10 + null, typeof (10 + null));
console.log(10 + undefined, typeof (10 + undefined));
```

#### Exercise 13: Generating NaN
- **Description**: Practice generating and detecting `NaN`.
- **Task**: Generate `NaN` through three different operations (e.g., `0 / 0`, `parseInt("abc")`, `Math.sqrt(-1)`). Use `Number.isNaN()` to verify each result.
###### Code:
```javascript
let nan1 = 0 / 0;
let nan2 = Number.parseInt("abc");
let nan3 = Math.sqrt(-1);
console.log(Number.isNaN(nan1));
console.log(Number.isNaN(nan2));
console.log(Number.isNaN(nan3));
```

#### Exercise 14: Infinity and -Infinity
- **Description**: Work with `Infinity` and `-Infinity`.
- **Task**: Create variables for `Infinity` and `-Infinity` using division (`1 / 0`, `-1 / 0`). Check if they are finite using `Number.isFinite()` and log their types.
###### Code:
```javascript
let inf = 1 / 0;
let negInf = -1 / 0;
console.log(inf, Number.isFinite(inf));
console.log(negInf, Number.isFinite(negInf));
console.log(typeof inf);
```

#### Exercise 15: Using .toFixed()
- **Description**: Practice formatting numbers with `.toFixed()`.
- **Task**: Create a variable `num = 123.45678`. Use `.toFixed(2)`, `.toFixed(0)`, and `.toFixed(4)` to format it. Log each result and its type to confirm it’s a string.
###### Code:
```javascript
let num = 123.45678;
console.log(num.toFixed(2), typeof num.toFixed(2));
console.log(num.toFixed(0), typeof num.toFixed(0));
console.log(num.toFixed(4), typeof num.toFixed(4));
```

#### Exercise 16: Using .toPrecision()
- **Description**: Practice formatting with `.toPrecision()`.
- **Task**: Create a variable `num = 123.456`. Use `.toPrecision(3)`, `.toPrecision(5)`, and `.toPrecision(2)` to format it. Log the results and their types.
###### Code:
```javascript
let num = 123.456;
console.log(num.toPrecision(3));
console.log(num.toPrecision(5));
console.log(num.toPrecision(2));
console.log(typeof num.toPrecision(3));
```

#### Exercise 17: Using .toString(radix)
- **Description**: Convert numbers to different bases with `.toString()`.
- **Task**: Convert the number `100` to binary, hexadecimal, and octal using `.toString()`. Log each result.
###### Code:
```javascript
let num = 100;
console.log(num.toString(2));
console.log(num.toString(16));
console.log(num.toString(8));
```

#### Exercise 18: Using Number.parseInt() and Number.parseFloat()
- **Description**: Practice parsing strings to numbers.
- **Task**: Parse the strings `"123.45abc"`, `"0xFF"`, and `"abc"` using `Number.parseInt()` and `Number.parseFloat()`. Log the results to observe how they handle invalid characters.
###### Code:
```javascript
console.log(Number.parseInt("123.45abc"));
console.log(Number.parseFloat("123.45abc"));
console.log(Number.parseInt("0xFF"));
console.log(Number.parseInt("abc"));
```

#### Exercise 19: Using Number.isInteger()
- **Description**: Check for integer values with `Number.isInteger()`.
- **Task**: Test `Number.isInteger()` on values `42`, `42.0`, `42.5`, and `"42"`. Log the results to confirm which are integers.
###### Code:
```javascript
console.log(Number.isInteger(42));
console.log(Number.isInteger(42.0));
console.log(Number.isInteger(42.5));
console.log(Number.isInteger("42"));
```

#### Exercise 20: Using .toExponential()
- **Description**: Practice formatting numbers in scientific notation.
- **Task**: Create a variable `num = 12345.67`. Use `.toExponential(2)`, `.toExponential(4)`, and `.toExponential(0)` to format it. Log the results and their types.
###### Code:
```javascript
let num = 12345.67;
console.log(num.toExponential(2));
console.log(num.toExponential(4));
console.log(num.toExponential(0));
console.log(typeof num.toExponential(2));
```

#### Exercise 21: Combining Methods
- **Description**: Combine number methods for practical use.
- **Task**: Create a variable `num = 987.654`. Use `.toFixed(2)` to format it, then convert the result back to a number using `Number()`. Log the final value and type.
###### Code:
```javascript
let num = 987.654;
let fixed = num.toFixed(2);
let backToNum = Number(fixed);
console.log(backToNum, typeof backToNum);
```

#### Exercise 22: Handling Edge Cases
- **Description**: Test number methods with invalid inputs.
- **Task**: Test `.toFixed(21)` on `123.456` (exceeding the valid digit range) and `.toString(37)` (invalid radix). Log any errors using a `try/catch` block.
###### Code:
```javascript
try {
  console.log((123.456).toFixed(21));
} catch (e) {
  console.log(e.message);
}
try {
  console.log((123).toString(37));
} catch (e) {
  console.log(e.message);
}
```

#### Exercise 23: Practical Application - Price Formatting
- **Description**: Create a function to format prices.
- **Task**: Write a function `formatPrice` that takes a number (e.g., `19.999`) and returns it as a string with exactly two decimal places using `.toFixed(2)`. Test with various inputs, including invalid values.
###### Code:
```javascript
function formatPrice(num) {
  return Number.isFinite(num) ? num.toFixed(2) : "Invalid price";
}
console.log(formatPrice(19.999));
console.log(formatPrice(10));
console.log(formatPrice(NaN));
```

#### Exercise 24: Practical Application - Binary Converter
- **Description**: Convert numbers to binary strings.
- **Task**: Write a function `toBinaryString` that converts a positive integer to a binary string using `.toString(2)`. Test with inputs `10`, `255`, and `0`. Handle negative numbers by returning an error message.
###### Code:
```javascript
function toBinaryString(num) {
  if (!Number.isInteger(num) || num < 0) return "Invalid input";
  return num.toString(2);
}
console.log(toBinaryString(10));
console.log(toBinaryString(255));
console.log(toBinaryString(0));
console.log(toBinaryString(-5));
```

#### Exercise 25: Practical Application - Safe Integer Check
- **Description**: Check if numbers are within the safe integer range.
- **Task**: Write a function `isSafeNumber` that checks if a number is within the safe integer range using `Number.isSafeInteger()`. Test with `Number.MAX_SAFE_INTEGER`, `Number.MAX_SAFE_INTEGER + 1`, and a floating-point number.
###### Code:
```javascript
function isSafeNumber(num) {
  return Number.isSafeInteger(num);
}
console.log(isSafeNumber(Number.MAX_SAFE_INTEGER));
console.log(isSafeNumber(Number.MAX_SAFE_INTEGER + 1));
console.log(isSafeNumber(42.5));
```