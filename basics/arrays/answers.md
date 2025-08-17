1. **Creating a Simple Array**
   - **Question and Requirements**: Create an array named `fruits` with 3 fruits of your choice using the bracket syntax `[]`. Print the array to the console. Use `let` as the keyword.
   - **Code Answer**:
     ```javascript
     let fruits = ['apple', 'banana', 'orange']; // Create array with 3 fruits
     console.log(fruits); // Print the array
     ```

2. **Type Verification**
   - **Question and Requirements**: Create an array named `numbers` with the values `[10, 20, 30]`. Use `typeof` and `Array.isArray()` to check its type and confirm it’s an array. Print both results.
   - **Code Answer**:
     ```javascript
     let numbers = [10, 20, 30]; // Create array
     console.log(typeof numbers); // Check type
     console.log(Array.isArray(numbers)); // Confirm it's an array
     ```

3. **Accessing Elements**
   - **Question and Requirements**: Given the array `colors = ['red', 'blue', 'green']`, access and print the second element using index notation.
   - **Code Answer**:
     ```javascript
     let colors = ['red', 'blue', 'green']; // Given array
     console.log(colors[1]); // Access second element (index 1)
     ```
4. **Using .at() with Negative Index**
   - **Question and Requirements**: Given the array `animals = ['cat', 'dog', 'bird']`, use the `.at()` method to access the last element and print it.
   - **Code Answer**:
     ```javascript
     let animals = ['cat', 'dog', 'bird']; // Given array
     console.log(animals.at(-1)); // Access last element with negative index
     ```
    
5. **Length Property**
   - **Question and Requirements**: Create an array named `items` with 5 elements of different types (e.g., number, string, boolean, null, object). Print the value of the `length` property.
   - **Code Answer**:
     ```javascript
     let items = [1, 'a', true, null, {}]; // Array with 5 elements
     console.log(items.length); // Print length
     ```

6. **Modifying Elements (Mutability)**
   - **Question and Requirements**: Given the array `numbers = [1, 2, 3]`, change the second element to `10` and print the modified array.
   - **Code Answer**:
     ```javascript
     let numbers = [1, 2, 3]; // Given array
     numbers[1] = 10; // Modify second element
     console.log(numbers); // Print modified array
     ```

7. **Array with const**
   - **Question and Requirements**: Create an array with `const` named `values` with `[4, 5, 6]`. Modify the first element to `1`. Then, try reassigning the array to `[7, 8, 9]` and explain the result in a comment.
   - **Code Answer**:
     ```javascript
     const values = [4, 5, 6]; // Create array with const
     values[0] = 1; // Modify first element (valid)
     console.log(values); // Print modified array
     // values = [7, 8, 9]; // Error: Assignment to constant variable
     // Explanation: The array is mutable, but the reference cannot be reassigned with const.
     ```

8. **Multidimensional Array**
   - **Question and Requirements**: Create a two-dimensional array named `matrix` with two rows, each containing 3 numbers. Access and print the element in the first row, second column.
   - **Code Answer**:
     ```javascript
     let matrix = [[1, 2, 3], [4, 5, 6]]; // Create 2x3 matrix
     console.log(matrix[0][1]); // Access first row (0), second column (1)
     ```

9. **Using .push()**
   - **Question and Requirements**: Given the array `list = ['a', 'b']`, use `.push()` to add `'c'` and `'d'` to the end. Print the new length and the array.
   - **Code Answer**:
     ```javascript
     let list = ['a', 'b']; // Given array
     console.log(list.push('c', 'd')); // Add elements and print new length
     console.log(list); // Print modified array
     ```

10. **Using .pop()**
    - **Question and Requirements**: Given the array `numbers = [10, 20, 30, 40]`, use `.pop()` to remove the last element. Print the removed element and the resulting array.
    - **Code Answer**:
      ```javascript
      let numbers = [10, 20, 30, 40]; // Given array
      console.log(numbers.pop()); // Remove and print last element
      console.log(numbers); // Print resulting array
      ```

11. **Using .unshift()**
    - **Question and Requirements**: Given the array `values = [2, 3, 4]`, use `.unshift()` to add `0` and `1` to the beginning. Print the new length and the array.
    - **Code Answer**:
      ```javascript
      let values = [2, 3, 4]; // Given array
      console.log(values.unshift(0, 1)); // Add elements and print new length
      console.log(values); // Print modified array
      ```

12. **Using .shift()**
    - **Question and Requirements**: Given the array `items = ['apple', 'banana', 'orange']`, use `.shift()` to remove the first element. Print the removed element and the resulting array.
    - **Code Answer**:
      ```javascript
      let items = ['apple', 'banana', 'orange']; // Given array
      console.log(items.shift()); // Remove and print first element
      console.log(items); // Print resulting array
      ```

13. **Using .slice()**
    - **Question and Requirements**: Given the array `numbers = [1, 2, 3, 4, 5]`, use `.slice()` to extract elements from index 1 to 3 (exclusive). Print the new array and the original array to verify it wasn’t modified.
    - **Code Answer**:
      ```javascript
      let numbers = [1, 2, 3, 4, 5]; // Given array
      console.log(numbers.slice(1, 3)); // Extract elements
      console.log(numbers); // Verify original array
      ```

14. **Using .slice() with Negative Indices**
    - **Question and Requirements**: Given the array `colors = ['red', 'blue', 'green', 'yellow']`, use `.slice()` with negative indices to extract the last two elements. Print the result.
    - **Code Answer**:
      ```javascript
      let colors = ['red', 'blue', 'green', 'yellow']; // Given array
      console.log(colors.slice(-2)); // Extract last two elements
      ```

15. **Using .splice() to Remove**
    - **Question and Requirements**: Given the array `values = [10, 20, 30, 40, 50]`, use `.splice()` to remove the elements at indices 1 and 2. Print the removed elements and the resulting array.
    - **Code Answer**:
      ```javascript
      let values = [10, 20, 30, 40, 50]; // Given array
      console.log(values.splice(1, 2)); // Remove elements at indices 1 and 2
      console.log(values); // Print resulting array
      ```

16. **Using .splice() to Add**
    - **Question and Requirements**: Given the array `list = ['a', 'b', 'c']`, use `.splice()` to add `'x'` and `'y'` at index 1 without removing elements. Print the returned value and the resulting array.
    - **Code Answer**:
      ```javascript
      let list = ['a', 'b', 'c']; // Given array
      console.log(list.splice(1, 0, 'x', 'y')); // Add elements at index 1
      console.log(list); // Print resulting array
      ```

17. **Using .forEach()**
    - **Question and Requirements**: Given the array `numbers = [1, 2, 3]`, use `.forEach()` to print each element with its index in the format `Index X: Value Y`.
    - **Code Answer**:
      ```javascript
      let numbers = [1, 2, 3]; // Given array
      numbers.forEach((num, index) => console.log(`Index ${index}: Value ${num}`)); // Print index and value
      ```

18. **Using .map()**
    - **Question and Requirements**: Given the array `values = [1, 2, 3, 4]`, use `.map()` to create a new array with each element multiplied by 3. Print the new array and the original array to verify it wasn’t modified.
    - **Code Answer**:
      ```javascript
      let values = [1, 2, 3, 4]; // Given array
      let tripled = values.map(num => num * 3); // Create new array with elements multiplied by 3
      console.log(tripled); // Print new array
      console.log(values); // Print original array
      ```

19. **Memory Reference**
    - **Question and Requirements**: Create an array `arrayA = [1, 2, 3]` and assign it to `arrayB`. Modify the first element of `arrayB` to `10` and print `arrayA` to show the impact. Then, create an independent copy of `arrayA` using the spread operator, modify its first element to `20`, and print both arrays.
    - **Code Answer**:
      ```javascript
      let arrayA = [1, 2, 3]; // Create array
      let arrayB = arrayA; // Assign reference
      arrayB[0] = 10; // Modify arrayB
      console.log(arrayA); // Print arrayA (affected)

      let arrayC = [...arrayA]; // Create independent copy
      arrayC[0] = 20; // Modify copy
      console.log(arrayA); // Print original array
      console.log(arrayC); // Print modified copy
      ```

20. **Sparse Array**
    - **Question and Requirements**: Create a sparse array by assigning a value `'value'` to index 5 of an empty array. Print the array and its length.
    - **Code Answer**:
      ```javascript
      let sparse = []; // Create empty array
      sparse[5] = 'value'; // Assign value to index 5
      console.log(sparse); // Print sparse array
      console.log(sparse.length); // Print length
      ```

21. **Multidimensional Array Access**
    - **Question and Requirements**: Given the array `matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]`, write a function `getMatrixElement` that takes a matrix, row, and column as arguments and returns the element at that position. Handle invalid indices by returning `'Invalid indices'`. Test with row 1, column 2, and an invalid case (row 3, column 0).
    - **Code Answer**:
      ```javascript
      function getMatrixElement(matrix, row, col) {
        if (row >= matrix.length || col >= matrix[0].length) return 'Invalid indices'; // Check for invalid indices
        return matrix[row][col]; // Return element
      }
      let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // Given matrix
      console.log(getMatrixElement(matrix, 1, 2)); // Access row 1, column 2
      console.log(getMatrixElement(matrix, 3, 0)); // Test invalid indices
      ```

22. **Using .forEach() to Mutate**
    - **Question and Requirements**: Given the array `numbers = [1, 2, 3, 4]`, use `.forEach()` to double each element in place. Print the modified array.
    - **Code Answer**:
      ```javascript
      let numbers = [1, 2, 3, 4]; // Given array
      numbers.forEach((num, index, arr) => arr[index] = num * 2); // Double each element in place
      console.log(numbers); // Print modified array
      ```

23. **Using .filter()**
    - **Question and Requirements**: Given the array `values = [10, 15, 20, 25, 30]`, use `.filter()` to create a new array with only values greater than 15. Print the new array.
    - **Code Answer**:
      ```javascript
      let values = [10, 15, 20, 25, 30]; // Given array
      let filtered = values.filter(num => num > 15); // Filter values greater than 15
      console.log(filtered); // Print new array
      ```

24. **Using .reduce()**
    - **Question and Requirements**: Given the array `numbers = [1, 2, 3, 4]`, use `.reduce()` to calculate the sum of all elements. Print the result.
    - **Code Answer**:
      ```javascript
      let numbers = [1, 2, 3, 4]; // Given array
      let sum = numbers.reduce((acc, num) => acc + num, 0); // Calculate sum
      console.log(sum); // Print result
      ```

25. **Using .some() and .find()**
    - **Question and Requirements**: Given the array `values = [5, 10, 15, 20]`, use `.some()` to check if any value is greater than 10, and use `.find()` to get the first value greater than 10. Print both results.
    - **Code Answer**:
      ```javascript
      let values = [5, 10, 15, 20]; // Given array
      console.log(values.some(num => num > 10)); // Check if any value > 10
      console.log(values.find(num => num > 10)); // Find first value > 10
      ```