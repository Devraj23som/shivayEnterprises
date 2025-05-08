import React from 'react'

const Home = () => {
  return (
    <div className=' w-full  h-8/10 md:h-screen pt-5 flex flex-col  justify-center items-center   overflow-x-hidden'>
        
     <h2 className='text-4xl font-bold text-center'>Shivaay Enterprises Shop</h2>
     <div className='w-full h-8/10 md:h-7/10'>
      <div className='home-img border-b-2 w-100 h-70 pr-10 md:w-6/10  md:h-full  mx-auto'>

      <img src="/shivayenterprises_Logo.jpg" alt="" />
      </div>
     </div>
     <div>
      <h3 className='text-2xl text-center'>AC फ़्रिज वॉशिंग मशीन रिपेयर सर्विस</h3>
     </div>
     <div className=' w-7/10 p-2 mx:auto '>
     <a href={`tel:${'+919109298201'}`}>
       <h3 className='text-2xl text-center bg-blue-400 text-white'>Call Now Service Center <br />+91 9109298201</h3>
      </a>
     </div>
       
    </div>
  )
}

export default Home