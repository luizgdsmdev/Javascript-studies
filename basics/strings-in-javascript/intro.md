### Strings in Javascript
This section is meant to cover everything we should know about string type variables in Javascript.  
- [What are strings](#what-are-strings);
- [String characteristics: immutability](#string-characteristics-immutability);

#### What are strings
Strings are a **fundamental type**, also called ***"primitive type"***, structure by a sequence of characters used to represent a text. It can contain **zero or more** character represented by the **alphabet** (*a, b, ...Z*), but **also numbers** (*1, -1, 0*) or special **symbols** (*@, #, _*) thanks to UTF-16.  
In other words, think of strings as a single (when not empty) letter (character), that when in a **sequence** of more letter would form a text (word), that in another sequence would for a phrase and so on.  
Strings can be assign to any type of variables of the list we saw earlier at the [variables section](https://github.com/luizgdsmdev/Javascript-studies/blob/main/basics/variables/intro.md), which includes ```let```, ```var```, and ```const```.

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

Backticks are also very common and used for allowing for embedded expressions and multiline strings by th use of ```${}```:
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
What is really happening here is that every time you try to change the value of the string, in reality, you are **creating** a new one in memory. These new strings receives the value of the original one on which they were based.  
In this case, ```myName``` was the first one that hold the value of *"Luiz"*.
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

Okay so behind the scenes, it's all about creating a new string with the updated value and assigning the variable to this new space in memory. **But what if I return the variable to the original value?** like the example below. What would happen? Does the variable return to the original space in memory or creates a new one again?
````javascript
let myName = "Luiz";
let newName = myName + " Gustavo";
console.log(newName) //shows 'Luiz Gustavo'

myName = "Luiz";
console.log(myName) //shows 'Luiz'
````  
The answer to this it's the very same logical steps that brought us here. The **immutability of strings** will hit again and force the creation of a new string and the reassignment of the variable to the updated value in a new space in memory, **even if the new value it's the very same** as the original one placed at the beginning.




### Conclusão
Para explicar strings em JavaScript, foque em:
- Explicar que são imutáveis, têm comprimento (`length`) e índices.
- Mostrar operações básicas como concatenação e escape de caracteres.
- Destacar que strings são armazenadas em variáveis, que apontam para endereços na memória.
- Mencionar cuidados, como case-sensitivity e diferença entre string vazia, `null` e `undefined`.