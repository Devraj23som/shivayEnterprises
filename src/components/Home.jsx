import React from 'react'

const Home = () => {
  return (
    <div className=' w-full  h-8/10 md:h-screen pt-5 flex flex-col  justify-center items-center   overflow-x-hidden'>
        
     <h2 className='text-4xl font-bold text-center'>Shivay Enterprises <br />Bhopal</h2>
     <div className='w-full h-8/10 md:h-7/10'>
      <div className='home-img w-8/10 md:6/10 h-99 md:h-full  mx-auto'>

      <img className='md:object-contain md:object-center' src="/homeappli.webp" alt="" />
      </div>
     </div>
     <div className='bg-blue-500 w-7/10 p-2 mx:auto text-white'>
     <h3 className='text-2xl text-center'>Bhopal Service Center <br />+91 9109298201</h3>
     </div>
       
    </div>
  )
}

export default Home