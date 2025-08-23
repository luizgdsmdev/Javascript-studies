### Functions in JavaScript
This section is meant to cover everything we should know about functions in JavaScript.  
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
- **Memory release** (garbage collection): once the stored data is **no longer reachable/invoked or needed anywhere** in the program, JavaScript apply the garbage collection mechanism and **automatictly frees the memory section** of this data (deletion), claiming memory and preventing memory leaks (excessive memory usage) and sinplifies the management for us.
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
class Person{};
function myFunction(){};

//Memory usage process
//Setting value to these dynamic structures alters the heap section and creates a new section in memory to store the changes
//The reference now (in the stack memory) has a pointer to this new section.
//Very similar to the process of changing a value on a non-mutative type, like strings or numbers
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
Person = null;//Notice: any instances (e.g., new Person('Luiz')) must also have their references removed (set to null or out of scope) to be collected.
myFunction = null;
````



