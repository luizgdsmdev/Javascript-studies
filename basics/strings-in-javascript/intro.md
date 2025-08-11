### Strings in JavaScript
This section is meant to cover everything we should know about string type variables in JavaScript.  
- [What are strings](#what-are-strings);
- [String characteristics: immutability](#string-characteristics-immutability);
- [String characteristics: length](#string-characteristics-length);
- [String characteristics: index](#string-characteristics-index);
- [String characteristics: empty vs null vs undeined](#string-characteristics-empty-vs-null-vs-undeined);



#### What are strings
Strings are a **fundamental type**, also called ***"primitive type"***, a structure by a sequence of characters used to represent a text. It can contain **zero or more** character represented by the **alphabet** (*a, b, ...Z*), but **also numbers** (*1, -1, 0*) or special **symbols** (*@, #, _*) thanks to UTF-16.  
In other words, think of strings as a single (when not empty) letter (character), that when in a **sequence** of more letters would form a text (word), that in another sequence would form a phrase, and so on.  
Strings can be assigned to any type of variable of the list we saw earlier at the [variables section](https://github.com/luizgdsmdev/Javascript-studies/blob/main/basics/variables/intro.md), which includes ```let```, ```var```, and ```const```.

To assign a value of the string type to a variable, you can use:  
- Single quotes - '':
```javascript
let singleChar = 'a';
let doubleChar = 'ab';
var singleWord = 'phone';
const multiWord = 'call me when you arrive';
let specialSym = '😊 世界!';
```  
- Double quotes - "":
```javascript
let singleChar = "a";
let doubleChar = "ab";
var singleWord = "phone";
const multiWord = "call me when you arrive";
let specialSym = "😊 世界!";
``` 
- Template literals (backticks) - ``:
```javascript
let singleChar = `a`;
let doubleChar = `ab`;
var singleWord = `phone`;
const multiWord = `call me when you arrive`;
let specialSym = `😊 世界!`;
```  

Backticks are also very common and used for allowing for embedded expressions and multiline strings by the use of ```${}```:
```javascript
let firstName = `Luiz`;
let secondName = `Gustavo`;

//embedded expressions
let fullName = `${firstName} ${secondName}` //fullName value: 'Luiz Gustavo'
let sum = `${5 + 5}` //sum value: '10'

//multiline strings
let multiline = ` 
    First line
    Second line
    ${firstName} ${secondName}
`
//multiline value: '\n    First line\n    Second line\n    Luiz Gustavo\n'
```  





#### String characteristics immutability
Once assigned, the value of the strings has something called ***"immutability"***, which means that the **original value cannot be changed**.  
But well, it sounds kind of weird because I remember changing the value in various shapes and forms, so how can it be? Let's take a better look:

````javascript
//Assigning a value
let myName = "Luiz";
console.log(myName) //shows 'Luiz'

//Concat with a new value
myName += " Gustavo";
console.log(myName) //shows 'Luiz Gustavo'

//Reassigning  with a different value
myName = "Gustavo";
console.log(myName) //shows 'Gustavo'
````  
What is really happening here is that every time you try to change the value of the string, in reality, you are **creating** a new one in memory. These new strings receive the value of the original one on which they were based.  
In this case, ```myName``` was the first one that held the value of *"Luiz"*.
````javascript
//Assigning a value
let myName = "Luiz";
console.log(myName) //shows 'Luiz'
````  
Once the concatenation was done, what happened is that a ***new string was created*** receiving the original value (from ```myName```), and adding the extra information *" Gustavo"*. From that, the variable ```myName``` is now pointing to this new string value, ignoring the original one that still exists in its original space in memory.  
Below we can see, by the use of ```newName```, exactly what would happen by declaring manually a new variable to have the same result.
````javascript
//Concat with a new value
let myName = "Luiz";
myName += " Gustavo";
console.log(myName) //shows 'Luiz Gustavo'

//equivalent by using a new variable
let myName = "Luiz";
let newName = myName + " Gustavo";
console.log(newName) //shows 'Luiz Gustavo'
````  

Okay, so behind the scenes, it's all about creating a new string with the updated value and assigning the variable to this new space in memory. **But what if I return the variable to the original value?** like the example below. What would happen? Does the variable return to the original space in memory or create a new one again?
````javascript
let myName = "Luiz";
let newName = myName + " Gustavo";
console.log(newName) //shows 'Luiz Gustavo'

myName = "Luiz";
console.log(myName) //shows 'Luiz'
````  
The answer to this is the very same logical steps that brought us here. The **immutability of strings** will hit again and force the creation of a new string and the reassignment of the variable to the updated value in a new space in memory, **even if the new value is the very same** as the original one placed at the beginning.



#### String characteristics length
Strings also have a **length property**, meaning that we can access different parts of the string value, as well as check for its *"size"*.  
To check a string size/length, we're going to use the property ***".length"*** already built into JavaScript. Check the example below:

```javascript
let myName = "Luiz";
console.log(myName.length) //Shows '4'

myName += " Gustavo";
console.log(myName.length) //Shows '12'
```
As shown above, by adding the property ".length" right next to the string variable, we're not able to check for its size, meaning, how many characters it has.  

```javascript
let myName = "Luiz";
console.log(myName.length) //Shows '4'
// |1|2|3|4|
// |L|u|i|z|

myName += " Gustavo";
console.log(myName.length) //Shows '12'
// |1|2|3|4|5|6|7|8|9|10|11|12|
// |L|u|i|z| |G|u|s|t|a|v|o|
```  
An **important thing to be aware** of is that, as shown above, **empty spaces are also added to the total count of length**, and that's because empty spaces are still a value character in the string and therefore, represent a space in memory that **will added up to the string value** and visual representation.  

Note: For special characters like **emojis**, .length may count more than one per character due to the modification of UTF-16 used by JavaScript.
```javascript
let emoji = "😊";
console.log(emoji.length); //Shows '2' because the emoji 😊 is encoded as a surrogate pair
```  


#### String characteristics index
As said before, strings are a **sequence of characters** that follow a **sequence order**, defined at the moment of assigning the value. And since we now know the order, we can actually have **access to each one of these characters** by the use of the **index**.  
Similar to the structure of *"``length``"*, to use the index, we just need to **add "[]"** (square brackets) right next to the variable name. inside the square brackets, we **add a number**, where this number represents the **position of the character in the string length**. Check the example below.  
```javascript
let myName = "Luiz";
console.log(myName[0]); //Shows 'L'
console.log(myName[1]); //Shows 'u'
console.log(myName[2]); //Shows 'i'
console.log(myName[3]); //Shows 'z'
```  
And since a variable can also hold numbers, we're able to use **another variable as an index value**: 
```javascript
let myName = "Luiz";
let indexNum = 0;
console.log(myName[indexNum]); //Shows 'L'

indexNum = 1;
console.log(myName[indexNum]); //Shows 'u'
```  
Note that the index points to the characters that are in the string length appointed, we can** only use numbers** (or variables containing numbers) as valid indices for strings. Let's take a look at some **wrong** examples:
```javascript
let myName = "Luiz";
console.log(myName['u']); //Shows 'undefined'
console.log(myName[4]); // Shows 'undefined' (index out of range)
console.log(myName[-1]); // Shows 'undefined' (negative index)
```  

#### String characteristics empty vs null vs undefined
To get a better understanding of these values, first, let's see what each of them actually means.
##### Empty
When dealing with empty strings, we are actually saying that the value assigned to a variable is of the type string and has no characters in it. Check the example below:
```javascript
//Using double quotes
let myName = "";
console.log(myName); //console shows empty line
console.log(myName.length);  //console shows 0

//Using singe quotes
let myName = '';
console.log(myName); //console shows nothing
console.log(myName.length);  //console shows 0

//Using template literals
let myName = ``;
console.log(myName); //console shows nothing
console.log(myName.length);  //console shows 0
```
As you can see, when you don't add any character to a **string type**, it has the state of empty. Still a string type (because we assign it by using the quotes or template literals), still having its properties and still having a length, but is empty in essence.  

##### Null
``Null`` in JavaScript is also used to refer to a variable that **points to no value or type**. But what differs "``null``" from declaring an empty string like we saw above?
***"``null``"*** is the **intentional absence of any object value**, meaning, when you set any variable to ``null``, you are **intentionally** saying that the variable holds no value or type of any kind.  
But when you set a variable using empty quotes or template literals, you are **intentionally** saying that the variable **has no value** (character) **AND** it's of the string type.
```javascript
let myName = ""
console.log(myName.length);// Shows '0' Since it's a string, we can access its properties
console.log(typeof myName);// Shows 'string'

let secondName = null;
//Since it's NOT a string type (or a type that has '.length' property), shows a type error
console.log(secondName.length);//Shows 'Uncaught TypeError: Cannot read properties of null (reading 'length')'

console.log(typeof secondName);//Shows 'object'
```
Although both may seem similar in representing an **empty** state, they're **NOT the same** when it comes to properties or even type and behavior, since ``typeof null`` returns '``object``' (a historical quirk in JavaScript), unlike a string type

##### Undefined
In JavaScript, undefined is another one of the primitive types representing the **absence of a value**. 
It occurs when a **variable is declared**, but **not assigned to any value**, and in some cases, a function does not explicitly return a value. Check below:
```javascript
let myName;//Declared, but not assigned to any type or value.

console.log(myName);//shows 'undefined'
console.log(typeof myName);//shows 'undefined'

//Since we don't have type or value returns a type error
console.log(myName.length);// shows 'TypeError: Cannot read properties of undefined (reading 'length')'


function noReturn() {
  // no return
}
let result = noReturn();
console.log(result); // Shows 'undefined'
console.log(typeof result); // shows 'undefined'
```
So long story short, empty strings (ex: empty quotes) **ARE NOT the same** as ``null`` or ``undefined``, nor in type or behavior. And since strings can be one of the most used types in applications, it's important to know and understand some of these differences that could save you lots of time.

