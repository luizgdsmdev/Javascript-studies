### Practical Exercises on Arrays in JavaScript

1. **Creating a Simple Array**
   - **Question and Requirements**: Create an array named `fruits` with 3 fruits of your choice using the bracket syntax `[]`. Print the array to the console. Use `let` as the keyword.
   - **Expected Output**:
     ```
     ['apple', 'banana', 'orange']
     ```

2. **Type Verification**
   - **Question and Requirements**: Create an array named `numbers` with the values `[10, 20, 30]`. Use `typeof` and `Array.isArray()` to check its type and confirm it’s an array. Print both results.
   - **Expected Output**:
     ```
     object
     true
     ```

3. **Accessing Elements**
   - **Question and Requirements**: Given the array `colors = ['red', 'blue', 'green']`, access and print the second element using index notation.
   - **Expected Output**:
     ```
     blue
     ```

4. **Using .at() with Negative Index**
   - **Question and Requirements**: Given the array `animals = ['cat', 'dog', 'bird']`, use the `.at()` method to access the last element and print it.
   - **Expected Output**:
     ```
     bird
     ```

5. **Length Property**
   - **Question and Requirements**: Create an array named `items` with 5 elements of different types (e.g., number, string, boolean, null, object). Print the value of the `length` property.
   - **Expected Output**:
     ```
     5
     ```

6. **Modifying Elements (Mutability)**
   - **Question and Requirements**: Given the array `numbers = [1, 2, 3]`, change the second element to `10` and print the modified array.
   - **Expected Output**:
     ```
     [1, 10, 3]
     ```

7. **Array with const**
   - **Question and Requirements**: Create an array with `const` named `values` with `[4, 5, 6]`. Modify the first element to `1`. Then, try reassigning the array to `[7, 8, 9]` and explain the result in a comment.
   - **Expected Output**:
     ```
     [1, 5, 6]
     ```

8. **Multidimensional Array**
   - **Question and Requirements**: Create a two-dimensional array named `matrix` with two rows, each containing 3 numbers. Access and print the element in the first row, second column.
   - **Expected Output**:
     ```
     2
     ```

9. **Using .push()**
   - **Question and Requirements**: Given the array `list = ['a', 'b']`, use `.push()` to add `'c'` and `'d'` to the end. Print the new length and the array.
   - **Expected Output**:
     ```
     4
     ['a', 'b', 'c', 'd']
     ```

10. **Using .pop()**
    - **Question and Requirements**: Given the array `numbers = [10, 20, 30, 40]`, use `.pop()` to remove the last element. Print the removed element and the resulting array.
    - **Expected Output**:
      ```
      40
      [10, 20, 30]
      ```

11. **Using .unshift()**
    - **Question and Requirements**: Given the array `values = [2, 3, 4]`, use `.unshift()` to add `0` and `1` to the beginning. Print the new length and the array.
    - **Expected Output**:
      ```
      5
      [0, 1, 2, 3, 4]
      ```

12. **Using .shift()**
    - **Question and Requirements**: Given the array `items = ['apple', 'banana', 'orange']`, use `.shift()` to remove the first element. Print the removed element and the resulting array.
    - **Expected Output**:
      ```
      apple
      ['banana', 'orange']
      ```

13. **Using .slice()**
    - **Question and Requirements**: Given the array `numbers = [1, 2, 3, 4, 5]`, use `.slice()` to extract elements from index 1 to 3 (exclusive). Print the new array and the original array to verify it wasn’t modified.
    - **Expected Output**:
      ```
      [2, 3]
      [1, 2, 3, 4, 5]
      ```

14. **Using .slice() with Negative Indices**
    - **Question and Requirements**: Given the array `colors = ['red', 'blue', 'green', 'yellow']`, use `.slice()` with negative indices to extract the last two elements. Print the result.
    - **Expected Output**:
      ```
      ['green', 'yellow']
      ```

15. **Using .splice() to Remove**
    - **Question and Requirements**: Given the array `values = [10, 20, 30, 40, 50]`, use `.splice()` to remove the elements at indices 1 and 2. Print the removed elements and the resulting array.
    - **Expected Output**:
      ```
      [20, 30]
      [10, 40, 50]
      ```

16. **Using .splice() to Add**
    - **Question and Requirements**: Given the array `list = ['a', 'b', 'c']`, use `.splice()` to add `'x'` and `'y'` at index 1 without removing elements. Print the returned value and the resulting array.
    - **Expected Output**:
      ```
      []
      ['a', 'x', 'y', 'b', 'c']
      ```

17. **Using .forEach()**
    - **Question and Requirements**: Given the array `numbers = [1, 2, 3]`, use `.forEach()` to print each element with its index in the format `Index X: Value Y`.
    - **Expected Output**:
      ```
      Index 0: Value 1
      Index 1: Value 2
      Index 2: Value 3
      ```

18. **Using .map()**
    - **Question and Requirements**: Given the array `values = [1, 2, 3, 4]`, use `.map()` to create a new array with each element multiplied by 3. Print the new array and the original array to verify it wasn’t modified.
    - **Expected Output**:
      ```
      [3, 6, 9, 12]
      [1, 2, 3, 4]
      ```

19. **Memory Reference**
    - **Question and Requirements**: Create an array `arrayA = [1, 2, 3]` and assign it to `arrayB`. Modify the first element of `arrayB` to `10` and print `arrayA` to show the impact. Then, create an independent copy of `arrayA` using the spread operator, modify its first element to `20`, and print both arrays.
    - **Expected Output**:
      ```
      [10, 2, 3]
      [10, 2, 3]
      [20, 2, 3]
      ```

20. **Sparse Array**
    - **Question and Requirements**: Create a sparse array by assigning a value `'value'` to index 5 of an empty array. Print the array and its length.
    - **Expected Output**:
      ```
      [ , , , , , 'value']
      6
      ```

21. **Multidimensional Array Access**
    - **Question and Requirements**: Given the array `matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]`, write a function `getMatrixElement` that takes a matrix, row, and column as arguments and returns the element at that position. Handle invalid indices by returning `'Invalid indices'`. Test with row 1, column 2, and an invalid case (row 3, column 0).
    - **Expected Output**:
      ```
      6
      Invalid indices
      ```

22. **Using .forEach() to Mutate**
    - **Question and Requirements**: Given the array `numbers = [1, 2, 3, 4]`, use `.forEach()` to double each element in place. Print the modified array.
    - **Expected Output**:
      ```
      [2, 4, 6, 8]
      ```

23. **Using .filter()**
    - **Question and Requirements**: Given the array `values = [10, 15, 20, 25, 30]`, use `.filter()` to create a new array with only values greater than 15. Print the new array.
    - **Expected Output**:
      ```
      [20, 25, 30]
      ```

24. **Using .reduce()**
    - **Question and Requirements**: Given the array `numbers = [1, 2, 3, 4]`, use `.reduce()` to calculate the sum of all elements. Print the result.
    - **Expected Output**:
      ```
      10
      ```

25. **Using .some() and .find()**
    - **Question and Requirements**: Given the array `values = [5, 10, 15, 20]`, use `.some()` to check if any value is greater than 10, and use `.find()` to get the first value greater than 10. Print both results.
    - **Expected Output**:
      ```
      true
      15
      ```