### Strings in JavaScript
This section is meant to cover everything we should know about string type variables in JavaScript.  
- [What are strings](#what-are-strings);
- [String characteristics: immutability](#string-characteristics-immutability);
- [String characteristics: length](#string-characteristics-length);
- [String characteristics: index](#string-characteristics-index);
- [String characteristics: empty vs null vs undeined](#string-characteristics-empty-vs-null-vs-undeined);
- [String methods](#string-methods);



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



#### String methods
In JavaScript, strings has various built-in method ready to use, and this methods are meant to transform or manipulate its value. We're going to cover some of the most commonly used, but you can check the whole list on [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).  

##### .charAt(index)
This method **returns the character of the string** sequence at the position appointed between the brackets. Check the examples below:  
```javascript
let myName = "luiz";
console.log(myName.charAt(0));//Shows 'l'
console.log(myName.charAt(3));//Shows 'z'
```  
And yes, it works very similar to the use of the index structure access of "string Variable[0]".  
```javascript
let myName = "luiz";
console.log(myName.charAt(0));//Shows 'l'
console.log(myName[0]);//Shows 'l'

console.log(myName.charAt(3));//Shows 'z'
console.log(myName[3]);//Shows 'z'
```  
But there's a slight difference between them. While both returns the character of the string, when existing, the way they **will return a non existing** character could lead to different results.
```javascript
let myName = "luiz";//Goes up to 4 characters (meaning up to 3 index, starting at 0)
console.log(myName.charAt(5));//Shows ''
console.log(myName[5]);//Shows 'undefined'

console.log(myName.charAt(-1));//Shows ''
console.log(myName[-1]);//Shows 'undefined'
```  
Remember that strings are a sequence of characters? and as shown before '``undefined``' indicates that no value exists at the specified index? So yes! basically that's exactly what is happening here, but with a small difference.  
When using the ***index approach*** we were returned with '``undefined``' because in this scenario the index of character that we tried to access doesn't exist, and therefore, doesn't have any value to it.  
But when using ``.charAt()`` we received an empty return of ``''``, that's because they ``.charAt()` also didn't find any value in the position requested but since it's a string type method it return a string type anwers, and it's empty string value showing that there's nothing to be retured.  
This could be very helpful in some situations when, for example, dealing with **strings validations** or manipuation where is imperative that the type should remain as string. Let's see some examples:
```javascript
let myName = "Luiz";//Goes only up to 3 indexes, meaning characters

//Both trying to have access to a non existing index/value/character
let charAtApproach = myName.charAt(5);
let indexApproach = myName[5];

//Concat with the return of .charAt() that doesn't exist
console.log(myName.length); //Shows '4'
console.log(typeof charAtApproach); //shows string
myName += charAtApproach;
console.log(myName); //Shows 'Luiz'
console.log(myName.length); //Shows '4'

//Concat with the return of myName[5] (index approach) that doesn't exist
console.log(myName.length); //Shows '4'
console.log(typeof indexApproach); //shows undefined
myName += indexApproach;
console.log(myName); //Shows 'Luizundefined'
console.log(myName.length); //Shows '13'
```  
As you can see, when dealing with string, it's **imperative to understand** how strings and strings methods works because, in essence what happened above it's not an error, but certainly could lead to a unwanted result.  
The same it's true when dealing with special characters/symbols.  
```javascript
let emoji = "😊";
console.log(emoji.charAt(0)); // Shows part of the emoji (not the whole character)
console.log(emoji.charAt(1)); // Show another part of the emoji
```

