### Objects in JavaScriptThis 
section covers everything you need to know about objects in JavaScript, including their creation, storage, behavior, methods, and different ways to create them. 
- [What are objects](#what-are-objects)
- [Object creation methods](#object-creation-methods)
- [Objects characteristics: property/method creation & access](#object-characteristics-propertymethod-creation-and-access)
- [Objects delete](#object-delete)
- [Objects characteristics: memory storage](#object-characteristics-memory-storage)
- [Objects characteristics: type](#object-characteristics-type)
- [Objects characteristics: mutability](#object-characteristics-mutability)
- [Objects methods: Object.keys() and Object.values()](#object-methods-object-keys-and-object-values)
- [Objects methods: Object.freeze() and Object.seal()](#object-methods-object-freeze-and-object-seal)
- [Objects methods: hasOwnProperty()](#object-methods-hasownproperty)
- [Objects methods: bonus](#object-methods-bonus)


#### What are objects
Objects in JavaScript are an **unordered** structure of **key-pair** values. It means that, in essence, objects don't have a first or last element like, for example, arrays.   
The keys (properties) are usually declared as a **string or symbol value**, and the values are most of any data or structure of JavaScript, like numbers, strings, functions, arrays, or even other objects. For being so **flexible**, objects are often used for **data structure and code organization** when it comes to working with higher amounts of data, offering not only a 'stored' approach for properties, but also a **set of behaviors** (custom or built-in) to complement the structure.

#### Object creation methods
In JavaScript, we have mainly ways for creating an object, which with characteristics and behavior. It's important to at least know them and some use cases so that you can better apply the right solution or avoid unwanted results.   
To delve further into the object's details, let's first know how to create one.   
**Note:** like the arrays behavior, objects created with the ``const`` **can not** be reassigned to a new object, we can only alter the properties and methods, but not the reference itself.

###### ``object literal``
The most common approach is the **``object literal``** syntax, by the use of the curly brackets/braces ``{}``. Let's check the basic structure for declaring an object:
````javascript
let objectName = {};
````
As shown above, the basic structure it's very similar for declaring a variable or an array. Let's break it down:
- ``let``: keyword (or commonly named as a reserved word), to declare the variable and its specificities;
- ``objectName``: the declaration of the variable name, under the JavaScript basic rules of naming, like not using numbers or symbols at the beginning, and so on;
- ``=``: attribution symbol, to pass the object reference to the variable;
- ``{}``: braces, for an explicit point that this is an object type.   
The object literal is a very **short and syntax-friendly** way for declaring and reading an object and **doesn't require any additional class or function**. It's used most for **basic and unique objects**, meaning it's not meant to be reused for creating more objects based on its structure, because its properties and methods must be declared directly into the object itself.   
The downside of this approach it's that, for being so simple, it's quite hard when it comes to scalability, since they are explicitly created, and have no inherent native. The most common use cases would be, for example, configurations, a small set of data, or when it has to be a unique object.
Let's see:
````javascript
let myObject = {
  name: 'luiz',
  age: 29,
  information: {country: 'Brazil', state: 'Minas Gerais - MG'},
  studyDays: [1, 2, 3, 4, 5, 6, 7],
  speak(){
    return 'Hello!';
  }
};
````

###### ``Object Constructor``
Also called a **constructor function** or **custom builder function**, the ``Object Constructor`` approach for creating objects it's a step ahead of the last one.   
It gives us the ability to **create multiple objects** by using a 'template' structure, per se, create previously on the declaration of the object. It natively supports the ``prototype`` inheritance and the ``this.`` reference, meaning that now, by using this approach, all **new object based on this constructor** comes by default with the object 'template' properties and method behavior. We'll be talking more about  ``this.`` and ``prototype`` in another section; for now, let's focus only on the object creation.   
The downside of this approach is that the creation of more objects here is not really optimized, which could lead to **excessive/unnecessary use of memory** and the required syntax it's **more verbose** when compared to the ``object literal`` approach.
We'll often see this approach where the creation of multiple objects it's needed with the same structure, and the memory optimization/usage is not a primary concern for the application.
The two main ways here are:
- ``new Object()`` (constructor function):
````javascript
let myObject = new Object();

myObject.name = 'Luiz';
myObject.age = 29;
myObject.information = {country: 'Brazil', state: 'Minas Gerais - MG'};
myObject.studyDays = [1, 2, 3, 4, 5, 6, 7];
myObject.speak = function (){
    return 'Hello!';
}
````

- ``function functionName(){}`` (custom builder function):
````javascript
//These functions are often initialized with a capital letter, for convention
Function CreatMyObject(name, age, information, studyDays){
    this.name = name;
    this.age = age;
    this.information = information;
    this.studyDays = studyDays;
    this.speak = function (){
        return 'Hello!';
    }
}

//Declaring and assigning a value to the object using the custom builder function
let luizObject = new CreatMyObject('Luiz', 29, {country: 'Brazil', state: 'Minas Gerais - MG'}, [1, 2, 3, 4, 5, 6, 7]);
````

###### ``Object.create(proto)``
This approach is one of the most used, and it **handles memory better** than the ``Object Constructor`` approach because it allows us to, through ``prototype`` inheritance, **share properties and methods** between different objects. It means that we only have to create and instantiate it once, and from there, we only share the reference with others, leading to **space and memory optimization**. And since we have to explicitly create it, we have full control of the prototype, meaning more customization and effect for the actual use.   
The downside of this approach is that we have to manually create and declare the properties and methods, which could lead to more verbose coding.
````javascript
//Creating the object's basic structure that will be shared
let objectProto = {
    studyDays: [1, 2, 3, 4, 5, 6, 7],
    speak: function (){
        return 'Hello!';
    }
}

let luizObject = Object.create(objectProto);
luizObject.name = 'Luiz';
luizObject.age = 29;


//Even though not assigned above, I can now have access to the properties and methods shared
//by the 'objectProto', that is the base for every object created by this approach
console.log(luizObject.studyDays);//Shows (7) [1, 2, 3, 4, 5, 6, 7]
console.log(luizObject.speak());//Shows Hello!
console.log(luizObject);
//This last console of the whole object shows:
// {name: 'Luiz', age: 29} 
 
//where:
// -> direct properties from the object 
// age =29 and name ='Luiz'

//-> inherited properties from 'objectProto' object
// speak =ƒ (){return 'Hello!';} and studyDays = (7) [1, 2, 3, 4, 5, 6, 7]


let newObject = Object.create(objectProto);
newObject.name = 'Marta';
console.log(newObject);
//This last console of the whole object shows:
// {name: 'Marta'}
 
//where:
// -> direct properties from the object 
// name = 'Marta'

//-> inherited properties from 'objectProto' object
// speak = ƒ (){return 'Hello!'} and studyDays = (7) [1, 2, 3, 4, 5, 6, 7]
````


###### ``Factory Functions``
Less used, the ``Factory Functions`` could be compared as a **manual approach** for creating objects. It naturally **encapsulates the object creation logic** and allows us to, for example, create private variables through closures and have a more flexible object when it comes to different structures **without the need** for the ``this.`` or prototype system. We get our object through the **direct return of an object structure** when the function is called.    
The downside of this approach is that it's **less memory optimized**, since it duplicates the structure as a new object every time, and **doesn't have the prototype inheritance**, forcing us to explicitly create every property and method needed. We can use this approach for simple or encapsulated logic when the memory consumption is not a primary concern in the project.   
````javascript
//Factory Function
function createObject(name, age){
    return {
        name,
        age,
        studyDays: [1, 2, 3, 4, 5, 6, 7],
        speak(){
            return "Hello!"; 
        }

    };
}

//Object creation and assign
let luiz = createObject('Luiz', 29);
console.log(luiz); //Shows {name: 'Luiz', age: 29, studyDays: Array(7), speak: ƒ}
````



###### ``Class Syntax``
The ``Class Syntax``, as the name says, has the **class structure** very often used in many programming languages when it comes to OOP programming. Now note that, even with the name, the ``Class Syntax`` it's **not really an real class** as in other languages, it's still an constructor method for objects of JavaScript and it's depended of the prototype system, working more as an approach for OOP that could be more familiar, earning the title of 'syntactic sugar'.   
It has the **default support for the prototype** inheritance and by the use of the ``extends`` keyword on new objects, offering **flexibility between instances** of the main object, leading to a more **memory optimized** approach when compared to others.   
The downside is that ``Class Syntax`` could lead to a more verbose code depending on the use.
````javascript
class PersonClass{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak(){
        return "Hello!";
    }
}

class StudentClass extends PersonClass{
    constructor(name, age, studyDays){
        super(name, age);
        this.studyDays = studyDays;
    }

    study(){
        return "I'm reading a book!";
    }
}

let luizClass = new PersonClass("Luiz", 29);

//Returns an object created through the class PersonClass and assigned to the 'luizClass' variable
console.log(luizClass);//Shows PersonClass {name: 'Luiz', age: 29}

//Inherent from the class PersonClass, here we can have access to the '.speak()' method
console.log(luizClass.speak());//Shows Hello!

//Returns an object created through the class StudentClass and assigned to 'student' variable
let student = new StudentClass("Marta", 21, [1, 2, 3, 4, 5, 6, 7]);
//Shows original values of StudentClass {name: 'Marta', age: 21, studyDays: Array(7)}
console.log(student);

//Inherent from the class PersonClass, the StudentClass can already use properties like name
//and the '.speak()' method, even if it was not explicitly declared inside the class.
student.name = 'Luiz';
student.age = 29;
console.log(student.speak());//Shows Hello!
console.log(student.study());//Shows I'm reading a book!
console.log(student);//Shows StudentClass {name: 'Luiz', age: 29, studyDays: Array(7)}
````

**Note:** only the StudentClass inherits the PersonClass properties and methods, and not the other way around. So if any instance of PersonClass tries, for example, to have access to the "``.study()``" from StudentClass will result in an error **``TypeError: luizClass.study is not a function``**, since this method doesn't exist for its scope.




########## ``Object.create(proto)``
This approach is one of the most used, and it **handles memory better** than the ``Object Constructor`` approach because it allows us to, through ``prototype`` inheritance, **share properties and methods** between different objects. It means that we only have to create and instantiate it once, and from there, we only share the reference with others, leading to **space and memory optimization**. And since we have to explicitly create it, we have full control of the prototype, meaning more customization and effect for the actual use.   
The downside of this approach is that we have to manually create and declare the properties and methods, which could lead to more verbose coding.
````javascript
//Creating the object's basic structure that will be shared
let objectProto = {
    studyDays: [1, 2, 3, 4, 5, 6, 7],
    speak: function (){
        return 'Hello!';
    }
}

let luizObject = Object.create(objectProto);
luizObject.name = 'Luiz';
luizObject.age = 29;


//Even though not assigned above, I can now have access to the properties and methods shared
//by the 'objectProto', that is the base for every object created by this approach
console.log(luizObject.studyDays);//Shows (7) [1, 2, 3, 4, 5, 6, 7]
console.log(luizObject.speak());//Shows Hello!
console.log(luizObject);
//This last console of the whole object shows:
// {name: 'Luiz', age: 29} 
 
//where:
// -> direct properties from the object 
// age =29 and name ='Luiz'

//-> inherited properties from 'objectProto' object
// speak =ƒ (){return 'Hello!';} and studyDays = (7) [1, 2, 3, 4, 5, 6, 7]


let newObject = Object.create(objectProto);
newObject.name = 'Marta';
console.log(newObject);
//This last console of the whole object shows:
// {name: 'Marta'}
 
//where:
// -> direct properties from the object 
// name = 'Marta'

//-> inherited properties from 'objectProto' object
// speak = ƒ (){return 'Hello!'} and studyDays = (7) [1, 2, 3, 4, 5, 6, 7]
````


###### ``Factory Functions``
Less used, the ``Factory Functions`` could be compared as a **manual approach** for creating objects. It naturally **encapsulates the object creation logic** and allows us to, for example, create private variables through closures and have a more flexible object when it comes to different structures **without the need** for the ``this.`` or prototype system. We get our object through the **direct return of an object structure** when the function is called.    
The downside of this approach is that it's **less memory optimized**, since it duplicates the structure as a new object every time, and **doesn't have the prototype inheritance**, forcing us to explicitly create every property and method needed. We can use this approach for simple or encapsulated logic when the memory consumption is not a primary concern in the project.   
````javascript
//Factory Function
function createObject(name, age){
    return {
        name,
        age,
        studyDays: [1, 2, 3, 4, 5, 6, 7],
        speak(){
            return "Hello!"; 
        }

    };
}

//Object creation and assign
let luiz = createObject('Luiz', 29);
console.log(luiz); //Shows {name: 'Luiz', age: 29, studyDays: Array(7), speak: ƒ}
````



###### ``Class Syntax``
The ``Class Syntax``, as the name says, has the **class structure** very often used in many programming languages when it comes to OOP programming. Now note that, even with the name, the ``Class Syntax`` it's **not really an real class** as in other languages, it's still an constructor method for objects of JavaScript and it's depended of the prototype system, working more as an approach for OOP that could be more familiar, earning the title of 'syntactic sugar'.   
It has the **default support for the prototype** inheritance and by the use of the ``extends`` keyword on new objects, offering **flexibility between instances** of the main object, leading to a more **memory optimized** approach when compared to others.   
The downside is that ``Class Syntax`` could lead to a more verbose code depending on the use.
````javascript
class PersonClass{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak(){
        return "Hello!";
    }
}

class StudentClass extends PersonClass{
    constructor(name, age, studyDays){
        super(name, age);
        this.studyDays = studyDays;
    }

    study(){
        return "I'm reading a book!";
    }
}

let luizClass = new PersonClass("Luiz", 29);

//Returns an object created through the class PersonClass and assigned to the 'luizClass' variable
console.log(luizClass);//Shows PersonClass {name: 'Luiz', age: 29}

//Inherent from the class PersonClass, here we can have access to the '.speak()' method
console.log(luizClass.speak());//Shows Hello!

//Returns an object created through the class StudentClass and assigned to 'student' variable
let student = new StudentClass("Marta", 21, [1, 2, 3, 4, 5, 6, 7]);
//Shows original values of StudentClass {name: 'Marta', age: 21, studyDays: Array(7)}
console.log(student);

//Inherent from the class PersonClass, the StudentClass can already use properties like name
//and the '.speak()' method, even if it was not explicitly declared inside the class.
student.name = 'Luiz';
student.age = 29;
console.log(student.speak());//Shows Hello!
console.log(student.study());//Shows I'm reading book!
console.log(student);//Shows StudentClass {name: 'Luiz', age: 29, studyDays: Array(7)}

console.log(luizClass.study());//Shows error TypeError: luizClass.study is not a function
````
**Note:** only the StudentClass inherits the PersonClass properties and methods, and not the other way around. So if any instance of PersonClass tries, for example, to have access to the "``.study()``" from the StudentClass, it will result in an error **``TypeError: luizClass.study is not a function``**, since this method doesn't exist for its scope.



#### Object characteristics: property/method creation and access
In JavaScript, we have two approaches to create or access a property or method of an object:
- dot notation ``.propertyName``: 
  - access: used when we know the property name;
  - creation: often used, doesn't require using string notation, because JavaScript handles the automatic conversion;
  - return: dot notation often returns the return of the method, because its execution happens at the moment it's invoked.
- Bracket braces ``[]``: used for dynamic property names, invalid identifiers, or properties with spaces/special characters. The property/method name must be inside string notation.
  - return: different from above, the bracket approach returns the content/whole function, since it's not executed at the invocation.

Both have the same behavior for creation or access, returning ``undefined`` for invalid or non-existing values.   
###### Getting a property or method
````javascript
let object = {
    name: 'Luiz',
    speak(){
        return "Hello!";
    }
}

//Both return 'Luiz'
console.log(object.name);
console.log(object['name']);

//While dot notation returns the value, the bracket returns the whole function 
console.log(object.speak());//Returns 'Hello!'
console.log(object['speak']);//Returns ƒ speak(){return "Hello!";}

//Passing the function to a new variable and then executing the function
let funct = object['speak'];
console.log(funct());///Shows 'Hello!'

//Trying to have access to a invalid property or method
console.log(object.state);//Shows undefined
console.log(object['speakLoud']);//Shows undefined
````

###### Setting a new property or method
````javascript
let object = {
    name: 'Luiz',
};

//Equivalent on both approaches for setting a property
object.age = 29;
object['state'] = 'Minas Gerais - MG';

//Equivalent on both approaches for setting a method
object.speak = function speak(){
        return "Hello!";
    };
object['speakLoud'] = function speak(){
        return "HELLLOOOO!";
    };

console.log(object.speak());//Shows Hello!
console.log(object.speakLoud());//Shows HELLLOOOO!

console.log(object['speakLoud']);//As expected, returns the new method, ƒ speak(){return "HELLLOOOO!";}
let funct = object['speakLoud'];
console.log(funct());//Shows HELLLOOOO!
````

#### Object delete
After knowing how to create, we also must know how to delete a property from an object. Notice that this is **not often used** because it could lead to unexpected errors, so use the ``delete`` only when you are sure of it. Such occasions could be the **cleaning of an object** to reduce memory or data use/exposure, or **dynamic configurations**.   
Notice also that the ``delete`` **only** works on the object properties that are **not private property** (declared as ``#``) or private methods, they won't be affected by it. Also, does't work for inherited properties through prototype or extends, only in the objects' direct properties.
Also, the ``delete`` has an automatic return every time it's called.
- return ``true``: if the property was **located and removed** or if the **property doesn't exist**, and therefore don't need removal;
- return ``false``: if the property removal is not permitted.   

````javascript
  let myObj = {
    name: 'Luiz',
    age: 29,
    speak(){return "Hello!";}
}

console.log(myObj);//Shows {name: 'Luiz', age: 29, speak: ƒ}

delete myObj.name;//Returns true
delete myObj['age'];//Returns true
delete myObj['state'];//Returns true, even if the property doesn't exist
console.log(myObj);//Shows {speak: ƒ}

delete myObj.speak//Delets method

console.log(myObj);//Shows {}
````

#### Object characteristics: memory storage
When created, **objects are stored as a reference** in memory. This means that, different from numbers or strings, when an object is assigned to a variable, its reference is sent, and **not a copy** of it.   
So every time an object is passed to another variable or structure, the original value is being **accessed thoutght the reference** to the section in memory that store the value, and as expected, **every changed made affect the original value directly**, and therefore, changes are reflected throutght the entire code where that same reference is being used.   
Let's check an example.   
````javascript
let obj = {
    name: 'Luiz',
    age: 29
}

let objCopy = obj;
objCopy.name = 'Marta';

console.log(obj);//Shows {name: 'Marta', age: 29}
````
As shown above, changing the 'objCopy' variable directly impacts direclty in the original variable 'obj' because what was passed was a reference to the original value, and not a copy of it.   
But what if we need to create a copy in order to preserve the original value? For this situation, we have mainly 3 options:
- Spreed operator (``...``): it's a **shallow copy**, meaning that you only consider the direct properties (or, depending on the structure type, also methods) on the first level of the object. Doesn't copy private properties or inherited properties from the prototype, for example.
- ``.assign()`` method: it's also a **shallow copy**, meaning that you only consider the direct properties (or, depending on the structure type, also methods) on the first level of the object. Doesn't copy private properties or inherited properties from the prototype, for example.
- ``JSON.parse(JSON.stringify())``: it's also a **deep copy**, copies all properties including nested objects and arrays, creating an object completely independent of the original.

###### Spreed operator ``...``
````javascript
//Using object literal
let objLiteral = {
    name: 'object literal',
    speak(){return "Hello!";}
}

//Copy include the method speak()
let copy = {...objLiteral};
console.log(copy);//Shows {name: 'object literal', speak: ƒ}

//-----------------------------------------------------------------------------------
//Using Object Constructor
let objConstructor = new Object();
objConstructor.name = 'Object Constructor';
objConstructor.speak = function speak(){return "Hello!";};

//Copy1 include the method speak()
let copy1 = {...objConstructor};
console.log(copy1);//Shows {name: 'Object Constructor', speak: ƒ}

//-----------------------------------------------------------------------------------
//Using Object.create(proto)

let proto = {
    name: 'Object.create(proto)',
    speak(){return "Hello!";}
}

//Copy2 DON'T include any of the inherited properties or methods. Spread don't support prototype copy
let objProto = Object.create(proto);
let copy2 = {...objProto};
console.log(copy2);//Shows {}

//-----------------------------------------------------------------------------------
//Using Factory Functions
function FactoryFunc(){
    return {
        name: 'Factory Function',
        speak(){return "Hello!";}
    }
}

//Copy3 include the method speak()
let objFactFunc = FactoryFunc();
let copy3 = {...objFactFunc};
console.log(copy3);//Shows {name: 'Factory Function', speak: ƒ}

//-----------------------------------------------------------------------------------
//Using Class Syntax

class ClassSyntax{
    name = 'luiz';
    #password = 123;
    speak(){return "Hello!";}
}

//Copy4 DON'T include any of the methods or private properties
let objClassSyntax = new ClassSyntax();
let copy4 = {...objClassSyntax};
console.log(copy4);//Shows name: 'luiz'}
````
###### ``.assign()`` method
````javascript
//Using object literal
let objLiteral = {
    name: 'object literal',
    speak(){return "Hello!";}
}

//Copy include the method speak()
let copy = Object.assign({}, objLiteral);
console.log(copy);//Shows {name: 'object literal', speak: ƒ}

//-----------------------------------------------------------------------------------
//Using Object Constructor
let objConstructor = new Object();
objConstructor.name = 'Object Constructor';
objConstructor.speak = function speak(){return "Hello!";};

//Copy1 include the method speak()
let copy1 = Object.assign({}, objConstructor);
console.log(copy1);//Shows {name: 'Object Constructor', speak: ƒ}

//-----------------------------------------------------------------------------------
//Using Object.create(proto)

let proto = {
    name: 'Object.create(proto)',
    speak(){return "Hello!";}
}

//Copy2 DON'T include any of the inherited properties or methods. Spread don't support prototype copy
let objProto = Object.create(proto);
let copy2 = Object.assign({}, objProto);
console.log(copy2);//Shows {}

//-----------------------------------------------------------------------------------
//Using Factory Functions
function FactoryFunc(){
    return {
        name: 'Factory Function',
        speak(){return "Hello!";}
    }
}

//Copy3 include the method speak()
let objFactFunc = FactoryFunc();
let copy3 = Object.assign({}, objFactFunc);
console.log(copy3);//Shows {name: 'Factory Function', speak: ƒ}

//-----------------------------------------------------------------------------------
//Using Class Syntax

class ClassSyntax{
    name = 'luiz';
    #password = 123;
    speak(){return "Hello!";}
}

//Copy4 DON'T include any of the methods or private properties
let objClassSyntax = new ClassSyntax();
let copy4 = Object.assign({}, objClassSyntax);
console.log(copy4);//Shows name: 'luiz'}
````
###### ``JSON.parse(JSON.stringify())``
````javascript
//Using object literal
let objLiteral = {
    name: 'object literal',
    speak(){return "Hello!";}
}

//speak() not included
let copy = JSON.parse(JSON.stringify(objLiteral));
console.log(copy);//Shows {name: 'object literal'}

//-----------------------------------------------------------------------------------
//Using Object Constructor
let objConstructor = new Object();
objConstructor.name = 'Object Constructor';
objConstructor.speak = function speak(){return "Hello!";};

//speak() not included
let copy1 = JSON.parse(JSON.stringify(objConstructor));
console.log(copy1);//Shows {name: 'Object Constructor'}

//-----------------------------------------------------------------------------------
//Using Object.create(proto)

let proto = {
    name: 'Object.create(proto)',
    speak(){return "Hello!";}
}

//speak() not included
let objProto = Object.create(proto);
let copy2 = JSON.parse(JSON.stringify(objProto));
console.log(copy2);//Shows {}

//-----------------------------------------------------------------------------------
//Using Factory Functions
function FactoryFunc(){
    return {
        name: 'Factory Function',
        speak(){return "Hello!";}
    }
}

//speak() not included
let objFactFunc = FactoryFunc();
let copy3 = JSON.parse(JSON.stringify(objFactFunc));
console.log(copy3);//Shows {name: 'Factory Function'}

//-----------------------------------------------------------------------------------
//Using Class Syntax

class ClassSyntax{
    name = 'luiz';
    #password = 123;
    speak(){return "Hello!";}
}

//speak() not included
let objClassSyntax = new ClassSyntax();
let copy4 = JSON.parse(JSON.stringify(objClassSyntax));
console.log(copy4);//Shows {name: 'luiz'}
````

#### Object characteristics: type
Objects have their own type (``object``), and naturally inherit properties and methods from the ``Object.prototype`` like ``.toString()`` or ``.hasOwnProperty()``.
````javascript
let myObj = { name: 'Luiz' };
console.log(typeof myObj);//Shows object
console.log(myObj instanceof Object);//Shows true
````

#### Object characteristics: mutability
Objects are mutable by default, meaning their properties can be added, modified, or deleted after creation, unless explicitly restricted.
````javascript
let myObj = { name: 'Luiz' };
myObj.age = 29;
myObj.name = "";

console.log(myObj);//Shows {name: '', age: 29}
````



#### Object methods: Object keys() and Object values()
Both methods are **non-mutative**, meaning they don't alter the original object, but return a **new array** instead.   
Let's take a better look at each one:
- ``Object.keys()``: return an array of the object property names (keys).
````javascript
let obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj));//Shows (3) ['a', 'b', 'c']
````
- ``Object.values()``: return an array of the object property values.
````javascript
let obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj));//Shows (3) [1, 2, 3]
````

###### Object.getOwnPropertyNames()
Different from the ``Object.keys()``, the method ``Object.getOwnPropertyNames()`` also returns the non-enumerable keys.
````javascript
const obj = {
  name: 'Luiz',
};

//Non-enumerable property
Object.defineProperty(obj, 'location', {
  state: 'Minas Gerais - MG',
  enumerable: false
});

console.log(Object.keys(obj));//Shows only (1) ['name']
console.log(Object.getOwnPropertyNames(obj));//Shows (2) ['name', 'location']
````




#### Object methods: Object freeze() and Object seal()
Both methods are **mutative** and both acts prevent the object from being altered, but in different levels. Don't throw any error, just ignore the action.
- ``Object.freeze()``: stop any alteration on the object, blocking insertions, deletions, or alterations of the existing properties;
````javascript
const obj = {
  name: 'Luiz',
};

//Basic insertion
obj.age = 29;
console.log(obj);//Shows {name: 'Luiz', age: 29}

Object.freeze(obj);//Stoping any possible changing
obj.state = 'Minas Gerais - MG';
obj.age = 0;
delete obj.name;

console.log(obj);//Shows {name: 'Luiz', age: 29}
````

- ``Object.seal()``: stop any alteration on the object, blocking insertions, deletions, but allows existing properties to be altered.
````javascript
const obj = {
  name: 'Luiz',
};

//Basic insertion
obj.age = 29;
console.log(obj);//Shows {name: 'Luiz', age: 29}

Object.seal(obj);//Stoping any possible changing
obj.state = 'Minas Gerais - MG';
obj.age = 0;
delete obj.name;

console.log(obj);//Shows name: 'Luiz', age: 0}
````





#### Object methods: hasOwnProperty()
The ``hasOwnProperty()`` checks if the object **has a specific property** as its own, meaning it makes part of its direct structure and **not inherited**, returning ``true`` or ``false``.
````javascript
let objSpeak = {
  speak(){
    return "Hello!";
  }
};

let newObj = Object.create(objSpeak);//speak() was inherited

console.log(objSpeak.hasOwnProperty('speak'));//Shows true, because belogns to the object directly
console.log(newObj.hasOwnProperty('speak'));//Shows false, because it was inherited from objSpeak
````


#### Object methods: bonus
###### ``Object.entries(obj)``
Returns an array of ``[key, value]`` pairs for enumerable properties.
````javascript
let obj = { a: 1, b: 2 };
console.log(Object.entries(obj)); // [['a', 1], ['b', 2]]
````

###### ``Object.fromEntries(entries)``
Creates an object from an array of ``[key, value]`` pairs.
````javascript
let entries = [['x', 10], ['y', 20]];
console.log(Object.fromEntries(entries)); // { x: 10, y: 20 }
````

###### ``Object.defineProperty(obj, prop, descriptor)``
Defines or modifies a property with specific attributes (e.g., writable, enumerable).
````javascript
let obj = {};
Object.defineProperty(obj, 'prop', {
  value: 42,
  writable: false
});
obj.prop = 100; // Ignored
console.log(obj.prop); // 42
````

###### ``Object.is(obj1, obj2)``
Compares two values for strict equality, handling edge cases like ``NaN`` and ``-0``.
````javascript
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0)); // false
````

###### ``Object.getOwnPropertyNames(obj)``
Returns an array of all own property names, including non-enumerable ones.
````javascript
let obj = { a: 1 };
Object.defineProperty(obj, 'b', { value: 2, enumerable: false });
console.log(Object.getOwnPropertyNames(obj)); // ['a', 'b']
````

