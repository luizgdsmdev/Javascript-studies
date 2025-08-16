### Numbers in JavaScript
This section covers everything you should know about Boolean type variables in JavaScript, a fundamental primitive type used to represent logical values.

- [What are Booleans](#what-are-booleans)
- [Boolean storage and behavior](#boolean-storage-and-behavior)
- [Boolean operations: logical operators](#boolean-operations-logical-operators)
- [Boolean characteristics: truthy vs falsy values](#boolean-characteristics-truthy-vs-falsy-values)
- [Boolean characteristics: null vs undefined vs false](#boolean-characteristics-null-vs-undefined-vs-false)
- [Boolean conversion: `Boolean()` vs !!](#boolean-conversion-boolean-vs-double-negation)
- [Boolean object: new Boolean()](#boolean-object-new-boolean)
- [Boolean methods and usage](#boolean-methods-and-usage)


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
Booleans are also stored directly in memory, but JavaScript automatically handles this for us, saving them as a **1-bit value** in the format:   
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
But the use of ``new Boolean()``is **not recommended**, unless really special cases, because as shown above, it becomes an **object type** and could lead to unwanted behaviors and results, as we are going to see next at the [Boolean object: new Boolean()](#boolean-object-new-boolean) section.


#### Boolean operations: logical operators
Booleans are often related to **logical operators** to combine or modify conditions by **comparing their values** to each other.
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

#### Boolean characteristics: truthy vs falsy values
In JavaScript, other values can assume some level of equality when it comes to comparison to ``true`` or ``false``.  
It means that the return of the comparison of ``true`` or ``false`` and or the evaluation of the element itself, will also return ``true`` or ``false``.
The other elements that could also be considered ``true`` are called **truthy** when coerced to a Boolean:
- Any numerical representation but ``0``: 1, -1, 0.3, -0.3;
- Any array structure, even an empty one: [], [1,2,3], ["strings", {}, []];
- Any object structure, even an empty one: {}, {name: "Luiz"};
- Boolean type ``true``.  
```javascript
//Number type
console.log(!!1);
console.log(!!-1);
console.log(!!0.1);

//String type
console.log(!!"a");
console.log(!!"Luiz");
console.log(!!"1");

//Array type
console.log(!![]);
console.log(!![1,2,3]);
console.log(!!["strings", {}, []]);

//Object type
console.log(!!{});
console.log(!!{name: "Luiz"});
```

And the elements to be considered as **falsy** when coerced to a Boolean are:
- The numerical representation of zero: 0, -0;
- Any empty string declaration: "", '', ``, String('');
- The ``undefined`` value;
- The ``null`` value;
- The ``NaN`` value;
- Boolean type ``false``.   
Note that every **falsy** element is a different representation of a lack of value.
```javascript
//Number type
console.log(!!0);
console.log(!!-0);
console.log(!!NaN);

//String type
console.log(!!"");
console.log(!!'');
console.log(!!``);

//Undefined type
console.log(!!undefined);

//Null
console.log(!!null);
``` 



#### Boolean characteristics: ``null`` vs ``undefined`` vs ``false``
To understand a little bit more about the difference between them, let's recap what exactly they represent:
- ``undefined``: standart behavior of JavaScript for every variable **declared but not assigned** to any value. It can be used to indicate **lack of value** (emptiness) or that the variable was declared but not assigned. It has the **``undefined`` type** and it's implicit or not voluntary; 
- ``null``: it's a explicited/voluntary action to represent a **lack of value** (emptyness) when assigned to a value. has the **``object`` type**, a historical quirk of JavaScript;
-``false``: a Boolean value that indicates a logical **``false`` state**. It has the **``boolean`` type**, and is also explicitly/voluntarily assigned.

As you saw in the previous section [Boolean characteristics: truthy vs falsy values](#boolean-characteristics-truthy-vs-falsy-values), all of them could be used to represent the **falsy** state, but they're **not** equals in type**. **value** or **essence**.   
While programming, one really important thing is to make sure your code it's readable for other people, and using the right tools for the right situation is one of the most important ways. For example, imagine setting a variable to ``undefined`` so that you could verify it in an ``if()``statement block, or even setting all variables to ``false`` to indicate that they're empty. Even though you could understand, it's not their original purpose, and it would definitely be very confusing in the long run when new professionals jump into the project.



#### Boolean conversion: Boolean() vs double negation
Both the ``Boolean()`` function and the ``!!`` negation operator come to the same functionality when it comes to conversion of other values to the Boolean type.   
The main difference between them is:
-  ``Boolean()``: most commonly used for value conversion to Boolean type, it returns a **boolean type** value being ``true`` or ``false``. Tends to be more visually clear about the conversion (readability), but slightly slower than double negation. 
- ``!!``: most often used approach for converting different values, returns a **Boolean type** value being ``true`` or ``false``. Slightly faster than the function approach, but less readable.
```javascript
let value = "hello";
let zero = 0;

console.log(Boolean(value)); //Shows 'true'
console.log(!!value); //Shows 'true'
console.log(Boolean(zero)); //Shows 'false'
console.log(!!zero); //Shows 'false'
console.log(typeof Boolean(value)); //Shows 'boolean'
console.log(typeof !!value); //Shows 'boolean'
```   


[Boolean storage and behavior](#boolean-storage-and-behavior)

#### Boolean object: new Boolean()
The ``new Boolean()`` function can also be used to create or **convert** a non-Boolean type value, but it converts to the **object type**, and not to a Boolean type.
This approach should be **avoided**, unless special cases, because it would **lead to unexpected behavior**, since, as mentioned before at [Boolean characteristics: truthy vs falsy values](#boolean-characteristics-truthy-vs-falsy-values) section, **every object is considered truthy**.

#### Boolean methods and usage
Now that we know that using ``new Boolean()`` we can create an object type, we can use some of the built-in methods of objects that JavaScript offers, like ``toString()`` and ``valueOf()``.
```javascript
let bool = true;
let boolToString = bool.toString();
let boolValueOf = bool.valueOf();

console.log(bool, typeof bool); //Shows 'true boolean'
console.log(boolToString, typeof boolToString); //Shows 'true string'
console.log(boolValueOf, typeof boolValueOf); //Shows 'true boolean'


//Using the object approach
let boolObj = new Boolean(false);
let objToString = boolObj.toString();
let objValueOf = boolObj.valueOf();

console.log(boolObj, typeof boolObj); //Shows 'Boolean (false) object'
console.log(objToString, typeof objToString); //Shows 'false string'
console.log(objValueOf, typeof objValueOf); //Shows 'false boolean'
```
