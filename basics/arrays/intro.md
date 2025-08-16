### Arrays in JavaScript
This section covers everything you should know about arrays in JavaScript, including usage, behavior, and more.
- [What are arrays](#what-are-arrays)
- [Arrays characteristics: type](#array-characteristics-type)
- [Arrays characteristics: multi dimension](#array-characteristics-multi-dimension)
- [Arrays characteristics: index and access](#array-characteristics-index)
- [Arrays characteristics: length](#array-characteristics-length)
- [Arrays characteristics: mutability](#array-characteristics-mutability)
- [Arrays characteristics: memory storaged](#array-characteristics-memory)
- [arrays methods](#array-methods)
- [arrays methods: .push() and .pop()](#array-method-push-pop)
- [arrays methods: .unshift() and .shift()](#array-method-push-pop)
- [arrays methods: .slice(start, end)](#array-method-slice)
- [arrays methods: .splice(start, deleteCount, ...items)](#array-method-splice)
- [arrays methods: .forEach(callback)](#array-method-map)
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

#### Arrays characteristics: type
Arrays in Javascript are an object type, but even so they're have specific method e propertys  what makes them not equals to generic objects.   
in order to make a type verification we can use the ``.isArray()`` method.
```javascript
let numeros = [1, 2, 3];
console.log(typeof numeros); // 'object'
console.log(Array.isArray(numeros)); // true
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










