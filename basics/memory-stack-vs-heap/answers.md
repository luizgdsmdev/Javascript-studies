1. **Declaring Primitive Variables**
   - **Description**: Declare three primitive variables (`number`, `string`, `boolean`) without assigning values. Log their values using `console.log`. Explain where these variables are allocated and why their initial value is `undefined`.
   - **Task**: Write the code and explain the memory allocation.
   - **Example**:
     ```javascript
     let number;
     let string;
     let boolean;
     console.log(number, string, boolean);
     ```
   - **Expected Answer**: Variables are allocated in the **stack** with the value `undefined` because they are uninitialized.

2. **Assigning Primitive Values**
   - **Description**: Assign values to the variables from Exercise 1 (e.g., `number = 42`, `string = "Hello"`, `boolean = true`). Log the values and explain how the stack memory is updated.
   - **Task**: Write the code and describe the stack update process.
   - **Example**:
     ```javascript
     let number = 42;
     let string = "Hello";
     let boolean = true;
     console.log(number, string, boolean);
     ```
   - **Expected Answer**: Values are stored directly in the stack, overwriting `undefined`.

3. **Declaring Objects and Arrays**
   - **Description**: Declare an object, an array, and a function using `let`. Log their values. Explain where the data and references are stored.
   - **Task**: Write the code and identify stack vs. heap allocation.
   - **Example**:
     ```javascript
     let obj = {};
     let arr = [];
     let fn = function() {};
     console.log(obj, arr, fn);
     ```
   - **Expected Answer**: References (`obj`, `arr`, `fn`) are in the stack; actual data (object, array, function) is in the heap.

4. **Pass-by-Value with Primitives**
   - **Description**: Create two variables, assign a primitive value to the first, and copy it to the second. Modify the second variable and log both. Explain why the first variable is unaffected.
   - **Task**: Write the code and explain pass-by-value.
   - **Example**:
     ```javascript
     let a = 10;
     let b = a;
     b = 20;
     console.log(a, b);
     ```
   - **Expected Answer**: Primitives are passed by value in the stack, so `b` is a copy and doesn’t affect `a`.

5. **Pass-by-Reference with Objects**
   - **Description**: Create an object and assign it to two variables. Modify a property via the second variable and log both. Explain why both variables reflect the change.
   - **Task**: Write the code and explain pass-by-reference.
   - **Example**:
     ```javascript
     let obj1 = { value: 10 };
     let obj2 = obj1;
     obj2.value = 20;
     console.log(obj1, obj2);
     ```
   - **Expected Answer**: Objects are passed by reference; both variables point to the same heap object.

6. **Reassigning Objects**
   - **Description**: Create an object and reassign a new object to the same variable. Log the result. Explain what happens to the original object in memory.
   - **Task**: Write the code and describe heap allocation.
   - **Example**:
     ```javascript
     let obj = { value: 10 };
     obj = { value: 20 };
     console.log(obj);
     ```
   - **Expected Answer**: A new object is allocated in the heap; the original object becomes unreachable and is eligible for garbage collection.

7. **Function Call Stack**
   - **Description**: Write a function that calls another function. Log a message in each. Explain how the call stack manages these calls.
   - **Task**: Write the code and describe stack frame creation.
   - **Example**:
     ```javascript
     function inner() { console.log("Inner function"); }
     function outer() { inner(); console.log("Outer function"); }
     outer();
     ```
   - **Expected Answer**: Each function call creates a stack frame; frames are popped after execution.

8. **Setting Variables to null**
   - **Description**: Create an object and an array, then set both to `null`. Explain what happens to the heap memory.
   - **Task**: Write the code and explain garbage collection eligibility.
   - **Example**:
     ```javascript
     let obj = { value: 10 };
     let arr = [1, 2, 3];
     obj = null;
     arr = null;
     ```
   - **Expected Answer**: Setting to `null` removes stack references; heap data becomes unreachable and eligible for garbage collection.

9. **Primitive vs. Object Assignment**
   - **Description**: Assign a primitive and an object to two variables each. Modify the second variables and log both. Compare the behavior.
   - **Task**: Write the code and explain the difference.
   - **Example**:
     ```javascript
     let num1 = 10;
     let num2 = num1;
     num2 = 20;
     let obj1 = { value: 10 };
     let obj2 = obj1;
     obj2.value = 20;
     console.log(num1, num2, obj1, obj2);
     ```
   - **Expected Answer**: Primitives are copied (stack); objects share references (heap).

10. **Variable Scope and Stack**
    - **Description**: Declare a variable inside a function and log it outside. Explain why it’s inaccessible and how the stack handles it.
    - **Task**: Write the code and explain scope and stack cleanup.
    - **Example**:
      ```javascript
      function test() {
          let localVar = 42;
      }
      test();
      console.log(localVar); // Error
      ```
    - **Expected Answer**: `localVar` is in the function’s stack frame, which is popped after execution, making it inaccessible.

### Intermediate (Exercises 11–20): Closures, Garbage Collection, and References
These exercises explore closures, reference management, and garbage collection mechanics.

11. **Creating a Closure**
    - **Description**: Write a function that returns an inner function accessing an outer variable. Call the inner function and explain how the heap retains the closure.
    - **Task**: Write the code and describe heap/stack interaction.
    - **Example**:
      ```javascript
      function outer(data) {
          let inner = () => console.log(data);
          return inner;
      }
      let fn = outer("Hello");
      fn();
      ```
    - **Expected Answer**: The inner function and `data` are retained in the heap due to the closure; `fn` references it from the stack.

12. **Closure Memory Retention**
    - **Description**: Modify the closure from Exercise 11 to store a large array in the outer function. Explain why the array persists in memory after the outer function ends.
    - **Task**: Write the code and explain heap retention.
    - **Example**:
      ```javascript
      function outer() {
          let largeArray = new Array(1000).fill("data");
          return () => console.log(largeArray.length);
      }
      let fn = outer();
      fn();
      ```
    - **Expected Answer**: The array is retained in the heap because the inner function references it.

13. **Breaking a Closure**
    - **Description**: Take the closure from Exercise 11 and set the outer reference to `null`. Explain if the closure’s data is garbage-collected.
    - **Task**: Write the code and analyze garbage collection.
    - **Example**:
      ```javascript
      let fn = outer("Hello");
      fn();
      fn = null;
      ```
    - **Expected Answer**: Setting `fn` to `null` removes the reference, making the closure’s heap data eligible for garbage collection.

14. **Cyclic References**
    - **Description**: Create two objects that reference each other. Set both to `null` and explain how mark-and-sweep handles the cycle.
    - **Task**: Write the code and describe garbage collection.
    - **Example**:
      ```javascript
      let obj1 = {};
      let obj2 = {};
      obj1.ref = obj2;
      obj2.ref = obj1;
      obj1 = null;
      obj2 = null;
      ```
    - **Expected Answer**: Mark-and-sweep detects the cycle as unreachable and collects both objects.

15. **Global Variable Leak**
    - **Description**: Create a function that accidentally creates a global variable. Explain why it causes a memory leak.
    - **Task**: Write the code and suggest a fix.
    - **Example**:
      ```javascript
      function leak() {
          globalVar = "I’m global";
      }
      leak();
      ```
    - **Expected Answer**: `globalVar` persists in the global scope (heap); fix by using `let` or `const`.

16. **Event Listener Memory Leak**
    - **Description**: Add an event listener to a DOM element but don’t remove it. Explain how this causes a memory leak.
    - **Task**: Write the code and suggest a fix.
    - **Example**:
      ```javascript
      let button = document.querySelector("button");
      button.addEventListener("click", () => console.log("Clicked"));
      ```
    - **Expected Answer**: The listener retains the callback in the heap; fix by using `removeEventListener`.

17. **Clearing a Timer**
    - **Description**: Create a `setInterval` timer and clear it after a condition. Explain how this prevents a memory leak.
    - **Task**: Write the code and describe the memory impact.
    - **Example**:
      ```javascript
      let count = 0;
      let timer = setInterval(() => {
          console.log(count++);
          if (count > 3) clearInterval(timer);
      }, 1000);
      ```
    - **Expected Answer**: Clearing the timer removes the callback reference, allowing heap collection.

18. **Class Instance Memory**
    - **Description**: Create a class, instantiate it, and set the instance to `null`. Explain what happens to the instance in memory.
    - **Task**: Write the code and describe garbage collection.
    - **Example**:
      ```javascript
      class Person {
          constructor(name) { this.name = name; }
      }
      let person = new Person("Luiz");
      person = null;
      ```
    - **Expected Answer**: The instance becomes unreachable and is collected by the garbage collector.

19. **Array of Objects**
    - **Description**: Create an array of objects, then remove one object by setting its index to `null`. Explain the memory impact.
    - **Task**: Write the code and analyze heap behavior.
    - **Example**:
      ```javascript
      let arr = [{ value: 1 }, { value: 2 }];
      arr[0] = null;
      ```
    - **Expected Answer**: The first object becomes unreachable and is eligible for garbage collection.

20. **Function Reassignment**
    - **Description**: Assign a new function to a variable previously holding a function. Explain what happens to the original function in memory.
    - **Task**: Write the code and describe heap behavior.
    - **Example**:
      ```javascript
      let fn = function() { console.log("Old"); };
      fn = function() { console.log("New"); };
      ```
    - **Expected Answer**: The original function becomes unreachable and is eligible for garbage collection.

### Advanced (Exercises 21–30): Complex Scenarios and Optimization
These exercises involve complex memory scenarios, closures, and memory optimization techniques.

21. **Large Closure Memory**
    - **Description**: Create a closure that retains a large object. Call it multiple times and explain the memory implications.
    - **Task**: Write the code and suggest optimization.
    - **Example**:
      ```javascript
      function createClosure() {
          let largeObj = new Array(10000).fill("data");
          return () => largeObj.length;
      }
      let fn1 = createClosure();
      let fn2 = createClosure();
      ```
    - **Expected Answer**: Each closure retains a separate large object in the heap; optimize by sharing the object or limiting closure scope.

22. **Memory Leak with Event Listeners**
    - **Description**: Create a function that adds multiple event listeners to a DOM element without removing them. Fix the leak.
    - **Task**: Write the code and provide a cleanup function.
    - **Example**:
      ```javascript
      function addListeners() {
          let button = document.querySelector("button");
          button.addEventListener("click", () => console.log("Click"));
      }
      ```
    - **Expected Answer**: Add `removeEventListener` in a cleanup function to free heap memory.

23. **Recursive Function Stack**
    - **Description**: Write a recursive function that calls itself 5 times. Explain how the call stack manages memory.
    - **Task**: Write the code and describe stack behavior.
    - **Example**:
      ```javascript
      function recurse(count) {
          if (count <= 0) return;
          console.log(count);
          recurse(count - 1);
      }
      recurse(5);
      ```
    - **Expected Answer**: Each call creates a stack frame; frames are popped after completion.

24. **Cyclic Reference with Closures**
    - **Description**: Create a closure where two objects reference each other and are retained. Break the cycle and explain garbage collection.
    - **Task**: Write the code and describe mark-and-sweep.
    - **Example**:
      ```javascript
      function createCycle() {
          let obj1 = {};
          let obj2 = { fn: () => console.log(obj1) };
          obj1.ref = obj2;
          return obj2.fn;
      }
      let fn = createCycle();
      fn = null;
      ```
    - **Expected Answer**: Mark-and-sweep collects the cycle when `fn` is nullified.

25. **Memory Usage Monitoring**
    - **Description**: Create a function that allocates 1000 objects in an array, then clears half. Use browser dev tools to monitor memory usage.
    - **Task**: Write the code and describe how to use Chrome DevTools.
    - **Example**:
      ```javascript
      let arr = [];
      for (let i = 0; i < 1000; i++) arr.push({ id: i });
      arr.splice(0, 500);
      ```
    - **Expected Answer**: Use DevTools’ Memory tab to observe heap reduction after splice.

26. **Timer Memory Leak**
    - **Description**: Create a `setInterval` that retains a large object. Fix the leak by clearing the timer.
    - **Task**: Write the code and provide a fix.
    - **Example**:
      ```javascript
      let obj = new Array(1000).fill("data");
      let timer = setInterval(() => console.log(obj.length), 1000);
      ```
    - **Expected Answer**: Call `clearInterval(timer)` to allow `obj` to be collected.

27. **Class with Multiple Instances**
    - **Description**: Create a class and instantiate it multiple times. Set some instances to `null` and explain memory impact.
    - **Task**: Write the code and analyze garbage collection.
    - **Example**:
      ```javascript
      class Item { constructor(id) { this.id = id; } }
      let items = [new Item(1), new Item(2)];
      items[0] = null;
      ```
    - **Expected Answer**: The first instance is eligible for garbage collection.

28. **Nested Closures**
    - **Description**: Create a function with two nested closures, each retaining different data. Explain memory retention.
    - **Task**: Write the code and describe heap usage.
    - **Example**:
      ```javascript
      function outer() {
          let data1 = "First";
          let inner1 = () => console.log(data1);
          let data2 = "Second";
          let inner2 = () => console.log(data2);
          return [inner1, inner2];
      }
      let fns = outer();
      ```
    - **Expected Answer**: Both `data1` and `data2` are retained in the heap by their respective closures.

29. **Optimizing Object Creation**
    - **Description**: Write a function that creates 1000 objects in a loop. Optimize it to reuse a single object.
    - **Task**: Write both versions and compare memory usage.
    - **Example**:
      ```javascript
      function unoptimized() {
          let arr = [];
          for (let i = 0; i < 1000; i++) arr.push({ id: i });
      }
      function optimized() {
          let obj = {};
          let arr = [];
          for (let i = 0; i < 1000; i++) {
              obj.id = i;
              arr.push(obj);
          }
      }
      ```
    - **Expected Answer**: The optimized version reuses one heap object, reducing memory usage.

30. **Simulating a Memory Leak**
    - **Description**: Create a function that continuously adds objects to a global array without clearing it. Fix the leak.
    - **Task**: Write the code and provide a cleanup solution.
    - **Example**:
      ```javascript
      let globalArr = [];
      function leak() {
          globalArr.push(new Array(1000).fill("data"));
      }
      ```
    - **Expected Answer**: Clear `globalArr` or limit its growth to allow garbage collection.
