1. **Spread Array Elements** 
   - **Description**: Use the spread operator to expand an array into individual elements.
   - **Task**: Create an array of numbers, spread it into a `console.log`, and display the elements.
   - **Expected Answer**: Outputs: 1, 2, 3

2. **Copy an Array with Spread**
   - **Description**: Create a shallow copy of an array using the spread operator.
   - **Task**: Create an array, make a copy with spread, and log the copy.
   - **Expected Answer**: Outputs: [4, 5, 6]

3. **Copy an Object with Spread**
   - **Description**: Create a shallow copy of an object using the spread operator.
   - **Task**: Create an object with `name` and `age`, copy it with spread, and log the copy.
   - **Expected Answer**: Outputs: { name: "Luiz", age: 29 }

4. **Rest in Array Destructuring**
   - **Description**: Use rest operator to collect remaining array elements.
   - **Task**: Destructure an array to capture the first element and rest into a variable, then log the rest.
   - **Expected Answer**: Outputs: [2, 3, 4]

5. **Rest in Object Destructuring**
   - **Description**: Use rest operator to collect remaining object properties.
   - **Task**: Destructure an object to capture `name` and collect the rest, then log the rest.
   - **Expected Answer**: Outputs: { age: 29, state: "MG" }

6. **Spread String Characters**
   - **Description**: Spread a string into individual characters.
   - **Task**: Spread a string into a `console.log` to display its characters.
   - **Expected Answer**: Outputs: L, u, i, z

7. **Merge Arrays with Spread**
   - **Description**: Merge two arrays using the spread operator.
   - **Task**: Create two arrays, merge them with spread, and log the result.
   - **Expected Answer**: Outputs: [1, 2, 3, 4]

8. **Merge Objects with Spread**
   - **Description**: Merge two objects, with later properties overriding earlier ones.
   - **Task**: Create two objects, merge them with spread, and log the result.
   - **Expected Answer**: Outputs: { name: "Luiz", age: 30, state: "MG" }

9. **Update Object Property with Spread**
   - **Description**: Update a property while copying an object.
   - **Task**: Copy an object with spread, update its `age`, and log the result.
   - **Expected Answer**: Outputs: { name: "Luiz", age: 30 }

10. **Spread Array as Function Arguments**
    - **Description**: Pass array elements as individual function arguments.
    - **Task**: Create an array and a function that sums three numbers, spread the array into the function call, and log the result.
    - **Expected Answer**: Outputs: 6

11. **Rest in Function Parameters**
    - **Description**: Use rest to collect all function arguments.
    - **Task**: Create a function that sums all arguments using rest, then call it with multiple numbers and log the result.
    - **Expected Answer**: Outputs: 10

12. **Spread DOM Collection in Event Handling**
    - **Description**: Convert a DOM collection to an array using spread.
    - **Task**: Select all buttons, spread them into an array, map their IDs, and log the result.
    - **Expected Answer**: Outputs: ["btn1", "btn2"]

13. **Rest in Event Handler Destructuring**
    - **Description**: Use rest to collect extra event properties.
    - **Task**: Add a click listener to a button, destructure `target` and collect other event properties with rest, then log them.
    - **Expected Answer**: Clicking outputs: btn, { clientX: X, clientY: Y, ... } (event properties depend on click)

14. **Add Elements to Array with Spread**
    - **Description**: Add new elements to an array using spread.
    - **Task**: Create an array, add new elements with spread, and log the result.
    - **Expected Answer**: Outputs: [1, 2, 3, 4]

15. **Rest with First Parameter in Function**
    - **Description**: Use rest with a named parameter in a function.
    - **Task**: Create a function that takes a first argument and rest, logging both.
    - **Expected Answer**: Outputs: 1, [2, 3, 4]

16. **Shallow Copy Issue with Spread**
    - **Description**: Demonstrate shallow copy behavior with nested objects.
    - **Task**: Copy an object with a nested property using spread, modify the nested property, and log both original and copy.
    - **Expected Answer**: Outputs: { state: "SP" }, { state: "SP" }

17. **Merge Multiple Objects with Override**
    - **Description**: Merge multiple objects with spread, handling property overrides.
    - **Task**: Merge three objects with overlapping properties and log the result.
    - **Expected Answer**: Outputs: { name: "Luiz", age: 30, state: "SP" }

18. **Rest in Event Delegation**
    - **Description**: Use rest in an event delegation handler to collect event properties.
    - **Task**: Add a click listener to a `<ul>`, destructure `target`’s `textContent` and collect other properties with rest, then log them for `<li>` clicks.
    - **Expected Answer**: Clicking an `<li>` outputs: Item 1, { clientX: X, clientY: Y, ... } (or Item 2, ...)

19. **Spread in Function with Rest Parameter**
    - **Description**: Combine spread and rest in a function call.
    - **Task**: Create a function with rest parameters, pass a spread array to it, and log the collected arguments.
    - **Expected Answer**: Outputs: [1, 2, 3]

20. **Update Multiple Properties with Spread**
    - **Description**: Update multiple properties while merging objects.
    - **Task**: Merge an object with new properties using spread, overriding some, and log the result.
    - **Expected Answer**: Outputs: { name: "Luiz", age: 30, state: "SP" }
