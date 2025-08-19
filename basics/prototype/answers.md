1. **Exercise 1: Creating an Object with Object Literal and Accessing Object.prototype**
   - **Description**: Practice declaring an object using Object Literal syntax and accessing an inherited method.
   - **Task**: Create an object with a `name` property set to 'Luiz'. Log the object and call the inherited `toString()` method from `Object.prototype`. Then, verify if the object’s prototype is `Object.prototype` using `Object.getPrototypeOf()`.
   - **Solution**:
     ```javascript
     let obj = { name: 'Luiz' };
     console.log(obj);
     console.log(obj.toString());
     console.log(Object.getPrototypeOf(obj) === Object.prototype);
     ```

2. **Exercise 2: Creating an Object with Object Constructor**
   - **Description**: Practice using the Object Constructor to create an object and verify its prototype.
   - **Task**: Create an object using `new Object()` and add a `name` property set to 'Marta'. Log the `name` property and check if the object’s prototype is `Object.prototype`.
   - **Solution**:
     ```javascript
     let obj = new Object();
     obj.name = 'Marta';
     console.log(obj.name);
     console.log(Object.getPrototypeOf(obj) === Object.prototype);
     ```

3. **Exercise 3: Adding a Method to a Constructor Function’s Prototype**
   - **Description**: Practice adding a shared method to a Constructor Function’s prototype.
   - **Task**: Define a Constructor Function `Person` that takes a `name` parameter. Add a `greet` method to `Person.prototype` that returns 'Hello!'. Create an instance with name 'Luiz' and log the result of calling `greet()`.
   - **Solution**:
     ```javascript
     function Person(name) {
       this.name = name;
     }
     Person.prototype.greet = function() { return 'Hello!'; };
     let p = new Person('Luiz');
     console.log(p.greet());
     ```

4. **Exercise 4: Using Class Syntax to Define a Prototype Method**
   - **Description**: Practice creating a class with a prototype method.
   - **Task**: Define a `Person` class with a constructor taking a `name` parameter and a `greet` method returning 'Hi!'. Create an instance with name 'Marta' and log the result of calling `greet()`.
   - **Solution**:
     ```javascript
     class Person {
       constructor(name) {
         this.name = name;
       }
       greet() {
         return 'Hi!';
       }
     }
     let p = new Person('Marta');
     console.log(p.greet());
     ```

5. **Exercise 5: Creating an Object with Object.create()**
   - **Description**: Practice using `Object.create()` to create an object with a custom prototype.
   - **Task**: Create a prototype object with an `age` property set to 29. Use `Object.create()` to create an object inheriting from this prototype. Log the inherited `age` property.
   - **Solution**:
     ```javascript
     let proto = { age: 29 };
     let obj = Object.create(proto);
     console.log(obj.age);
     ```

6. **Exercise 6: Checking Own vs. Inherited Properties**
   - **Description**: Practice distinguishing own properties from inherited ones using `hasOwnProperty()`.
   - **Task**: Create an object using `Object.create()` with a prototype that has a `name` property set to 'Luiz'. Add an `age` property set to 30 to the object. Log the results of `hasOwnProperty()` for `name` and `age`.
   - **Solution**:
     ```javascript
     let proto = { name: 'Luiz' };
     let obj = Object.create(proto);
     obj.age = 30;
     console.log(obj.hasOwnProperty('name'));
     console.log(obj.hasOwnProperty('age'));
     ```

7. **Exercise 7: Creating a No-Prototype Object**
   - **Description**: Practice creating an object without a prototype using `Object.create(null)`.
   - **Task**: Create an object using `Object.create(null)`. Log the result of `Object.getPrototypeOf()` and check if `toString` exists on the object.
   - **Solution**:
     ```javascript
     let obj = Object.create(null);
     console.log(Object.getPrototypeOf(obj));
     console.log(obj.toString);
     ```

8. **Exercise 8: Factory Function and Prototype Check**
   - **Description**: Practice creating an object with a Factory Function and checking its prototype.
   - **Task**: Create a Factory Function `createPerson` that returns an object with a `name` property and a `greet` method returning 'Hi!'. Create an instance with name 'Luiz', log the `greet()` result, and check if its prototype is `Object.prototype`.
   - **Solution**:
     ```javascript
     function createPerson(name) {
       return { name, greet: () => 'Hi!' };
     }
     let p = createPerson('Luiz');
     console.log(p.greet());
     console.log(Object.getPrototypeOf(p) === Object.prototype);
     ```

9. **Exercise 9: Adding a Property to a Constructor Function’s Prototype**
   - **Description**: Practice adding a shared property to a Constructor Function’s prototype.
   - **Task**: Define a Constructor Function `Person` with a `name` parameter. Add a `role` property to `Person.prototype` set to 'Student'. Create an instance with name 'Marta' and log the `role` property.
   - **Solution**:
     ```javascript
     function Person(name) {
       this.name = name;
     }
     Person.prototype.role = 'Student';
     let p = new Person('Marta');
     console.log(p.role);
     ```

10. **Exercise 10: Overriding toString() on a Prototype**
    - **Description**: Practice overriding a default `Object.prototype` method on a custom prototype.
    - **Task**: Define a Constructor Function `Person`. Override `Person.prototype.toString` to return 'Person Object'. Create an instance and log the result of `toString()`.
    - **Solution**:
      ```javascript
      function Person() {}
      Person.prototype.toString = function() { return 'Person Object'; };
      let p = new Person();
      console.log(p.toString());
      ```

11. **Exercise 11: Prototype Chain Lookup with Object.create()**
    - **Description**: Practice accessing properties through the prototype chain.
    - **Task**: Create a prototype object with a `name` property set to 'Luiz'. Use `Object.create()` to create an object inheriting from it. Log the `name` property and a non-existent `age` property to demonstrate prototype chain lookup.
    - **Solution**:
      ```javascript
      let proto = { name: 'Luiz' };
      let obj = Object.create(proto);
      console.log(obj.name);
      console.log(obj.age);
      ```

12. **Exercise 12: Shadowing a Prototype Property**
    - **Description**: Practice shadowing a prototype property with an own property.
    - **Task**: Define a Constructor Function `Person` with a `name` parameter. Set `Person.prototype.age` to 25. Create an instance with name 'Luiz', set its own `age` to 30, and log both the instance’s `age` and `Person.prototype.age`.
      ```
    - **Solution**:
      ```javascript
      function Person(name) {
        this.name = name;
      }
      Person.prototype.age = 25;
      let p = new Person('Luiz');
      p.age = 30;
      console.log(p.age);
      console.log(Person.prototype.age);
      ```

13. **Exercise 13: Dynamically Extending a Class Prototype**
    - **Description**: Practice adding a method to a class prototype at runtime.
    - **Task**: Define a `Person` class with a constructor taking a `name` parameter. Create an instance with name 'Marta', then add a `greet` method to `Person.prototype` that returns 'Hello!'. Log the `greet()` result for the instance.
    - **Solution**:
      ```javascript
      class Person {
        constructor(name) {
          this.name = name;
        }
      }
      let p = new Person('Marta');
      Person.prototype.greet = function() { return 'Hello!'; };
      console.log(p.greet());
      ```

14. **Exercise 14: Comparing Prototype Equality Across Instances**
    - **Description**: Practice verifying that instances share the same prototype.
    - **Task**: Define a Constructor Function `Person` with a `name` parameter. Create two instances with names 'Luiz' and 'Marta'. Log whether their prototypes (accessed via `Object.getPrototypeOf()`) are the same.
    - **Solution**:
      ```javascript
      function Person(name) {
        this.name = name;
      }
      let p1 = new Person('Luiz');
      let p2 = new Person('Marta');
      console.log(Object.getPrototypeOf(p1) === Object.getPrototypeOf(p2));
      ```

15. **Exercise 15: Changing an Object’s Prototype with Object.setPrototypeOf()**
    - **Description**: Practice modifying an object’s prototype at runtime.
    - **Task**: Create an object using Object Literal with a `name` property set to 'Luiz'. Create a new prototype with a `greet` method returning 'Hi!'. Use `Object.setPrototypeOf()` to set the new prototype and log the `greet()` result.
    - **Solution**:
      ```javascript
      let obj = { name: 'Luiz' };
      let proto = { greet: () => 'Hi!' };
      Object.setPrototypeOf(obj, proto);
      console.log(obj.greet());
      ```

16. **Exercise 16: Nested Prototype Chain**
    - **Description**: Practice working with multiple levels of prototype inheritance.
    - **Task**: Create a base prototype with a `role` property set to 'User'. Create a second prototype inheriting from the base with a `greet` method returning 'Hello!'. Create an object using `Object.create()` with the second prototype and log `role` and `greet()`.
    - **Solution**:
      ```javascript
      let baseProto = { role: 'User' };
      let secondProto = Object.create(baseProto);
      secondProto.greet = () => 'Hello!';
      let obj = Object.create(secondProto);
      console.log(obj.role);
      console.log(obj.greet());
      ```

17. **Exercise 17: Verifying Class Prototype Chain**
    - **Description**: Practice checking the prototype chain for a class instance.
    - **Task**: Define a `Person` class with a constructor taking a `name` parameter and a `greet` method returning 'Hi!'. Create an instance with name 'Luiz'. Log whether the instance’s prototype is `Person.prototype` and if `Person.prototype`’s prototype is `Object.prototype`.
    - **Solution**:
      ```javascript
      class Person {
        constructor(name) {
          this.name = name;
        }
        greet() {
          return 'Hi!';
        }
      }
      let p = new Person('Luiz');
      console.log(Object.getPrototypeOf(p) === Person.prototype);
      console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);
      ```

18. **Exercise 18: Demonstrating Memory Efficiency with Prototypes**
    - **Description**: Practice showing how prototype methods are shared.
    - **Task**: Define a Constructor Function `Person` with a `name` parameter. Add a `greet` method to `Person.prototype` returning 'Hello!'. Create two instances and log whether their `greet` methods are the same (testing reference equality).
    - **Solution**:
      ```javascript
      function Person(name) {
        this.name = name;
      }
      Person.prototype.greet = function() { return 'Hello!'; };
      let p1 = new Person('Luiz');
      let p2 = new Person('Marta');
      console.log(p1.greet === p2.greet);
      ```

19. **Exercise 19: Comparing Factory Function vs. Constructor Function**
    - **Description**: Practice contrasting prototype-based and non-prototype-based object creation.
    - **Task**: Create a Factory Function `createPerson` returning an object with a `name` property and a `greet` method returning 'Hi!'. Create a Constructor Function `Person` with the same structure, but add `greet` to `Person.prototype`. Create instances of each and log whether their `greet` methods are the same.
    - **Solution**:
      ```javascript
      function createPerson(name) {
        return { name, greet: () => 'Hi!' };
      }
      function Person(name) {
        this.name = name;
      }
      Person.prototype.greet = function() { return 'Hi!'; };
      let p1 = createPerson('Luiz');
      let p2 = createPerson('Marta');
      let p3 = new Person('Luiz');
      let p4 = new Person('Marta');
      console.log(p1.greet === p2.greet);
      console.log(p3.greet === p4.greet);
      ```

20. **Exercise 20: Modifying a Prototype Property**
    - **Description**: Practice modifying a prototype property and observing its impact.
    - **Task**: Define a Constructor Function `Person` with a `name` parameter. Set `Person.prototype.role` to 'Student'. Create an instance with name 'Luiz', then change `Person.prototype.role` to 'Teacher'. Log the instance’s `role` before and after the change.
    - **Solution**:
      ```javascript
      function Person(name) {
        this.name = name;
      }
      Person.prototype.role = 'Student';
      let p = new Person('Luiz');
      console.log(p.role);
      Person.prototype.role = 'Teacher';
      console.log(p.role);
      ```

21. **Exercise 21: Shared Mutable Prototype Property**
    - **Description**: Practice demonstrating the risks of shared mutable prototype properties.
    - **Task**: Define a Constructor Function `Person` with a `name` parameter. Set `Person.prototype.data` to an array `[1, 2, 3]`. Create two instances, modify the array via one instance, and log the array from the other instance.
    - **Solution**:
      ```javascript
      function Person(name) {
        this.name = name;
      }
      Person.prototype.data = [1, 2, 3];
      let p1 = new Person('Luiz');
      let p2 = new Person('Marta');
      p1.data.push(4);
      console.log(p2.data);
      ```

22. **Exercise 22: Preserving Original Prototype Method**
    - **Description**: Practice overriding a prototype method while preserving its original behavior.
    - **Task**: Define a `Person` class with a `greet()` method returning 'Hello!'. Create an instance with name 'Luiz', then override `Person.prototype.greet` to return 'Hi!' while preserving the original `greet` in a variable `originalGreet`. Log both methods’ results using `call()`.
    - **Solution**:
      ```javascript
      class Person {
        constructor(name) {
          this.name = name;
        }
        greet() {
          return 'Hello!';
        }
      }
      let p = new Person('Luiz');
      let originalGreet = Person.prototype.greet;
      Person.prototype.greet = function() { return 'Hi!'; };
      console.log(originalGreet.call(p));
      console.log(p.greet());
      ```

23. **Exercise 23: Changing Prototype with Object.setPrototypeOf()**
    - **Description**: Practice switching an object’s prototype and observing property loss.
    - **Task**: Create a base prototype with `role` set to 'User'. Create a second prototype inheriting from it with a `greet` method returning 'Hi!'. Create an object with the second prototype, then use `Object.setPrototypeOf()` to switch to a new prototype with a `speak` method returning 'Hello!'. Log `role`, `greet`, and `speak`.
    - **Solution**:
      ```javascript
      let baseProto = { role: 'User' };
      let secondProto = Object.create(baseProto);
      secondProto.greet = () => 'Hi!';
      let obj = Object.create(secondProto);
      let newProto = { speak: () => 'Hello!' };
      Object.setPrototypeOf(obj, newProto);
      console.log(obj.role);
      console.log(obj.greet);
      console.log(obj.speak());
      ```

24. **Exercise 24: No-Prototype Object with Symbol Property**
    - **Description**: Practice creating a no-prototype object with a Symbol property.
    - **Task**: Create an object using `Object.create(null)`. Add a Symbol property `id` with value 1. Log the number of Symbol properties using `Object.getOwnPropertySymbols()`.
    - **Solution**:
      ```javascript
      let obj = Object.create(null);
      let id = Symbol('id');
      obj[id] = 1;
      console.log(Object.getOwnPropertySymbols(obj).length);
      ```

25. **Exercise 25: Class Inheritance and Prototype Chain**
    - **Description**: Practice working with class inheritance and the prototype chain.
    - **Task**: Define a `Person` class with a `greet` method returning 'Hello!'. Define a `Student` class extending `Person` with a `study` method returning 'Studying!'. Create a `Student` instance and log `greet()` and `study()`. Check if the instance’s prototype’s prototype is `Person.prototype`.
    - **Expected Output**:
    - **Solution**:
      ```javascript
      class Person {
        constructor(name) {
          this.name = name;
        }
        greet() {
          return 'Hello!';
        }
      }
      class Student extends Person {
        study() {
          return 'Studying!';
        }
      }
      let s = new Student('Luiz');
      console.log(s.greet());
      console.log(s.study());
      console.log(Object.getPrototypeOf(Object.getPrototypeOf(s)) === Person.prototype);
      ```

26. **Exercise 26: Non-Enumerable Prototype Property**
    - **Description**: Practice creating a non-enumerable prototype property.
    - **Task**: Create a prototype object using `Object.defineProperty()` to add a non-enumerable `name` property set to 'Luiz'. Create an object with this prototype and use a `for...in` loop to log enumerable properties. Then, log the `name` property directly.
    - **Solution**:
      ```javascript
      let proto = {};
      Object.defineProperty(proto, 'name', { value: 'Luiz', enumerable: false });
      let obj = Object.create(proto);
      for (let key in obj) {
        console.log(key);
      }
      console.log(obj.name);
      ```

27. **Exercise 27: Prototype Chain with Multiple Constructors**
    - **Description**: Practice creating a complex prototype chain with multiple constructors.
    - **Task**: Define a Constructor Function `Person` with a `name` parameter and a `greet` method on its prototype returning 'Hello!'. Define a Constructor Function `Employee` that calls `Person` with `apply()` and adds a `role` property. Set `Employee.prototype` to inherit from `Person.prototype` using `Object.create()`. Create an `Employee` instance and log `greet()` and `role`.
    - **Solution**:
      ```javascript
      function Person(name) {
        this.name = name;
      }
      Person.prototype.greet = function() { return 'Hello!'; };
      function Employee(name, role) {
        Person.apply(this, [name]);
        this.role = role;
      }
      Employee.prototype = Object.create(Person.prototype);
      let e = new Employee('Luiz', 'Developer');
      console.log(e.greet());
      console.log(e.role);
      ```

28. **Exercise 28: Preventing Prototype Mutations**
    - **Description**: Practice protecting a prototype from mutations.
    - **Task**: Define a Constructor Function `Person` with a `name` parameter. Set `Person.prototype.data` to `[1, 2, 3]` and use `Object.defineProperty()` to make it non-writable. Create an instance, attempt to push 4 to `data`, and log `data` to show it’s unchanged.
    - **Solution**:
      ```javascript
      function Person(name) {
        this.name = name;
      }
      Person.prototype.data = [1, 2, 3];
      Object.defineProperty(Person.prototype, 'data', { writable: false });
      let p = new Person('Luiz');
      p.data.push(4); // Ignored in strict mode or silent failure
      console.log(p.data);
      ```

29. **Exercise 29: Prototype Chain with Factory Function Customization**
    - **Description**: Practice customizing a Factory Function’s prototype.
    - **Task**: Create a Factory Function `createPerson` that returns an object with a `name` property. Set its prototype to a custom object with a `greet` method returning 'Hi!' using `Object.setPrototypeOf()`. Create two instances and log their `greet()` results and prototype equality.
    - **Solution**:
      ```javascript
      function createPerson(name) {
        let obj = { name };
        Object.setPrototypeOf(obj, { greet: () => 'Hi!' });
        return obj;
      }
      let p1 = createPerson('Luiz');
      let p2 = createPerson('Marta');
      console.log(p1.greet());
      console.log(p2.greet());
      console.log(Object.getPrototypeOf(p1) === Object.getPrototypeOf(p2));
      ```

30. **Exercise 30: Combining Prototypes and Closures**
    - **Description**: Practice combining prototypes with closures for private data.
    - **Task**: Define a Constructor Function `Person` with a `name` parameter. Add a `getSecret` method to `Person.prototype` that accesses a private `secret` variable set to 'hidden' using a closure. Create an instance and log the result of `getSecret()`. Try to access `secret` directly and log the result.
    - **Solution**:
      ```javascript
      function Person(name) {
        this.name = name;
        let secret = 'hidden';
        this.getSecret = function() { return secret; };
      }
      Person.prototype.getSecret = function() { return this.getSecret(); };
      let p = new Person('Luiz');
      console.log(p.getSecret());
      console.log(p.secret);
      ```