### Control Flow (if, else, switch, loops)
This section is meant to cover everything we should know about Control Flow in JavaScript.  

- [What is Control Flow?](#what-is-control-flow)
- [Methods for creating control flow structures](#control-flow-creation-methods)
- [Control flow deletion or interruption](#control-flow-interruption)
- [Control flow characteristics: Memory storage](#control-flow-characteristics-memory-storage)
- [Control flow characteristics: Type](#control-flow-characteristics-type)
- [Control flow characteristics: Mutability](#control-flow-characteristics-mutability)
- [Control flow methods: Iteration with Object.keys() and Object.values()](#control-flow-methods-object-keys-and-object-values)
- [Control flow methods: Object.freeze() and Object.seal()](#control-flow-methods-object-freeze-and-object-seal)
- [Control flow methods: hasOwnProperty()](#control-flow-methods-hasownproperty)
- [Control flow methods: Bonus](#control-flow-methods-bonus)

Go back to [basics listing](https://github.com/luizgdsmdev/-Javascript-studies/blob/main/basics/intro.md).  

#### What is Control Flow?
The control flow allows the program to **make decisions or repeat actions** through specific structures, adding execution flow based and dynamic control to the instructions. This means that, based on data, we can define and **control the program's behavior and actions** in order to produce or retrieve the result needed.

#### Methods for creating control flow structures
In order to control the flow, we'll be using different structures to check and define previous conditions or actions needed. For all structures, we'll be using the expressions to determine if the block should or should not be executed. For this, we'll be using the **logical operators** in order to create these expressions:
- ``==``: loose comparison, compare only if the value presented is equal. Returns a boolean.
- ``===``: strict comaprison, comparing the **value and the type** of the value. Returns a boolean.
- ``&&``: the 'and' operator compares two conditions with one another. Returns a boolean (true) if **both conditions** are validated;
- ``||``: the 'or' also compares two conditions with one another. Return a boolean (true) if **at least one** conditions are validated;
- ``!``: the negation operator inverts the value of the condition. If true, the value becomes false.
- ``>`` or ``>=``: compare if the value is 'greater than' or if it is 'equal to or greater than'. Returns a boolean.
- ``<`` or ``<=``: compare if the value is 'less than' or if it is 'equal to or less than'. Returns a boolean.

##### Conditionals
Conditionals are a basic code block that is executed if a **condition** (or a set of conditions) is sufficient, where a condition here is an **expression that evaluates to true or false**. 

###### ``if``
The ``if`` structure executes a block of code if a condition is true. If not, the block is ignored and not executed.
Basic structure is:
````javascript
if(condition){

}
````
Where:
- ``if``: specific word for calling the method;
- ``(condition)``: the parentheses receive the parameters and execute the validation;
- ``{}``: the curly brackets wrap the code that will be executed if the condition is true.

````javascript
//Forcing the block by adding true for validation, which validates for true
if(true){
    console.log("true block");//Shows true block
}

if(10 == '10'){
    console.log("10 == '10' block");//10 == '10' block
}

//Not executed, because of the value type
if(10 === '10'){
    console.log("10 === '10' block");
}
```` 

###### ``if else``
Same behavior as the ``if``, but here if the expression is evaluated to false, we have a 'fallback' block (the ``else``) that will be executed;
````javascript
if(false){//Ignored and not executed
    console.log("true block");

}else{//executed
    console.log("false block");//Shows false block
}


if(10 == '10'){//executed
    console.log("true block");//Shows true block

}else{//Ignored and not executed
    console.log("true block");
}
```` 

###### ``else if``
Same behavior as the ``if`` or ``else``, but what if we have more than one possible scenario to evaluate? That's where we'll be using the ``else if``.
Notice that we can stack up these conditions, but as soon as the expression gets 'true', the rest of the block is ignored.
````javascript
if(false){//Ignored and not executed
    console.log("true block");

}else if(true){//executed
    console.log("false block");//Shows false block
}


if(10 == '10'){//executed
    console.log("true block");//Shows true block

}else if(10 == 10){//Ignored and not executed, because the last condition is already sufficient
    console.log("true block");
}


if(true === false){//Ignored and not executed
    console.log("first block");

}else if(10 === '10'){//Ignored and not executed
    console.log("Second block");

}else if(10 === 10){//executed
    console.log("third block");//Shows third block"

}else{//Ignored and not executed, because the last condition is already sufficient
    console.log("last block");
}
```` 
###### ``switch``
Same behavior as the ``else if``, but in a different structure and based on matching values. We add ``break;`` at each validation to break the execution of the blocks below.
````javascript
let fruit = 'apple';

switch (fruit) {
    case 'banana'://Ignored
        console.log("The fruit is banana");
        break;
    
    case 'orange'://Ignored
        console.log("The fruit is orange");
        break;
    
    case 'apple'://Executed, breaking the flow and exiting the switch after execution of the code
        console.log("The fruit is apple");
        break;

    default:
        console.log("The fruit is not in the list.");
        break;
}
```` 


##### Loops
Loops works simmilar to the condition, but they are a repetion block meaning that the code inside the block will reapet until the expression becomes true. The logical operator here have the same use as in the condition block.   

###### ``for``
Iterates a fixed number of times or over a sequence. the basic strucuture for a ``for`` loops is:
````javascript
for(let index = 0; index <= 1; index++){
    //Code to be executed
}
````
- ``for``: keyword to indicate the loop structure;
- ``let index = 0;``: creates a variable that will work as an iterable counter to define the number of cycles that are being executed;
- ``index <= 1;``: evaluates the expression and defines if the block should be executed again. '1' here represents an integer number, but can also be a variable or a property like 'array.length';
- ``index++``: incrementation of the counter for each time the block is executed.

````javascript
for (let i = 0; i < 3; i++) {
    console.log('Executed');//Shows 'Executed' 3 times on the console
}

let controller = 3;
for (let i = 0; i < controller; i++) {
    console.log('Executed');//Shows 'Executed' 3 times on the console
}

let array = ['Executed 1', 'Executed 2', 'Executed 3'];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    //Shows Executed 1
    //Shows Executed 2
    //Shows Executed 3
}
````


###### ``while``
Executes as long as a condition is true.
````javascript
let controller = 1;
while (controller < 4) {
    console.log(`Executed ${controller}`);
    controller++;
}
//Shows Executed 1
//Shows Executed 2
//Shows Executed 3

let controllerA = 4;
while (controller < 4) {//Not executed
    console.log(`Executed ${controller}`);
    controller++;
}
````

###### ``do...while``
Executes at least once and continues while the condition is true.
````javascript
let controller = 4;
do{//Executed at least one, even if the expression is false

    console.log(`Executed ${controller}`);//Shows Executed 4
    controller++;
}while(controller < 4) 
````

###### ``for...in``
Iterates over an object's enumerable properties.
````javascript
let obj = {name: 'Luiz', age: 29, state: 'Minas Gerais'};

for(item in obj){
    console.log(`This is the ${item}.`);
    console.log(`This is obj ${obj[item]}.`);
}

//Shows This is the name.
//Shows This is obj Luiz.
//Shows script2.js:8
//Shows This is the age.
//Shows This is obj 29.
//Shows script2.js:8
//Shows This is the state.
//Shows This is obj Minas Gerais.
````



###### ``for...of``
Iterates over iterable values like arrays or strings.
````javascript
let fruitList = ['apple', 'banana', 'orange'];
let word = 'orange';

for(fruit of fruitList){
    console.log(`This is the fruit: ${fruit}`);
}
//Shows This is the fruit: apple
//Shows This is the fruit: banana
//Shows This is the fruit: orange


for(letter of word){
    console.log(letter);
}
//Shows o
//Shows r
//Shows a
//Shows n
//Shows g
//Shows e
````

####
####