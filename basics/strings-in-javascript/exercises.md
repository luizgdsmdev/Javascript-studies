## Strings in JavaScript: Practice Exercises

#### Exercise 1: Creating and Declaring Strings
- **Description**: Practice declaring strings using different syntaxes and verifying their types.
- **Task**: Declare three string variables using single quotes, double quotes, and template literals. Assign a single character, a word, and a phrase, respectively. Log their values and types using `typeof`. Then, create a template literal that embeds the word and phrase variables into a sentence and log it.
- **Expected Output**:
```javascript
"a" "string"
"hello" "string"
"JavaScript is fun!" "string"
"My favorite word is hello, and I love to say JavaScript is fun!"
```

#### Exercise 2: Understanding String Immutability
- **Description**: Demonstrate string immutability by attempting to modify a string and observing the results.
- **Task**: Declare a string variable `greeting` with the value `"Hello"`. Attempt to change the first character to `"J"` using index assignment (`greeting[0] = "J"`). Log the string to show it remains unchanged. Then, concatenate `" World"` to `greeting` and assign it back to `greeting`. Log the new value and its length.
- **Expected Output**:
```javascript
"Hello"
"Hello World"
11
```

#### Exercise 3: Working with String Length and Indexing
- **Description**: Practice accessing string characters using indexing and checking string length.
- **Task**: Declare a string `text = "JavaScript"`. Log the length of the string, the first character, the last character (using `length - 1`), and a character at an invalid index (e.g., 20). Then, use a variable to dynamically access the third character.
- **Expected Output**:
```javascript
10
"J"
"t"
undefined
"v"
```

#### Exercise 4: Empty, Null, and Undefined Strings
- **Description**: Explore the differences between empty strings, `null`, and `undefined`.
- **Task**: Declare three variables: an empty string, a `null` value, and an uninitialized variable. Log their values, types using `typeof`, and attempt to access their `length` property. Handle any errors using a try-catch block.
- **Expected Output**:
```javascript
"" "string" 0
null "object" "Error: Cannot read properties of null (reading 'length')"
undefined "undefined" "Error: Cannot read properties of undefined (reading 'length')"
```

#### Exercise 5: Using charAt() vs. Index Access
- **Description**: Compare the behavior of `charAt()` and index access for valid and invalid indices.
- **Task**: Declare a string `word = "Code"`. Use `charAt()` and index access (`[]`) to retrieve the first character, the last character, and an invalid index (e.g., 10). Log the results and their types to observe the differences.
- **Expected Output**:
```javascript
"C" "string"
"e" "string"
"" "string"
"C" "string"
"e" "string"
undefined "undefined"
```

#### Exercise 6: Slicing and Substring Operations
- **Description**: Practice using `slice()` and `substring()` with positive and negative indices.
- **Task**: Declare a string `sentence = "I love JavaScript!"`. Extract the following substrings using both `slice()` and `substring()`:
  - The word "love" (indices 2 to 6).
  - The last 6 characters.
  - From index 2 to -2 (using negative index for `slice()`).
  - An invalid range (e.g., 10 to 5). Log all results and compare the outputs of `slice()` and `substring()`.
- **Expected Output**:
```javascript
"love"
"Script!"
"love JavaScript"
""
"love"
"Script!"
"ve JavaScri"
"ve JavaScri"
```

#### Exercise 7: Replacing and Modifying Strings
- **Description**: Use the `replace()` method to modify strings and combine it with other methods.
- **Task**: Declare a string `text = "Hello, hello, HELLO!"`. Replace the first occurrence of "hello" (case-sensitive) with "Hi". Then, convert the entire string to lowercase and replace all occurrences of "hello" with "Hi" (hint: use a regular expression with `/hello/gi`). Finally, log the length of the modified string.
- **Expected Output**:
```javascript
"Hello, Hi, HELLO!"
"hello, hi, hi!"
17
```

#### Exercise 8: Combining String Methods
- **Description**: Chain multiple string methods to achieve a complex transformation.
- **Task**: Declare a string `input = "   JavaScript is Awesome!   "`. Perform the following in a single chain:
  - Remove leading and trailing spaces using `trim()`.
  - Convert to uppercase using `toUpperCase()`.
  - Extract "JAVASCRIPT" using `slice(0, 10)`.
  - Pad the result with asterisks (`*`) to a length of 15 using `padEnd()`.
  - Log the final result and its length.
- **Expected Output**:
```javascript
"JAVASCRIPT*****"
15
```

#### Exercise 9: Handling Special Characters and Emojis
- **Description**: Explore how strings handle special characters like emojis.
- **Task**: Declare a string `emojiText = "Hello 😊 World 🌍!"`. Log the length of the string, the first emoji using `slice(6, 8)` (since 😊 is a surrogate pair), and attempt to access an invalid index with `charAt(20)`. Then, replace the 🌍 emoji with "Earth" using `replace()`.
- **Expected Output**:
```javascript
20
"😊"
""
"Hello 😊 World Earth!"
```

#### Exercise 10: Building a Dynamic String Formatter
- **Description**: Create a function that formats a string using multiple string methods and handles edge cases.
- **Task**: Write a function `formatName(name)` that:
  - Takes a name string as input.
  - Trims whitespace, converts to lowercase, and capitalizes the first letter.
  - If the input is `null`, `undefined`, or an empty string, returns "Unknown".
  - Uses `slice()`, `toLowerCase()`, `toUpperCase()`, and `trim()`.
  - Test with inputs: `"  john DOE  "`, `""`, `null`, and an undeclared variable.
- **Expected Output**:
```javascript
"John doe"
"Unknown"
"Unknown"
"Unknown"
```
