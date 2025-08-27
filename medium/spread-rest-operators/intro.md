### let vs. const vs. var in depth in JavaScript

This section covers everything you should know about let vs. const vs. var in depth in JavaScript.
- [What Are `let`, `const`, and `var`](#what-are-let-const-and-var)
- [Scope](#scope)
- [Hoisting](#hoisting)
- [Reassignment and Redeclaration](#reassignment-and-redeclaration)

Go back to [medium listing](https://github.com/luizgdsmdev/Javascript-studies/blob/main/medium/intro.md). 


#### What Are `let`, `const`, and `var`
All three options are **keywords for declaring variables**, but they will **differ in the variable behavior** like scope, hoisting, reassignment, and declaration.
````javascript
var x = 1;//Function-scoped, reassignable, redeclarable
let y = 2;//Block-scoped, reassignable
const z = 3;//Block-scoped, non-reassignable
console.log(x, y, z);//Shows 1, 2, 3
````

#### Scope
Scope in JavaScript determines **where the variable is accessible**, depending on its declaration. There are 3 types of scopes as discussed at the (scope and closures)[https://github.com/luizgdsmdev/Javascript-studies/blob/main/basics/scope-closures/intro.md] section.
- ``var``: ``var`` it's **not block-scoped**, respecting **only global and function scopes**.
````javascript
var globalVar = 'globalVar';//Accessible anywhere on the code

function myFunction(){//Function scope
    var functionVar = 'functionVar';//only available inside the function scope/block

    console.log(globalVar);//Shows globalVar, because global scope is accessible anywhere

    if(true){//Block scope
        //Available inside and outside the block scope, 'var' variables ignore block boundaries
        var blockVar = 'blockVar';

        console.log(globalVar);//Shows globalVar, because global scope is accessible anywhere
        console.log(functionVar);//Shows functionVar, because still inside the function scope
    }

    console.log(blockVar);//Shows blockVar, because it ignores block boundaries, still inside the function scope

}
myFunction();

console.log(globalVar);//Shows globalVar, because global scope is accessible anywhere
//console.log(functionVar);//Shows ReferenceError ReferenceError: functionVar is not defined, because it's outside the function scope and it's not accessible
//console.log(blockVar);//Shows ReferenceError ReferenceError: blockVar is not defined, because it's outside the function scope and it's not accessible
````

- ``let`` and ``const``: **both are block scope**, meaning they are **limited** by the **scope** where the **variable declaration occurs**.
````javascript
//Available anywhere in the code
let letGlobal = "letGlobal";
const constGlobal = "constGlobal";


function myFunction(){//Function scope
    //Both available only inside the function scopes
    let letFunction = "letFunction";
    const constFunction = "constFunction";

    console.log(letGlobal);//Available
    console.log(constGlobal);//Available

    if(true){
        //Both available only inside the block scope
        let letBlock = "letBlock";
        const constBlock = "constBlock";

        console.log(letFunction);//Available
        console.log(constFunction);//Available
    }

    //Both show ReferenceError, because they’re only available inside the block scope
    console.log(letBlock);
    console.log(constBlock);
}
myFunction();
console.log(letGlobal);//Available
console.log(constGlobal);//Available

//All four variables show ReferenceError, because they’re only undefined outside the scope of declaration
console.log(letBlock);
console.log(constBlock);
console.log(letFunction);
console.log(constFunction);
````



#### Hoisting
Hoisting refers to JavaScript moving variable declarations to the top of their scope during the compilation process.
- ``var``: is **declared and initialized** to ``undefined`` **before** code execution. It's possible to use before declaration, but returns ``undefined``.
````javascript
console.log(x);//Shows undefined
var x = 1;
````
- ``let`` and ``const``: are only declared, but **not initialized**, creating a '**temporal dead zone**' or TDZ, making it impossible for use before declaration.
````javascript
console.log(x);//Shows ReferenceError: Cannot access 'x' before initialization, and the same for const 'y'
let x = 1;
const y = 2;
````
- **Temporal dead zone** (TDZ): refers to the region from the start of the block to the point of declaration where the variable is inaccessible.
````javascript
console.log(x);//ReferenceError: Cannot access 'x' before initialization (TDZ in global scope)
let x = 1;
const y = 2;

function myFunction(){
    console.log(x);//ReferenceError: Cannot access 'x' before initialization (TDZ in function scope)
    let x = 1;
    const y = 2;

    if(true){
        console.log(x);//ReferenceError: Cannot access 'x' before initialization (TDZ in block scope)
        let x = 1;
        const y = 2;
    }

}
````

#### Reassignment and Redeclaration
- ``var``: the ``var`` allows reassingnment and redeclaraion.
````javascript
//Reassignment
var x = 1;
x = 2;
console.log(x);//Shows 2

//Redeclaration
var y = 1;
var y = 2;
console.log(y);//Shows 2
````

- ``let``: allows reassignment, but prohibits redeclaration in the same scope.
````javascript
//Reassignment
let x = 1;
x = 2;
console.log(x);//Shows 2

//Redeclaration on the same scope
let y = 1;
//let y = 2;//SyntaxError: Identifier 'y' has already been declared

{
    let y = 1;//Allowed in different scopes
    console.log(y);//Shows 1
}
````

- ``const``: prevents reassignment and redeclaration in the same scope. For arrays or objects, the elements/properties can be altered, but not the reference to the object.
````javascript
//Reassignment
const x = 1;
//x = 2;//TypeError: Assignment to constant variable.
console.log(x);//Shows 2

//Redeclaration on the same scope
const y = 1;
//const y = 2;//SyntaxError: Identifier 'y' has already been declared

{
    const y = 1;//Allowed in different scopes
    console.log(y);//Shows 1
}

//--------------------------------------
//Mutation
const arr = [1, 2];
arr.push(3);//Valid (mutation)
arr[0] = 9;//Valid (mutation)
console.log(arr);//Outputs: [1, 2, 3]
//arr = [];//TypeError: Assignment to constant variable
````
