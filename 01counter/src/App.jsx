import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setCounter] = useState(10)
 
const addValue = () => {
  if (counter < 30) {
    setCounter(prevCounter => Math.min(prevCounter + 1, 20)); // Ensure counter doesn't exceed 30
  }
}

const removeValue = ()=> {
  if (counter > 0) {
    setCounter(prevCounter => Math.max(prevCounter - 1, 0)); // Ensure counter doesn't go below 0
  }
}

  return (
    <>
     <h1>New project of react</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue} >Add number</button>
     <button onClick={removeValue} >Remove number</button>
    </>
  )
}

export default App
