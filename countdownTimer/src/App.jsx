import { useState , useRef } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(60)
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);
  const startTimer = () => {
    if(!isRunning){
      setIsRunning(true);
      timerRef.current = setInterval(()=>{
        setTime((prevTime)=> {
          if(prevTime <= 1){
            clearInterval(timerRef.current)
            setIsRunning(false)
            return 0;
          }
          return prevTime - 1;
        })
      },1000)
    }
  }
  const pauseTimer = () => {
    if(isRunning){
      clearInterval(timerRef.current);
      setIsRunning(false)
    }
  }
  return (
    <>
     <h1>Countdown Timer</h1>
     <p>Time Remaining: {time} seconds.</p>
     <button onClick={startTimer} disabled={isRunning}>{
      isRunning ? 'Running...' : 'Start/Resume'}</button><br /><br />
      <button onClick={pauseTimer} disabled={!isRunning}>Pause</button>
    </>

  )
}

export default App
