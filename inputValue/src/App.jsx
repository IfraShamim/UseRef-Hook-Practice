import { useRef, useState } from 'react'
import './App.css'

function App() {
  const input = useRef('');
  const [typedVal , setTypedVal] = useState('');
  const handleInput = (e) => {
    input.current = e.target.value;
    setTypedVal(e.target.value);
  }
  return (
    <>
     <input type="text" ref={input} onChange={handleInput}/>
     Typed Value: {typedVal}
    </>
  )
}

export default App
