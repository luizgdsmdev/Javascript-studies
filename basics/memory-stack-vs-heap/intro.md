### Memory in JavaScript
This section is meant to cover everything we should know about Memory in JavaScript.  
- [What is Memory in JavaScript](#what-is-memory-in-javascript)
- [Stack Memory](#stack-memory)
- [Heap Memory](#heap-memory)
- [How Stack and Heap Work Together](#how-stack-and-heap-work-together)
- [Memory Allocation and Deallocation](#memory-allocation-and-deallocation)
- [Garbage Collection and Mark-and-Sweep Algorithm](#garbage-collection-and-mark-and-sweep-algorithm)
- [Memory Leaks and Best Practices](#memory-leaks-and-best-practices)


Go back to [basics listing](https://github.com/luizgdsmdev/-Javascript-studies/blob/main/basics/intro.md).  

#### What is Memory in JavaScript
Memory here could be defined as the **dynamic storage space** where data is **allocated during** the program execution, following the **allocation**, **usage*,* and **release** of memory. JavaScript is a **high-level language,** meaning that most of the memory processes are automatically handled by the engine, but understanding the underlying process behind it is crucial to develop good solutions.   
In this context, the basic life cycle of memory in JavaScript would be:
- **Memory allocation**: it's when anything inside your program is **created/declared**, like the declaration of variables, functions, objects, arrays, and so on. At this moment, JavaScript handles the allocation of a **specific amount of memory to store that data**.
- **Memory usage**: this refers to the actions of **assigning or invoking the previously created section in memory**. It happens when you assign a value to a variable or invoke a function, for example.
- **Memory release** (garbage collection): once the stored data is **no longer reachable/referenced, or needed anywhere** in the program, JavaScript apply the garbage collection mechanism and **automatically deallocates the memory section** of this data, claiming memory and preventing memory leaks (excessive memory usage) and sinplifies the management for us.
Also, memory here can be divided into two different spaces, being:
- **Stack memory**: storage of the **primitives value types**, like numbers or strings, and also the **objects references** and **manage function calls**.
- **Heap memory**: store **dynamic data** like objects, arrays and functions.
This understanding it's also crucial for better memory optimization.

#### Stack Memory
Stack memory is a **fast structure region** that operates on the **LIFO** (Last In, First Out) pattern. It's meant to allocate:
- **Primitive types**: strings, numbers, null, undefined, Symbols, Booleans, BigInt;
- **References**: also stored the **reference to objects or functions**, but not their data.

Stack memory is also **fixed-size and sequential**, making it **fast for allocation and deallocation** of data, **manages the call stack**, tracking local variables and function executions. For being fized-sixe (limited) is more suitable for small, static data.
````javascript
//Allocation process
let variable;//Space allocated in the stack, initialized with undefined
function myFunction() {}//Reference stored in stack, but the function is allocated in heap memory

//Memory usage process
variable = 'Luiz';//Stack memory updated with the primitive value 'Luiz'
myFunction();//New stack frame created to manage the function call, popped after execution

//Memory release process
variable = null;//Stack memory updated to null; for primitives, no garbage collection needed
````

#### Heap Memory
Heap memory is a **dynamic**, **less structured** region used to **storing complex data**. Some of its characteristics are:
- Objects, arrays, functions, and any other data structure that can **vary in size**.
- Due to dynamic allocation/fragmentation, heap memory is **slower than the stack memory**.
- The **heap memory stores the data** itself, while the **stack memory holds the reference** to the data stored in heap memory.
- Heap memory is managed by the garbage collector, reclaiming memory once the data is no longer referenced.
````javascript
//Allocation process
//Dynamic data is stored in the heap memory, with its reference in the stack memory
let variable = {};
let array = [];
let Person = class {};
let myFunction = function() {};

//Memory usage process
//Setting value to these dynamic structures alters the heap section and creates a new section in memory to store the changes
//The reference now (in the stack memory) has a pointer to this new section.
variable = {name:'Luiz'};
array = [1,2,3];
Person = class { // Reassign, don’t re-declare
    constructor(name) {
        this.name = name;
    }
};
myFunction = function(name) { console.log(name); }; // Reassign, don’t re-declare


//Memory release process
//Setting these dynamic structures to null makes the section in memory eligible for garbage collection via the mark-and-sweep algorithm if no other references exist
variable = null;
array = null;
Person = null;//Notice: any instances (e.g., new Person('Luiz')) must also have their references removed (set to null or out of scope) or go out of scope to be garbage-collected.
myFunction = null;
````

#### How Stack and Heap Work Together
The heap and stack memories collaborate to handle data in an efficient way:
- **Primitives**: stored in the stack memory.
- **Dynamic structures**: are stored in the heap memory, with their necessary reference (like a variable name) stored in the stack.
- **Function call**: each **function call creates a stack frame** containing the local variables and necessary arguments.
A good example could be a closure, where a function returns another function or an object. The outer function is stored in the heap memory, but the call is managed by the stack memory. When the inner function or object is returned and stored in a new variable, we have:
- The new variable (stored in the stack memory) acts as a pointer.
- The function/object returned is still stored in the heap memory.
This way, we have a collaborative work of both memories.
````javascript
let myName = 'Luiz';//Stack memory

function printData(data){//Heap memory

    let printData = () => console.log(data);//It's keep in heap memory even after 'printData()' function finish its execution
    
    return {//As an object, it is stored in heap memory
        printData: printData,
    }
}

//Here, 'myFunction' (in stack memory) works as a pointer to the object being returned, where the object is stored in the heap memory
let myFunction = printData(myName);//The function call creates a new stack frame during its execution

myFunction.printData();
//The closure retains the outer function’s scope (including data) in the heap, allowing 'printData' (property) to access it even after printData finishes execution.
````

#### Memory Allocation and Deallocation
###### Stack allocation
It's an **automatic and fast** process, variables are **allocated** when a function is called and **deallocated** when it finishes execution. No manual intervention is required.

###### Heap memory
Managed by the JavaScript engine, dynamically allocates data like objects and arrays until they are no longer referenced.

###### Pass-by-value vs Pass-by-reference
- **Primitives** (stack) are passed by value, creating a new copy.
- **Objects** (heap) or dynamic data are passed by reference, pointing to the original data.
````javascript
let a = 10;
let b = a;//Stack, passed by value
b = 20; // Does not affect a

let obj = { num: 10 };
let obj2 = obj;//Heap, passed by reference
obj2.num = 20; // Affects obj
````

#### Garbage Collection and Mark-and-Sweep Algorithm
The garbage collector in JavaScript is an **automatic process** to help with memory management, **preventing memory** leaks and simplifying the development.   
It does so by **identifying objects** in the **heap memory** that are **no longer reachable**, meaning, they are no longer referenced by any variable or object in the stack or other reachable object. After being identified, these objects are **deallocated from memory**.

###### Mark-and-Sweep Algorithm
The Mark-and-Sweep Algorithm works in two phases:
- **Mark**: first phase, starts at the root, like variables on the global scope or in the current stack, running through all references and 'marking' all objects that are still being reachable/referenced directly or indirectly by any of the variables checked.
- **Sweep**: **second phase**, the algorithm 'sweeps' all objects in the heap memory that were not 'marked' in the previous phase, deallocating the memory.
The Mark-and-Sweep is one of the most widely used algorithms in JavaScript engines, solving earlier problems such as the **cyclic reference**, where two objects that use each other as a reference are often ignored and left in memory.
````javascript
function createCycle() {
  let obj1 = {};
  let obj2 = {};
  obj1.ref = obj2;//obj1 references obj2
  obj2.ref = obj1;//obj2 references obj1
}
createCycle();
````
The garbage collector will mark and sweep the ``{ name: 'Luiz' }`` object since it’s no longer reachable.
````javascript
let obj = { name: 'Luiz' };//Allocated in heap
obj = null;//No reference to the object, eligible for garbage collection
````


#### Memory Leaks and Best Practices
Memory leaks occur when the heap memory is **not deallocated correctly**, causing **excessive consumption** of memory. Although JavaScript handles most of the process automatically, it's important to notice that **good practices are an important tool**, preventing unwanted behavior in code and possibly preventing the incorrect use of the garbage collector. Let's see some examples of what could trigger memory leaks:
- **Unintended Global Variables**: variables declared without ``let``, ``var`` or ``const`` that becomes global and persistent in memory. To **prevent** this, always use ``let`` or ``const`` when declaring variables.
````javascript
function leak() {
  accidentalGlobal = 'I’m global!';//Persists in memory
  let garbageCollected = 'I’m local and will be deallocated';
}
````

- **Forgotten Timers or Callbacks**: timers like ``setInterval`` or event listeners that are not cleared retain references to objects. To **prevent** this, always clear timers and remove event listeners once no longer needed.
````javascript
let badInterval = setInterval(() => console.log("Running"), 1000);
//Forgot to call clearInterval(badInterval)

let goodInterval = setInterval(() => console.log("Running"), 1000);
clearInterval(goodInterval);//Prevents memory leak
````
Other good practices include:
- Set references to ``null`` for dynamic data (like objects or arrays) once no longer needed, helping the garbage collector.
- Avoid storing large amounts of data in closures, unless necessary.



