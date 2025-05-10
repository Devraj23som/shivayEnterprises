import React from 'react'

const Home = () => {
  return (
    <div className=' w-full  h-8/10 md:h-screen pt-5 flex flex-col  justify-center items-center   overflow-x-hidden'>
        
     <h2 className='text-3xl text-orange-500 font-bold text-center'>Shivaay Enterprises Shop</h2>
     <div className='w-full h-8/10 md:h-7/10'>
      <div className='home-img  border-b-2 w-80 h-60  md:w-6/10  md:h-full  mx-auto'>

      <img src="/shivayenterprises_Logo.jpg" alt="" />
      </div>
     </div>
     <div>
      <h3 className='text-xl mt-2 text-center'>AC फ़्रिज वॉशिंग मशीन माइक्रोवेव <br /> रिपेयर सर्विस 
सेंटर</h3>
     </div>
     <div className=' w-7/10 p-2 mx:auto '>
     <a href={`tel:${'+919109298201'}`}>
       <h3 className='rounded-2xl text-2xl text-center bg-orange-500 text-white'>Call Now Service Center <br />+91 9109298201</h3>
      </a>
     </div>
       
    </div>
  )
}

export default Home