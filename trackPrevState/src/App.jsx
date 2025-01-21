import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count - 1)}><b>-</b></button><br /><br />
      <button onClick={() => setCount(count + 1)}><b>+</b></button><br /><br />
      <div>Track Previous Value: {prevCountRef.current}</div>
    </>
  );
}

export default App;
