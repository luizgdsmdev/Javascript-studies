### Window Object Manipulation (WOM) in JavaScript

This section is meant to cover everything we should know about WOM in JavaScript.  
- [What is the Window Object in JavaScript](#what-is-the-window-object-in-javascript)
- [The Role of the Window Object](#the-role-of-the-window-object)
- [Event Handling with the Window Object](#event-handling-with-the-window-object)
- [Best Practices for Window Object Manipulation](#best-practices-for-window-object-manipulation)

Go back to [basics listing](https://github.com/luizgdsmdev/-Javascript-studies/blob/main/basics/intro.md).  


#### What is the Window Object in JavaScript
The Window object in JavaScript is an **global object** that represents the **browser** or a **tab** containing a web page. It serves as a **top-level object** for the browser's JavaScript environment, providing **access to its features** like properties, methods, and event control, such as timers, storage, and UI.
- **Global scope**: the ``window`` object is the global scope in browsers, so any ``var`` variables or functions are a property of ``windows``.
- **Properties**: for being a object, ``window`` also have the property mechanism and already some build-in like ``window.document`` (for DOM), ``window.location`` (URL), ``window.localStorage`` (memory), and more.
- **Methods**: ``window`` also have some build-in methods like ``alert()``, ``setTimeOut()``, ``open()``, and others.
````javascript
//Display an alert on the browser's tab where the page is open
window.alert("This was invoked by the WOM object.");
````
**Notice**: the environment of WOM is **limited by its window/tab**, meaning that the manipulation being made **will only reflect on its environment** (page), and not for all windows/tabs. Imagine it like different scopes, where each tab is an autonomous scope, and they cannot interact with each other through their own WOM.

#### The Role of the Window Object
The WOM **works as an interface** through which the JavaScript can **interact with the browser features**, the **DOM**, and the **global context**. It's **always available** in the browser's JavaScript environment, representing a single window or tab, as mentioned before.  

###### Implicity vs explicit access
- **Implicity access**: access of the ``window``s properties and methods by **omitting the window keyword**. Let's check an example:
````javascript
alert('This alert comes from the WOM!');
//Is the very same as 
windows.alert('This alert comes from the WOM!');

document.getElementById('Item-id');
//Is the very same as 
window.document.getElementById('Item-id');
````
``Window`` being an **object of the environment** means that it also abides by some rules like scopes and prototype chain. What happens behind the scenes with the **Implicity access** is that once the local scope **doesn't find the property/method locally**, it follows the prototype chain to the higher levels checking for it until find the correspondence, the same as a prototype of any other object we saw arlier at - [Prototype](https://github.com/luizgdsmdev/Javascript-studies/blob/main/basics/prototype/intro.md) section. In this scenario, ``window`` being the **top-level object** on the browser's JavaScript environment, is the last one to be checked.   
But the implicit access is **not recommended** since the same property/method name may exist in your application and therefore, being invoked (instead of the ``window``), and cause some unwanted results. Also, for matters of syntax and legibility of code, the **explicit access** is always recommended.

###### Global context
All variables or functions visible in the **global scope/context** are attached to the ``window``.
````javascript
var num = 1;
console.log(num);//Shows 1
console.log(window.num);//Shows 1
````

###### DOM access
The ``window`` object also provide access to the DOM (document object manipulation), making it possible to manipulate the page content.
````javascript
let buttom = window.document.getElementById('Item-id');
//Or Implicitly referenced 
let buttom = document.getElementById('Item-id');//No 'window.' used
````

###### Browser control
Manages browser related data like navigation (``window.navigatio``), timers (``setTimeout``, ``setInterval``), or UI interactions/information (``alert``, ``window.screen.width``).
````javascript
let widthScr = window.screen.width;
console.log("Your screen width is ", widthScr);
````

###### Event handling
Listens for browser-level events like ``resize``, ``load``, or ``scroll``.
````javascript
let verticalScroll = window.scrollY;
let horizontalScroll = window.scrollX;
````


#### Event Handling with the Window Object
The ``window`` support a numerous build-in event listeners for the **browser level event**, like resizing, scolling or loading.   
The basic structure for this is:
````javascript
window.addEventListener('event', function callbackFunction(){});
//Or using an arrow function
window.addEventListener('event', () => {});
````
Where 'event' could be:
- ``load``: fired when the **page and its resources** are **fully loaded**.
````javascript
window.addEventListener('load', () =>{
    console.log('Loaded is finished.');
});
````

- ``resize``: fired when the window is resized.
````javascript
window.addEventListener('resize', () =>{
    //Alter some DOM elements for better fit
});
````

- ``scroll``: fired when the user scrolls the page.
````javascript
window.addEventListener('scroll', () =>{
    //Show some elements like pop-ups at specific height of the page
});
````

- ``beforeunload``: fired before the window is closed.
````javascript
window.addEventListener('beforeunload', () =>{
    //Send user interactions to API/database
});
````


###
####
####