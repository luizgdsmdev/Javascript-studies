### Spread and rest operators in JavaScript

This section covers everything you should know about Spread and rest operators in JavaScript.
- [What Are Spread and Rest Operators](#what-are-spread-and-rest-operators)
- [Spread Operator with Arrays](#spread-operator-with-arrays)
- [Spread Operator with Objects](#spread-operator-with-objects)
- [Spread and Rest in Event Handling](#spread-and-rest-in-event-handling)
- [Best Practices for Spread and Rest](#best-practices-for-spread-and-rest)


Go back to [medium listing](https://github.com/luizgdsmdev/Javascript-studies/blob/main/medium/intro.md). 


#### What Are Spread and Rest Operators
The Spread and Rest Operators in JavaScript are both denoted by ``...`` and simplify working with complex/dynamic structures like arrays, objects, or function arguments. The key difference is that **spread 'spreads out' data** while **rest 'collects' data**.
- **Spread**: expands (spread) elements of an iterable (array, strings, object properties, and so on) into **individual elements or key-value pairs**.
````javascript
//Spread
let array = [1, 2, 3];
let object = {name: 'Luiz', age: 29};
let string = 'Luiz';

console.log(...array);//Shows 1 2 3
console.log({...object});//Shows {name: 'Luiz', age: 29}
console.log(...string);//Shows L u i z
````
- **Rest Operator**: **gathers multiple elements** or properties **into a single variable**, often used in destructuring or function parameters.
````javascript
//Rest approach
let restApproach = (...num) => num.reduce((a,b) => a + b, 0);
console.log(restApproach(1,2,3,4));//Shows 10, no need to pass the parameters inside an array

//Standard approach
let standardApproach = function(nums){ return nums.reduce((a,b) => a + b, 0);}
console.log(standardApproach([1,2,3,4]));//Shows 10, needs to be an array in this scenario

//Arrow function approach
let arrowFunctionApproach = (nums) => nums.reduce((a, b) => a + b, 0);
console.log(arrowFunctionApproach([1,2,3,4]));//Shows 10, needs to be an array in this scenario

//---------------------------------------------------------------------------------------------
let numbers = [1, 2];
let object = {name: 'Luiz', age: 29, state: 'MG', role: 'Software Engineer'};

//Destructuring approach (using the rest operator '...')
let [numOneD, numTwoD] = [...numbers];
let {name, age, ...secondaryInfo} = {...object}

//Standard approach
let numOne = numbers[0];
let numTwo = numbers[1];
let objOne = object.name;
let objTwo = object.age;
````




#### Spread Operator with Arrays
The spread operator expands array elements into individual items, useful for copying, merging, or passing arguments. At functions, the **rest operator** collects all remaining arguments **into an array**, replacing the ``arguments`` and especially useful at arrow functions.
- **Copying an Array**: creates a **shallow copy** of an array.
````javascript
let nestedArray = [1, [2, 3], {name:'Luiz'}];

//Shallow copy, meaning that nested arrays or objects are passed by reference and not value
let copy = [...nestedArray];

console.log(copy);//Shows [1, [2, 3], {name: 'Luiz'}]
copy[2].name = 'Marta';//Changing the copy also change the reference

console.log(nestedArray[2]);//Shows [1, [2, 3], {name: 'Marta'}}], original value affected
console.log(copy);//Shows [1, [2, 3], {name: 'Marta'}]
````
- **Merging Arrays**: combine two or more arrays into one.
````javascript
let arrayOne = [1, 2, 3];
let arrayTwo = [{name:'Luiz', age:29}];
let arrayThree = [4, 5, 6];

let mergeOne = [...arrayOne, ...arrayThree];
console.log(mergeOne);//Shows [1, 2, 3, 4, 5, 6], as a unique array of elements, flattened array, no nesting

let mergeTwo = [...arrayOne, arrayThree];
console.log(mergeTwo);//Shows [1, 2, 3, [4, 5, 6]], nested array

let mergeThree = [...arrayOne, ...arrayThree, ...arrayTwo];
console.log(mergeThree);//Shows [1, 2, 3, 4, 5, 6, {name:'Luiz', age:29}]
````
- **Adding Elements**: add elements to an array during creation.
````javascript
let arrayOne = [1, 2, 3];

let newArray = [...arrayOne, 4, 5, 6];
console.log(newArray);//Shows [1, 2, 3, 4, 5, 6]
````
- **Passing Arguments**: spreads array elements as function arguments.
````javascript
let arrayOne = [1, 2, 3];

let sum = (a, b, c) => console.log(a + b + c);//Fixed amount of arguments, spread is applied on function call
sum(...arrayOne);//Shows 6

//Use spread on both parameter and argument is redundant, but possible
let spreadSum = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log(spreadSum(...arrayOne));//Shows 6
````




#### Spread Operator with Objects
Spread operator copies or merges object properties, creating a **shallow copy** or combining objects.
- **Copying an Object**
````javascript
let obj = {name:'Luiz', age:29, info:{state: 'MG'}};

let shallowCopy = {...obj};
shallowCopy.info.state = 0;//Change original reference too for nested objects
shallowCopy.name = 'Marta';//Change only the copy for 'shallowCopy', because 'name' property was copied (not nested)

console.log(shallowCopy.info);//Shows {state: 0}
console.log(obj.info);//Shows {state: 0}

console.log(shallowCopy.name);//Shows Marta
console.log(obj.name);//Shows Luiz
````
- **Merging Objects**: create multiple objects with **later properties **overriding** earlier ones**.
````javascript
let obj = {name:'Luiz', age:29};
let objTwo = {age:0, state:'MG'};
let objThree = {state:'SP', role:'Software engineer'};

let newObj = {...obj, ...objTwo};//Later 'age' from 'objTwo' overrides the first one 'obj'
console.log(newObj);//Shows {name: 'Luiz', age: 0, state: 'MG'}

//Sucession of overriding
let lastObj = {...obj, ...objTwo, ...objThree};
console.log(lastObj);//Shows {name: 'Luiz', age: 0, state: 'SP', role: 'Software engineer'}
````
- **Updating Properties**: updates specific property while shallow copying the others.
````javascript
let obj = {name:'Luiz', age:29};
let objTwo = {age:0, state:'MG'};

let newObj = {...obj, age: 100};//Updates only age property
console.log(newObj);//Shows {name: 'Luiz', age: 100}

let secondObj = {...obj, age: 100, ...objTwo};//Age is overridden
console.log(secondObj);//Shows {name: 'Luiz', age: 0, state: 'MG'}

let thirdObj = {...obj, ...objTwo, age: 100, state: 'SP'};
console.log(thirdObj);//Shows {name: 'Luiz', age: 100, state: 'SP'}
````




#### Spread and Rest in Event Handling
The spread and rest operator enhance event handling by **managing event data** or **combining event properties**.
- **Spread in Event Handling**: spread event data or DOM collections.
````javascript
const buttons = document.querySelectorAll("button");
const ids = [...buttons].map(btn => btn.id);
console.log(ids);//Shows ["btn1", "btn2"] (example IDs)
````
- **Rest in Event Handlers**: collect event object properties with rest in destructuring.
````javascript
//Combining with destructuring to capture extra event data (referenced by '...rest')
document.getElementById("btn").addEventListener("click", ({ target, ...rest }) => {
  console.log(target.id, rest);
});
//Clicking shows btn, { clientX: X, clientY: Y, ... } (example event properties)
````

#### Best Practices for Spread and Rest
- **Use Spread for shallow copies**: prefer spread over ``slice()`` or ``Object.assign()``.
````javascript
const arr = [1, 2];
const copy = [...arr];//Better than arr.slice()
````

- **Avoid deep copy issues**: spread only creates shallow copies, meaning that nested data will be passed as reference, potentially causing unwanted results.
````javascript
const obj = {a: {b: 1}};
const copy = {...obj};//Shallow copy, obj.a === copy.a
````
- **Use rest in functions sparingly**: ensure rest parameters are necessary to avoid confusion.
````javascript
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);//Clear use case
````
- **Combine with destructuring**: use rest in destructuring to capture extra data cleanly.
````javascript
const {name, ...rest} = {name: "Luiz", age: 29, state:'MG'};
console.log(rest);//Outputs: {age: 29, state:'MG'}
````
- **Avoid overuse in event handlers**: limit spread/rest to relevant event properties for readability.
````javascript
document.getElementById("btn").addEventListener("click", ({ target: { id }, ...rest }) => console.log(id, rest));
````
- **Ensure rest is last**: rest must be the last parameter or destructuring variable.
````javascript
const [first, ...rest] = [1, 2, 3];//Valid
//const [...rest, last] = [1, 2, 3];//SyntaxError
````