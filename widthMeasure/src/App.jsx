import { useRef , useEffect , useState } from 'react'
import './App.css'

function App() {
  const [width , setWidth] = useState(0);
  const divRef = useRef(null);
  useEffect(() => {
    setWidth(divRef.current.offsetWidth);
  }, [])
  
  return (
    <>
      <h2>Measure Width: {width}</h2>
      <div ref={divRef} >
        Resize the window to see the width change
      </div>
    </>
  )
}

export default App
