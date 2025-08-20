### Functions in JavaScript
This section is meant to cover everything we should know about functions in JavaScript.  
- [What are functions](#what-are-functions)
- [Function creation methods](#function-creation-methods)
- [Use of 'this' and 'arguments'](#Use-of-this-and-arguments)
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

#### Function creation methods
We have some different ways of creating a function in JavaScript, each approach holds some specificities. The basic and formal way of declaring a function is:
````javascript
function functionName(optionalParameters){}
````
- ``function``: reserved word for declaring a function. It basically brings the function to 'life' by pointing its existence in the code, pretty much the same as ``let`` or ``const`` does for variables;
- ``functionName``: follows the basic naming on JavaScript, like no numbers or symbols at the beginning, and so on;
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
    this.totalSum = Number();
    for (let i = 0; i < arguments.length; i++) {
        this.totalSum += arguments[i];
    }
}

let sum = new TotalSum(1,2,3);
console.log(sum.totalSum);//Shows 6
````
- **anonymous**: with this approach, the function doesn't receive a name, and sometimes you can even do without the ``function`` word with what is called **arrow functions** or **IIFE**, as we'll see ahead. But how would it work?   
Since we don't have a name for the function, we need to **assign it to a variable** or call it imidealy as an **IIFE**. Because of this, anonymous expressions are not **hoisted**, meaning that even though the variables are, the content of the function itself is only assigned to the variable when declared.
````javascript
//Since it's not hoited, it shows an error
//printSum(1, 2);//Shows Uncaught ReferenceError: Cannot access 'printSum' before initialization

let printSum = function(){
    this.totalSum = Number();
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
This approach doesn't support ``this`` or ``arguments`` use and, similar to anonymous functions, it's **not hoisted**.   
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






#### How functions work
