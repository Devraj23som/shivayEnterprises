import { RiMapPin2Fill } from '@remixicon/react'
import React from 'react'

const About = () => {
  const city=["Bhopal","Indore","Bilaspur","Bhilai","Durg","Gwalior","Charoda"]
  return (
 

   <div id='about' className='w-screen h-7/10  md:overflow-hidden    bg-blue-500 text-white'>

        <div className='w-full h-full'>
            <div className='text-center underline'>
                
            </div>
            <div className='w-3/4 mt-10 mb-5 mx-auto'>
              <h3 className='text-2xl text-center'>Washing Machine AC Refrigerator Microwave
Repair Service Center

Authorized Expert Technician
More Then 75,000 Happy Customers</h3>
            </div>
            <div className=' w-full h-8/10 pb-5   flex justify-center'>
              <div className='card-section flex-col md:flex-row flex flex-wrap gap-4 justify-center items-center w-8/10 h-fit '>
            <h3 className='text-3xl text-center'>Locations</h3>
              {city.map((e,i)=><div key={i} className='card p-2 text-black w-1/2 md:w-1/4 h-1/4 bg-white rounded-2xl'>
              
             <div className='flex flex-col justify-center items-center'>
            {e}
             
             </div>
              
              </div>)}
                
              </div>
            </div>
        </div>
    </div>

  )
}

export default About