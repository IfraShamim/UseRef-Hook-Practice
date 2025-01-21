import { useState ,useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const counter = useRef(null);

  return (
    <>
      <h2 ref={counter}>Counter : {count}</h2>
      <button onClick={() => {
        setCount(count + 1)
      }}>Increament</button>
    </>
  )
}

export default App
