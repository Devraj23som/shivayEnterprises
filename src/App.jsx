'use client'
import { useEffect, useRef, useState } from 'react'
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
import { RiWhatsappLine } from '@remixicon/react'
import ScrollTop from './components/ScrollTop.jsx'

function App() {
  const [count, setCount] = useState(0)
  const first = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);
 

    
  // const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     if (currentScrollY < lastScrollY && currentScrollY > 100) {
  //       // Scrolling up and not at top
  //      console.log('Scrolling up and not at top');
  //     } else {
  //       console.log('Scrolling down and  at top');
      
  //     }

  //     setLastScrollY(currentScrollY);
  //   };

  // window.addEventListener("scroll",handleScroll);
  return (
    
    
  <div  className='w-lvw   home text-gray-300 relative bg-black  overflow-x-hidden'>
  
     {/* <Nav/> */}
   <Home/>
   <About/>
   <Service/>
   <Ourserve/>
   <Contact/>
   <ScrollTop/>
   {/* <div  className='w-full  sticky 
   '>
             <a href="tel:+919109298201">
               <div className='w-full h-10 text-2xl rounded-2xl text-center bg-orange-500 text-white'>
               
                 <button >Click for Call </button>
               </div>
                 </a>
               <a href="https://wa.me/+919109298201?text=Hello" target="_blank" rel="noopener noreferrer">
               
                 <RiWhatsappLine className='absolute bg-green-500 bottom-15 right-5  rounded-3xl text-green-800'  size={50}/>
               </a>
             </div> */}
 
  </div>
   
   
  )
}

export default App
