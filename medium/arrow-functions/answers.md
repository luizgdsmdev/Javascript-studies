1. **Creating a Simple Arrow Function**
   - **Description**: Write an arrow function with implicit return to add two numbers.
   - **Task**: Create an arrow function that takes two parameters and returns their sum, then log the result.
   - **Example**:
     ```html
     <script>
       const add = (a, b) => a + b;
       console.log(add(5, 3));
     </script>
     ```
   - **Expected Answer**: Logs `8`.

2. **Using Block Arrow Function**
   - **Description**: Write an arrow function with an explicit return to manipulate inputs.
   - **Task**: Create an arrow function that doubles the first parameter, triples the second, and returns their sum.
   - **Example**:
     ```html
     <script>
       const process = (x, y) => {
         const doubleX = x * 2;
         const tripleY = y * 3;
         return doubleX + tripleY;
       };
       console.log(process(2, 3));
     </script>
     ```
   - **Expected Answer**: Logs `13` (2 * 2 + 3 * 3 = 4 + 9).

3. **Arrow Function in Array Method**
   - **Description**: Use an arrow function in an array `map` method.
   - **Task**: Create an array of numbers and use an arrow function to square each element.
   - **Example**:
     ```html
     <script>
       const numbers = [1, 2, 3];
       const squared = numbers.map((n) => n * n);
       console.log(squared);
     </script>
     ```
   - **Expected Answer**: Logs `[1, 4, 9]`.

4. **Lexical `this` in Global Scope**
   - **Description**: Demonstrate that an arrow function’s `this` is the global object.
   - **Task**: Create an arrow function inside an object and log `this`.
   - **Example**:
     ```html
     <script>
       const obj = {
         arrowFunc: () => console.log(this === window)
       };
       obj.arrowFunc();
     </script>
     ```
   - **Expected Answer**: Logs `true` (`this` is `window`).

5. **Regular Function `this` in Object**
   - **Description**: Use a regular function to access an object’s property.
   - **Task**: Create an object with a regular function that logs its `value` property.
   - **Example**:
     ```html
     <script>
       const obj = {
         value: 100,
         regularFunc: function() {
           console.log(this.value);
         }
       };
       obj.regularFunc();
     </script>
     ```
   - **Expected Answer**: Logs `100`.

6. **Arrow Function with Rest Parameters**
   - **Description**: Use rest parameters since arrow functions lack `arguments`.
   - **Task**: Create an arrow function that logs all passed arguments as an array.
   - **Example**:
     ```html
     <script>
       const logArgs = (...args) => console.log(args);
       logArgs(1, "hello", true);
     </script>
     ```
   - **Expected Answer**: Logs `[1, "hello", true]`.

7. **Arrow Function in Event Listener**
   - **Description**: Use an arrow function to log the event target’s ID.
   - **Task**: Add a click listener to a button using an arrow function, logging `event.currentTarget.id`.
   - **Example**:
     ```html
     <button id="btn">Click Me</button>
     <script>
       document.getElementById("btn").addEventListener("click", (e) => {
         console.log(e.currentTarget.id);
       });
     </script>
     ```
   - **Expected Answer**: Clicking logs `btn`.

8. **Lexical `this` in Nested Arrow Function**
   - **Description**: Use a nested arrow function to access an outer object’s property.
   - **Task**: Create an object with a regular function containing a nested arrow function that logs the object’s `value`.
   - **Example**:
     ```html
     <script>
       const obj = {
         value: 42,
         outer: function() {
           const inner = () => console.log(this.value);
           inner();
         }
       };
       obj.outer();
     </script>
     ```
   - **Expected Answer**: Logs `42` (`this` is `obj` from the outer function).

9. **Regular Function `this` Issue in Event Listener**
   - **Description**: Show how `this` behaves in a regular function event listener.
   - **Task**: Add a regular function as a click listener to a button, logging `this.id`.
   - **Example**:
     ```html
     <button id="btn">Click Me</button>
     <script>
       const obj = {
         id: "obj",
         regularFunc: function() {
           console.log(this.id);
         }
       };
       document.getElementById("btn").addEventListener("click", obj.regularFunc);
     </script>
     ```
   - **Expected Answer**: Clicking logs `btn` (`this` is the button, not `obj`).

10. **Fixing `this` with `.bind()`**
    - **Description**: Bind a regular function to preserve `this` in an event listener.
    - **Task**: Bind an object’s regular function to use its `value` in a click listener.
    - **Example**:
      ```html
      <button id="btn">Click Me</button>
      <script>
        const obj = {
          value: 42,
          regularFunc: function() {
            console.log(this.value);
          }
        };
        document.getElementById("btn").addEventListener("click", obj.regularFunc.bind(obj));
      </script>
      ```
    - **Expected Answer**: Clicking logs `42`.

11. **Arrow Function in Class Event Listener**
    - **Description**: Use an arrow function in a class to preserve `this`.
    - **Task**: Create a class with a click listener that increments a counter property.
    - **Example**:
      ```html
      <button id="btn">Click Me</button>
      <script>
        class Counter {
          count = 0;
          constructor() {
            document.getElementById("btn").addEventListener("click", () => {
              this.count++;
              console.log(this.count);
            });
          }
        }
        new Counter();
      </script>
      ```
    - **Expected Answer**: Each click logs `1`, `2`, `3`, etc.

12. **Arrow Function in `setTimeout`**
    - **Description**: Use an arrow function to preserve `this` in a `setTimeout`.
    - **Task**: Create an object with a method that logs its `value` after a 1-second delay.
    - **Example**:
      ```html
      <script>
        const obj = {
          value: 100,
          start: function() {
            setTimeout(() => console.log(this.value), 1000);
          }
        };
        obj.start();
      </script>
      ```
    - **Expected Answer**: Logs `100` after 1 second.

13. **Regular Function `this` Issue in `setTimeout`**
    - **Description**: Show the issue with `this` in a regular function in `setTimeout`.
    - **Task**: Create an object with a regular function in `setTimeout` that tries to log `value`.
    - **Example**:
      ```html
      <script>
        const obj = {
          value: 100,
          start: function() {
            setTimeout(function() {
              console.log(this.value);
            }, 1000);
          }
        };
        obj.start();
      </script>
      ```
    - **Expected Answer**: Logs `undefined` (`this` is `window`).

14. **Using `event.currentTarget` with Arrow Function**
    - **Description**: Use an arrow function to update an element’s text on click.
    - **Task**: Add an arrow function click listener to a button that updates a `<p>` with the button’s ID.
    - **Example**:
      ```html
      <button id="btn">Click Me</button>
      <p id="output">Waiting...</p>
      <script>
        document.getElementById("btn").addEventListener("click", (e) => {
          document.getElementById("output").textContent = e.currentTarget.id;
        });
      </script>
      ```
    - **Expected Answer**: Clicking updates `<p>` to `btn`.

15. **Arrow Function in Event Delegation**
    - **Description**: Use an arrow function for event delegation on a list.
    - **Task**: Create a `<ul>` with `<li>` elements; use an arrow function to log the clicked item’s text.
    - **Example**:
      ```html
      <ul id="list"><li>Item 1</li><li>Item 2</li></ul>
      <script>
        document.getElementById("list").addEventListener("click", (e) => {
          if (e.target.tagName === "LI") console.log(e.target.textContent);
        });
      </script>
      ```
    - **Expected Answer**: Clicking an `<li>` logs its text (e.g., `Item 1`).

16. **Arrow Function with Custom Event**
    - **Description**: Use an arrow function to handle a custom event with data.
    - **Task**: Create and dispatch a custom event, handling it with an arrow function to log the `detail`.
    - **Example**:
      ```html
      <button id="trigger">Trigger Event</button>
      <script>
        window.addEventListener("myEvent", (e) => console.log(e.detail));
        document.getElementById("trigger").addEventListener("click", () => {
          window.dispatchEvent(new CustomEvent("myEvent", { detail: "Custom data" }));
        });
      </script>
      ```
    - **Expected Answer**: Clicking logs `Custom data`.

17. **Regular Function `this` in Nested Context**
    - **Description**: Show `this` issues in a nested regular function.
    - **Task**: Create an object with a regular function containing a nested regular function that tries to log `value`.
    - **Example**:
      ```html
      <script>
        const obj = {
          value: 42,
          outer: function() {
            const inner = function() {
              console.log(this.value);
            };
            inner();
          }
        };
        obj.outer();
      </script>
      ```
    - **Expected Answer**: Logs `undefined` (`this` is `window` in the inner function).

18. **Arrow Function with `AbortController`**
    - **Description**: Use an arrow function with `signal` for listener cleanup.
    - **Task**: Add an arrow function click listener with `AbortController` and remove it on another button click.
    - **Example**:
      ```html
      <button id="target">Click Me</button>
      <button id="remove">Remove Listener</button>
      <script>
        const controller = new AbortController();
        document.getElementById("target").addEventListener(
          "click",
          () => console.log("Clicked"),
          { signal: controller.signal }
        );
        document.getElementById("remove").addEventListener("click", () => {
          controller.abort();
          console.log("Listener removed");
        });
      </script>
      ```
    - **Expected Answer**: Clicking `target` logs `Clicked` until `remove` is clicked, then logs `Listener removed`.

19. **Arrow Function in `forEach` Callback**
    - **Description**: Use an arrow function in a `forEach` to preserve `this`.
    - **Task**: Create a class with a method that uses `forEach` with an arrow function to log a property.
    - **Example**:
      ```html
      <script>
        class App {
          value = 42;
          logItems() {
            ["a", "b"].forEach(() => console.log(this.value));
          }
        }
        new App().logItems();
      </script>
      ```
    - **Expected Answer**: Logs `42` twice.

20. **Combining Arrow and Regular Functions in Event Handling**
    - **Description**: Compare `this` in arrow and regular function listeners.
    - **Task**: Add both an arrow and a regular function as click listeners to a button, logging `this`.
    - **Example**:
      ```html
      <button id="btn">Click Me</button>
      <script>
        const obj = {
          value: 42,
          regularFunc: function() { console.log("Regular this:", this); },
          arrowFunc: () => { console.log("Arrow this:", this); }
        };
        const btn = document.getElementById("btn");
        btn.addEventListener("click", obj.regularFunc);
        btn.addEventListener("click", obj.arrowFunc);
      </script>
      ```
    - **Expected Answer**: Clicking logs `Regular this: [HTMLButtonElement]`, `Arrow this: Window`.
