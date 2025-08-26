1. **Basic Array Destructuring**
   - **Description**: Extract the first two elements from an array.
   - **Task**: Create an array of numbers and destructure the first two elements into variables, then log them.
   - **Example**:
     ```html
     <script>
       const numbers = [10, 20, 30];
       const [first, second] = numbers;
       console.log(first, second);
     </script>
     ```
   - **Expected Answer**: Outputs: 10, 20

2. **Basic Object Destructuring**
   - **Description**: Extract properties from an object.
   - **Task**: Create an object with `name` and `age`, destructure them, and log the values.
   - **Example**:
     ```html
     <script>
       const user = { name: "Luiz", age: 29 };
       const { name, age } = user;
       console.log(name, age);
     </script>
     ```
   - **Expected Answer**: Outputs: Luiz, 29

3. **Skipping Array Elements**
   - **Description**: Skip elements in array destructuring.
   - **Task**: Destructure an array to skip the first two elements and capture the third, then log it.
   - **Example**:
     ```html
     <script>
       const arr = [1, 2, 3, 4];
       const [, , third] = arr;
       console.log(third);
     </script>
     ```
   - **Expected Answer**: Outputs: 3

4. **Object Destructuring with Renaming**
   - **Description**: Rename properties during object destructuring.
   - **Task**: Destructure an object’s `name` and `age` into `userName` and `userAge`, then log them.
   - **Example**:
     ```html
     <script>
       const person = { name: "Marta", age: 25 };
       const { name: userName, age: userAge } = person;
       console.log(userName, userAge);
     </script>
     ```
   - **Expected Answer**: Outputs: Marta, 25

5. **Array Destructuring with Default Values**
   - **Description**: Use default values in array destructuring.
   - **Task**: Destructure an array with one element, assigning a default value to the second, then log both.
   - **Example**:
     ```html
     <script>
       const arr = [5];
       const [x, y = 10] = arr;
       console.log(x, y);
     </script>
     ```
   - **Expected Answer**: Outputs: 5, 10

6. **Object Destructuring with Default Values**
   - **Description**: Assign default values to undefined object properties.
   - **Task**: Destructure an object with only `name`, assigning a default `role` of "user", then log both.
   - **Example**:
     ```html
     <script>
       const obj = { name: "Luiz" };
       const { name, role = "user" } = obj;
       console.log(name, role);
     </script>
     ```
   - **Expected Answer**: Outputs: Luiz, user

7. **Swapping Variables with Array Destructuring**
   - **Description**: Swap two variables using destructuring.
   - **Task**: Swap the values of two variables `a` and `b`, then log them.
   - **Example**:
     ```html
     <script>
       let a = 1, b = 2;
       [a, b] = [b, a];
       console.log(a, b);
     </script>
     ```
   - **Expected Answer**: Outputs: 2, 1

8. **Array Destructuring with Rest Syntax**
   - **Description**: Use rest syntax to collect remaining array elements.
   - **Task**: Destructure the first element and collect the rest into an array, then log both.
   - **Example**:
     ```html
     <script>
       const numbers = [1, 2, 3, 4];
       const [first, ...rest] = numbers;
       console.log(first, rest);
     </script>
     ```
   - **Expected Answer**: Outputs: 1, [2, 3, 4]

9. **Object Destructuring with Rest Syntax**
   - **Description**: Collect remaining object properties using rest syntax.
   - **Task**: Destructure `name` from an object and collect the rest, then log both.
   - **Example**:
     ```html
     <script>
       const user = { name: "Luiz", age: 29, role: "engineer" };
       const { name, ...rest } = user;
       console.log(name, rest);
     </script>
     ```
   - **Expected Answer**: Outputs: Luiz, { age: 29, role: "engineer" }

10. **Nested Object Destructuring**
    - **Description**: Extract a nested object property.
    - **Task**: Destructure the `city` from a nested `info` object, then log it.
    - **Example**:
      ```html
      <script>
        const user = { name: "Luiz", info: { city: "São Paulo" } };
        const { info: { city } } = user;
        console.log(city);
      </script>
      ```
    - **Expected Answer**: Outputs: São Paulo

11. **Destructuring Event Properties**
    - **Description**: Destructure event properties in a click handler.
    - **Task**: Add a click listener to a button, destructuring `target` and `clientX`, then log them.
    - **Example**:
      ```html
      <button id="btn">Click Me</button>
      <script>
        document.getElementById("btn").addEventListener("click", ({ target, clientX }) => {
          console.log(target.id, clientX);
        });
      </script>
      ```
    - **Expected Answer**: Clicking logs: btn, X (coordinate depends on click position)

12. **Destructuring Event Target Properties**
    - **Description**: Destructure properties from `event.target`.
    - **Task**: Add an input event listener to an input field, destructuring `id` and `value` from `target`, then log them.
    - **Example**:
      ```html
      <input id="input" value="test">
      <script>
        document.getElementById("input").addEventListener("input", ({ target: { id, value } }) => {
          console.log(id, value);
        });
      </script>
      ```
    - **Expected Answer**: Typing logs: input, typed text (e.g., "test")

13. **Destructuring in Event Handler with Default**
    - **Description**: Use default values in an event handler.
    - **Task**: Add a click listener, destructuring `target` and a default `type` of "click", then log both.
    - **Example**:
      ```html
      <button id="btn">Click Me</button>
      <script>
        document.getElementById("btn").addEventListener("click", ({ target, type = "click" }) => {
          console.log(target.id, type);
        });
      </script>
      ```
    - **Expected Answer**: Clicking logs: btn, click

14. **Combining Array and Object Destructuring**
    - **Description**: Destructure a nested array and object.
    - **Task**: Destructure the first item and a nested `count` from an object, then log both.
    - **Example**:
      ```html
      <script>
        const data = { items: [1, 2], meta: { count: 2 } };
        const { items: [first], meta: { count } } = data;
        console.log(first, count);
      </script>
      ```
    - **Expected Answer**: Outputs: 1, 2

15. **Destructuring in Function Parameters**
    - **Description**: Destructure an object in a function parameter.
    - **Task**: Create a function that destructures `name` and `age` with a default, then logs them.
    - **Example**:
      ```html
      <script>
        const printUser = ({ name, age = 18 }) => console.log(name, age);
        printUser({ name: "Luiz" });
      </script>
      ```
    - **Expected Answer**: Outputs: Luiz, 18

16. **Destructuring with Rest in Function Parameters**
    - **Description**: Use rest syntax in a function parameter.
    - **Task**: Create a function that destructures `name` and collects the rest, then logs both.
    - **Example**:
      ```html
      <script>
        const logDetails = ({ name, ...rest }) => console.log(name, rest);
        logDetails({ name: "Luiz", age: 29, role: "engineer" });
      </script>
      ```
    - **Expected Answer**: Outputs: Luiz, { age: 29, role: "engineer" }

17. **Destructuring in a Loop**
    - **Description**: Destructure objects in a `for...of` loop.
    - **Task**: Loop through an array of objects, destructuring `name`, and log each.
    - **Example**:
      ```html
      <script>
        const users = [{ name: "Luiz" }, { name: "Marta" }];
        for (const { name } of users) {
          console.log(name);
        }
      </script>
      ```
    - **Expected Answer**: Outputs: Luiz, Marta

18. **Destructuring with Computed Property Names**
    - **Description**: Use a dynamic key in object destructuring.
    - **Task**: Destructure an object using a computed property name, then log the value.
    - **Example**:
      ```html
      <script>
        const key = "name";
        const { [key]: userName } = { name: "Luiz" };
        console.log(userName);
      </script>
      ```
    - **Expected Answer**: Outputs: Luiz

19. **Destructuring in Event Delegation**
    - **Description**: Use destructuring in an event delegation handler.
    - **Task**: Add a click listener to a `<ul>`, destructuring `target`’s `textContent` for `<li>` clicks, then log it.
    - **Example**:
      ```html
      <ul id="list"><li>Item 1</li><li>Item 2</li></ul>
      <script>
        document.getElementById("list").addEventListener("click", ({ target: { textContent, tagName } }) => {
          if (tagName === "LI") console.log(textContent);
        });
      </script>
      ```
    - **Expected Answer**: Clicking an `<li>` logs: Item 1 or Item 2

20. **Nested Destructuring in Event Handler**
    - **Description**: Destructure nested event properties.
    - **Task**: Add a click listener to a button, destructuring `target`’s `dataset` to extract a custom data attribute, then log it.
    - **Example**:
      ```html
      <button id="btn" data-info="custom">Click Me</button>
      <script>
        document.getElementById("btn").addEventListener("click", ({ target: { dataset: { info } } }) => {
          console.log(info);
        });
      </script>
      ```
    - **Expected Answer**: Clicking logs: custom