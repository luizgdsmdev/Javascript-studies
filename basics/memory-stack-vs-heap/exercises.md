1. **Declaring Primitive Variables**
   - **Description**: Declare three primitive variables (`number`, `string`, `boolean`) without assigning values. Log their values using `console.log`. Explain where these variables are allocated and why their initial value is `undefined`.
   - **Task**: Write the code and explain the memory allocation.

2. **Assigning Primitive Values**
   - **Description**: Assign values to the variables from Exercise 1 (e.g., `number = 42`, `string = "Hello"`, `boolean = true`). Log the values and explain how the stack memory is updated.
   - **Task**: Write the code and describe the stack update process.

3. **Declaring Objects and Arrays**
   - **Description**: Declare an object, an array, and a function using `let`. Log their values. Explain where the data and references are stored.
   - **Task**: Write the code and identify stack vs. heap allocation.

4. **Pass-by-Value with Primitives**
   - **Description**: Create two variables, assign a primitive value to the first, and copy it to the second. Modify the second variable and log both. Explain why the first variable is unaffected.
   - **Task**: Write the code and explain pass-by-value.

5. **Pass-by-Reference with Objects**
   - **Description**: Create an object and assign it to two variables. Modify a property via the second variable and log both. Explain why both variables reflect the change.
   - **Task**: Write the code and explain pass-by-reference.

6. **Reassigning Objects**
   - **Description**: Create an object and reassign a new object to the same variable. Log the result. Explain what happens to the original object in memory.
   - **Task**: Write the code and describe heap allocation.

7. **Function Call Stack**
   - **Description**: Write a function that calls another function. Log a message in each. Explain how the call stack manages these calls.
   - **Task**: Write the code and describe stack frame creation.

8. **Setting Variables to null**
   - **Description**: Create an object and an array, then set both to `null`. Explain what happens to the heap memory.
   - **Task**: Write the code and explain garbage collection eligibility.

9. **Primitive vs. Object Assignment**
   - **Description**: Assign a primitive and an object to two variables each. Modify the second variables and log both. Compare the behavior.
   - **Task**: Write the code and explain the difference.

10. **Variable Scope and Stack**
    - **Description**: Declare a variable inside a function and log it outside. Explain why it’s inaccessible and how the stack handles it.
    - **Task**: Write the code and explain scope and stack cleanup.

11. **Creating a Closure**
    - **Description**: Write a function that returns an inner function accessing an outer variable. Call the inner function and explain how the heap retains the closure.
    - **Task**: Write the code and describe heap/stack interaction.

12. **Closure Memory Retention**
    - **Description**: Modify the closure from Exercise 11 to store a large array in the outer function. Explain why the array persists in memory after the outer function ends.
    - **Task**: Write the code and explain heap retention.

13. **Breaking a Closure**
    - **Description**: Take the closure from Exercise 11 and set the outer reference to `null`. Explain if the closure’s data is garbage-collected.
    - **Task**: Write the code and analyze garbage collection.

14. **Cyclic References**
    - **Description**: Create two objects that reference each other. Set both to `null` and explain how mark-and-sweep handles the cycle.
    - **Task**: Write the code and describe garbage collection.

15. **Global Variable Leak**
    - **Description**: Create a function that accidentally creates a global variable. Explain why it causes a memory leak.
    - **Task**: Write the code and suggest a fix.

16. **Event Listener Memory Leak**
    - **Description**: Add an event listener to a DOM element but don’t remove it. Explain how this causes a memory leak.
    - **Task**: Write the code and suggest a fix.

17. **Clearing a Timer**
    - **Description**: Create a `setInterval` timer and clear it after a condition. Explain how this prevents a memory leak.
    - **Task**: Write the code and describe the memory impact.

18. **Class Instance Memory**
    - **Description**: Create a class, instantiate it, and set the instance to `null`. Explain what happens to the instance in memory.
    - **Task**: Write the code and describe garbage collection.

19. **Array of Objects**
    - **Description**: Create an array of objects, then remove one object by setting its index to `null`. Explain the memory impact.
    - **Task**: Write the code and analyze heap behavior.

20. **Function Reassignment**
    - **Description**: Assign a new function to a variable previously holding a function. Explain what happens to the original function in memory.
    - **Task**: Write the code and describe heap behavior.

21. **Large Closure Memory**
    - **Description**: Create a closure that retains a large object. Call it multiple times and explain the memory implications.
    - **Task**: Write the code and suggest optimization.

22. **Memory Leak with Event Listeners**
    - **Description**: Create a function that adds multiple event listeners to a DOM element without removing them. Fix the leak.
    - **Task**: Write the code and provide a cleanup function.

23. **Recursive Function Stack**
    - **Description**: Write a recursive function that calls itself 5 times. Explain how the call stack manages memory.
    - **Task**: Write the code and describe stack behavior.

24. **Cyclic Reference with Closures**
    - **Description**: Create a closure where two objects reference each other and are retained. Break the cycle and explain garbage collection.
    - **Task**: Write the code and describe mark-and-sweep.

25. **Memory Usage Monitoring**
    - **Description**: Create a function that allocates 1000 objects in an array, then clears half. Use browser dev tools to monitor memory usage.
    - **Task**: Write the code and describe how to use Chrome DevTools.

26. **Timer Memory Leak**
    - **Description**: Create a `setInterval` that retains a large object. Fix the leak by clearing the timer.
    - **Task**: Write the code and provide a fix.

27. **Class with Multiple Instances**
    - **Description**: Create a class and instantiate it multiple times. Set some instances to `null` and explain memory impact.
    - **Task**: Write the code and analyze garbage collection.

28. **Nested Closures**
    - **Description**: Create a function with two nested closures, each retaining different data. Explain memory retention.
    - **Task**: Write the code and describe heap usage.

29. **Optimizing Object Creation**
    - **Description**: Write a function that creates 1000 objects in a loop. Optimize it to reuse a single object.
    - **Task**: Write both versions and compare memory usage.

30. **Simulating a Memory Leak**
    - **Description**: Create a function that continuously adds objects to a global array without clearing it. Fix the leak.
    - **Task**: Write the code and provide a cleanup solution.