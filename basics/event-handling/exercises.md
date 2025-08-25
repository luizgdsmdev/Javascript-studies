1. **Handling a Button Click**
   - **Description**: Use `addEventListener` to log a message when a button is clicked.
   - **Task**: Create an HTML button that logs "Button clicked!" to the console when clicked.
   - **Expected Answer**: Clicking the button logs "Button clicked!" to the console.

2. **Displaying Event Type**
   - **Description**: Use the `event.type` property to log the type of event triggered.
   - **Task**: Add a click listener to a `<div>` that logs the event type.
   - **Expected Answer**: Clicking the div logs "Event type: click".

3. **Capturing Mouse Coordinates**
   - **Description**: Log the mouse coordinates (`clientX`, `clientY`) on a click event.
   - **Task**: Add a click listener to the `document` that logs the mouse position.
   - **Expected Answer**: Clicking anywhere logs coordinates (e.g., "Clicked at: 100, 200").

4. **Handling Page Load**
   - **Description**: Log a message when the page fully loads using the `load` event.
   - **Task**: Use `window.addEventListener("load", ...)` to update a `<p>` element with "Loaded!".
   - **Expected Answer**: On page load, the `<p>` updates to "Loaded!".

5. **Keyboard Event Logging**
   - **Description**: Log the key pressed using the `event.key` property.
   - **Task**: Add a `keydown` listener to the `document` that logs the pressed key.
   - **Expected Answer**: Pressing a key (e.g., "a") logs "Key pressed: a".

6. **Preventing Form Submission**
   - **Description**: Use `event.preventDefault()` to stop a form’s default submission.
   - **Task**: Create a form and prevent submission, logging "Form blocked" instead.
   - **Expected Answer**: Clicking submit logs "Form blocked" without submitting.

7. **Mouseover Color Change**
   - **Description**: Change an element’s background color on `mouseover`.
   - **Task**: Add a `mouseover` listener to a `<div>` to set its background to blue.
   - **Expected Answer**: Hovering over the div changes its background to blue.

8. **Stopping Event Bubbling**
   - **Description**: Use `event.stopPropagation()` to prevent a parent listener from firing.
   - **Task**: Create nested `<div>` and `<button>` elements; stop the parent’s click event when clicking the button.
   - **Expected Answer**: Clicking the button logs only "Child".

9. **Using `once` Option**
   - **Description**: Use the `once` option to run a click listener only once.
   - **Task**: Add a one-time click listener to a button that logs "Clicked once!".
   - **Expected Answer**: First click logs "Clicked once!"; subsequent clicks do nothing.

10. **Capture Phase Listener**
    - **Description**: Use the `capture` option to handle a click event in the capture phase.
    - **Task**: Create nested elements and log the parent’s click event before the child’s.
    - **Expected Answer**: Clicking the button logs "Parent captured" then "Child".

11. **Stopping Immediate Propagation**
    - **Description**: Use `event.stopImmediatePropagation()` to prevent other listeners on the same element.
    - **Task**: Add two click listeners to a button; use `stopImmediatePropagation` in the first to block the second.
    - **Expected Answer**: Clicking logs only "First listener".

12. **Passive Scroll Listener**
    - **Description**: Use the `passive` option to optimize a `scroll` event listener.
    - **Task**: Add a passive `scroll` listener to `window` that logs the scroll position.
    - **Expected Answer**: Scrolling logs the vertical scroll position (e.g., "Scroll Y: 100").

13. **Input Event Handling**
    - **Description**: Update a `<p>` element with the value of an `<input>` on `input` events.
    - **Task**: Create an input field that updates a `<p>` with its value as the user types.
    - **Expected Answer**: Typing in the input updates the `<p>` with the entered text.

14. **Removing a Listener**
    - **Description**: Add and remove a click listener using a named function.
    - **Task**: Create a button to remove a click listener from another button.
    - **Expected Answer**: Clicking "Target" logs "Target clicked" until "Remove Listener" is clicked, then logs "Listener removed" and stops responding.

15. **Event Delegation for List Items**
    - **Description**: Use event delegation to handle clicks on dynamically added list items.
    - **Task**: Create a `<ul>` with `<li>` elements; log the clicked item’s text using a single listener on the `<ul>`.
    - **Expected Answer**: Clicking an `<li>` logs its text (e.g., "Clicked: Item 1").

16. **Custom Event Dispatch**
    - **Description**: Create and dispatch a custom event on the `window` object.
    - **Task**: Dispatch a custom event "myEvent" and log its detail when triggered.
    - **Expected Answer**: Clicking the button logs "Custom event: Hello".

17. **Throttling Scroll Events**
    - **Description**: Throttle a `scroll` event to log the position every 200ms.
    - **Task**: Add a `scroll` listener to `window` that logs `scrollY` at most every 200ms.
    - **Expected Answer**: Scrolling logs the position at most every 200ms (e.g., "Scroll Y: 100").

18. **Using AbortController for Cleanup**
    - **Description**: Use `AbortController` to remove a `resize` listener.
    - **Task**: Add a `resize` listener with `signal` and remove it when a button is clicked.
    - **Expected Answer**: Resizing logs "Resizing" until the button is clicked, then logs "Resize listener removed".

19. **Beforeunload Warning**
    - **Description**: Show a confirmation dialog before closing if an input is non-empty.
    - **Task**: Use `beforeunload` to warn if an `<input>` has text.
    - **Expected Answer**: Closing the tab with text in the input shows a confirmation dialog.

20. **Combining Propagation Control**
    - **Description**: Combine `stopPropagation` and `capture` for complex event handling.
    - **Task**: Create nested elements; use a capture-phase listener on the parent and stop propagation on the child.
    - **Expected Answer**: Clicking the button logs "Parent captured" then "Child clicked" (child stops bubbling).
