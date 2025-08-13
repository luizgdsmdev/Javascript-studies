### Numbers in JavaScript
This section is meant to cover everything we should know about number type variables in JavaScript.  
- [What are numbers](#what-are-numbers)
- [The Number()](#the-number)
- [Arithmetic operations with numbers](#arithmetic-operations-with-numbers)
- [Number characteristics: precision](#number-characteristics-precision)
- [Number characteristics: null vs undefined vs zero](#number-characteristics-null-vs-undefined-vs-zero)
- [Number characteristics: NaN, Infinity, and -Infinity](#number-characteristics-nan-infinity)
- [Number methods](#number-methods)


#### What are numbers
The **number type** is used to represent **numerical values** with positive or negative charges such as **integers** (3,6,-99), **floating-points** also now as fractional numbers (0.3,-0.9), or **special values** like ``NaN``, ``Infinity``, ``-Infinity``.   
And just like we saw at the [strings](https://github.com/luizgdsmdev/Javascript-studies/blob/main/basics/strings-in-javascript/intro.md) section, numbers can also be assigned to [variables](https://github.com/luizgdsmdev/Javascript-studies/blob/main/basics/variables/intro.md) such as ``let``, ``var``, or ``const``.  
Let's see some examples:  
```javascript
let num = 5;
console.log(typeof num);//Shows 'number'

var floatNum = -0.9;
console.log(typeof floatNum);//Shows 'number'

const piNum = 3.14159;
console.log(typeof piNum);//Shows 'number'
```  
Now, if you know different programming languages, you may have noticed that all of them hold the same type ``number``, even floating ones. Why's that?  
See, the JavaScript architecture uses the IEEE 754 standard, meaning that all values of the type number will be stored as a double-precision 64-bit floating-point number. A What???  
In other words, all values of the ``number type`` are floating-point, even if you assign an integer to a variable. Let's put this to the test:
```javascript
let numberA = 5;
let numberB = 5.0;

console.log(numberA === numberB);//Shows 'true'

let numberD = 4.0;
console.log(numberA === numberD);//Shows 'false'
console.log(numberB === numberD);//Shows 'false'
```

So as you can see above, for JavaScript '5' and '5.0' hold the **same value**, because since their stored as floating-point numbers, all integers are automatically converted and stored as so.  
The second example makes it clear that '4' doesn't share the **same value** as the previous variables.
##### Immutability
Numbers also have the **immutability** property, meaning that you **can't change** the original value of a number variable once it has been assigned.

#### The Number()
Another way to create a number is by using the "**``Number()``**" function. It allows you to **create and assign** a value of the number type to a variable, just like we saw earlier.

```javascript
let num = Number(5);
console.log(typeof num);//Shows 'number'

var floatNum = Number(-0.9);
console.log(typeof floatNum);//Shows 'number'

const piNum = Number(3.14159);
console.log(typeof piNum);//Shows 'number'
```  
This approach is **not commonly used** for creating a number per se, we'll see more of its use for **converting** other types (like a string) to a number type, and you want to make it **explicit** that the value is being converted to a number.
```javascript
let string = '5';

let stringForNum = Number(string);

console.log(typeof string);//Shows 'string'
console.log(typeof stringForNum);//Shows 'number'
```  

#### Arithmetic operations with numbers
We can also use arithmetic operations with numbers, like:
- addition (``+``);
- subtraction (``-``);
- multiplication (``*``);
- division (``/``);
- modulus (``%``);
- and exponentiation (``**``);
```javascript
let a = 10;
let b = 5;

console.log(a + b); //Shows 15
console.log(a * b); //Shows 50
console.log(a ** 2); //Shows 100
```



#### Number characteristics: precision
For using the **64-bit floating-point representation**, JavaScript ends up having imprecise accuracy, especially with **large numbers**.  
But what does it mean for your code? Let's check:

```javascript
let a = 0.1;
let b = 0.2;
let c = a + b;

console.log(a);//Shows '0.1'
console.log(b);//Shows '0.2'
console.log(c === 0.3);//Shows 'false'
```
Wait a minute... Why does the value of c show false???  
That's happening because of the way JavaScript deals with numbers behind the scenes. In reality, the value of 'a' (0.1) and 'b' (0.2) isn't really what we saw at the console.
The more realistic number for 'a' would be ``0.10000000000000000555...`` and for 'b' ``0.2000000000000000111...``. This is because, as told you before, the 64-bit floating-point representation **tends to be way too precise** in its representation of the number, and later it would **result in imprecise numbers** when dealing with operations.  
We didn't see this huge number at the console because it will be useless in most cases, so JavaScript goes ahead and rounds these values for readability.

```javascript
let a = 0.1;//Actually stored as something like 0.10000000000000000555...
let b = 0.2;//Actually stored as something like 0.2000000000000000111...
let c = a + b;//Actually stored as something like 0.30000000000000004

console.log(a);//Shows auto rounded '0.1'
console.log(b);//Shows auto rounded '0.2'
console.log(c);//Shows '0.30000000000000004'

console.log(c === 0.3);//Shows 'false'
console.log(c === 0.30000000000000004);//Shows 'true'
```

#### Number characteristics: ``null`` vs ``undefined`` vs ``zero``
In JavaScript, we have different ways of saying that a **variable can lack a value**, but each approach could lead to different results.  
###### ``undefined``
Undefined is an **implicit**, **unintentional** way of saying that a variable has a lack of value, meaning, empty. It's the **standard behavior of JavaScript** and it's also used to indicate that the variable was declared, but not assigned to any value.  
Now, in essence, undefined itself is a value, per se, but it's used to define and symbolize emptiness. So at the beginning, every variable will hold the ``undefined`` value until assigned to one.  
```javascript
let myName;
console.log(myName);//Shows 'undefined'
console.log(typeof myName);//Shows 'undefined'

//Meaning the variable was created but not assigned
//Also means, from a reading perspective, that it holds no intentional value aside from undefined.
```
###### ``null``
Pretty much similar to ´´undefined´´. It's also used to indicate that a variable **holds no value**, aside from ``null``, and it's also used to represent emptiness.  
The key difference between them it's that ``null`` is **intentionally and explicitly assigned** to a variable, and **can't appear as a value** of a variable if not intentionally assigned.
```javascript
let myName = null;
console.log(myName);//Shows 'null'
console.log(typeof myName);//Shows 'object'

//MUST be assigned to a variable, otherwise doesn't appear
//Also means, from a reading perspective, that it intentionally represents a lack of value.
```
The ``typeof``  operator returns "``object``" when applied to ``null``. This behavior is a long-standing, well-known bug in JavaScript that dates back to its initial implementation. 

###### ``zero`` (``0``)
The zero (``0``) in JavaScript it's the numerical representation of the number zero, and zero it's commonly used to represent the lack of value or a point on a map. Even though zero, in essence, represents no value, in JavaScript, the numerical representation of the number actually holds a value.  
It means that a variable with the number type '``0``' assigned to it it's not empty, like the ``undefined`` or ``null``. Let's check that out:  
```javascript
let num = 0;
console.log(num);//Shows '0'
console.log(typeof num);//Shows 'number'
```  

##### Comparing ``null`` vs ``undefined`` vs ``zero``
```javascript
let undefined;
let nullVar = null;
let num = 0;

console.log(undefined);//Shows 'undefined'
console.log(nullVar);//Shows 'null'
console.log(num);//Shows '0'


//comparing with loose equality
console.log(undefined == nullVar);//Shows 'true', because in essence they both represent emptiness/lack of value

//strict equality
console.log(undefined === nullVar);//Shows 'false', because they are different types

//Shows 'false', because the 'num' variable it's not empty per se, it holds the numerical value of '0' (zero). And zero in turn represents the lack of a numerical value.
console.log(undefined == num);
console.log(nullVar == num);
```

#### Number characteristics: ``NaN``, ``Infinity``, and ``-Infinity``
##### ``NaN``
In JavaScript, ``NaN`` is a reserved key to represent an invalid number value. It means literally "**Not a Number**".
Oddly, it has the ``number`` type, but **can't** be used as a number for arithmetic operations of any kind. It's not necessarily an error, but it represents that a value or the result of an operation is not a valid numerical type.  
```javascript
console.log(0 / 0); //Shows 'NaN'
console.log(Math.sqrt(-1)); //Shows 'NaN'
console.log(typeof NaN); //Shows 'number'
```  
It has a nice method ``.isNaN()``designed to check if a variable is ``Nan``.
```javascript
console.log(Number.isNaN(NaN)); //Shows 'true'
console.log(Number.isNaN("hello")); //Shows 'false'
```  

##### ``Infinity`` and ``-Infinity``
Due to the way that JavaScript deals with the ``number`` type, sometimes some numbers can get out of reach, and for that we have ``Infinity`` and ``-Infinity``.  
They both represent values that went beyond the maximum representable number, and are also the ``number`` type.
```javascript
let positiveInfinity = 1 / 0;
let negativeInfinity = -1 / 0;

console.log(positiveInfinity); //Shows Infinity
console.log(typeof (positiveInfinity)); //Shows number

console.log(negativeInfinity); //Shows -Infinity
console.log(typeof negativeInfinity); //Shows number
```

#### Number methods
JavaScript provides **built-in methods** for the **number type** to manipulate and format numbers. These methods are accessible on **number primitives**, let's check some examples below.

##### Number methods: .toPrecision(precision)
Formats a number to a **specified length** (total digits, not just decimals) and returns a string. Rounds or pads as needed.
```javascript
let num = 123.456;
console.log(num.toPrecision(4)); // "123.5"
console.log(num.toPrecision(2)); // "1.2e2" (scientific notation for large numbers)
```

##### Number methods: .isInteger(value)
Checks if a value is an integer.
```javascript
console.log(Number.isInteger(42)); // true
console.log(Number.isInteger(42.0)); // true (no decimal part)
console.log(Number.isInteger(42.5)); // false
```
##### Number methods: ``.toFixed(digits)``
The ``.toFixed(digits)`` method formats a **number type** to a specified number of **decimal places** and returns it as a **string**.  
**Note**: **the maximum valid value of digits are 0 to 20**.
```javascript
let num = 3.14159;
num = num.toFixed(2);
console.log(num); //Shows "3.14" (rounds to 2 decimal places)
console.log(typeof num);//Shows 'string

num = 3.14159;
num = num.toFixed(0);
console.log(num); //Shows "3" (no decimal places)
console.log(typeof num);//Shows 'string

num = 3.14159;
num = num.toFixed(4);
console.log(num); //Shows "3.1416" (rounds to 4 decimal places)
console.log(typeof num);//Shows 'string
```
With **integer values**:
```javascript
let num = 3;
num = num.toFixed(2);
console.log(num); //Shows "3.00" (rounds to 2 decimal places)
console.log(typeof num);//Shows 'string

num = 3;
num = num.toFixed(0);
console.log(num); //Shows "3" (no decimal places)
console.log(typeof num);//Shows 'string

num = 3;
num = num.toFixed(4);
console.log(num); //Shows "3.0000" (rounds to 4 decimal places)
console.log(typeof num);//Shows 'string
```
##### Number methods: .toExponential(fractionDigits)
Checks if a value is an integer.
```javascript
let num = 1234;
console.log(num.toExponential(2)); // "1.23e+3"
```
##### Number methods: .toString(radix)
The ``.toString(radix)`` method converts a number to a **string** in a specified base (radix).  
**Note**: **the maximum valid value for radix are 2 to 36**, with 10 as default value.
```javascript
let num = 255;
console.log(num.toString());//Shows "255" (base 10, default)
console.log(num.toString(2));//Shows "11111111" (binary)
console.log(num.toString(16));//Shows "ff" (hexadecimal)
```















