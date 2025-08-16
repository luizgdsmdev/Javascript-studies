### Numbers in JavaScript
This section covers everything you should know about Boolean type variables in JavaScript, a fundamental primitive type used to represent logical values.

[What are Booleans](#what-are-booleans)
[Boolean storage and behavior](#boolean-storage-and-behavior)
[Boolean operations: logical operators](#boolean-operations-logical-operators)
[Boolean characteristics: truthy vs falsy values](#boolean-characteristics-truthy-vs-falsy-values)
[Boolean characteristics: null vs undefined vs false](#boolean-characteristics-null-vs-undefined-vs-false)
[Boolean conversion: Boolean() vs !!](#boolean-conversion-boolean-vs-double-negation)
[Boolean methods and usage](#boolean-methods-and-usage)


#### What are Booleans
**Booleans**, in JavaScript, along with [string](https://github.com/luizgdsmdev/Javascript-studies/blob/main/basics/strings-in-javascript/intro.md) and [numbers](https://github.com/luizgdsmdev/Javascript-studies/blob/main/basics/numbers/intro.md) are also a **primitive type**.  
Booleans are the representation of logical values, which can only have **two possible variations**:
- ``true``
- ``false``

They are very often use in control structures like if statements, loops, or logical operations, for flow and state control of the aplication, and they have their on type (``boolean``).
```javascript
let isActive = true;
var isComplete = false;
const hasAccess = true;

console.log(isActive, typeof isActive); // Shows: 'true boolean'
console.log(isComplete, typeof isComplete); // Shows: 'false boolean'
console.log(hasAccess, typeof hasAccess); // Shows: 'true boolean'
```

##### Operator '``!``'
One of the things that you will see around programming is the '``!``' (negative or also called inversion) operator. As the name says, it's used to 'negate' or invert the first result of comparison. Check below:
```javascript
let isActive = true;
var isComplete = false;
const hasAccess = true;

console.log(!isActive, typeof isActive); // Shows: 'false boolean'
console.log(!isComplete, typeof isComplete); // Shows: 'true boolean'
console.log(!hasAccess, typeof hasAccess); // Shows: 'false boolean'
```  
Its use is mainly to invert the first result into the opposite of it, like shown above.

###### Conditional structures
Booleans can determine if a block of code will or will not be executed:
```javascript
let isActive = true;
let isNotActive = false;

if(isActive) console.log("Executed");//Shows Executed

//Since 'isNotActive' variable holds 'false', this block is never executed
//Imagine it like a 'yes' or 'no' answer for the question 'Should I execute this block?'
//Where 'false' = no, and 'true' = yes
if(isNotActive) console.log("Not executed");
```
###### Flow control
``booleans`` are also very often used for flow control, like:
```javascript
let isActive = true;
let isNotActive = false;

while(isActive){
    console.log("Executed");//Shows Executed
    isActive = false;
}

//Again, this block is never executed because the answer for 'Should I execute this block?'
//Is already 'false'
while(isNotActive){
    console.log("Executed");
    isNotActive = false;
}
```

#### Boolean storage and behavior
Booleans are also stored directly in memory, but JavaScript automatically handles this for us, saving them as a 1-bit value in the format:   
- 0 (``false``)
- 1 (``true``)   

Because of its structure, **booleans don't keep with them any method or property** like the string or number type, as a standart structure. This will only occur if added as **a wrapper of the object** declared as ``new Boolean()``. Check the example below:
```javascript
//Direct assign
let isActive = true;
let isNotActive = false;

//Using the Object approach
let isActiveObj = new Boolean(true);
let isNotActiveObj = new Boolean(false);


console.log(isActive, typeof isActive);//Shows 'true boolean'
console.log(isActiveObj, typeof isActiveObj);//Shows 'Boolean (true) object'


console.log(isNotActive, typeof isNotActive);//Shows 'false boolean'
console.log(isNotActiveObj, typeof isNotActiveObj);//Shows 'Boolean (false) object'
```
But the use of ``new Boolean()``is **not recommended**, unless really special cases, because as shown above, it becomes an object type and could lead to unwanted behaviors and results, as we are going to see next. 


#### Boolean operations: logical operators
Booleans are often related to logical operators to combine or modify conditions by comparing their values to each other.
```javascript
let a = true;
let b = false;

console.log(a && b); // Shows: 'false' (both must be true)
console.log(a || b); // Shows: 'true' (at least one is true)
console.log(!a); // Shows: 'false' (inverts true)
console.log(!b); // Shows: 'true' (inverts false)
```   
The same occurs with structures of decision or loops:
```javascript
let isActive = true;
let isNotActive = false;

//Not executed because the condition asked for both to be 'true', but only one is
if(isActive && isNotActive){
    console.log("Executed");
    isActive = false;
}

//Executed because the condition asked only FOR ONE to be 'true', and 'isActive' variable suffices
while(isActive || isNotActive){
    console.log("Executed");//Shows Executed
    isActive = false;
}

//Again, this block is never executed because the answer for 'Should I execute this block?'
//Is already 'false', once both variables hold the value of 'false'
while(isNotActive || isActive){
    console.log("Executed");
    isNotActive = false;
}
``` 



#### 