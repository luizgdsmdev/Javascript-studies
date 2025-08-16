### Arrays in JavaScript
This section covers everything you should know about arrays in JavaScript, including usage, behavior, and more.
- [What are arrays](#what-are-arrays)
- [Arrays characteristics: type](#array-characteristics-type)
- [Arrays characteristics: multi dimension](#array-characteristics-multi-dimension)
- [Arrays characteristics: length](#array-characteristics-length)
- [Arrays characteristics: index and access](#array-characteristics-index)
- [Arrays characteristics: mutability](#array-characteristics-mutability)
- [Arrays characteristics: memory storaged](#array-characteristics-memory)
- [arrays methods](#array-methods)
- [arrays methods: .push() e .pop()](#array-method-push-pop)
- [arrays methods: .slice(start, end)](#array-method-slice)
- [arrays methods: .splice(start, deleteCount, ...items)](#array-method-splice)
- [arrays methods: .map(callback)](#array-method-map)
- [arrays methods: bonus](#array-method-bonus)


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
Just like every other ``const`` variable, their value cannot be changed over time, so once assigned to a variable, the items inside the array will remain constant and immutable. Use this approach only when you explicitly need the array to remain constant.  

Similar to a standard vector structure, here used conceptually to describe a more rigid structure in other languages, arrays can point to a ***'list'* of items storaged** in memory (just like any other variable), but with a main difference:
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

#### Multi-dimension
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


