import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Shop from './components/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Shop/>
    </>
  )
}

export default App
