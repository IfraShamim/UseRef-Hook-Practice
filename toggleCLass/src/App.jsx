import { useRef } from 'react'
import './App.css'

function App() {
  const divRef = useRef(null);
  const toggleClass = () => {
    if(divRef.current){
      divRef.current.classList.toggle('highlight');
    }
  }

  return (
    <>
      <button onClick={toggleClass}>Toggle Highlight</button>
      <div ref={divRef} className='box'>This is a box</div>
    </>
  )
}

export default App
