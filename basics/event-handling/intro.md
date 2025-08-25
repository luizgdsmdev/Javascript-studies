### Event Handling in JavaScript

This section is meant to cover everything we should know about Event Handling in JavaScript.
- [What is Event Handling in JavaScript](#what-is-event-handling-in-javascript)
- [The Role of Events](#the-role-of-events)
- [Adding Event Listeners](#adding-event-listeners)
- [Event Object and Properties](#event-object-and-properties)
- [Event Propagation](#event-propagation)

Go back to [basics listing](https://github.com/luizgdsmdev/-Javascript-studies/blob/main/basics/intro.md).  


#### What is Event Handling in JavaScript
Event Handling in JavaScript refers to the process of **detecting and responding** the user or browser interactions, and responding accordingly (**callback**). **Events** are **actions or occurrences** triggered by a user (like a click) or a browser (like a page load), where JavaScript provides mechanisms to listen for and handle events dynamically.
- **Events**: actions like clicks, mouseover, scroll, etc.
- **Event listeners**: **function attached** to DOM elements (or ``window`` object) to handle events.
- **Event object**: **object passed to the listener** containing details about the event.


#### The Role of Events
Events are the backbone for interactivity in web applications allowing JavaScript to respond to actions, state changes, and system triggers.
- **How Events Work**: events are **dispatched by the browser** when an action occurs, then, **JavaScript listens** for these events (with method like ``addEventListener``) and **execute a callback function**, often using the **event object for context**.
````javascript
//Log when the page is fully loaded
window.addEventListener("load", () => {
  console.log("Page fully loaded.");
});
````

#### Adding Event Listeners
event listeners are attached to the ``window`` object, the DOM or event targets (like HTML elements) to handle specific events.

###### Primary Methods
Modern methods attach a listener to a specific event using the structure of ``addEventListener(event, callback, [options])`` and ``removeEventListener(event, callback, [options])`` for removal.
````javascript
function handleClick() { console.log("Clicked!"); }
const button = document.getElementById("myButton");
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
````
The ``[options]`` parameter here could be:
- ``capture: true``: listener triggers during the capture phase (see Event Propagation).
- ``once: true``: Listener runs once and is automatically removed.
- ``passive: true``: improves performance for touch/scroll events by indicating the listener won’t call ``preventDefault()``.
````javascript
window.addEventListener("scroll", () => console.log("Scrolling"), { passive: true });
````

###### Deprecated Methods
The ``on[event]`` properties like ``onclick`` (element.onclick = function() {...}) or inline HTML events (<button onclick="myFunction()">) are no longer recommended approaches due to poor separation of concerns and security risks or limitations.

#### Event Object and Properties
The event object is **automatically passed** to the callback function of an event listener and **contains details** about the event, like:
- ``event.target``: The element that triggered the event.
- ``event.type``: The event name (click, keydown).
- ``event.currentTarget``: The element the listener is attached to.
- ``event.preventDefault()``: Cancels the event’s default behavior (form submission).
- ``event.stopPropagation()``: Stops the event from bubbling or capturing further.
- **Mouse events**: ``event.clientX``, ``event.clientY`` (coordinates relative to viewport).
- **Keyboard events**: ``event.key``, ``event.code`` (key pressed).
````javascript
document.getElementById("myButton").addEventListener("click", (event) => {
  console.log("Target: ", event.target);
  console.log("Coordinates: ", event.clientX, event.clientY);
});
````

#### Event Propagation
The event propagation describes how events travel through the DOM tree and affect parent and child elements. There are three main steps:
- **Capturing phase**: event travels from the ``window`` to the **target element's parent**.
- **Target phase**: the event reaches the target element.
- **Bubbling phase**: the event travels back up to the ``window``.

###### Controlling Propagation:
- ``event.stopPropagation()``: used to prevent an event from bubbling up or capturing down the  DOM tree, ensuring that parent or child elements' listeners don't trigger, useful for isolation and preventing unwanted behavior.   
In the example below, once you click on the 'innerDiv', both events will be triggered, with the 'outerDiv' being triggered in the bubbling phase:
````javascript
let outerDiv = document.getElementById('outerDiv');
let innerDiv = document.getElementById('innerDiv');

outerDiv.addEventListener('click', () => {
    console.log('outerDiv');
});

innerDiv.addEventListener('click', () => {
    console.log('innerDiv');
});

//Console shows (in bubbling phase)
// innerDiv
// outerDiv
````
To avoid this, we can use ``event.stopPropagation()`` on the 'innerDiv' listener, avoiding propagation on the bubbling phase.
````javascript
let outerDiv = document.getElementById('outerDiv');
let innerDiv = document.getElementById('innerDiv');

outerDiv.addEventListener('click', () => {
    console.log('outerDiv');
});

innerDiv.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('innerDiv');
});

//Console shows:
// innerDiv
````

- ``event.stopImmediatePropagation()``: used to prevent propagation, but also prevents other listeners on the same element from running, ideal for multiple listeners on the same element, but only the current one must be executed.
````javascript
let innerDiv = document.getElementById('innerDiv');

//Without the event.stopImmediatePropagation()
innerDiv.addEventListener('click', (event) => {
    console.log('First click');
});

innerDiv.addEventListener('click', (event) => {
    console.log('Second click');
});

//Console shows both
// First click
// Second click
````
````javascript
let innerDiv = document.getElementById('innerDiv');

//With the event.stopImmediatePropagation()
innerDiv.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    console.log('First click');
});

innerDiv.addEventListener('click', (event) => {
    console.log('Second click');
});

//Console shows only the first one
// First click
````
