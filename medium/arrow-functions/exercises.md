1. **Creating a Simple Arrow Function**
   - **Description**: Write an arrow function with implicit return to add two numbers.
   - **Task**: Create an arrow function that takes two parameters and returns their sum, then log the result.
   - **Expected Answer**: Logs `8`.

2. **Using Block Arrow Function**
   - **Description**: Write an arrow function with an explicit return to manipulate inputs.
   - **Task**: Create an arrow function that doubles the first parameter, triples the second, and returns their sum.
   - **Expected Answer**: Logs `13` (2 * 2 + 3 * 3 = 4 + 9).

3. **Arrow Function in Array Method**
   - **Description**: Use an arrow function in an array `map` method.
   - **Task**: Create an array of numbers and use an arrow function to square each element.
   - **Expected Answer**: Logs `[1, 4, 9]`.

4. **Lexical `this` in Global Scope**
   - **Description**: Demonstrate that an arrow function’s `this` is the global object.
   - **Task**: Create an arrow function inside an object and log `this`.
   - **Expected Answer**: Logs `true` (`this` is `window`).

5. **Regular Function `this` in Object**
   - **Description**: Use a regular function to access an object’s property.
   - **Task**: Create an object with a regular function that logs its `value` property.
   - **Expected Answer**: Logs `100`.

6. **Arrow Function with Rest Parameters**
   - **Description**: Use rest parameters since arrow functions lack `arguments`.
   - **Task**: Create an arrow function that logs all passed arguments as an array.
   - **Expected Answer**: Logs `[1, "hello", true]`.

7. **Arrow Function in Event Listener**
   - **Description**: Use an arrow function to log the event target’s ID.
   - **Task**: Add a click listener to a button using an arrow function, logging `event.currentTarget.id`.
   - **Expected Answer**: Clicking logs `btn`.

8. **Lexical `this` in Nested Arrow Function**
   - **Description**: Use a nested arrow function to access an outer object’s property.
   - **Task**: Create an object with a regular function containing a nested arrow function that logs the object’s `value`.
   - **Expected Answer**: Logs `42` (`this` is `obj` from the outer function).

9. **Regular Function `this` Issue in Event Listener**
   - **Description**: Show how `this` behaves in a regular function event listener.
   - **Task**: Add a regular function as a click listener to a button, logging `this.id`.
   - **Expected Answer**: Clicking logs `btn` (`this` is the button, not `obj`).

10. **Fixing `this` with `.bind()`**
    - **Description**: Bind a regular function to preserve `this` in an event listener.
    - **Task**: Bind an object’s regular function to use its `value` in a click listener.
    - **Expected Answer**: Clicking logs `42`.

11. **Arrow Function in Class Event Listener**
    - **Description**: Use an arrow function in a class to preserve `this`.
    - **Task**: Create a class with a click listener that increments a counter property.
    - **Expected Answer**: Each click logs `1`, `2`, `3`, etc.

12. **Arrow Function in `setTimeout`**
    - **Description**: Use an arrow function to preserve `this` in a `setTimeout`.
    - **Task**: Create an object with a method that logs its `value` after a 1-second delay.
    - **Expected Answer**: Logs `100` after 1 second.

13. **Regular Function `this` Issue in `setTimeout`**
    - **Description**: Show the issue with `this` in a regular function in `setTimeout`.
    - **Task**: Create an object with a regular function in `setTimeout` that tries to log `value`.
    - **Expected Answer**: Logs `undefined` (`this` is `window`).

14. **Using `event.currentTarget` with Arrow Function**
    - **Description**: Use an arrow function to update an element’s text on click.
    - **Task**: Add an arrow function click listener to a button that updates a `<p>` with the button’s ID.
    - **Expected Answer**: Clicking updates `<p>` to `btn`.

15. **Arrow Function in Event Delegation**
    - **Description**: Use an arrow function for event delegation on a list.
    - **Task**: Create a `<ul>` with `<li>` elements; use an arrow function to log the clicked item’s text.
    - **Expected Answer**: Clicking an `<li>` logs its text (e.g., `Item 1`).

16. **Arrow Function with Custom Event**
    - **Description**: Use an arrow function to handle a custom event with data.
    - **Task**: Create and dispatch a custom event, handling it with an arrow function to log the `detail`.
    - **Expected Answer**: Clicking logs `Custom data`.

17. **Regular Function `this` in Nested Context**
    - **Description**: Show `this` issues in a nested regular function.
    - **Task**: Create an object with a regular function containing a nested regular function that tries to log `value`.
    - **Expected Answer**: Logs `undefined` (`this` is `window` in the inner function).

18. **Arrow Function with `AbortController`**
    - **Description**: Use an arrow function with `signal` for listener cleanup.
    - **Task**: Add an arrow function click listener with `AbortController` and remove it on another button click.
    - **Expected Answer**: Clicking `target` logs `Clicked` until `remove` is clicked, then logs `Listener removed`.

19. **Arrow Function in `forEach` Callback**
    - **Description**: Use an arrow function in a `forEach` to preserve `this`.
    - **Task**: Create a class with a method that uses `forEach` with an arrow function to log a property.
    - **Expected Answer**: Logs `42` twice.

20. **Combining Arrow and Regular Functions in Event Handling**
    - **Description**: Compare `this` in arrow and regular function listeners.
    - **Task**: Add both an arrow and a regular function as click listeners to a button, logging `this`.
    - **Expected Answer**: Clicking logs `Regular this: [HTMLButtonElement]`, `Arrow this: Window`.
