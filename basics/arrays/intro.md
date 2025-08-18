### Arrays in JavaScript
This section covers everything you should know about arrays in JavaScript, including usage, behavior, and more.
- [What are arrays](#what-are-arrays)
- [Arrays characteristics: type](#arrays-characteristics-type)
- [Arrays characteristics: multi-dimension](#arrays-characteristics-multi-dimension)
- [Arrays characteristics: index and access](#arrays-characteristics-index-and-access)
- [Arrays characteristics: mutability](#arrays-characteristics-mutability)
- [Arrays characteristics: length](#arrays-characteristics-length)
- [Arrays characteristics: memory storage](#arrays-characteristics-memory-storage)
- [Arrays methods](#arrays-methods)
- [Arrays methods: .push() and .pop()](#arrays-methods-push-and-pop)
- [Arrays methods: .unshift() and .shift()](#arrays-methods-unshift-and-shift)
- [Arrays methods: .slice(start, end)](#arrays-methods-slice)
- [Arrays methods: .splice(start, deleteCount, ...items)](#arrays-methods-splice)
- [Arrays methods: .forEach(callback)](#arrays-methods-foreach)
- [Arrays methods: .map(callback)](#arrays-methods-map)
- [Arrays methods: bonus](#arrays-methods-bonus)


Go back to [basics listing](https://github.com/luizgdsmdev/Javascript-studies/blob/main/basics/intro.md). 


#### What are arrays
Arrays, also known as vectors or *'list'* in JavaScript, are an **ordered collection of values** wrapped in a special **object type** structure.   
Let's check how to declare an array:
```javascript
let newArray = [];
```   
Very similar to any other variable, arrays follow the basic structure of "``keyWord`` variableName = []". Let's break it down.
- ``keyWord``: Arrays can be declared using any of the three valid keywords for variable instantiation, like ``let``, ``const``, and ``var``;
- variableName: the variable name follows the **basic rules of naming a variable** like not using reserved words, without space between words, no special characters or numbers as the first character of the name;
- [] (bracket): arrays are created using the brackets, which indicate that the variable being assigned to it can now receive a collection of values, as being an array.
###### Note:
Just like every other ``const`` variable, their value cannot be changed over time, so once assigned to a variable, the items inside the array can be changed, but the reference of the variable will remain constant and immutable. Use this approach only when you explicitly need the array to remain constant.  

Similar to a standard vector structure, here used conceptually to describe a more rigid structure in other languages, arrays can point to a ***'list'* of items stored** in memory (just like any other variable), but with a main difference:
- Vector: can store a limited amount of **items of the same type**: it's a concept of a structure that defines its creation and behavior: 
```javascript
let vectorNumber = [1, 2, -1, 0.5];//A list of only number type
let vectorString = ['luiz', 'gustavo', 'apple', 'car'];//A list of only string type
```
- Arrays: on the other hand, arrays in JavaScript are way more 'flexible' per se, they allow you to **store multiple types** at the same time, it's a vector-based structure but more loose in some ways:
```javascript   
let arrays = [[10, 11], ['rock', 'stone']];//A list of only arrays
let arrayAll = [[1, 2, 3], ['luiz', 'gustavo'], {}, arrays, () => console.log("functions too")];//A list with numbers, strings, arrays, objects, and functions
```

#### Arrays characteristics: type
Arrays in JavaScript are an object type, but even so, they have specific methods and properties that make them not equal to generic objects.   
In order to make a type verification, we can use the ``.isArray()`` method.
```javascript
let numeros = [1, 2, 3];
console.log(typeof numeros); //'object'
console.log(Array.isArray(numeros)); //true
```

#### Arrays characteristics: multi-dimensional
Arrays can also be multi-dimensional, meaning they can also **incorporate the matrix-like structure** of rows and columns. Imagine it like an array on top of another array, and all these arrays are listed inside an array. Dimensions here are defined by the **number of vertices implemented**, for example:
- One dimension: there's only a row type structure, meaning there's **only the x vertex to run**.
- Two dimensions: now there's a row and a column type (table structure), meaning there's the **x vertice** and the **y vertice to run**.
```javascript
//One dimension
let arraysNumber = [1, 2, -1, 0.5];
let arraysString = ['luiz', 'gustavo', 'apple', 'car'];

//Two dimensions
let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8]
    ];

//Two-dimensional array
let arraysAll = [
    [1, 2, 3, 4],
    ['a', 'b', 'c', 'd'],
    [1, 'a', [2, 'b']]
    ];
```
Let's break the structure:   
```javascript
//Two dimensions
let twoDimension = [
    [1, 2, 3, 4], //→ row 0
    [5, 6, 7, 8]  //→ row 1
//   ↓  ↓  ↓  ↓
//  C0 c1 c2 c3

    ]
```
- Each array structure "``[1, 2, 3, 4]``" inside the array variable represents a row. We have 2 rows in the example above, counting starts at 0 to 1;
- Each item inside this structure "``1, 2, 3, 4``" represents a column. We have 4 columns in the example above, counting starts at 0 to 3.

#### Arrays characteristics: index and access
Now that we know how to create an array, let's check how we can have access to its values. As mentioned earlier, arrays are an **ordered structure**, meaning that every element placed inside an array has an **identifier integer number**, starting at 0, and through this number we can have access to the value it holds.   
For that, we're going to use the index approach, very similar to what we do to strings. The basic structure is:
- arrayName[index];
````javascript
let array = [1,2,3,4];
console.log(array[0]);//Shows 1
console.log(array[1]);//Shows 2
console.log(array[2]);//Shows 3
console.log(array[3]);//Shows 4
````   
The same occurs when dealing with multidimensional arrays.
````javascript
let array = [
    [1,2,3],
    ['a','b','c'],
    {},
    []
];
console.log(array[0]);//Shows [1, 2, 3]
console.log(array[1]);//Shows ['a', 'b', 'c']
console.log(array[2]);//Shows {}
console.log(array[3]);//Shows []
````

#### Arrays characteristics: mutability
Different from what we saw at the basic primitive types in JavaScript, **arrays are mutable**, meaning they can be changed due to the structure they're based on, making it possible to alter the **order or value of different indexes** without having to declare another array.   
At the end of this section, we're going to see some built-in methods of JavaScript to help us with it, but for now, we're doing it manually.
````javascript
let array = [1,2];
console.log(array[0]);//Shows 1
console.log(array[1]);//Shows 2
console.log(array[2]);//Shows undefined, because index 3 don't exist
console.log(array);//Shows (2) [1, 2]

array = [3,1,2];
console.log(array[0]);//Shows 3
console.log(array[1]);//Shows 1
console.log(array[2]);//Shows 2
console.log(array);//Shows (3) [3, 1, 2]
````   
The same occurs when dealing with multidimensional arrays.
````javascript
let array = [
    [1,2,3],
    ['a','b','c'],
];
console.log(array[0]);//Shows (3) [1, 2, 3]
console.log(array[1]);//Shows (3) ['a', 'b', 'c']
console.log(array[2]);//Shows undefined, because index 3 don't exist
console.log(array);//Shows (2) [Array(3), Array(3)]

array = [
    ['a','b','c'],
    {},
    []
];

console.log(array[1]);//Shows (3) ['a', 'b', 'c']
console.log(array[2]);//Shows {}
console.log(array[3]);//Shows (0) []
console.log(array);//Shows (3) [Array(3), {…}, Array(0)]
````
Different from strings, for example, the original values here are changed by adding or removing elements to the structure.

#### Arrays characteristics: length
Arrays also have the ``.length`` property, very useful to identify the number os elements inside. Note that the ``.length`` property returns the number of elements directly from the element, meaning that if we're dealing with multi-dimensional arrays, we can also retrieve the ``.length`` from a child element. It returns the higher index value + 1, adding up to the total elements in the array. Also, it's dynamic, so in case the array is changed by adding or removing an element, the ``.length`` property only returns the actual state of the element.
```javascript
//One dimension
let arrayA = [1,2,3];
console.log(arrayA.length);//Shows 3 where: (higher index) + 1 => 2 + 1 = 3
arrayA = [1, 2, 3, 4];
console.log(arrayA.length);//Shows 4 where: (higher index) + 1 => 3 + 1 = 4


let arrayB = ['a', 'b'];
console.log(arrayB.length);//Shows 2 where: (higher index) + 1 => 1 + 1 = 2
arrayB = ['a'];
console.log(arrayB.length);//Shows 1 2 where: (higher index) + 1 => 0 + 1 = 1


//Two dimension
let arrayC = [
            [1,2,-3, 7],
            [],
            [[4,5,6], {}, 'string', {obj: 'object'}, []]
        ];
console.log(arrayC.length);//Shows 3

console.log(arrayC[0].length);//Shows 4
arrayC[0] = [1,2,-3];
console.log(arrayC[0].length);//Shows 3

console.log(arrayC[1].length);//Shows 0
arrayC[1] = [1,2,3];
console.log(arrayC[1].length);//Shows 3


console.log(arrayC[2].length);//Shows 5
arrayC[2] = [{}, 'string', {obj: 'object'}, []]
console.log(arrayC[2].length);//Shows 4
```   
Like shown above, we can have access to the "arrayC" variable ``.length``, but also for each one of its elements that, of course, has the ``.length`` property to it.











#### Arrays characteristics: memory storage
As said before, arrays are an **object type**, and therefore they're stored in memory as a **reference**. It means that, once you assign an array structure to a variable, this variable accesses this structure by reference.   
It's important to know this because, different from string or number type where the value is stored directly in memory and therefore they can only be copied after being assigned, array variables will always refer to the same section in memory, even if this array it's already assigned to another variable. And any changes applied to one will reflect on the other variables.   
Check the example:   
````javascript
let arrayA = [1,2,3];
console.log(arrayA);//Shows (3) [1, 2, 3]
console.log(arrayA.length);//Shows 3

//Changing the reference (arrayA) by the arrayB variable
let arrayB = arrayA;
arrayB[0] = 5;
arrayB.pop();

console.log(arrayA);//Shows (2) [5, 2]
console.log(arrayA.length);//Shows 2
````

The same happens on multidimensional arrays:
````javascript
let arrayA = [
    [1,2,3],
    ['a','b','c'],
];
console.log(arrayA);//Shows (2) [Array(3), Array(3)]
console.log(arrayA.length);//Shows 2

//Changing the reference (arrayA) by the arrayB variable
let arrayB = arrayA;
arrayB[0] = [0];
arrayB.pop();

console.log(arrayA);//Shows (1) [Array(1)]
console.log(arrayA.length);//Shows 1
````   

Later in this section, at [arrays methods](#array-methods), we cover some other ways of coping with this array value, and by doing so, we avoid some unwanted behavior, such as the reference, by creating a new one.



#### Arrays methods
The JavaScript built-in methods for arrays can be divided into two main groups:
- **Mutative**: alters the original structure or its values, and by consequence, any other variable using the same reference;
- **non-mutative**: returns a new array structure with the updated sequence or altered values;   
So on one hand, the **mutative** will always be working on the **original reference** values and changing them, while the **non-mutative** will always **return a new array structure without changing the original** reference.   
Let's take a better look at some of them.


#### Arrays methods: .push() and .pop()
- ``.push(...itens)``: add one or multiple itens **to the end** of the array, creating new indexes;
- ``.pop()``: remove the **last iten** of the array sequence.
Both are a mutative type.
###### ``.push(...itens)``
````javascript
let array = [1,2,3];

console.log(array);//Shows (3) [1, 2, 3]
console.log(array.length);//Shows 3

array.push(4);//Add one element
array.push(5,6,"a", {});//Add multiple elements at once

console.log(array);//Shows [1, 2, 3, 4, 5, 6, 'a', {…}]
console.log(array.length);//Shows 8

//----------------------------------------------------------
let multiD = [[1,2,3], [{}, []]];

console.log(multiD);//Shows (2) [Array(3), Array(2)]
console.log(multiD.length);//Shows 2

multiD[0].push(4);//Add one element
multiD[1].push(5,6,"a", {});//Add multiple elements at once
multiD.push(['a','b','c']);//Add multiple elements at once

console.log(multiD);//Shows (3) [Array(4), Array(6), Array(3)]
console.log(multiD.length);//Shows 3
````

###### ``.pop()``
````javascript
let array = [1,2,3];

console.log(array);//Shows (3) [1, 2, 3]
console.log(array.length);//Shows 3

array.pop();//remove one element

console.log(array);//Shows (2) [1, 2]
console.log(array.length);//Shows 2

//----------------------------------------------------------
let multiD = [[1,2,3], [{}, []], {}];

console.log(multiD);//Shows (3) [Array(3), Array(2), {…}]
console.log(multiD.length);//Shows 3

multiD[0].pop();//remove one element
multiD[1].pop();
multiD.pop();

console.log(multiD);//Shows 2) [Array(2), Array(1)]
console.log(multiD.length);//Shows 2
````

#### Arrays methods: .unshift() and .shift()
- ``.unshift(.itens)``: add one or multiple itens **to the begining** of the array, creating new indexes;
- ``.shift()``: remove the **first iten** of the array sequence.
###### ``.unshift(...itens)``
````javascript
let array = [1,2,3];

console.log(array);//Shows (3) [1, 2, 3]
console.log(array.length);//Shows 3

array.unshift(4);//Add one element
array.unshift(5,6,"a", {});//Add multiple elements at once

console.log(array);//Shows (8) [5, 6, 'a', {…}, 4, 1, 2, 3]
console.log(array.length);//Shows 8

//----------------------------------------------------------
let multiD = [[1,2,3], [{}, []]];

console.log(multiD);//Shows (2) [Array(3), Array(2)]
console.log(multiD.length);//Shows 2

multiD[0].unshift(4);//Add one element
multiD[1].unshift(5,6,"a", {});//Add multiple elements at once
multiD.unshift(['a','b','c']);//Add multiple elements at once

console.log(multiD);//Shows (3) [Array(3), Array(4), Array(6)]
console.log(multiD.length);//Shows 3
````

###### ``.shift()``
````javascript
let array = [1,2,3];

console.log(array);//Shows (3) [1, 2, 3]
console.log(array.length);//Shows 3

array.shift();//remove one element

console.log(array);//Shows (2) [1, 2]
console.log(array.length);//Shows 2

//----------------------------------------------------------
let multiD = [[1,2,3], [{}, []], {}];

console.log(multiD);//Shows (3) [Array(3), Array(2), {…}]
console.log(multiD.length);//Shows 3

multiD[0].shift();//remove one element
multiD[1].shift();
multiD.shift();

console.log(multiD);//Shows (2) [Array(1), {…}]
console.log(multiD.length);//Shows 2
````



#### Arrays methods: .slice()
The ``.slice(start, end)`` is a **non-mutative method** of JavaScript that returns a copy of the elements inside the designated sequence of the array, where:
- ``start``: **inclusive parameter**, that indicates where the copy sequence of elements should start. The element at this index will be **included on the return**;
- ``end``: **non-inclusive parameter**, that indicates where the sequence ends. The element at this index **will not be included** on the return.   
It **supports negative indexes**, like -1 or -12, which invert the counting from the end of the sequence towards the beginning, starting at **-1**.
````javascript
let array = [1,2,3,4];

let arrayB = array.slice(0,3);
console.log(arrayB);//Shows (3) [1, 2, 3]

let arrayC = array.slice(1,2);
console.log(arrayC);//Shows (1) [2]

let arrayD = array.slice(0, -2);
console.log(arrayD);//Shows (2) [1, 2]

let arrayE = array.slice(-4, -1);
console.log(arrayE);//Shows (3) [1,2,3]
````

The same for multidimensional arrays:
````javascript
let array = [
    [1,2,3,4],
    ['a', 'b', 'c', 'd']
];

let arrayB = array[0].slice(0,3);
console.log(arrayB);//Shows (3) [1, 2, 3]

let arrayC = array[1].slice(1,2);
console.log(arrayC);//Shows (1) ['b']

let arrayD = array[0].slice(0, -2);
console.log(arrayD);//Shows (2) [1, 2]

let arrayE = array[1].slice(-4, -1);
console.log(arrayE);//Shows (3) ['a', 'b', 'c']
````



#### Arrays methods: .splice()
The ``.splice(start, deleteCount, ...items)`` can **remove**, **replace** or **add** an item or group of items in a given interval, inside the array sequence.   
Also used or creating a copy of the elements.   
It's a **mutative** method that returns the result of the altered array, where:
- ``start``: **inclusive parameter**, indicates where to start the interval/counting. The element at this index will be **included on the return or action**;
- ``deleteCount``: indicates how many items of the interval, starting and counting at the ``start``, should be included in the action (deletion/copying);
- ``...items``: indicates the elements that will be added in the returned array.
````javascript
let array = [1,2,3,4];

//.splice(start, deleteCount)
console.log(array);//Shows the original array (4) [1, 2, 3, 4]
console.log(array.splice(0,3));//Return 3 elements, starting at index 0. Shows (3) [1, 2, 3]. Removes these elements from the original reference

//At this point, the original reference was altered, leaving it with just 1 element
console.log(array);//Shows (1) [4]
//---------------------------------------------------------------------------------------------------------------------------------

//.splice(start, ...items) (at the beginning)
let arrayA = [1,2,3,4];
let insertion = [5,6,7]
console.log(arrayA.splice(0, 0, insertion));//Shows [], because nothing was removed from the original and added to the return

//Note that the items were added to the beginning of the sequence, since the counting was set to start at index 0
console.log(arrayA);//Shows [Array(3), 1, 2, 3, 4]
//---------------------------------------------------------------------------------------------------------------------------------

//.splice(start, ...items) (at the end)
let arrayB = [1,2,3,4];
let endArray = arrayB.length;///This way we capture the position (index + 1), making sure to add to the end of the sequence
console.log(arrayB.splice(endArray, 0, 5,6,7));//Shows (0) [], because nothing was removed from the original and added to the return

//Note that the items were added to the end of the sequence, since the counting was set to start at index -1
console.log(arrayB);//Shows (7) [1, 2, 3, 4, 5, 6, 7]
````

#### Arrays methods: .forEach()
The ``.forEach()`` method allows you to execute a provided function (callback function ) **once for each element** of the given array. By default, it's a **non-mutative** method since it doesn't directly affect the original reference.   
Key Characteristics:   
- It **does not return** a value (returns only undefined);
- It **does not modify the original array** (unless the callback explicitly modifies it);
- It processes elements in **ascending index order** (from index 0 to the last index);
- It’s ideal for side effects like logging, updating external variables, or DOM manipulation.

The syntax for use is:
````javascript 
array.forEach(callback(currentValue [, index [, array]]) [, thisArg])
````
Let's break it down:
- ``callback``: A function executed for each array element. It can take up to three arguments:
    - ``currentValue`` (required): the current element being processed;
    - ``index`` (optional): the index of the current element;
    - ``array`` (optional): the array ``.forEach`` is called on;
- ``thisArg`` (optional): a value to use as ``this.`` when executing the callback.
````javascript
let fruits = ['apple', 'banana', 'orange'];

fruits.forEach(function (fruit){ console.log(fruit) });
//Shows the following:
//apple
//banana
//orange
````   
In the example above, we're only using the required parameters where:
````javascript 
//basic structure
array.forEach(callback(currentValue))

//Array = fruits
//callback function = function (currentValue){ console.log(currentValue) });
//Final result below:
fruits.forEach(function (fruit){ console.log(fruit) });
````
What about using an optional parameter?   
````javascript 
let numbers = [10, 20, 30];

numbers.forEach(function (num, index, arr) {
    console.log(`Index ${index}: ${num} (from array: ${arr})`);
});
//Shows the following:
//Index 0: 10 (from array: 10,20,30)
//Index 1: 20 (from array: 10,20,30)
//Index 2: 30 (from array: 10,20,30)
````
Not often used, we could also work with external information by using the ``this`` parameter.
````javascript
const obj = { multiplier: 2 };
const numbers = [1, 2, 3];

numbers.forEach(function (num) {
    console.log(num * this.multiplier);
}, obj);
//Shows the following:
// 2
// 4
// 6
````

All examples above were **non-mutative**, since they don't affect in any way the original reference. But what if we want to?   
Let's see:
````javascript 
let numbers = [1, 2, 3];

numbers.forEach((num, index, arr) => {
    arr[index] = num * 2; //Modifies the original array
});
console.log(numbers); //Shows [2, 4, 6]
````   








#### Arrays methods: .map()
Very similar ``.forEach()`` in structure and behavior, ``.map(callback)`` also iterates once at each element of the sequence from the array, with the slight difference that this method has a **valid return of a new array**, where each value it's the original element after passing through the callback function. Since it's **non-mutative**, it doesn't change the original reference.   
Key Characteristics:
- Returns a **new array** with the same length as the original array, where each element is the result of the callback function;
- **Does not modify** the original array (it’s non-destructive);
- Processes elements in **ascending index order** (from index 0 to the last index);
- Ideal for creating a new array with transformed data, unlike .forEach, which is used for side effects and returns undefined.   

The syntax for use is:
````javascript 
let newArray = array.map(callback(currentValue [, index [, array]]) [, thisArg])
````
Let's break it down:   
- ``callback``: A function executed for each array element. It can take up to three arguments:
    - ``currentValue`` (required): the current element being processed;
    - ``index`` (optional): the index of the current element;
    - ``array`` (optional): the array .map is called on.

- ``thisArg`` (optional): A value to use as this when executing the callback.
- ``Return Value``: a new array where each element is the result of the callback function applied to the corresponding element in the original array.   
````javascript
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(function (num){ return num * 2});
console.log(doubled);//Shows [2, 4, 6, 8]
console.log(numbers);//Shows [1, 2, 3, 4] (original reference still the same)
````
In the example above, we're only using the required parameters where:
````javascript 
//basic structure
let newArray = array.map(function (currentValue){ return currentValue * 2});

//newArray = doubled
//array = numbers
//callback function = function (num){ return num * 2});
//Final result below:
let doubled = numbers.map(function (num) { return num * 2 });
````
What about using an optional parameter?  
````javascript 
let fruits = ['apple', 'banana', 'orange'];
let indexedFruits = fruits.map(function (fruit, index) {return `${index + 1}. ${fruit}`});
console.log(indexedFruits);//Shows ['1. apple', '2. banana', '3. orange']
````



#### Arrays methods: bonus
###### ``.filter(callback)``
This method returns a new array after the original elements go through a test/filter callback. It's ``non-mutative``.
````javascript
let num = [1, 2, 3, 4];
let even = num.filter(num => num % 2 === 0);
console.log(even);//Shows [2, 4]
````   

###### ``.reduce(callback, initialValue)``
This method returns a new (single value) that is the result of the accumulator function (callback function). It's ``non-mutative``.
````javascript
let num = [1, 2, 3];
let sum = num.reduce((acc, num) => acc + num, 0);
console.log(sum);//Shows 6
````   

###### ``.find(callback)``
This method returns the first element that is a positive (true) result of the condition (callback function). It's ``non-mutative``.
````javascript
let num = [1, 2, 3, 4];
let higherThanTwo = num.find(num => num > 2);
console.log(higherThanTwo); // 3
````  