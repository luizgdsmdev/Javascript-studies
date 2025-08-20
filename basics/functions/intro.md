### Functions in JavaScript
This section is meant to cover everything we should know about functions in JavaScript.  
- [What are functions](#what-are-functions)
- [Function creation methods](#function-creation-methods)
- [How functions work](#how-functions-work)
- [Function scope and closures](#function-scope-and-closures)
- [Function properties and methods](#function-properties-and-methods)
- [Function mutability and memory](#function-mutability-and-memory)
- [Object methods for functions](#object-methods-for-functions)
- [Special function features](#special-function-features)

Go back to [basics listing](https://github.com/luizgdsmdev/-Javascript-studies/blob/main/basics/intro.md).  


#### What are functions
Functions are a **reusable block of code** designed to **perform specific tasks** and **compute values**. More specifically, in JavaScript, functions are **first-class objects**, meaning they can be **assigned to different structures** like variables, passed as arguments, returned from other functions, and stored in data structures like arrays or objects.   
They are **callable**, allowing the execution of their code **when invoked**. Also, functions have the option of **receiving arguments** when needed.
Also, we call '**Higher-Order Functions**' functions that receive another function as a parameter and/or return one.

#### Function creation methods
We have some different ways of creating a function in JavaScript, each approach holds some specificities. The basic and formal way of declaring a function is:
````javascript
function functionName(optionalParameters){}
````
- ``function``: reserved word for declaring a function. It basically brings the function to 'life' by pointing its existence in the code, pretty much the same as ``let`` or ``const`` does for variables;
- ``functionName``: follows the basic naming of JavaScript, like no numbers or symbols at the beginning, and so on;
- ``optionalParameters``: can be none, one or more parameters of different structured data like numbers, strings, objects, or even other functions;
- Brackets ``{}``: determine the beginning and the end of the block where the function instructions take place.

Let's see some examples:
````javascript
//No parameter needed
function printHello(){
    console.log("Hello!");
}

//One parameter
function printValue(value){
    console.log(value);
}

//Multiple parameters
function printCustomHello(name, state){
    console.log(`Hello ${name} from ${state}.`);
}

//Multiple data strucuture parameters
function printCustomInformation(array, obj, funcSum){
    let totalArray = funcSum(array);
    console.log(`Hey ${obj.name}, the array sum is ${totalArray}.`)
}

let arrayParameter = [1,2,3,4];
let objParameter = {name: 'Luiz'};
let functParameter = function funcSum(array){
   return array.reduce((sum, value) => sum + value);
}

//Invoking the multiple data structure parameters
printCustomInformation(arrayParameter, objParameter, functParameter);//Shows 'Hey Luiz, the array sum is 10.'
````
Now let's check some of the **different ways** that we can create a function.

###### Function Declaration
This is the most common, which was shown and explained above:
````javascript
function subtract(a, b) {
  return a - b;
}
````


###### Function Expression
Function Expressions can be divided into two: **named** and **anonymous**. The most important difference between them it's the **JavaScript hoisting**, meaning that when you use the ``function`` reserved word, the declaration of the function goes straight to the top during the **compilation process**. It allows you to call the function **before the declaration**, which **doesn't happen** with the **anonymous** expression.   
Also, both have the ``this`` and ``arguments`` objects.

- **named**: stand approach as shown above, where the function receives a name right after the ``function`` reserved word. **Allows hoisting**.
````javascript
printHello()//Shows 'Hello!', thanks to hoisting
function printHello(){ console.log('Hello!')};

//Using this and arguments
function TotalSum(){
    this.totalSum = 0;
    for (let i = 0; i < arguments.length; i++) {
        this.totalSum += arguments[i];
    }
    return this.totalSum;
}

let sum = TotalSum(1,2,3);
console.log(sum);//Shows 6
````
- **anonymous**: with this approach, the function doesn't receive a name, and sometimes you can even do without the ``function`` word with what is called **arrow functions** or **IIFE**, as we'll see ahead. But how would it work?   
Since we don't have a name for the function, we need to **assign it to a variable** or call it imidealy as an **IIFE**. Because of this, anonymous expressions are not **hoisted**, meaning that even though the variables are, the content of the function itself is only assigned to the variable when declared.
````javascript
//Since it's not hoited, it shows an error
//printSum(1, 2);//Shows Uncaught ReferenceError: Cannot access 'printSum' before initialization

let printSum = function(){
    this.totalSum = 0;
    for (let i = 0; i < arguments.length; i++) {
        this.totalSum += arguments[i];
    }
    console.log(`The sum of the ${arguments.length} parameters is ${this.totalSum}.`);
};

printSum(1, 2);//Shows The sum of the 2 parameters is 3.
printSum(4, 5, 6, 7);//Shows The sum of the 4 parameters is 22.
````

###### Arrow Function
Arrow Functions are a more **concise way of declaring functions** for their short syntax. It's often used for functional operations and simple tasks that usually don't require more than one action because it automatically offers a ``return``, although it can receive unlimited action steps if needed. The use of parameters sis till optional.   
This approach doesn't have their own ``this`` or ``arguments`` objects, and similar to anonymous functions it's **not hoisted**.   
The basic structure is:
````javascript
let variableName = () => //Expression;
````
- **variableName**: follows the JavaScript naming rules;
- **``() =>``**: basic syntax for arrow function, with auto return of the result of the expression;
- **Expression**: the actions that the function is executing, like "a + b".

Let's see some examples:
````javascript
let arrowExample = () => console.log("Arrow function with no parameter.");
arrowExample();//Shows Arrow function with no parameter.

let arrowExample2 = (a, b) => a + b;//Applying the auto return
console.log(arrowExample2(1, 2));//Shows 3
````

For more **complex structures**, use the curly braklets '``{}``':
````javascript
let arrowExample = () => {
    for (let i = 1; i <= 3; i++) {
       console.log(`Arrow function print time: ${i}`)
    }
};
arrowExample();//Shows:
// Arrow function print time: 1
// Arrow function print time: 2
// Arrow function print time: 3


let arrowExample2 = (array) => {
    return array.reduce((value, sum) => value + sum);
};

let arrayList = [1, 2, 3];
console.log(arrowExample2(arrayList));//Shows 6
````



###### Constructor Function
very similar to the **named function expression**, with the difference that with the Constructor Function we use the **``new``** word to create an instance.   
Also allows to use of the ``this`` or ``arguments`` and is more memory efficient by sharing properties and methods.
````javascript
function TotalSum(){
    this.totalSum = 0;
    for (let i = 0; i < arguments.length; i++) {
        this.totalSum += arguments[i];
    }
}

//For being a 'TotalSum' instance, the 'sum' variable has direct access to '.totalSum' as its own property
let sum = new TotalSum(1,2,3);
console.log(sum.totalSum);//Shows 6
````



###### Immediately Invoked Function Expression (IIFE)
As the name states, this approach implies that the functions are immediately executed, with no need for being invoked by naming or variable assignment.
Allows ``this`` and ``arguments`` and optional parameters.
It's often used for a variety of reasons and has some nice variations. The basic/formal structure would be:
````javascript
(function() {
  //actions
})();
````
As you can see, it's very similar to a normal function. The key here are the ``()()`` components where:
- The first ``()`` acts as a wrapper for **encapsulate** the function structure;
- the second ``()`` it's the **imedialty invok** for execution for what is inside the first one.

So let's check some of the variations:
````javascript
//Anonymous arrow functions, parameters are optional
(() =>{
    console.log(10 + 10);
})();

//anonymous functions
(function(){
    console.log(a + 10)
})(a = 10);

//Named functions, which allow recursion
let b = 10;
(function printSum(message){
    a++;
    console.log(message);

    return a < 10 ? printSum('Needs more') : console.log('Sufficient');
    
})(a = 0);
````

Some of the reasons for using this approach could be:
- **prevents pollution** of the global object namespaces, through scope or closures by isolating declarations within the function:
````javascript
let num = 10;
let printNum = function print(){console.log(num)};
printNum();//Shows 10


(() =>{
    let num = 30;
    let printNum = function print(){console.log(num)};
    printNum();//Shows 30
})();

//Wasn't affected
printNum();//Shows 10
````

- Creates the possibility for **private variables** and methods from closure:
````javascript
//Passing the function to a variable so that we can invoke multiple times
let increment = (() =>{
    //Count only exists inside this function, it's not passed as a property
    let count = 0;

    //printCount only exists inside this function, it's not passed as a method
    const printCount = (countUpdate) => console.log(`The counting was updated to ${countUpdate}.`);

    return () => {count++; printCount(count);}
})();

increment();//Shows The counting was updated to 1.
increment();//Shows The counting was updated to 2.
increment();//Shows The counting was updated to 3.

//If you try to call the printCount() method, you get the error ReferenceError: printCount is not defined
//printCount();
````

- also can present the **module pattern**, where **an object is returned** and has **direct access** to methods that can alter the function data, like private variables. In the example below, the object returned to the instance 'AlterNum' has 3 methods that, when invoked outside the function, can alter the variable, even when the 'AlterNum' instance doesn't have direct access to this private variable.
````javascript
let AlterNum = (() => {
    let count = 0;

    return {
        incrementNum: () => count++,
        resetNum: () => count = 0,
        showNum: () => console.log(`the count is ${count}.`),
    }
})();
 

AlterNum.showNum();//Shows the count is 0.
AlterNum.incrementNum();
AlterNum.incrementNum();
AlterNum.showNum();//Shows the count is 2.

AlterNum.resetNum();
AlterNum.showNum();//Shows the count is 0.


console.log(AlterNum.count)//Shows undefined
````


- "**Revealing pattern**" as a variation from the module pattern above, but instead of passing the method directly in the object, we passed the pointer. This way, not only the variable but also the methods became private to the IIFE.
````javascript
let AlterNum = (() => {
    this.count = 0;
    let incrementNum = () => this.count++;
    let resetNum = () => this.count = 0;
    let showNum = () => console.log(`the count is ${this.count}.`);
    return {
        incrementNum: incrementNum,
        resetNum: resetNum,
        showNum: showNum,
    }
})();
 

AlterNum.showNum();//Shows the count is 0.
AlterNum.incrementNum();
AlterNum.incrementNum();
AlterNum.showNum();//Shows the count is 2.

AlterNum.resetNum();
AlterNum.showNum();//Shows the count is 0.


console.log(AlterNum.count)//Shows undefined
````

- "**Injecting a namespace object**": the key difference to this approach it's that we are using the IIFE to alter an already existing object. It works the same as the previous examples, but to work with an existing structure passed as a parameter.   
Note in the example below that, through the IIEF, I can inject and retrieve data from the object. But if I try to have
````javascript
//Here, the person represents an existent object or structure 
let person = {name: 'Luiz', age: 29, country: "Brazil", speak: () => "Hello!"};

//person.speakLoud();//Shows TypeError: person.speakLoud is not a function. The goSleep function is private to the IIFE and cannot be accessed outside, preventing global scope pollution.

((person) => {

    person.setName = function (name){this.name = name;};
    person.getName = function (){console.log(this.name);};
    person.speakLoud = function (){console.log(this.speak().toUpperCase())}

    function goSleep(){
        console.log('Sleeping...');
    }

})(person);

//goSleep();//Shows ReferenceError: goSleep is not defined, because it doesn't exist outside IIEF

person.getName();//Shows Luiz
person.setName('Marta');
person.getName();//Shows Marta
person.speakLoud();//Shows HELLO!

person.walk = () => console.log("Walking...");
person.walk();//Shows Walking...

console.log(person);//{name: 'Marta', age: 29, country: 'Brazil', speak: ƒ, setName: ƒ, …}
````


#### How functions work
As said before, functions are a block of reusable code that can perform a specific task or compute values. It's basically a list of sequence actions that take place from the top to the bottom as soon as the function is invoked.
Functions can:
- **Accept parameters** as optional;
- **Return values** if needed, where the ``undefined`` is the default return; 
- **Maintain scope**, having access to their own scope or outer scopes;
- **Control context** by the use of ``this``, combine by the ``.call()`` or ``.bind()`` functions. 
````javascript
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));//Shows 5
````
Also, Functions can be invoked with multiple approaches, like:
- **Directly invoked** by use of the function name.
````javascript
function printHello(){
    console.log("Hello!");
}

//Directly invoked
printHello();
````
- **As a method** of an object.
````javascript
let obj = {
    printHello: () => console.log("Hello!"),
}

//Invoked as method
obj.printHello();
````

- **With the ``new``** word, like in a constructor function.
````javascript
let obj = new Object();
let array = new Array();

function ConstructorFunction(){};
let newFunction = new ConstructorFunction();
````

- using build-in funtions like ``.call()`` or ``.apply()``.
````javascript
function add(a, b) {
  console.log(a + b);
}

add.call(null, 2,3);//Shows 5
````


#### Function scope and closures
Functions are able to have access to **their own environment**, meaning that properties and methods/functions created inside their block could be invoked at any time.   
The same it's true for the **outer scope**, which could be a child function having access to the father function's properties and methods.   
Both the child and the father function also have access to the global scope. Let's take a look at some examples:
````javascript
//This is the global scope
let globalScope = 'Global scope';

function fatherFunction(){
    //This is the function scope (from the father scope)
    const functScope = 'Function scope';
    const speak = () => console.log(functScope);

    //Invoking properties from outer scope (In this case, global scope) 
    console.log(globalScope);//Shows Global scope


    (function childFuntion(){
        //This is the function scope (from child scope)
        const childScope = 'Child scope';
        const newSpeak = () => console.log(childScope);
        newSpeak();//Shows Child scope

        //Invoking properties from outer scope (father function) 
        console.log(functScope);//Shows Function scope
        speak();//Shows Function scope
        
    })();
}

fatherFunction();
````
Notice that, in the example above:
- the **global scope** can be accessed from any other scope;
- the **function scope** can only have access to **it's own scope** and the **outer scope**, meaning the father function or the global scope;
- The 'childFunction' here has access to its own scope, the outer scope ('fatherFunction'), and the global scope.

This behavior it's really important because by setting and **controlling these scopes** we're not only given a better structure but also **avoid to polluto the previous scopes** with unnecessary properties, leading to better **memory optimization** and avoiding reference errors.


###### Closures
Closures can be defined as the constant access of an internal function to the outer scope properties and methods, even after the outer function is **already closed**.   
In other words, a retuned inner/child function keeps access to the outer/father function information, even after the father function was already invoked and closed its cycle.   
What happens is, normally, once the function is declared during the compilation, its information (like variable names and values) is stored in memory during its entire execution, and then, when it's closed, this information is discarded by the garbage collector. But when you have a **closure**, like an inner function with **pointers to outer references**, like the father function properties, these values are **kept in memory** so that the child function can use them when needed.   
This way, the closure (inner/child function) can have access to and alter these values by having a pointer to these reference values.

Let's take a look at an example:
````javascript
function fatherFunction(){
    let obj = {
        name: 'Luiz', 
        age: 29, 
        speak: function(){return `${this.name} is ${this.age} years old.`}};

    function childFunction(){
        console.log(obj.speak());
        obj.age++;
    }

    console.log('fatherFunction was closed.');
    return childFunction;
}

let closure = fatherFunction();//Shows fatherFunction was closed., and also return the 'childFunction' function

closure();//Shows Luiz is 29 years old.
closure();//Shows Luiz is 30 years old.
````
As shown above, even after the father function has already closed, we are able not only to have access to the 'obj' but also to change its value.   
By using the **Revealing pattern**, for example, we can also change and create new properties:
````javascript
function fatherFunction(){
    let obj = {
        name: 'Luiz', 
        age: 29, 
        speak: function(){return `${this.name} is ${this.age} years old.`}};

    function childFunction(){
        function getProperty(){console.log(obj[arguments[0]])};
        function setProperty(){return obj[arguments[0]] = arguments[1]};
        function getAll(){console.log(obj)};
        function objSpeak(){console.log(obj.speak())}

        return {
            getProperty: getProperty,
            setProperty: setProperty,
            getAll: getAll,
            objSpeak: objSpeak,
            
        }
    }
    return childFunction();
}

let closure = fatherFunction();

closure.getProperty('name');//Shows Luiz
closure.setProperty('name', 'Marta');
closure.setProperty('country', 'Brazil');
closure.objSpeak();//Shows Marta is 29 years old.
closure.getAll();//Shows {name: 'Luiz', age: 29, speak: ƒ, country: 'Brazil'}
````
- **Note**: although powerful for encapsulations and maintaining state without global variables, closures have an impact on the memory usage and could cause a possible memory leak if not managed correctly.

#### Function properties and methods
- Since functions are objects, we can add, change, or delete their properties:
````javascript
function sum(){};

//Adding a property
sum.description = console.log('This function return the sum of all parameter. Use ".showTotal" method.');

//Adding a method
sum.showTotal = function(){
    this.sumTotal = 0;
    for (let i = 0; i < arguments.length; i++) {
        this.sumTotal += arguments[i];
    }
    console.log(this.sumTotal);
}

sum.showTotal(1,2,3);//Shows 6
sum.description;//Shows This function returns the sum of all parameters. Use the ".showTotal" method.

delete sum.showTotal;
sum.showTotal(1,2,3);//TypeError: sum.showTotal is not a function, because it was deleted
````
Functions also has **build-in methods** like:
- ``.call(context, ...args)``: immediately calls the function and explicitly defines the ``this`` value by sending an object as the first parameter (context), with more arguments as optional. Notice that the order of the parameter matters.
````javascript
let obj = {name: 'Luiz', age: 29};

function printInformation(){
    console.log(`The ${this.name} developer is ${this.age} years old. He lives in ${arguments[0]}, ${arguments[1]}.`)
}

printInformation.call(obj, 'Brazil', 'Minas Gerais - MG');//Shows The Luiz developer is 29 years old. He lives in Brazil, Minas Gerais - MG.
````

- ``.apply(context, argsArray)``: similar to the ``.call(context, ...args)``, ``.apply()`` also imedialy calls the function and sends an object as the first parameter (context), but the 'argsArray' here are sent as an array and get the same result. Notice that the order of the parameter matters.
````javascript
let obj = {name: 'Luiz', age: 29};

function printInformation(){
    console.log(`The ${this.name} developer is ${this.age} years old. He lives in ${arguments[0]}, ${arguments[1]}.`)
}

printInformation.apply(obj, ['Brazil', 'Minas Gerais - MG']);//Shows The Luiz developer is 29 years old. He lives in Brazil, Minas Gerais - MG.
````

- ``.bind(context)``: it doesn't immediately call the function, instead, it returns a new function where the ``this`` points to the reference object passed as a parameter. Later on, we can send more optional parameters when calling the function.
````javascript
let obj = {name: 'Luiz', age: 29};

function printInformation(){
    console.log(`The ${this.name} developer is ${this.age} years old. He lives in ${arguments[0]}, ${arguments[1]}.`)
}

let newFunction = printInformation.bind(obj);
newFunction('Brazil', 'Minas Gerais - MG');//Shows The Luiz developer is 29 years old. He lives in Brazil, Minas Gerais - MG.
````




#### Function mutability and memory
- Functions are **mutable** in terms of their properties, which can be added, modified, or deleted:
````javascript
function sum(){};

//Adding a property
sum.description = console.log('This function return the sum of all parameter. Use ".showTotal" method.');

//Adding a method
sum.showTotal = function(){
    this.sumTotal = 0;
    for (let i = 0; i < arguments.length; i++) {
        this.sumTotal += arguments[i];
    }

    console.log(this.sumTotal);
}

sum.showTotal(1,2,3);//Shows 6
sum.description;//Shows This function returns the sum of all parameters. Use the ".showTotal" method.

delete sum.showTotal;
sum.showTotal(1,2,3);//TypeError: sum.showTotal is not a function, because it was deleted
````

- Functions are **stored in the heap as objects**. References to functions are maintained in variables or scopes, and unreferenced functions are eligible for garbage collection. Closures, however, keep referenced variables alive in memory. In the example below ``message`` persists in memory due to the closure.
````javascript
function printHello() {
  let message = "Hello!";
  return () => message;
}
const greeter = printHello();
console.log(greeter());//Shows "Hello!"
````




#### Object methods for functions
Since functions are objects, they also inherit properties and methods. You can check more about it in the section [objects](https://github.com/luizgdsmdev/Javascript-studies/blob/main/basics/objects/intro.md), where we cover all about object methods.
