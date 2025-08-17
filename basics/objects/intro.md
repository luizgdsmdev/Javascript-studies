### Objects in JavaScriptThis 
section covers everything you need to know about objects in JavaScript, including their creation, storage, behavior, methods, and different ways to create them. 
- [What are objects](#what-are-objects)
- [Object creation methods](#objects-creation-methods)
- [Objects characteristics: property/method creation & access](#objects-characteristics-propertymethod-creation-and-access)
- [Objects creation delete](#objects-creation-delete)
- [Objects characteristics: memory storage](#objects-characteristics-memory-storage)
- [Objects characteristics: type](#objects-characteristics-type)
- [Objects characteristics: nested objects](#objects-characteristics-nested-objects)
- [Objects characteristics: mutability](#objects-characteristics-mutability)
- [Objects creation impact](#objects-creation-impact)
- [Objects methods](#objects-methods)
- [Objects methods: Object.keys() and Object.values()](#objects-methods-keys-and-values)
- [Objects methods: Object.assign()](#objects-methods-assign)
- [Objects methods: Object.freeze() and Object.seal()](#objects-methods-freeze-and-seal)
- [Objects methods: hasOwnProperty()](#objects-methods-hasownproperty)
- [Objects methods: bonus](#objects-methods-bonus)


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
console.log(studant);

//Inherent from the class PersonClass, the StudentClass can already use properties like name
//and the '.speak()' method, even if it was not explicitly declared inside the class.
studant.name = 'Luiz';
studant.age = 29;
console.log(studant.speak());//Shows Hello!
console.log(studant.study());//Shows I'm reading book!
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
console.log(studant);

//Inherent from the class PersonClass, the StudentClass can already use properties like name
//and the '.speak()' method, even if it was not explicitly declared inside the class.
studant.name = 'Luiz';
studant.age = 29;
console.log(studant.speak());//Shows Hello!
console.log(studant.study());//Shows I'm reading book!
console.log(student);//Shows StudentClass {name: 'Luiz', age: 29, studyDays: Array(7)}

console.log(luizClass.study());//Shows error TypeError: luizClass.study is not a function
````
**Note:** only the StudentClass inherits the PersonClass properties and methods, and not the other way around. So if any instance of PersonClass tries, for example, to have access to the "``.study()``" from the StudentClass, it will result in an error **``TypeError: luizClass.study is not a function``**, since this method doesn't exist for its scope.


