### Arrow functions and their impact on this in JavaScript

This section covers everything you should know about arrow functions and their impact on this.
- [What Are Arrow Functions](#what-are-arrow-functions)
- [How Arrow Functions Handle `this`](#how-arrow-functions-handle-this)
- [Impact on Event Handling](#impact-on-event-handling)


Go back to [medium listing](https://github.com/luizgdsmdev/Javascript-studies/blob/main/medium/intro.md). 

#### What Are Arrow Functions
Arrow functions are a **concise syntax** for writing functions in JavaScript, using the ``=>`` operator, and are often used for their short syntax and **``this`` binding**. There are 2 ways of using this structure:
- **Basic**: ``(parameter) => expression;``, it's a **single expression** with a **implicit meaning that the expression result will be automatictly retuned. It's used for basic and short expressions.
````javascript
let sum = (a, b) => a + b;
let result = sum(2, 2);//auto assign the return of the arrow function
console.log(sum(2, 2));//Shows 4
console.log(result);//Shows 4
````

- **Block**: ``(parameter) => {statements;}``, allows more **complex statements** and has a **explicit return**.
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

Some other features are:
- **Lexical ``this``**: inherit ``this`` from the **surrounding scope** where it's defined, ensuring more predictable ``this`` behavior, for example, in callbacks or nested functions.
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
    let nested = () => console.log(this.value);//`this` is from outer scope (nestedRegularFunc()), bound to 'obj' by 'nestedRegularFunc' function
    nested();
    },
};

obj.regularFunc();//Shows 42
obj.arrowFunc();//Shows undefined
obj.nestedRegularFunc();//Shows 42
````
- **No ``arguments`` Object**: arrow functions also don't have the ``arguments`` property as a regular function.
````javascript
function regular(){
    console.log(arguments.length, arguments);
}

let arrowfunction = () => console.log(arguments.length, arguments);

regular(1, 'a', [1,2,3], {name:'Luiz'});//Shows  [1, 'a', [1,2,3], {name:'Luiz'}]
arrowfunction(1, 'a', [1,2,3], {name:'Luiz'});//ReferenceError
````

- **No ``prototype`` Property**: cannot be used as a constructor with ``new``.
````javascript
//Constructor function
function Person(name){
    this.name = name;
}
let PersonOne = new Person('Luiz');
console.log(PersonOne.name);//Shows Luiz


//Arrow function
let PersonArrow = (name) => {
    this.name = name;
}
let PersonTwo = new PersonArrow('Marta');//Shows TypeError: PersonArrow is not a constructor
````

#### How Arrow Functions Handle `this`
Unlike the regular ones, arrow functions **don't have** their own ``this`` binding. Instead, they **inherit from the lexical scope** (the surrounding context where the function is defined), making it **more predictable** and **consistent**.
- **Regular functions**: depends on **how the functions are called**, like a method, standalone, and so on, where in a non-strict mode the ``this`` will always refer to the **default to the global object** (like the ``window`` in a browser) if not bound.
````javascript
const obj = {
  value: 42,
  func: function() {
    console.log(this.value);//`this` is the 'obj'
  }
};
obj.func();//Shows 42

const standalone = obj.func;
standalone();//Shows undefined (this is window in non-strict mode)
````
- **Arrow functions**: ``this`` is determined by the scope **where the function is defined**.
````javascript
let obj = {
    num: 4,
    arrowFunction: () => console.log(this.num),//Lexical scope, pointing to the default global object and not 'obj'
    nestedArrow: function(){
        let nestedArrow = () => console.log(this.num);//this is from the outer nestedArrow function’s scope, bound to 'obj'
        nestedArrow();
    }
}

//Shows undefined, because the default global object doesn't have a 'num' property to be called at 'this.num'
obj.arrowFunction();


//Shows 4, because the lexical scope points to the 'nestedArrow' function, which lies inside the object and its bind for it
obj.nestedArrow();
````



#### Impact on Event Handling
Due to the lexical ``this`` binding, arrow functions have a different impact on event handling, especially on ``addEventListener`` or event-driven code involving the WOM or DOM elements.   
Let's see some examples:
````javascript
//Regular function: refers to the element the listener is attached to (same as event.currentTarget)
document.getElementById("btn").addEventListener("click", function() {
  console.log(this.id);//`this` is the button element
});
//Shows 'btn' (the given ID for the button)

//--------------------------------------------------------------------------------
//Arrow function: inherited from the surrounding scope, not the element
document.getElementById("btn").addEventListener("click", () => {
  console.log(this.id);//`this` is window (or undefined in strict mode)
});
//Shows undefined (or window.id)


//Right approach with arrow functions would be using the event object passed
document.getElementById("btn").addEventListener("click", (e) => {
  console.log(e.currentTarget.id);//Access element via event object
});
//Shows 'btn' (the given ID for the button)
````

