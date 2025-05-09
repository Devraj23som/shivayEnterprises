import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Ourserve from './components/Ourserve'
import Contact from './components/Contact'
import Guarenty from './components/Guarenty'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='w-lvw text-gray-300 bg-black h-lvh overflow-x-hidden'>
   <Nav/>
   <Home/>
   <About/>
   <Service/>
   <Ourserve/>
   <Contact/>

  </div>
  )
}

export default App
