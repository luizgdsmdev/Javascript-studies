1. **Basic Array Destructuring**
   - **Description**: Extract the first two elements from an array.
   - **Task**: Create an array of numbers and destructure the first two elements into variables, then log them.
   - **Expected Answer**: Outputs: 10, 20

2. **Basic Object Destructuring**
   - **Description**: Extract properties from an object.
   - **Task**: Create an object with `name` and `age`, destructure them, and log the values.
   - **Expected Answer**: Outputs: Luiz, 29

3. **Skipping Array Elements**
   - **Description**: Skip elements in array destructuring.
   - **Task**: Destructure an array to skip the first two elements and capture the third, then log it.
   - **Expected Answer**: Outputs: 3

4. **Object Destructuring with Renaming**
   - **Description**: Rename properties during object destructuring.
   - **Task**: Destructure an object’s `name` and `age` into `userName` and `userAge`, then log them.
   - **Expected Answer**: Outputs: Marta, 25

5. **Array Destructuring with Default Values**
   - **Description**: Use default values in array destructuring.
   - **Task**: Destructure an array with one element, assigning a default value to the second, then log both.
   - **Expected Answer**: Outputs: 5, 10

6. **Object Destructuring with Default Values**
   - **Description**: Assign default values to undefined object properties.
   - **Task**: Destructure an object with only `name`, assigning a default `role` of "user", then log both.
   - **Expected Answer**: Outputs: Luiz, user

7. **Swapping Variables with Array Destructuring**
   - **Description**: Swap two variables using destructuring.
   - **Task**: Swap the values of two variables `a` and `b`, then log them.
   - **Expected Answer**: Outputs: 2, 1

8. **Array Destructuring with Rest Syntax**
   - **Description**: Use rest syntax to collect remaining array elements.
   - **Task**: Destructure the first element and collect the rest into an array, then log both.
   - **Expected Answer**: Outputs: 1, [2, 3, 4]

9. **Object Destructuring with Rest Syntax**
   - **Description**: Collect remaining object properties using rest syntax.
   - **Task**: Destructure `name` from an object and collect the rest, then log both.
   - **Expected Answer**: Outputs: Luiz, { age: 29, role: "engineer" }

10. **Nested Object Destructuring**
    - **Description**: Extract a nested object property.
    - **Task**: Destructure the `city` from a nested `info` object, then log it.
    - **Expected Answer**: Outputs: São Paulo

11. **Destructuring Event Properties**
    - **Description**: Destructure event properties in a click handler.
    - **Task**: Add a click listener to a button, destructuring `target` and `clientX`, then log them.
    - **Expected Answer**: Clicking logs: btn, X (coordinate depends on click position)

12. **Destructuring Event Target Properties**
    - **Description**: Destructure properties from `event.target`.
    - **Task**: Add an input event listener to an input field, destructuring `id` and `value` from `target`, then log them.
    - **Expected Answer**: Typing logs: input, typed text (e.g., "test")

13. **Destructuring in Event Handler with Default**
    - **Description**: Use default values in an event handler.
    - **Task**: Add a click listener, destructuring `target` and a default `type` of "click", then log both.
    - **Expected Answer**: Clicking logs: btn, click

14. **Combining Array and Object Destructuring**
    - **Description**: Destructure a nested array and object.
    - **Task**: Destructure the first item and a nested `count` from an object, then log both.
    - **Expected Answer**: Outputs: 1, 2

15. **Destructuring in Function Parameters**
    - **Description**: Destructure an object in a function parameter.
    - **Task**: Create a function that destructures `name` and `age` with a default, then logs them.
    - **Expected Answer**: Outputs: Luiz, 18

16. **Destructuring with Rest in Function Parameters**
    - **Description**: Use rest syntax in a function parameter.
    - **Task**: Create a function that destructures `name` and collects the rest, then logs both.
    - **Expected Answer**: Outputs: Luiz, { age: 29, role: "engineer" }

17. **Destructuring in a Loop**
    - **Description**: Destructure objects in a `for...of` loop.
    - **Task**: Loop through an array of objects, destructuring `name`, and log each.
    - **Expected Answer**: Outputs: Luiz, Marta

18. **Destructuring with Computed Property Names**
    - **Description**: Use a dynamic key in object destructuring.
    - **Task**: Destructure an object using a computed property name, then log the value.
    - **Expected Answer**: Outputs: Luiz

19. **Destructuring in Event Delegation**
    - **Description**: Use destructuring in an event delegation handler.
    - **Task**: Add a click listener to a `<ul>`, destructuring `target`’s `textContent` for `<li>` clicks, then log it.
    - **Expected Answer**: Clicking an `<li>` logs: Item 1 or Item 2

20. **Nested Destructuring in Event Handler**
    - **Description**: Destructure nested event properties.
    - **Task**: Add a click listener to a button, destructuring `target`’s `dataset` to extract a custom data attribute, then log it.
    - **Expected Answer**: Clicking logs: custom