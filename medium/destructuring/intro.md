### Destructuring Arrays and Objects in JavaScript

This section covers everything you should know about Destructuring Arrays and Objects in JavaScript.
- [What is Destructuring](#what-is-destructuring)
- [Destructuring Arrays](#destructuring-arrays)
- [Destructuring Objects](#destructuring-objects)
- [Destructuring in Event Handling](#destructuring-in-event-handling)
- [Advanced Destructuring Techniques](#advanced-destructuring-techniques)
- [Best Practices for Destructuring](#best-practices-for-destructuring)


Go back to [medium listing](https://github.com/luizgdsmdev/Javascript-studies/blob/main/medium/intro.md). 

#### What is Destructuring
Destructuring is a JavaScript syntax introduced in ES6 that allows **unpacking multiple values** at once from arrays or objects (properties) into **distinct variables** in a concise way. It uses the ``[]`` brackets for arrays and ``{}`` for objects.
````javascript
let array = [1, 2];
let object = {name: 'Luiz', age: 29};

//index syntax
let value = array[0];
let valueTwo = array[1];


//Destructuring syntax
let [num, numTwo] = array;
let {name, age} = object;

console.log(`Array values: ${num}, ${numTwo}`);//Shows Array values: 1, 2
console.log(`Object values: ${name}, ${age}`);//Show Object values: Luiz, 29
````

#### Destructuring Arrays
Extracts the array elements into variables **based on their position**.
- **Basic syntax**: ``[var, var1] = array;``.
````javascript
let [var, var1] = [1, 2];
console.log(`Array values: ${var}, ${var1}`);//Shows Array values: 1, 2
````

- **Skipping Elements**: We can use commas to skip a certain element or a group of elements.
````javascript
let [, , z] = [1, 2, 3];
console.log(z);//Shows 3
````

- **Rest Syntax**: collect the remaining properties into a new array by using ``...`` syntax. Must **always be the last** variable in the list.
````javascript
let [first, ...group] = [1, 2, 3, 4]
console.log(first);//Shows 1
console.log(group);//Shows [2, 3, 4]

let [firstA, second, ...newGroup] = [1, 2, 3, 4]
console.log(firstA);//Shows 1
console.log(second);//Shows 2
console.log(newGroup);//Shows [3, 4]
````

- **Default Values**: also possible to assign default values by using ``=`` when **elements are undefined**.
````javascript
let [a, b = 5] = [1];
console.log(a, b);//Shows 1 5


let array = [1];
array.length = 2;//Sparse array with only 2 slots

//Variable 'e' tries to access a non-existent element (resulting in undefined)
let [c, d = 0, e = 0] = array;
console.log(c, d, e);//Shows 1 0 0
````


#### Destructuring Objects
Simmilar process as used in arrays, but with the curly brackets ``{}``.   
**Notice**: the variables **must match the name** of the properties listed in the object.
- **Basic Syntax**: ``{prop1, prop2} = object;``. 
````javascript
let {name, age} = {name: 'Luiz', age: 29};
console.log(name, age);//Shows Luiz 29
````
- **Renaming Variables**: use ``prop: newName`` to rename the property.
````javascript
let {name: nome, age: idade} = {name: 'Luiz', age: 29};
console.log(nome, idade);//Shows Luiz 29
````
- **Default Values**: auto-assign a default value in case the property is undefined.
````javascript
let {name, age = 12} = {name: 'Luiz'};
console.log(name, age);//Shows Luiz 12
````

- **Rest Syntax**: collect the remaining elements into a **object** by using the spread syntax ``...``.
````javascript
let {name, ...rest} = {name: 'Luiz', age: 29, role: 'Software engineer'};
console.log(name, rest);//Shows Luiz {age: 29, role: 'Software engineer'}
````
- **Nested Destructuring**: extract nested properties of the object.
````javascript
let {name, age, info: {role, country, state}} = {name: 'Luiz', age: 29, info: {role: 'Software engineer', country: 'Brazil', state: 'Minas Gerais - MG'}};
console.log(name, age, role, country, state);//Shows Luiz 29 Software engineer Brazil Minas Gerais - MG
````



#### Destructuring in Event Handling
The destructuring is also useful in event handling for **extracting specific properties** or related data when working with the ``event`` object
- **Extracting Event Properties**
````javascript
//Standard syntax
document.getElementById("btn").addEventListener("click", (event) => {
    console.log(event.target.id, event.clientX, event.clientY);//On click shows btn 30 27 (example coordinates)
});

//Destructuring syntax
document.getElementById("btn").addEventListener("click", ({ target, clientX, clientY }) => {
  console.log(target.id, clientX, clientY);//On click shows btn 30 27 (example coordinates)
});
````

- **Destructuring Event Data**
````javascript
//Standard syntax
document.getElementById("btn").addEventListener("click", (event) => {
    console.log(event.target.id, event.target.innerText, event.target.localName);//On click shows btn Hello button
});


//Destructuring syntax
document.getElementById("btn").addEventListener("click", ({target: {id, innerText, localName}}) => {
    console.log(id, innerText, localName);//On click shows btn Hello button
});
````


#### Advanced Destructuring Techniques
- **Function Parameters**: destructuring directly in function arguments.
````javascript
//Standard approach
let obj = {name: 'Luiz', age: 29};
let standartPrint = (obj) => console.log(obj.name, obj.age);
standartPrint(obj);//Shows Luiz 29

//Destructuring syntax
let destructuringPrint = ({name, age = 12, ...spread}) => console.log(name, age);//Using default value and spread for better handling data in case of more properties
destructuringPrint(obj);//Shows Luiz 29
````

- **Destructuring in Loops**
````javascript
//Standard syntax
let users = [{ name: "Luiz" }, { name: "Marta" }];
for (let user of users) {
  console.log(user.name);//Shows Luiz, Marta
}

//Destructuring syntax
for (let {name} of users) {
  console.log(name);//Shows Luiz, Marta
}
````

- **Destructuring with Computed Property Names**: using dynamic keys.
````javascript
let key = "name";
let {[key]: userName} = {name: "Luiz"};
console.log(userName);//Shows Luiz
````

- **Combining Arrays and Objects**: for nested structures.
````javascript
//Standard syntax
let data = { items: [1, 2], meta: { count: 2 } };
console.log(data.items[0], data.meta.count);//Shows 1, 2

//Destructuring syntax
let {items: [firstItem], meta:{count}} = data;
console.log(firstItem, count);
````

#### Best Practices for Destructuring
- **Use for Clarity**: use when it improves readability, avoiding overly complex syntax.
````javascript
//Good
const { name, age } = user;

//Avoid
const { info: { address: { street: { name: streetName } } } } = user;
````

- **Provide Default Values**: prevent errors with defaults for undefined values. Useful when you are not sure about the data structure or reliability.
````javascript
let {name, age, version = 1.0} = dataForApiCall;
````

- **Use in Event Handlers**: extract only needed ``event`` properties.
````javascript
document.getElementById("btn").addEventListener("click", ({target: {id, innerText, localName}}) => {
    console.log(id, innerText, localName);//More consice code
});
````

- **Combine with Rest**: use ``...rest`` to capture remaining data efficiently.
````javascript
let {userID, userName, userEmail, ...secondaryUserInformation} = apiResponse;
````
