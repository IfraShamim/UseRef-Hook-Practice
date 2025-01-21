import { useState , useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <nav>
        <button onClick={() => scrollToSection(section1Ref)}>Go to Section 1</button>
        <button onClick={() => scrollToSection(section2Ref)}>Go to Section 2</button>
        <button onClick={() => scrollToSection(section3Ref)}>Go to Section 3</button>
      </nav>
     <div ref={section1Ref} style={{ height: '100vh', width: '90vw' , backgroundColor: '#f4f4f4' }}>
        <h2>Section 1</h2>
      </div>
      <div ref={section2Ref} style={{ height: '100vh', backgroundColor: '#c4c4c4' }}>
        <h2>Section 2</h2>
      </div>
      <div ref={section3Ref} style={{ height: '100vh', backgroundColor: '#a4a4a4' }}>
        <h2>Section 3</h2>
      </div>
    </>
  )
}

export default App
