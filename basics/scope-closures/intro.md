### Scope and closures in JavaScript
This section is meant to cover everything we should know about scope and closures in JavaScript.  
- [What are Scope and Closures?](#what-are-scope-and-closures)
- [Methods for creating scope and closures](#scope-and-closures-creation-methods)
- [Scope and Closures characteristics: Creation and access to variables](#scope-and-closures-characteristics-variable-creation-and-access)
- [Scope and Closures deletion or cleanup](#scope-and-closures-cleanup)
- [Scope and Closures characteristics: Memory storage](#scope-and-closures-characteristics-memory-storage)
- [Scope and Closures characteristics: Type](#scope-and-closures-characteristics-type)
- [Scope and Closures characteristics: Mutability](#scope-and-closures-characteristics-mutability)
- [Scope and Closures methods: Iteration with Object.keys() and Object.values()](#scope-and-closures-methods-object-keys-and-object-values)
- [Scope and Closures methods: Object.freeze() and Object.seal()](#scope-and-closures-methods-object-freeze-and-object-seal)
- [Scope and Closures methods: hasOwnProperty()](#scope-and-closures-methods-hasownproperty)
- [Scope and Closures methods: Bonus](#scope-and-closures-methods-bonus)


Go back to [basics listing](https://github.com/luizgdsmdev/-Javascript-studies/blob/main/basics/intro.md).  

#### What are Scope and Closures?
###### Scopes
Scopes refer to the **context** where variables and functions are declared, determining their **visibility** to be invoked or to have their value **changed**. The scope where these variables or functions are declared defines their behavior in the code.   
In this scenario, the **inner scope will always have access to the outer scope** (by default), but not the other way around. You could imagine scope as a house with infinite rooms in it, where:
- Who is outside the house (outer scope) can't have access to what is inside this house, and by default cannot come in. But have access to what's outside, like the roads;
- Who is inside the house (inner scope) have access to all that is inside the house, like the room or kitchen, but don't have access to the other rooms. But it can go to the outer scope (outside) if it wants to have access to the roads;
- Who is inside the room has access to everything inside the room, what's inside the house, and also to the outside, like roads.
See? No matter how nested the inner scope is, they will always have access to the outer scope.   
There are three different scopes in JavaScript:
- **Global scope**: open and visible for all variables and functions. It's the default (outer) scope and has everything inside.
- **Function scope**: everything inside a function block, determined by the curly brackets ``{}``. The inner code can invoke information from the outer scope.
- **block scope**: much like the function scope, but it works with any block defined by the curly brackets ``{}``, like ``if`` statements, loops, and so on.

Let's see some examples:
````javascript
//Global scope
let globalVar = "I'm global";

function functionScope(){
    let functionScope = "I'm function";

    //Can call the global scope
    console.log(`${globalVar}, but inside the function scope.`);//Shows I'm global, but inside the function scope.

    {//Nested block scope inside the function
    let blockScope = "I'm block";

    //Can call the global and the function (outer) scope
    console.log(`${globalVar} and ${functionScope}, but inside the block scope.`);//Shows I'm global and I'm function, but inside the block scope.
    }

    //If I try to call the inner scope (block) inside the function scope, it results in a 
    //error, since this variable only exists inside the block scope
    console.log(`${blockScope}`);//Shows ReferenceError: blockScope is not defined
}

//And here at the global scope, if I try to call any other (function or block scopes)
//I'll get the same error, because they only exist inside their scope and are not visible here

functionScope();
````

But what if, for some reason, I need to have access to the properties inside these scopes? Well, alongside the most common ways like using a **return** of the function, we may want to use the **closures** in some scenarios. Read below.

###### Closures
Closures offer the possibility to have **access to the inner scope**, by what we call **higher-order function**. For this approach, a function (outer scope) returns another function or object (inner scope) that, by having methods (module pattern) or pointers (revealing pattern), can have access to or alter the properties of its outer scope, **even after the outer function has been closed**.   
In other words, closures are a doorway or a passage through which, from calling the returned inner function/object, we can have access to an inner scope even outside its scope.
Check the example above:
````javascript
//Module pattern, where we return the method inside the object being returned
function outerScope(){
    let obj = {name: 'Luiz', age: 29};

    return {
        getProperty: (propertyName) => obj.hasOwnProperty(propertyName) ? obj[propertyName] : 'Property not found',
        setProperty: setProperty = (propertyName, value) => obj[propertyName] = value,
    };
}

let newObject = outerScope();
console.log(newObject.getProperty('name'));//Shows Luiz

newObject.setProperty('name', 'Marta');
console.log(newObject.getProperty('name'));//Shows Marta
//--------------------------------------------------------------------------------------------------------------------

//Revealing patter, where we return a pointer inside the object being returned
function outerScope(){
    let obj = {name: 'Luiz', age: 29};
    let getProperty = (propertyName) => obj.hasOwnProperty(propertyName) ? obj[propertyName] : 'Property not found';
    let setProperty = (propertyName, value) => obj[propertyName] = value;

    return {
        getProperty,
        setProperty
    };
}

let newObject = outerScope();
console.log(newObject.getProperty('name'));//Shows Luiz

newObject.setProperty('name', 'Marta');
console.log(newObject.getProperty('name'));//Shows Marta


//Returning a function
let globalVar = 'Global scope';

function outerFunction(){
    let outerFunction = "outerFunction scope";

    function innerFunction(){
        console.log(globalVar);
        console.log(outerFunction);
    }

    return innerFunction;
}

let closure = outerFunction();

closure();//Shows:
// Global scope
// outerFunction scope
````


#### Methods for creating scope and closures
When it comes to scopes, we need to understand that the declaration of the variables has an important impact, since it defines their behavior. We already cover [Variables](https://github.com/luizgdsmdev/Javascript-studies/blob/main/basics/variables/intro.md) in another section, but in resume:
- **Global Scope**: variables declared outside functions/blocks or with ``var`` in the global context;
- **function scope**: variables declared wit ``var``, ``let`` or ``const`` inside a function;
- **block scope**: variables declared wit ``let`` or ``const`` inside the block ``{}``;
- **closure**: when a function/object is created inside another function and references outer properties.
````javascript
//Global scope
let global = "global";

//Function scope
function myFunction() {
  let funcVar = "function scope";
  console.log(funcVar); //Accessible here
}
//console.log(funcVar); //Shows Error: funcVar is not defined

//Block scope
if (true) {
  let blockVar = "block scope";
  console.log(blockVar); //Accessible here
}
//console.log(blockVar); //Shows Error: blockVar is not defined

//Closure
function createCounter() {
  let count = 0;
  return function() {
    return ++count; //Closure: accesses count
  };
}
let counter = createCounter();
console.log(counter()); //Shows 1
console.log(counter()); //Shows 2
````




