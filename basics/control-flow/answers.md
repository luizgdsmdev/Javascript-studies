#### Exercise 1: Basic If Condition
- **Description**: Practice using a simple `if` statement to check a condition.
- **Task**: Declare a variable `temperature` with a value of 25. Use an `if` statement to check if the temperature is greater than 20 and log "It's warm!" if true.
- **Solution**:
  ```javascript
  let temperature = 25;
  if (temperature > 20) {
    console.log("It's warm!");
  }
  ```

#### Exercise 2: If-Else Decision
- **Description**: Use `if-else` to make a decision based on a condition.
- **Task**: Declare a variable `age` with a value of 16. Check if `age` is 18 or older and log "Adult" if true, otherwise log "Minor".
- **Solution**:
  ```javascript
  let age = 16;
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Minor");
  }
  ```

#### Exercise 3: Else-If Ladder
- **Description**: Practice using `else if` to handle multiple conditions.
- **Task**: Declare a variable `score` with a value of 85. Use `if`, `else if`, and `else` to check if the score is 90 or above (log "A"), 80 or above (log "B"), or below 80 (log "C").
- **Solution**:
  ```javascript
  let score = 85;
  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else {
    console.log("C");
  }
  ```

#### Exercise 4: Switch Statement
- **Description**: Use a `switch` statement to match values.
- **Task**: Declare a variable `day` with the value "Wednesday". Use a `switch` statement to log "Midweek" for Wednesday, "Start of week" for Monday, and "Other day" for any other value.
- **Solution**:
  ```javascript
  let day = "Wednesday";
  switch (day) {
    case "Monday":
      console.log("Start of week");
      break;
    case "Wednesday":
      console.log("Midweek");
      break;
    default:
      console.log("Other day");
  }
  ```

#### Exercise 5: Basic For Loop
- **Description**: Practice iterating with a `for` loop.
- **Task**: Use a `for` loop to log numbers from 1 to 3.
- **Solution**:
  ```javascript
  for (let i = 1; i <= 3; i++) {
    console.log(i);
  }
  ```

#### Exercise 6: While Loop
- **Description**: Use a `while` loop to repeat an action.
- **Task**: Declare a variable `count` with a value of 0. Use a `while` loop to log "Counting" and increment `count` until it reaches 3.
- **Solution**:
  ```javascript
  let count = 0;
  while (count < 3) {
    console.log("Counting");
    count++;
  }
  ```

#### Exercise 7: Do-While Loop
- **Description**: Practice using a `do...while` loop that executes at least once.
- **Task**: Declare a variable `value` with a value of 5. Use a `do...while` loop to log "Running" and decrement `value` until it is less than 5.
- **Solution**:
  ```javascript
  let value = 5;
  do {
    console.log("Running");
    value--;
  } while (value < 5);
  ```

#### Exercise 8: Nested If Statements
- **Description**: Practice nested `if` statements for complex conditions.
- **Task**: Declare variables `isStudent` (true) and `age` (20). Use nested `if` statements to check if `isStudent` is true and `age` is less than 25, logging "Young student" if both are true.
- **Solution**:
  ```javascript
  let isStudent = true;
  let age = 20;
  if (isStudent) {
    if (age < 25) {
      console.log("Young student");
    }
  }
  ```

#### Exercise 9: For Loop with Array
- **Description**: Iterate over an array using a `for` loop.
- **Task**: Declare an array `fruits` with values `["apple", "banana", "orange"]`. Use a `for` loop to log each fruit.
  ```
- **Solution**:
  ```javascript
  let fruits = ["apple", "banana", "orange"];
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
  ```

#### Exercise 10: For...Of Loop
- **Description**: Use a `for...of` loop to iterate over an iterable.
- **Task**: Declare an array `numbers` with values `[10, 20, 30]`. Use a `for...of` loop to log each number doubled.
- **Solution**:
  ```javascript
  let numbers = [10, 20, 30];
  for (let num of numbers) {
    console.log(num * 2);
  }
  ```

#### Exercise 11: For...In Loop with Object
- **Description**: Iterate over an object’s properties using `for...in`.
- **Task**: Declare an object `person` with properties `{name: "Alice", age: 25}`. Use a `for...in` loop to log each property name and value.
- **Solution**:
  ```javascript
  let person = { name: "Alice", age: 25 };
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  ```

#### Exercise 12: Break in Loop
- **Description**: Use `break` to exit a loop early.
- **Task**: Use a `for` loop to iterate from 1 to 5. Break the loop when the number is 3 and log each number before that.
- **Solution**:
  ```javascript
  for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);
  }
  ```

#### Exercise 13: Continue in Loop
- **Description**: Use `continue` to skip iterations.
- **Task**: Use a `while` loop to iterate from 1 to 5. Skip even numbers and log odd numbers.
  ```
- **Solution**:
  ```javascript
  let i = 0;
  while (i < 5) {
    i++;
    if (i % 2 === 0) continue;
    console.log(i);
  }
  ```

#### Exercise 14: Ternary Operator
- **Description**: Practice using the ternary operator for concise conditionals.
- **Task**: Declare a variable `temperature` with a value of 15. Use the ternary operator to log "Cold" if the temperature is below 20, otherwise log "Warm".
- **Solution**:
  ```javascript
  let temperature = 15;
  console.log(temperature < 20 ? "Cold" : "Warm");
  ```

#### Exercise 15: Switch with Fall-Through
- **Description**: Practice `switch` with intentional fall-through behavior.
- **Task**: Declare a variable `month` with the value "January". Use a `switch` statement to log "Winter" for January, February, or December, and "Other season" for other months, using fall-through for the winter months.
- **Solution**:
  ```javascript
  let month = "January";
  switch (month) {
    case "January":
    case "February":
    case "December":
      console.log("Winter");
      break;
    default:
      console.log("Other season");
  }
  ```

#### Exercise 16: Nested Loops
- **Description**: Use nested loops to process a 2D structure.
- **Task**: Declare a 2D array `matrix` with values `[[1, 2], [3, 4]]`. Use nested `for` loops to log each number.
- **Solution**:
  ```javascript
  let matrix = [[1, 2], [3, 4]];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]);
    }
  }
  ```

#### Exercise 17: Object.keys() in Loop
- **Description**: Use `Object.keys()` with a `for...of` loop to iterate over an object.
- **Task**: Declare an object `scores` with properties `{math: 90, science: 85}`. Use `Object.keys()` and a `for...of` loop to log keys and values where the value is above 80.
- **Solution**:
  ```javascript
  let scores = { math: 90, science: 85 };
  for (let key of Object.keys(scores)) {
    if (scores[key] > 80) {
      console.log(`${key}: ${scores[key]}`);
    }
  }
  ```

#### Exercise 18: hasOwnProperty() in Loop
- **Description**: Use `hasOwnProperty()` to filter inherited properties.
- **Task**: Create an object `student` with properties `{name: "Bob", grade: 10}`. Add an inherited property via prototype (e.g., `Object.prototype.extra = "inherited"`). Use a `for...in` loop with `hasOwnProperty()` to log only own properties.
- **Solution**:
  ```javascript
  let student = { name: "Bob", grade: 10 };
  Object.prototype.extra = "inherited";
  for (let key in student) {
    if (student.hasOwnProperty(key)) {
      console.log(`${key}: ${student[key]}`);
    }
  }
  ```

#### Exercise 19: Short-Circuit Evaluation
- **Description**: Use short-circuit evaluation to conditionally execute code.
- **Task**: Declare variables `isValid` (true) and `message` ("Success"). Use `&&` to log `message` only if `isValid` is true.
- **Solution**:
  ```javascript
  let isValid = true;
  let message = "Success";
  isValid && console.log(message);
  ```

#### Exercise 20: Try-Catch with Loop
- **Description**: Practice error handling in a loop using `try...catch`.
- **Task**: Create an array `data` with values `[1, "two", 3]`. Use a `for...of` loop to log each value as a number. Use `try...catch` to handle errors when a non-number is encountered, logging "Invalid number" instead.
- **Solution**:
  ```javascript
  let data = [1, "two", 3];
  for (let item of data) {
    try {
      if (isNaN(item)) throw new Error("Not a number");
      console.log(Number(item));
    } catch (e) {
      console.log("Invalid number");
    }
  }
  ```