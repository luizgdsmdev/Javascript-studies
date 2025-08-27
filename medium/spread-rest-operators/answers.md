1. **Declare Variables with `var`, `let`, and `const`**
   - **Description**: Declare variables using each keyword and log their values.
   - **Task**: Declare `x` with `var`, `y` with `let`, and `z` with `const`, then log them.
   - **Example**:
     ```html
     <script>
       var x = 1;
       let y = 2;
       const z = 3;
       console.log(x, y, z);
     </script>
     ```
   - **Expected Answer**: Outputs: 1, 2, 3

2. **Test `var` Function Scope**
   - **Description**: Demonstrate `var` ignoring block scope within a function.
   - **Task**: Declare a `var` variable inside an `if` block within a function and log it outside the block.
   - **Example**:
     ```html
     <script>
       function test() {
         var x = 1;
         if (true) {
           var x = 2;
           console.log(x);
         }
         console.log(x);
       }
       test();
     </script>
     ```
   - **Expected Answer**: Outputs: 2, 2

3. **Test `let` Block Scope**
   - **Description**: Show `let` respecting block scope.
   - **Task**: Declare a `let` variable inside an `if` block within a function and log it inside and outside the block.
   - **Example**:
     ```html
     <script>
       function test() {
         let x = 1;
         if (true) {
           let x = 2;
           console.log(x);
         }
         console.log(x);
       }
       test();
     </script>
     ```
   - **Expected Answer**: Outputs: 2, 1

4. **Test `const` Block Scope**
   - **Description**: Show `const` respecting block scope.
   - **Task**: Declare a `const` variable inside an `if` block and attempt to log it outside.
   - **Example**:
     ```html
     <script>
       function test() {
         if (true) {
           const x = 1;
           console.log(x);
         }
         // console.log(x); // Uncommenting causes ReferenceError
       }
       test();
     </script>
     ```
   - **Expected Answer**: Outputs: 1 (logging outside causes ReferenceError: x is not defined)

5. **Reassign `var` Variable**
   - **Description**: Reassign a `var` variable and log the result.
   - **Task**: Declare a `var` variable, reassign it, and log the new value.
   - **Example**:
     ```html
     <script>
       var x = 1;
       x = 2;
       console.log(x);
     </script>
     ```
   - **Expected Answer**: Outputs: 2

6. **Reassign `let` Variable**
   - **Description**: Reassign a `let` variable and log the result.
   - **Task**: Declare a `let` variable, reassign it, and log the new value.
   - **Example**:
     ```html
     <script>
       let y = 1;
       y = 2;
       console.log(y);
     </script>
     ```
   - **Expected Answer**: Outputs: 2

7. **Mutate `const` Object**
   - **Description**: Mutate a `const` object’s property without reassigning the reference.
   - **Task**: Declare a `const` object, modify a property, and log the object.
   - **Example**:
     ```html
     <script>
       const obj = { a: 1 };
       obj.a = 2;
       console.log(obj);
     </script>
     ```
   - **Expected Answer**: Outputs: { a: 2 }

8. **Hoisting with `var`**
   - **Description**: Demonstrate `var` hoisting with `undefined`.
   - **Task**: Log a `var` variable before its declaration and after assignment.
   - **Example**:
     ```html
     <script>
       console.log(x);
       var x = 1;
       console.log(x);
     </script>
     ```
   - **Expected Answer**: Outputs: undefined, 1

9. **Hoisting with `let` (TDZ)**
   - **Description**: Show `let` hoisting causing a Temporal Dead Zone (TDZ) error.
   - **Task**: Attempt to log a `let` variable before its declaration.
   - **Example**:
     ```html
     <script>
       // console.log(y); // Uncommenting causes ReferenceError
       let y = 2;
       console.log(y);
     </script>
     ```
   - **Expected Answer**: Outputs: 2 (logging before causes ReferenceError: Cannot access 'y' before initialization)

10. **Hoisting with `const` (TDZ)**
    - **Description**: Show `const` hoisting causing a TDZ error.
    - **Task**: Attempt to log a `const` variable before its declaration.
    - **Example**:
      ```html
      <script>
        // console.log(z); // Uncommenting causes ReferenceError
        const z = 3;
        console.log(z);
      </script>
      ```
    - **Expected Answer**: Outputs: 3 (logging before causes ReferenceError: Cannot access 'z' before initialization)

11. **Redeclare `var` in Same Scope**
    - **Description**: Redeclare a `var` variable in the same scope and log the result.
    - **Task**: Declare a `var` variable, redeclare it, and log the final value.
    - **Example**:
      ```html
      <script>
        var x = 1;
        var x = 2;
        console.log(x);
      </script>
      ```
    - **Expected Answer**: Outputs: 2

12. **Attempt `let` Redeclaration**
    - **Description**: Attempt to redeclare a `let` variable in the same scope.
    - **Task**: Declare a `let` variable, attempt to redeclare it, and log the result.
    - **Example**:
      ```html
      <script>
        let y = 1;
        // let y = 2; // Uncommenting causes SyntaxError
        console.log(y);
      </script>
      ```
    - **Expected Answer**: Outputs: 1 (redeclaration causes SyntaxError: Identifier 'y' has already been declared)

13. **Attempt `const` Reassignment**
    - **Description**: Attempt to reassign a `const` variable.
    - **Task**: Declare a `const` variable, attempt to reassign it, and log the result.
    - **Example**:
      ```html
      <script>
        const z = 1;
        // z = 2; // Uncommenting causes TypeError
        console.log(z);
      </script>
      ```
    - **Expected Answer**: Outputs: 1 (reassignment causes TypeError: Assignment to constant variable)

14. **Use `let` with Destructuring** (connecting to prior content)
    - **Description**: Combine `let` with array destructuring.
    - **Task**: Use `let` with destructuring to extract the first element and rest of an array, then log them.
    - **Example**:
      ```html
      <script>
        let [first, ...rest] = [1, 2, 3];
        console.log(first, rest);
      </script>
      ```
    - **Expected Answer**: Outputs: 1, [2, 3]

15. **Use `var` in a Loop with Closure**
    - **Description**: Show `var` causing issues in a loop with closures.
    - **Task**: Use `var` in a `for` loop with `setTimeout` and log the counter.
    - **Example**:
      ```html
      <script>
        for (var i = 0; i < 3; i++) {
          setTimeout(() => console.log(i), 100);
        }
      </script>
      ```
    - **Expected Answer**: Outputs: 3, 3, 3 (shared variable)

16. **Use `let` in a Loop with Closure**
    - **Description**: Use `let` in a loop to fix closure issues.
    - **Task**: Use `let` in a `for` loop with `setTimeout` and log the counter.
    - **Example**:
      ```html
      <script>
        for (let i = 0; i < 3; i++) {
          setTimeout(() => console.log(i), 100);
        }
      </script>
      ```
    - **Expected Answer**: Outputs: 0, 1, 2 (block-scoped)

17. **Use `const` with Object Mutation**
    - **Description**: Mutate a `const` array and log the result.
    - **Task**: Declare a `const` array, push a new element, and log the array.
    - **Example**:
      ```html
      <script>
        const arr = [1, 2];
        arr.push(3);
        console.log(arr);
      </script>
      ```
    - **Expected Answer**: Outputs: [1, 2, 3]

18. **Event Handling with `var` in Loop**
    - **Description**: Demonstrate `var` issues in event handlers within a loop.
    - **Task**: Add click listeners to buttons in a loop using `var` and log the index.
    - **Example**:
      ```html
      <button id="btn0">Button 0</button>
      <button id="btn1">Button 1</button>
      <button id="btn2">Button 2</button>
      <script>
        for (var i = 0; i < 3; i++) {
          document.getElementById(`btn${i}`).addEventListener("click", () => console.log(i));
        }
      </script>
      ```
    - **Expected Answer**: Clicking any button outputs: 3 (shared variable)

19. **Event Handling with `let` in Loop**
    - **Description**: Use `let` in a loop to correctly bind event handlers.
    - **Task**: Add click listeners to buttons in a loop using `let` and log the index.
    - **Example**:
      ```html
      <button id="btn0">Button 0</button>
      <button id="btn1">Button 1</button>
      <button id="btn2">Button 2</button>
      <script>
        for (let i = 0; i < 3; i++) {
          document.getElementById(`btn${i}`).addEventListener("click", () => console.log(i));
        }
      </script>
      ```
    - **Expected Answer**: Clicking outputs: 0, 1, 2 (block-scoped)

20. **Use `const` with Destructuring and Defaults** (connecting to prior content)
    - **Description**: Combine `const` with object destructuring and default parameters.
    - **Task**: Use `const` to destructure an object with a default value and log the result.
    - **Example**:
      ```html
      <script>
        const { name = "Guest", ...rest } = { age: 29 };
        console.log(name, rest);
      </script>
      ```
    - **Expected Answer**: Outputs: Guest, { age: 29 }