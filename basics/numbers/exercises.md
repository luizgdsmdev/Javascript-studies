# Practical Exercises for Numbers in JavaScript
Having any problem? you can [check the answers here](https://github.com/luizgdsmdev/Javascript-studies/blob/main/basics/numbers/answers.md).

## 1. What are numbers

#### Exercise 1: Creating and Checking Number Types
- **Description**: Practice declaring numbers and verifying their types and equality.
- **Task**: Declare three variables using `let`, `var`, and `const` to store an integer, a floating-point number, and a number in scientific notation. Log their values and types using `typeof`. Verify that `5` and `5.0` are equal using strict equality (`===`).

###### Expected Output:
```javascript
42 "number"
3.14 "number"
100000 "number"
true
```

#### Exercise 2: Immutability of Numbers
- **Description**: Demonstrate that numbers are immutable by reassigning a new value.
- **Task**: Create a variable `num` with the value `10`. Add `5` to it and reassign the result to `num`. Log the value before and after to show immutability.

###### Expected Output:
```javascript
10
15
```

#### Exercise 3: Number Literals
- **Description**: Work with different number literal formats.
- **Task**: Declare variables using hexadecimal (`0xFF`), octal (`0o77`), and binary (`0b11`) literals. Log their decimal equivalents and verify their type is `"number"`.

###### Expected Output:
```javascript
255 "number"
63 "number"
3 "number"
```

## 2. The Number()

#### Exercise 4: Converting Strings to Numbers
- **Description**: Practice converting strings to numbers using `Number()`.
- **Task**: Create a variable `strNum` with the string value `"123.45"`. Use `Number()` to convert it to a number and log its value and type. Try converting an invalid string (e.g., `"abc"`) and log the result.

###### Expected Output:
```javascript
123.45 "number"
NaN
```

#### Exercise 5: Converting Other Types
- **Description**: Explore how `Number()` handles non-string types.
- **Task**: Use `Number()` to convert `true`, `false`, `null`, and `undefined` to numbers. Log the results and their types.

###### Expected Output:
```javascript
1 "number"
0 "number"
0 "number"
NaN "number"
```

#### Exercise 6: Number() vs. new Number()
- **Description**: Understand the difference between number primitives and objects.
- **Task**: Create a number using `Number(42)` and another using `new Number(42)`. Compare them with `===` and log their types.

###### Expected Output:
```javascript
number
object
false
true
```

## 3. Arithmetic operations with numbers

#### Exercise 7: Basic Arithmetic
- **Description**: Practice basic arithmetic operations.
- **Task**: Perform addition, subtraction, multiplication, division, modulus, and exponentiation on two numbers `a = 20` and `b = 3`. Log each result.

###### Expected Output:
```javascript
23
17
60
6.666666666666667
2
8000
```

#### Exercise 8: Operator Precedence
- **Description**: Understand operator precedence in arithmetic expressions.
- **Task**: Create an expression using multiple arithmetic operators (e.g., `5 + 3 * 2`). Predict the result based on precedence, then log it. Use parentheses to change the precedence and log the new result.

###### Expected Output:
```javascript
11
16
```

## 4. Number characteristics: precision

#### Exercise 9: Floating-Point Precision
- **Description**: Explore floating-point precision issues.
- **Task**: Add `0.1` and `0.2`, then compare the result to `0.3` using `===`. Log the actual result to observe the precision issue. Use `Number.EPSILON` to perform a safer comparison.

###### Expected Output:
```javascript
0.30000000000000004
false
true
```

#### Exercise 10: Large Number Precision
- **Description**: Investigate precision loss with large numbers.
- **Task**: Create a variable with `Number.MAX_SAFE_INTEGER` and add `1` to it. Log the result and check if it equals `Number.MAX_SAFE_INTEGER + 1`. Then, add `2` and check again to observe precision loss.

###### Expected Output:
```javascript
9007199254740992
false
9007199254740992
```

## 5. Number characteristics: null vs undefined vs zero

#### Exercise 11: Comparing null, undefined, and zero
- **Description**: Practice comparing `null`, `undefined`, and `zero`.
- **Task**: Declare variables with `null`, `undefined`, and `0`. Compare them using `==` and `===`, and log the results. Perform addition with `5` on each and log the outcomes.

###### Expected Output:
```javascript
true
false
false
NaN
5
5
```

#### Exercise 12: Type Coercion with Arithmetic
- **Description**: Understand type coercion in arithmetic operations.
- **Task**: Add a number (`10`) to a string (`"5"`), `null`, and `undefined`. Log the results and their types to observe coercion behavior.

###### Expected Output:
```javascript
105 "string"
10 "number"
NaN "number"
```

## 6. Number characteristics: NaN, Infinity, and -Infinity

#### Exercise 13: Generating NaN
- **Description**: Practice generating and detecting `NaN`.
- **Task**: Generate `NaN` through three different operations (e.g., `0 / 0`, `parseInt("abc")`, `Math.sqrt(-1)`). Use `Number.isNaN()` to verify each result.

###### Expected Output:
```javascript
true
true
true
```

#### Exercise 14: Infinity and -Infinity
- **Description**: Work with `Infinity` and `-Infinity`.
- **Task**: Create variables for `Infinity` and `-Infinity` using division (`1 / 0`, `-1 / 0`). Check if they are finite using `Number.isFinite()` and log their types.

###### Expected Output:
```javascript
Infinity false
-Infinity false
number
```

## 7. Number methods

#### Exercise 15: Using .toFixed()
- **Description**: Practice formatting numbers with `.toFixed()`.
- **Task**: Create a variable `num = 123.45678`. Use `.toFixed(2)`, `.toFixed(0)`, and `.toFixed(4)` to format it. Log each result and its type to confirm it’s a string.

###### Expected Output:
```javascript
123.46 "string"
123 "string"
123.4568 "string"
```

#### Exercise 16: Using .toPrecision()
- **Description**: Practice formatting with `.toPrecision()`.
- **Task**: Create a variable `num = 123.456`. Use `.toPrecision(3)`, `.toPrecision(5)`, and `.toPrecision(2)` to format it. Log the results and their types.

###### Expected Output:
```javascript
123
123.46
1.2e+2
string
```

#### Exercise 17: Using .toString(radix)
- **Description**: Convert numbers to different bases with `.toString()`.
- **Task**: Convert the number `100` to binary, hexadecimal, and octal using `.toString()`. Log each result.

###### Expected Output:
```javascript
1100100
64
144
```

#### Exercise 18: Using Number.parseInt() and Number.parseFloat()
- **Description**: Practice parsing strings to numbers.
- **Task**: Parse the strings `"123.45abc"`, `"0xFF"`, and `"abc"` using `Number.parseInt()` and `Number.parseFloat()`. Log the results to observe how they handle invalid characters.

###### Expected Output:
```javascript
123
123.45
255
NaN
```

#### Exercise 19: Using Number.isInteger()
- **Description**: Check for integer values with `Number.isInteger()`.
- **Task**: Test `Number.isInteger()` on values `42`, `42.0`, `42.5`, and `"42"`. Log the results to confirm which are integers.

###### Expected Output:
```javascript
true
true
false
false
```

#### Exercise 20: Using .toExponential()
- **Description**: Practice formatting numbers in scientific notation.
- **Task**: Create a variable `num = 12345.67`. Use `.toExponential(2)`, `.toExponential(4)`, and `.toExponential(0)` to format it. Log the results and their types.

###### Expected Output:
```javascript
1.23e+4
1.2346e+4
1e+4
string
```

#### Exercise 21: Combining Methods
- **Description**: Combine number methods for practical use.
- **Task**: Create a variable `num = 987.654`. Use `.toFixed(2)` to format it, then convert the result back to a number using `Number()`. Log the final value and type.

###### Expected Output:
```javascript
987.65 "number"
```

#### Exercise 22: Handling Edge Cases
- **Description**: Test number methods with invalid inputs.
- **Task**: Test `.toFixed(21)` on `123.456` (exceeding the valid digit range) and `.toString(37)` (invalid radix). Log any errors using a `try/catch` block.

###### Expected Output:
```javascript
toFixed() digits argument must be between 0 and 20
toString() radix argument must be between 2 and 36
```

#### Exercise 23: Practical Application - Price Formatting
- **Description**: Create a function to format prices.
- **Task**: Write a function `formatPrice` that takes a number (e.g., `19.999`) and returns it as a string with exactly two decimal places using `.toFixed(2)`. Test with various inputs, including invalid values.

###### Expected Output:
```javascript
20.00
10.00
Invalid price
```

#### Exercise 24: Practical Application - Binary Converter
- **Description**: Convert numbers to binary strings.
- **Task**: Write a function `toBinaryString` that converts a positive integer to a binary string using `.toString(2)`. Test with inputs `10`, `255`, and `0`. Handle negative numbers by returning an error message.

###### Expected Output:
```javascript
1010
11111111
0
Invalid input
```

#### Exercise 25: Practical Application - Safe Integer Check
- **Description**: Check if numbers are within the safe integer range.
- **Task**: Write a function `isSafeNumber` that checks if a number is within the safe integer range using `Number.isSafeInteger()`. Test with `Number.MAX_SAFE_INTEGER`, `Number.MAX_SAFE_INTEGER + 1`, and a floating-point number.

###### Expected Output:
```javascript
true
false
false
```