import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username : "Ehsan",
    age : 20
  }
  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-xl mb-4' >Tailwind test</h1>
      <Cards username = "chaiaurcode" btnText = "click me" />
      <Cards username = "Ehsan" />
    </>
  )
}

export default App
