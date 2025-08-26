### Arrow functions and their impact on this in JavaScript

This section covers everything you should know about arrow functions and their impact on this.
- [What Are Arrow Functions](#what-are-arrow-functions)
- [How Arrow Functions Handle `this`](#how-arrow-functions-handle-this)
- [Arrow Functions vs. Regular Functions](#arrow-functions-vs-regular-functions)
- [Impact on Event Handling](#impact-on-event-handling)
- [Use Cases for Arrow Functions](#use-cases-for-arrow-functions)
- [Limitations of Arrow Functions](#limitations-of-arrow-functions)
- [Best Practices for Arrow Functions and `this`](#best-practices-for-arrow-functions-and-this)



Go back to [medium listing](https://github.com/luizgdsmdev/Javascript-studies/blob/main/medium/intro.md). 

#### What Are Arrow Functions
Arrow functins are a **concise syntax** for writtin funtions in Javascrip, using the ``=>`` operator, and are often use for their short syntax and **``this`` binding**. There are 2 ways of using this structure:
- **Basic**: ``(parameter) => expression;``, it's a **single expression** with a **inplicite return**, meaning that the expression reult will be automatictly retuned. It's used for basic and short expression.
````javascript
let sum = (a, b) => a + b;
let result = sum(2, 2);//auto assign the return of the arrow function
console.log(sum(2, 2));//Shows 4
console.log(result);//Shows 4
````

- **Block**: ``(parameter) => {statements;}``, allows more **complex statements** and has a **explicite return**.
````javascript
let sum = (a, b) => {
    let doubleA = a * 2;
    let newB = b * a;
    return doubleA + newB;//Explicite return
};

let result = sum(2, 2);
console.log(sum(2, 2));//Shows 8
console.log(result);//Shows 8
````

Some others features are:
- **Lexical ``this``**: inheret ``this`` from the **sorrounding scope** where its defined, ensuring more predictable ``this`` behavior, for example, in callbacks or nested funtions.
````javascript
const obj = {
  value: 42,
  //Regular function
  regularFunc: function() {
    console.log(this.value);//`this` depends on how it’s called, bind to the obj
  },

  //Arrow function
  arrowFunc: () => {
    console.log(this.value);//`this` is from outer scope (window), outside 'obj'
  },

  //Nested Arrow function
  nestedRegularFunc: function() {
    let nested = () => console.log(this.value);//`this` is from outer scope (nestedRegularFunc()), binded to 'obj' by 'nestedRegularFunc' function
    nested();
    },
};

obj.regularFunc();//Shows 42
obj.arrowFunc();//Shows undefined
obj.nestedRegularFunc();//Shows 42
````
- **No ``arguments`` Object**: arrown funtions also don't have the ``arguments`` property as a regular funtion.
````javascript
function regular(){
    console.log(arguments.length, arguments);
}

let arrowFuntion = () => console.log(arguments.length, arguments);

regular(1, 'a', [1,2,3], {name:'Luiz'});//Shows 4 Arguments(4) [1, 'a', Array(3), {…}, callee: ƒ, Symbol(Symbol.iterator): ƒ]
arrowFuntion(1, 'a', [1,2,3], {name:'Luiz'});//ReferenceError
````
####
####
####