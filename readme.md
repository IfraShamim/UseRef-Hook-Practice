### 1. **Focus an Input Field on Button Click**
   - **Problem**: Create an input field and a button. When the button is clicked, the input field should gain focus.
   - **Steps**:
     1. Create an input field and button.
     2. Use `useRef` to create a reference for the input field.
     3. On button click, call `inputRef.current.focus()`.

### 2. **Track Input Value Without Re-Rendering**
   - **Problem**: Track the value of an input field without triggering re-renders.
   - **Steps**:
     1. Create an input field.
     2. Use `useRef` to store the input value.
     3. Update the ref in the `onChange` handler but do not update the state.

### 3. **Countdown Timer with Pause/Resume**
   - **Problem**: Create a countdown timer that can be paused and resumed.
   - **Steps**:
     1. Use `useRef` to store the timer ID.
     2. Start the timer on button click and store the ID in the ref.
     3. Use the ref to clear the timer for pause.

### 4. **Scroll to a Specific Section**
   - **Problem**: Create a page with multiple sections. Clicking a button should scroll to a specific section.
   - **Steps**:
     1. Create sections and buttons.
     2. Use `useRef` to reference each section.
     3. On button click, use `sectionRef.current.scrollIntoView()`.

### 5. **Measure the Width of a Div**
   - **Problem**: Measure the width of a div when the component mounts.
   - **Steps**:
     1. Use `useRef` to reference the div.
     2. In `useEffect`, access `divRef.current.offsetWidth` and store it in state.

### 6. **Persistent Counter Without Re-Rendering**
   - **Problem**: Create a counter that increments on button click but does not re-render the component.
   - **Steps**:
     1. Use `useRef` to store the counter value.
     2. Increment the ref value on button click and log it.

### 7. **Toggle Class on a DOM Element**
   - **Problem**: Toggle a class on a div element when a button is clicked.
   - **Steps**:
     1. Use `useRef` to reference the div.
     2. On button click, toggle a class using `divRef.current.classList.toggle()`.

### 8. **Keep Track of Previous State**
   - **Problem**: Track the previous state of a counter.
   - **Steps**:
     1. Use `useState` for the counter.
     2. Use `useRef` to store the previous value.
     3. Update the ref in `useEffect` on state change.

### 9. **Custom Video Player Controls**
   - **Problem**: Create a custom video player with play and pause controls.
   - **Steps**:
     1. Use `useRef` to reference the video element.
     2. On button click, use `videoRef.current.play()` or `videoRef.current.pause()`.

### 10. **Detect Click Outside a Component**
   - **Problem**: Close a dropdown when clicking outside of it.
   - **Steps**:
     1. Use `useRef` to reference the dropdown.
     2. Add a `mousedown` event listener to the document.
     3. Check if the click is outside the dropdown using `ref.current.contains(event.target)`.
     4. Cleanup the event listener in `useEffect`.

These problems will help you get comfortable with the `useRef` hook by applying it in various practical scenarios.