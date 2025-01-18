import React, { useRef } from 'react';

function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus(); 
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter text here" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default App;
