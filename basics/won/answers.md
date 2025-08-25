1. **Displaying an Alert**
   - **Description**: Use `window.alert` to display a welcome message when a button is clicked.
   - **Task**: Create an HTML button that, when clicked, shows an alert with "Welcome to my page!".
   - **Example**:
     ```html
     <button id="welcome">Show Alert</button>
     <script>
       document.getElementById("welcome").addEventListener("click", () => {
         window.alert("Welcome to my page!");
       });
     </script>
     ```
   - **Expected Answer**: Clicking the button displays an alert with "Welcome to my page!".

2. **Accessing Window Dimensions**
   - **Description**: Log the current window’s inner width and height to the console.
   - **Task**: Write code to access `window.innerWidth` and `window.innerHeight` and log them.
   - **Example**:
     ```javascript
     console.log(`Window size: ${window.innerWidth}x${window.innerHeight}`);
     ```
   - **Expected Answer**: Outputs the current window dimensions (e.g., `Window size: 1280x720`).

3. **Using `window.prompt` for User Input**
   - **Description**: Prompt the user for their name and display it in an HTML element.
   - **Task**: Write code to collect a name via `window.prompt` and update a `<p>` element.
   - **Example**:
     ```html
     <p id="name">Your name: </p>
     <script>
       let name = window.prompt("Enter your name:");
       if (name) document.getElementById("name").textContent = `Your name: ${name}`;
     </script>
     ```
   - **Expected Answer**: The `<p>` element updates with the entered name (e.g., `Your name: Luiz`).

4. **Navigating with `window.location`**
   - **Description**: Create a button that navigates to a specific URL using `window.location.href`.
   - **Task**: Write code to redirect to "https://example.com" when a button is clicked.
   - **Example**:
     ```html
     <button id="go">Go to Example</button>
     <script>
       document.getElementById("go").addEventListener("click", () => {
         window.location.href = "https://example.com";
       });
     </script>
     ```
   - **Expected Answer**: Clicking the button redirects the browser to `https://example.com`.

5. **Using `window.localStorage`**
   - **Description**: Store a key-value pair in `window.localStorage` and retrieve it.
   - **Task**: Store a username and display it from `localStorage` in the console.
   - **Example**:
     ```javascript
     window.localStorage.setItem("username", "Luiz");
     console.log("Stored username:", window.localStorage.getItem("username"));
     ```
   - **Expected Answer**: Outputs `Stored username: Luiz`.

6. **Checking Global Variable on `window`**
   - **Description**: Declare a global variable with `var` and verify it exists on the `window` object.
   - **Task**: Write code to declare a variable and log `window.myVar`.
   - **Example**:
     ```javascript
     var myVar = 42;
     console.log(window.myVar);
     ```
   - **Expected Answer**: Outputs `42`.

7. **Using `window.setTimeout`**
   - **Description**: Display an alert after a 3-second delay using `window.setTimeout`.
   - **Task**: Write code to show an alert with "Delayed message!" after 3 seconds.
   - **Example**:
     ```javascript
     window.setTimeout(() => {
       window.alert("Delayed message!");
     }, 3000);
     ```
   - **Expected Answer**: An alert appears after 3 seconds with "Delayed message!".

8. **Handling Window Load Event**
   - **Description**: Log a message and update the DOM when the page fully loads.
   - **Task**: Use `window.addEventListener("load", ...)` to update a `<p>` element with "Page loaded!".
   - **Example**:
     ```html
     <p id="status">Loading...</p>
     <script>
       window.addEventListener("load", () => {
         document.getElementById("status").textContent = "Page loaded!";
         console.log("Page fully loaded");
       });
     </script>
     ```
   - **Expected Answer**: On page load, the `<p>` updates to "Page loaded!" and the console logs the same.

9. **Dynamic Resize Handling**
   - **Description**: Change the background color of the page based on window width.
   - **Task**: Use `window.addEventListener("resize", ...)` to set `document.body.style.backgroundColor` to blue if `window.innerWidth` is less than 600px, otherwise white.
   - **Example**:
     ```javascript
     window.addEventListener("resize", () => {
       document.body.style.backgroundColor = window.innerWidth < 600 ? "lightblue" : "white";
     });
     ```
   - **Expected Answer**: Background turns light blue when the window is <600px wide, white otherwise.

10. **Scroll Event to Show/Hide Element**
    - **Description**: Show a button when the user scrolls past 100px vertically.
    - **Task**: Use `window.addEventListener("scroll", ...)` to toggle a button’s visibility based on `window.scrollY`.
    - **Example**:
      ```html
      <button id="top" style="display: none;">Back to Top</button>
      <script>
        window.addEventListener("scroll", () => {
          document.getElementById("top").style.display = window.scrollY > 100 ? "block" : "none";
        });
      </script>
      ```
    - **Expected Answer**: Button appears when scrolling past 100px, disappears above 100px.

11. **Using `window.confirm`**
    - **Description**: Ask for confirmation before clearing `localStorage`.
    - **Task**: Create a button that uses `window.confirm` to confirm clearing `localStorage`.
    - **Example**:
      ```html
      <button id="clear">Clear Storage</button>
      <script>
        document.getElementById("clear").addEventListener("click", () => {
          if (window.confirm("Clear localStorage?")) {
            window.localStorage.clear();
            console.log("Storage cleared");
          }
        });
      </script>
      ```
    - **Expected Answer**: Clicking "OK" clears `localStorage` and logs "Storage cleared".

12. **Removing Event Listeners**
    - **Description**: Add a `resize` event listener and remove it when a button is clicked.
    - **Task**: Write code to add a `resize` listener, then remove it, using a named function.
    - **Example**:
      ```html
      <button id="remove">Remove Resize Listener</button>
      <script>
        function handleResize() {
          console.log("Resizing...");
        }
        window.addEventListener("resize", handleResize);
        document.getElementById("remove").addEventListener("click", () => {
          window.removeEventListener("resize", handleResize);
          console.log("Resize listener removed");
        });
      </script>
      ```
    - **Expected Answer**: Resizing logs "Resizing..." until the button is clicked, then stops.

13. **Using `window.setInterval`**
    - **Description**: Update a clock display every second using `window.setInterval`.
    - **Task**: Create a `<p>` element that shows the current time, updated every second.
    - **Example**:
      ```html
      <p id="clock"></p>
      <script>
        window.setInterval(() => {
          document.getElementById("clock").textContent = new Date().toLocaleTimeString();
        }, 1000);
      </script>
      ```
    - **Expected Answer**: The `<p>` element updates with the current time every second.

14. **Beforeunload Confirmation**
    - **Description**: Warn the user before leaving the page if a form input is non-empty.
    - **Task**: Use `window.addEventListener("beforeunload", ...)` to show a confirmation if an input has text.
    - **Example**:
      ```html
      <input id="input" placeholder="Enter text">
      <script>
        window.addEventListener("beforeunload", (event) => {
          if (document.getElementById("input").value) {
            event.returnValue = "Changes may be lost!";
          }
        });
      </script>
      ```
    - **Expected Answer**: A confirmation dialog appears when closing the tab if the input is non-empty.

15. **Using `window.fetch` with Error Handling**
    - **Description**: Fetch data from an API and handle errors using `try-catch`.
    - **Task**: Write an async function to fetch from "https://api.example.com" and log errors.
    - **Example**:
      ```javascript
      async function fetchData() {
        try {
          let response = await window.fetch("https://api.example.com");
          let data = await response.json();
          console.log(data);
        } catch (error) {
          console.error("Fetch error:", error.message);
        }
      }
      fetchData();
      ```
    - **Expected Answer**: Logs "Fetch error: Failed to fetch" for an invalid URL.

16. **Dynamic Navigation with `window.history`**
    - **Description**: Use `window.history.pushState` to update the URL without reloading.
    - **Task**: Create a button that updates the URL to "/new-page" and logs the change.
    - **Example**:
      ```html
      <button id="navigate">Change URL</button>
      <script>
        document.getElementById("navigate").addEventListener("click", () => {
          window.history.pushState({}, "", "/new-page");
          console.log("URL changed to:", window.location.pathname);
        });
      </script>
      ```
    - **Expected Answer**: URL changes to "/new-page" and logs "URL changed to: /new-page".

17. **Handling `localStorage` Errors**
    - **Description**: Store data in `localStorage` with error handling for private mode restrictions.
    - **Task**: Write code to store a key-value pair and catch errors.
    - **Example**:
      ```javascript
      try {
        window.localStorage.setItem("test", "value");
        console.log("Stored:", window.localStorage.getItem("test"));
      } catch (error) {
        console.error("Storage error:", error.message);
      }
      ```
    - **Expected Answer**: Logs "Stored: value" or an error in private mode (e.g., "QuotaExceededError").

18. **Throttling Resize Events**
    - **Description**: Throttle a `resize` event to log window size only once every 500ms.
    - **Task**: Write code to limit `resize` event frequency using `setTimeout`.
    - **Example**:
      ```javascript
      let timeout;
      function handleResize() {
        if (!timeout) {
          timeout = window.setTimeout(() => {
            console.log(`Window size: ${window.innerWidth}x${window.innerHeight}`);
            timeout = null;
          }, 500);
        }
      }
      window.addEventListener("resize", handleResize);
      ```
    - **Expected Answer**: Logs window size at most every 500ms during resizing.

19. **Custom Event on Window**
    - **Description**: Dispatch and listen for a custom event on the `window` object.
    - **Task**: Create a custom event "myEvent" and log a message when triggered.
    - **Example**:
      ```html
      <button id="trigger">Trigger Event</button>
      <script>
        window.addEventListener("myEvent", () => console.log("Custom event triggered"));
        document.getElementById("trigger").addEventListener("click", () => {
          window.dispatchEvent(new Event("myEvent"));
        });
      </script>
      ```
    - **Expected Answer**: Clicking the button logs "Custom event triggered".

20. **Cleaning Up Multiple Listeners**
    - **Description**: Add `resize` and `scroll` listeners, then remove them when a button is clicked.
    - **Task**: Write code to add both listeners and remove them, using named functions.
    - **Example**:
      ```html
      <button id="remove">Remove Listeners</button>
      <script>
        function handleResize() {
          console.log("Resizing...");
        }
        function handleScroll() {
          console.log("Scrolling...");
        }
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);
        document.getElementById("remove").addEventListener("click", () => {
          window.removeEventListener("resize", handleResize);
          window.removeEventListener("scroll", handleScroll);
          console.log("Listeners removed");
        });
      </script>
      ```
    - **Expected Answer**: Logs on resize/scroll until the button is clicked, then stops and logs "Listeners removed".