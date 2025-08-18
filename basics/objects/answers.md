1. **Exercise 1: Creating an Object with Object Literal**
   - **Description**: Practice declaring an object using the object literal syntax.
   - **Task**: Create an object representing a book with properties `title` (string), `pages` (number), and `isRead` (boolean). Log the object and access the `title` using dot notation.
   - **Solution**:
     ```javascript
     let book = {
       title: 'The Hobbit',
       pages: 310,
       isRead: true
     };
     console.log(book);
     console.log(book.title);
     ```

2. **Exercise 2: Adding a Property to an Object**
   - **Description**: Practice adding a property to an existing object.
   - **Task**: Create an empty object using object literal syntax. Add a `name` property with the value `'Alice'` using bracket notation. Log the object.
   - **Solution**:
     ```javascript
     let obj = {};
     obj['name'] = 'Alice';
     console.log(obj);
     ```

3. **Exercise 3: Accessing a Property with Bracket Notation**
   - **Description**: Practice accessing object properties dynamically.
   - **Task**: Create an object with a property `color: 'blue'`. Use a variable `key = 'color'` to access the property using bracket notation and log the value.
   - **Solution**:
     ```javascript
     let obj = { color: 'blue' };
     let key = 'color';
     console.log(obj[key]);
     ```

4. **Exercise 4: Checking Object Type**
   - **Description**: Verify the type of an object using `typeof`.
   - **Task**: Create an object with a single property `age: 25`. Log the result of `typeof` on the object.
   - **Solution**:
     ```javascript
     let obj = { age: 25 };
     console.log(typeof obj);
     ```

5. **Exercise 5: Adding a Method to an Object**
   - **Description**: Practice adding a method to an object.
   - **Task**: Create an object with a `name` property. Add a method `greet` that returns `'Hello, ' + this.name`. Call the method and log the result.
   - **Solution**:
     ```javascript
     let obj = { name: 'Bob' };
     obj.greet = function() { return 'Hello, ' + this.name; };
     console.log(obj.greet());
     ```

6. **Exercise 6: Deleting a Property**
   - **Description**: Practice using the `delete` operator.
   - **Task**: Create an object with properties `name: 'Luiz'` and `age: 29`. Delete the `age` property using `delete` and log the object.
   - **Solution**:
     ```javascript
     let obj = { name: 'Luiz', age: 29 };
     delete obj.age;
     console.log(obj);
     ```

7. **Exercise 7: Checking for Non-Existent Property**
   - **Description**: Practice accessing a non-existent property.
   - **Task**: Create an object with a single property `city: 'Boston'`. Attempt to access a non-existent property `country` and log the result.
   - **Solution**:
     ```javascript
     let obj = { city: 'Boston' };
     console.log(obj.country);
     ```

8. **Exercise 8: Using Object Literal with Nested Object**
   - **Description**: Practice creating objects with nested objects.
   - **Task**: Create an object representing a person with a `name` property and an `address` object containing `city: 'New York'`. Log the city using dot notation.
   - **Solution**:
     ```javascript
     let person = {
       name: 'Alice',
       address: { city: 'New York' }
     };
     console.log(person.address.city);
     ```

10. **Exercise 10: Using `const` with Objects**
    - **Description**: Practice using `const` with objects to understand mutability vs. reassignment.
    - **Task**: Declare an object with `name: 'Marta'` using `const`. Modify the `name` to `'Luiz'` and log the object. Attempt to reassign the object to `{}` and observe the error.
    - **Solution**:
      ```javascript
      const obj = { name: 'Marta' };
      obj.name = 'Luiz';
      console.log(obj);
      // obj = {}; // This would throw an error if uncommented
      ```

11. **Exercise 11: Creating an Object with Object Constructor**
    - **Description**: Practice using the `Object` constructor.
    - **Task**: Create an object using `new Object()`. Add properties `title: 'Book'` and `year: 2020` using dot notation. Log the object.
    - **Solution**:
      ```javascript
      let obj = new Object();
      obj.title = 'Book';
      obj.year = 2020;
      console.log(obj);
      ```

12. **Exercise 12: Using a Constructor Function**
    - **Description**: Practice creating objects with a constructor function.
    - **Task**: Define a constructor function `Car` that accepts `brand` and `model` parameters. Create an object with `brand: 'Toyota'` and `model: 'Corolla'`. Log the object.
    - **Solution**:
      ```javascript
      function Car(brand, model) {
        this.brand = brand;
        this.model = model;
      }
      let car = new Car('Toyota', 'Corolla');
      console.log(car);
      ```

13. **Exercise 13: Using Object.create()**
    - **Description**: Practice creating an object with a custom prototype.
    - **Task**: Create a prototype object with a method `greet` that returns `'Hi!'`. Use `Object.create()` to create an object with this prototype, add a `name: 'Charlie'` property, and call the `greet` method.
    - **Solution**:
      ```javascript
      let proto = { greet: function() { return 'Hi!'; } };
      let obj = Object.create(proto);
      obj.name = 'Charlie';
      console.log(obj.greet());
      ```

14. **Exercise 14: Using Factory Functions**
    - **Description**: Practice creating objects with a factory function.
    - **Task**: Define a factory function `createUser` that accepts `name` and returns an object with `name` and a `sayHello` method returning `'Hello, ' + name`. Create an object with `name: 'Luiz'` and call the method.
    - **Solution**:
      ```javascript
      function createUser(name) {
        return {
          name,
          sayHello() { return 'Hello, ' + name; }
        };
      }
      let user = createUser('Luiz');
      console.log(user.sayHello());
      ```

15. **Exercise 15: Using Class Syntax**
    - **Description**: Practice creating objects with class syntax.
    - **Task**: Define a `Person` class with a constructor accepting `name` and a `greet` method returning `'Hi, ' + this.name`. Create an instance with `name: 'Marta'` and call the method.
    - **Solution**:
      ```javascript
      class Person {
        constructor(name) {
          this.name = name;
        }
        greet() {
          return 'Hi, ' + this.name;
        }
      }
      let person = new Person('Marta');
      console.log(person.greet());
      ```

16. **Exercise 16: Testing Object.keys()**
    - **Description**: Practice using `Object.keys()` to retrieve property names.
    - **Task**: Create an object with properties `a: 1`, `b: 2`, `c: 3`. Log the result of `Object.keys()`.
    - **Solution**:
      ```javascript
      let obj = { a: 1, b: 2, c: 3 };
      console.log(Object.keys(obj));
      ```

17. **Exercise 17: Testing Object.values()**
    - **Description**: Practice using `Object.values()` to retrieve property values.
    - **Task**: Create an object with properties `x: 10`, `y: 20`. Log the result of `Object.values()`.
    - **Solution**:
      ```javascript
      let obj = { x: 10, y: 20 };
      console.log(Object.values(obj));
      ```

18. **Exercise 18: Testing Reference Behavior**
    - **Description**: Practice understanding object references.
    - **Task**: Create an object `obj` with `name: 'Bob'`. Assign it to `copy`. Change `copy.name` to `'Alice'`. Log `obj.name`.
    - **Solution**:
      ```javascript
      let obj = { name: 'Bob' };
      let copy = obj;
      copy.name = 'Alice';
      console.log(obj.name);
      ```

19. **Exercise 19: Using Object.assign()**
    - **Description**: Practice copying properties with `Object.assign()`.
    - **Task**: Create an object `source` with `color: 'red'`. Use `Object.assign()` to copy it to a new empty object and log the new object.
    - **Solution**:
      ```javascript
      let source = { color: 'red' };
      let copy = Object.assign({}, source);
      console.log(copy);
      ```

20. **Exercise 20: Testing hasOwnProperty()**
    - **Description**: Practice checking for own properties.
    - **Task**: Create an object `obj` with `name: 'Luiz'`. Log whether `name` and `toString` are own properties using `hasOwnProperty()`.
    - **Solution**:
      ```javascript
      let obj = { name: 'Luiz' };
      console.log(obj.hasOwnProperty('name'));
      console.log(obj.hasOwnProperty('toString'));
      ```

21. **Exercise 21: Using Object.freeze()**
    - **Description**: Practice making an object immutable with `Object.freeze()`.
    - **Task**: Create an object with `score: 100`. Freeze it using `Object.freeze()`. Attempt to modify `score` to `200` and log the object.
    - **Solution**:
      ```javascript
      let obj = { score: 100 };
      Object.freeze(obj);
      obj.score = 200;
      console.log(obj);
      ```

22. **Exercise 22: Using Object.seal()**
    - **Description**: Practice restricting an object with `Object.seal()`.
    - **Task**: Create an object with `level: 1`. Seal it using `Object.seal()`. Modify `level` to `2` and attempt to add a `status` property. Log the object.
    - **Solution**:
      ```javascript
      let obj = { level: 1 };
      Object.seal(obj);
      obj.level = 2;
      obj.status = 'active'; // Ignored
      console.log(obj);
      ```

23. **Exercise 23: Deep Copy with JSON**
    - **Description**: Practice creating a deep copy using `JSON.parse(JSON.stringify())`.
    - **Task**: Create an object with `name: 'Luiz'` and a nested `details: { age: 29 }`. Create a deep copy, modify `copy.details.age` to `30`, and log `obj.details.age`.
    - **Solution**:
      ```javascript
      let obj = { name: 'Luiz', details: { age: 29 } };
      let copy = JSON.parse(JSON.stringify(obj));
      copy.details.age = 30;
      console.log(obj.details.age);
      ```

24. **Exercise 24: Shallow Copy with Spread Operator**
    - **Description**: Practice creating a shallow copy and understanding its limitations.
    - **Task**: Create an object with `name: 'Marta'` and `details: { age: 21 }`. Create a shallow copy using the spread operator, modify `copy.details.age` to `22`, and log `obj.details.age`.
    - **Solution**:
      ```javascript
      let obj = { name: 'Marta', details: { age: 21 } };
      let copy = { ...obj };
      copy.details.age = 22;
      console.log(obj.details.age);
      ```

25. **Exercise 25: Using Object.entries()**
    - **Description**: Practice retrieving key-value pairs with `Object.entries()`.
    - **Task**: Create an object with `a: 1`, `b: 2`. Log the result of `Object.entries()`.
    - **Solution**:
      ```javascript
      let obj = { a: 1, b: 2 };
      console.log(Object.entries(obj));
      ```

26. **Exercise 26: Using Object.fromEntries()**
    - **Description**: Practice creating an object from key-value pairs.
    - **Task**: Create an array `entries = [['x', 10], ['y', 20]]`. Use `Object.fromEntries()` to create an object and log it.
    - **Solution**:
      ```javascript
      let entries = [['x', 10], ['y', 20]];
      let obj = Object.fromEntries(entries);
      console.log(obj);
      ```

27. **Exercise 27: Using Object.defineProperty()**
    - **Description**: Practice defining a non-writable property.
    - **Task**: Create an empty object. Use `Object.defineProperty()` to add a non-writable property `id: 42`. Attempt to modify `id` to `100` and log `id`.
    - **Solution**:
      ```javascript
      let obj = {};
      Object.defineProperty(obj, 'id', { value: 42, writable: false });
      obj.id = 100; // Ignored
      console.log(obj.id);
      ```

28. **Exercise 28: Using Object.is()**
    - **Description**: Practice comparing values with `Object.is()`.
    - **Task**: Create an object with `value: NaN`. Use `Object.is()` to compare `obj.value` with `NaN` and log the result.
    - **Solution**:
      ```javascript
      let obj = { value: NaN };
      console.log(Object.is(obj.value, NaN));
      ```

29. **Exercise 29: Using Object.getOwnPropertyNames()**
    - **Description**: Practice retrieving all own properties, including non-enumerable ones.
    - **Task**: Create an object with `a: 1`. Add a non-enumerable property `b: 2` using `Object.defineProperty()`. Log the result of `Object.getOwnPropertyNames()`.
    - **Solution**:
      ```javascript
      let obj = { a: 1 };
      Object.defineProperty(obj, 'b', { value: 2, enumerable: false });
      console.log(Object.getOwnPropertyNames(obj));
      ```

30. **Exercise 30: Inheritance with Class Syntax**
    - **Description**: Practice using class inheritance.
    - **Task**: Define a `Person` class with a `name` property and a `greet` method returning `'Hi, ' + this.name`. Define a `Student` class that extends `Person`, adding a `study` method returning `'Studying!'`. Create a `Student` instance with `name: 'Luiz'` and call both methods.
    - **Solution**:
      ```javascript
      class Person {
        constructor(name) {
          this.name = name;
        }
        greet() {
          return 'Hi, ' + this.name;
        }
      }
      class Student extends Person {
        study() {
          return 'Studying!';
        }
      }
      let student = new Student('Luiz');
      console.log(student.greet());
      console.log(student.study());
      ```