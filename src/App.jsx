import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeLayout from './components/HomeLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HomeLayout  />
    </>
  )
}

export default App
